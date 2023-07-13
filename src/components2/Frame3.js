import styles from "./../components2/FrameComponent.module.css"
import img1 from "./../Images/pic3.png";
import img2 from "./../Images/Pic3 (2).png";
import img3 from "./../Images/Pic3 (1).png";
import img4 from "./../Images/Pic3 (3).png";

const FrameComponent = () => {
  return (
    <div className={styles.ekWorldOfPerformingArtsParent}>
      <b className={styles.ekWorldOf}>eK WORLD OF PERFORMING ARTS</b>
      <img className={styles.frameChild} alt="" src={img1} />
      <img className={styles.frameItem} alt="" src={img2} />
      <img className={styles.frameInner} alt="" src={img3} />
      <img
        className={styles.whatsappImage20230626At1}
        alt=""
        src={img4}
      />
    </div>
  );
};

export default FrameComponent;
