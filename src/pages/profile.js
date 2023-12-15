import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { query, getDocs, getFirestore, collection, where } from "firebase/firestore";
import UserProfileCard from "@/app/components/UserProfileCard"
import PostCard from "@/app/components/PostCard";

export default function UserProfile({ isLoggedIn, userInformation}){
    const router = useRouter();
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // If user is not loggedin, send them to login page
        if (!isLoggedIn) router.push("/login");
    }, [isLoggedIn]);

    useEffect(() => {
        async function getUser() {
            let user = {};
            const db = getFirestore();
            const q = query(
                collection(db, "users"),
                where("userId", "==", userInformation.uid)
            );
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                user = doc.data();
            });
            setUser(user);
        }

        async function getUserPosts(){
            let posts = [];
            const db = getFirestore();
            const q = query(
                collection(db,"posts"),
                where("userId", "==", userInformation?.uid)
            );
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((post) => {
                posts.push(post.data());
            });
            setPosts(posts);
        }

        if (userInformation) {
            getUser();
            getUserPosts();
        }

    }, [userInformation]);

    
    return (
        <main>
            <UserProfileCard user={user} userInformation={userInformation}/>
            {posts.map((post,i) => {
                <PostCard post={post} key={i}/>
            })}
        </main>
    );
}