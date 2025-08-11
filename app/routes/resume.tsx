
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link, useNavigate } from 'react-router'
import ATS from '~/components/ATS'
import Details from '~/components/Details'
import Summary from '~/components/Summary'
import { usePuterStore } from '~/lib/puter'

export const meta = () => ([
    {title : 'RESUME ANALYZER | REVIEW'},
    {name: 'description', content: 'Detailed overview of your resume'}
])

const resume = () => {
    const {auth, isLoading, fs, kv} = usePuterStore();
    const {id} = useParams();
    
    const [resumeUrl, setResumeUrl] = useState('');
    const [feedback, setFeedback] = useState<Feedback | null>(null);
    const navigate = useNavigate();


    useEffect(() => {
        if(!isLoading && !auth.isAuthenticated) navigate(`/auth?next=/resume/${id}`);
    }, [isLoading]);


    useEffect(() => {
        const loadResume = async () => {
            {/*loading the resume from the key value store from puter */}
            const resume = await kv.get(`resume:${id}`);

            if(!resume) return;

            {/*if you get the resume*/}
            const data = JSON.parse(resume);

            {/*reading pdfs using blob */}
            const resumeBlob = await fs.read(data.resumePath);
            if(!resumeBlob) return;

            const pdfBlob = new Blob([resumeBlob], { type: 'application/pdf' });
            const resumeUrl = URL.createObjectURL(pdfBlob);
            setResumeUrl(resumeUrl);

            

            setFeedback(data.feedback)
        }
        loadResume();
    }, [id]);

  return (
    <main className='!pt-0'>
        <nav className='resume-nav'>
            <Link to='/' className='back-button'>

                <img src="/icons/back.svg" 
                alt="logo" 
                className="w-2.5 h-2.5"/>

                <span className="text-gray-800 text-sm font-semibold">Back to Homepage</span>
            </Link>
        </nav>

        <div className=' feedback-section flex flex-col items-center w-full'>
                <section>
                    <h2 className="text-4xl !text-black font-bold mb-12">Resume Review</h2>
                    {feedback && (
                        <div className='flex flex-col gap-8 animate-in fade-in duration-1000'>
                            <Summary feedback={feedback} />
                            <ATS score={feedback.ATS.score || 0} suggestions={feedback.ATS.tips || []} />
                            <Details feedback={feedback} />
                        </div>
                    )}
                </section>
        </div>
    </main>
  )
}

export default resume
