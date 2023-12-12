import { useEffect } from "react";
import { useRouter } from "next/router";
import LoginForm from "../app/components/LoginForm"

export default function Login({ isLoggedIn, loginUser }){
    const router = useRouter();
    useEffect(() => {
        // If user is logged in, send them to profile
        if (isLoggedIn) router.push("/");
    }, [isLoggedIn]);
    
    return (
        <main>
            <LoginForm loginUser={loginUser}/>
        </main>
    );
}