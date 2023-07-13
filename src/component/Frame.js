import styles from "./FrameComponent.module.css";
import img1 from "./../Images/sp.png"
import img2 from "./../Images/ad.png"
import img3 from "./../Images/yp.png"
const FrameComponent = () => {
  return (
    <div className={styles.ourTeamParent}>
      <b className={styles.ourTeam}>OUR TEAM</b>
      <div className={styles.sp1Parent}>
        <img className={styles.sp1Icon} alt="" src={img1} />
        <img className={styles.ad1Icon} alt="" src={img2}/>
        <img className={styles.yp1Icon} alt="" src={img3}/>
      </div>
    </div>
  );
};

export default FrameComponent;
