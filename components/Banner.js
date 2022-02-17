import styles from "../styles/banner.module.css";
import Metadata from "./Metadata";

const Banner = ({ buttonText, handleOnClick }) => {
  return (
    <div className={styles.container}>
      <Metadata
        title="Coffee Cavern | Home"
        description={
          "Find beautiful local coffee shops and discover your next caffeine hideaway"
        }
      />
      <h1 className={styles.title}>
        <span className={styles.title1}>Coffee</span>
        <span className={styles.title2}>Cavern</span>
      </h1>
      <p className={styles.subTitle}>Discover your local coffee shops!</p>
      <button className={styles.button} onClick={handleOnClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default Banner;
