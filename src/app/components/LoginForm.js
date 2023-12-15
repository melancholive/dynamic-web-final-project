import styles from './components.module.css';

const LoginForm = ({loginUser}) => {
    return (
        <div className={styles.formWrapper}>
            
            <form className={styles.Form} onSubmit={(e) => loginUser(e)}>
                <h2 className={styles.formTitle}>RainbowRoad</h2>

                <label htmlFor="email">Email</label>
                <input type="email" name="email"/>

                <label htmlFor="pass">Password</label>
                <input type="password" name="password"/>

                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;