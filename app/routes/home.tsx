import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter"
import { Link } from "react-router"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "RESUME ANALYZER" },
    { name: "description", content: "AI Resume Analyzer - Instantly evaluate resumes with AI-powered insights" },
  ];
}

export default function Home() {

    const {auth} = usePuterStore();
    const navigate = useNavigate();
    

    useEffect(() => {
    if(!auth.isAuthenticated) navigate('/auth?next=/');
  }, [auth.isAuthenticated])

  
  
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar/>

    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Track Your Applications & Resume Ratings</h1>
        
            <h2>Upload your first resume to get feedback.</h2>
       
      </div>
          <div className="flex flex-col items-center justify-center mt-10 gap-4">
            <Link to="/upload" className="primary-button w-fit text-xl font-semibold">
              Upload Resume
            </Link>
          </div>
    
    </section>

  </main>;
}
