import styles from "./components.module.css";

const PostCard = ({ post }) => {
    return (
        <div className={styles.RainbowRoadCard}>
            <div className={styles.RainbowRoadImages}>
                <img src={post.imageURL[0]} alt="red image"></img>
            </div>
            <div className={styles.RainbowRoadImages}>
                <img src={post.imageURL[1]} alt="orange image"></img>
            </div>
            <div className={styles.RainbowRoadImages}>
                <img src={post.imageURL[2]} alt="yellow image"></img>
            </div>
            <div className={styles.RainbowRoadImages}>
                <img src={post.imageURL[3]} alt="green image"></img>
            </div>
            <div className={styles.RainbowRoadImages}>
                <img src={post.imageURL[4]} alt="blue image"></img>
            </div>
            <div className={styles.RainbowRoadImages}>
                <img src={post.imageURL[5]} alt="violet image"></img>
            </div>
        </div>
    );
};

export default PostCard;