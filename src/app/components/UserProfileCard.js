import styles from "./components.module.css";

const UserProfileCard = ({user, userInformation}) => { 
    console.log({userInformation})       
    return (
        <div className={styles.formWrapper}>
            <div className={styles.Form}>
                <h2>Name: {user?.name}</h2>
                <p>Email: {userInformation?.email}</p>
            </div>
        </div>
    );
};

export default UserProfileCard;