import { useState } from "react";
import styles from "./components.module.css";

const CreatePostForm = ({ createPostFunction }) => {
    const [imageUpload, setImageUpload] = useState();
    return (
        <div className={styles.formWrapper}>
            <form className={styles.Form} onSubmit={(e) => createPostFunction(e, imageUpload)}>
                <label htmlFor="postContent">Post Content</label>
                <input type="text" id="postContent" name="postContent"/>

                <label htmlFor="image">Images</label>
                <input
                    type="file"
                    id="image"
                    name="image"
                    placeholder="Choose Image"
                    multiple
                    accept="image/png,image/jpeg,image/jpg"
                    onChange={(e) => {
                        setImageUpload(e.target.files);
                    }}
                />

                

                <button type="submit">Create Post</button>
            </form>
        </div>
    ); 
};

export default CreatePostForm;