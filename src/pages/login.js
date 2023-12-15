import { useEffect } from "react";
import { useRouter } from "next/router";
import LoginForm from "../app/components/LoginForm"
import styles from "../app/globals.css"

export default function Login({ isLoggedIn, loginUser }){
    const router = useRouter();
    useEffect(() => {
        // If user is logged in, send them to profile
        if (isLoggedIn) router.push("/");
    }, [isLoggedIn]);
    
    return (
        <main>
            <div>
                <LoginForm loginUser={loginUser}/>
            </div>
        </main>
    );
}