import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import CreatePostForm from "../app/components/CreatePostForm";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

export default function CreatePost({ isLoggedIn, userInformation }){
    const router = useRouter();
    useEffect(() => {
        if (!isLoggedIn) router.push("/");
    }, [isLoggedIn]);

    // Create function to create a post
    const createPostFunction = useCallback( async (e,imageUpload) => {
        e.preventDefault();

        const db = getFirestore();

        const storage = getStorage(); 

        // Get post content from form
        const postContent = e.currentTarget.postContent.value;

        let imageURL = [];

        if (imageUpload && imageUpload.length == 6){
            for (let i = 0; i < imageUpload.length; i++) {
                const storageRef = ref(storage, imageUpload[i].name);
                await uploadBytes(storageRef, imageUpload[i])
                    .then(async (snapshot) => {
                        await getDownloadURL(snapshot.ref).then((url) => {
                            imageURL.push(url);
                        });
                    })
                    .catch((error) => {
                        console.warn(error);
                    });
            
            }
        

            //  Get user information to link post to user
            const userId = userInformation.uid;

            // Send post to firebase with addDoc
            const data = await addDoc(collection(db, "posts"), {
                postContent: postContent,
                userId: userId,
                imageURL: imageURL,
            });

            // Re-route the user away from createPost
            if (data) {
                router.push("/");
            }
        } else {
            console.warn("please select 6 images");
            router.push("/");
        }
    }, [addDoc, collection, getFirestore, router, userInformation]);

    return (
        <main>
            <CreatePostForm createPostFunction={createPostFunction}/>
        </main>
    );
}