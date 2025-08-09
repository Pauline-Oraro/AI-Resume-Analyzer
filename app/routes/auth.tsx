import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter"

export const meta = () => ([
    {title : 'RESUME ANALYZER | AUTH'},
    {name: 'description', content: 'log into your account'}
])

const auth = () => {
    {/*tracking the state of the loading process */}

    const { isLoading, auth } = usePuterStore();
    const location = useLocation();
    const next = location.search.split('next=')[1];
    const navigate = useNavigate();

    {/*handle redirection if user is logged in */}
    useEffect(() => {
        if(auth.isAuthenticated) navigate(next);
    }, [auth.isAuthenticated, next])
    
  return (
    <main className="bg-[url('/images/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center">

       <div className="gradient-border shadow-lg">
        <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">

            <div className="flex flex-col items-center gap-2 text-center">
                <h1>Welcome</h1>
                <h2>Log In to Continue Your Job Journey</h2>
            </div>

            <div>
                {/*check if it is loading*/}
                {/*if it is loading it will render the button. if it is not loading it will check if the user is already  authenticated */}
                {
                    isLoading ? (
                        <button className="auth-button animate-pulse">
                            <p>Signing you in...</p>
                        </button>
                    ) : (
                        <>
                        {auth.isAuthenticated ? (
                            <button className="auth-button" onClick={auth.signOut}>
                                <p>Log Out</p></button>
                        ) : (
                            <button className="auth-button" onClick={auth.signIn}>
                                <p>Log In</p></button>
                        )}
                        </>
                    )
                }
            </div>

        </section>
       </div>

    </main>
  )
}

export default auth
