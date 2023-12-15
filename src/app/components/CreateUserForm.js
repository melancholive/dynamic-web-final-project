import styles from "./components.module.css";

const CreateUserForm = ({ createUser }) => {
    return (
        <div className={styles.formWrapper}>
            <form className={styles.Form} onSubmit={(e) => createUser(e)}>
                <h2 className={styles.formTitle}>Create User</h2>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name"/>

                <label htmlFor="email">Email</label>
                <input type="email" name="email"/>

                <label htmlFor="pass">Password</label>
                <input type="password" name="password"/>

                <button type="submit">Create User</button>
            </form>
        </div>
    ); 
};

export default CreateUserForm;