import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "~/constants";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AI RESUME ANALYZER" },
    { name: "description", content: "AI Resume Analyzer - Instantly evaluate resumes with AI-powered insights" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar/>

    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Track Your Applications & Resume Ratings.</h1>
        <h2>Review Your Submissions and Check AI-powered feedback.</h2>
      </div>

      {/*if resumes are greater than 0 display the div */}

    {resumes.length > 0 && (
      <div className="resumes-section">
        {resumes.map((resume) => (
     <ResumeCard key={resume.id} resume={resume}/>
    ))}
      </div>
    )}


    </section>

  </main>;
}
