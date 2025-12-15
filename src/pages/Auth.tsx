import {usePuterStore} from "../lib/puter";
import {useEffect} from "react";
import {useLocation, useNavigate} from "react-router";

export const meta = () => ([
    { title: 'Resumind | Auth' },
    { name: 'description', content: 'Log into your account' },
])

const Auth = () => {
    const { isLoading, auth } = usePuterStore();
    const location = useLocation();
    const next = location.search.split('next=')[1];
    const navigate = useNavigate();

    useEffect(() => {
        if(auth.isAuthenticated) navigate(next);
    }, [auth.isAuthenticated, next])

    return (
        <main className="bg-gradient-to-r from-[#230303] via-black to-black bg-cover min-h-screen flex items-center justify-center">
            <div className="flex justify-center items-center shadow-lg">
                <section className="flex flex-col gap-8 bg-[#03051e] rounded-2xl p-10">
                    <div className="flex flex-col justify-center items-center gap-2 text-center">
                        <h1 className="text-3xl text-amber-400">Welcome</h1>
                        <h2 className="text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Log In to Continue Your Job Journey</h2>
                    </div>
                    <div className="justify-center items-center flex">
                        {isLoading ? (
                            <button className="btn btn-accent p-2 bg-black animate-pulse">
                                <p>Signing you in...</p>
                            </button>
                        ) : (
                            <>
                                {auth.isAuthenticated ? (
                                    <button className="btn btn-accent p-2 bg-black" onClick={auth.signOut}>
                                        <p>Log Out</p>
                                    </button>
                                ) : (
                                    <button className="btn btn-accent p-2 bg-black" onClick={auth.signIn}>
                                        <p>Log In</p>
                                    </button>
                                )}
                            </>
                        )}
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Auth