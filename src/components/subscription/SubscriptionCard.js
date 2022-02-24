import HorizontalCard from "../shared/HorizontalCard";
import styles from "./SubscriptionCard.module.css";

function SubscriptionCard({data}) {
  return(
    <div className={styles.card}>
      <a
        className={styles.uploader}
        href={`https://www.youtube.com/channel/${data.channelId}`}
      >
        <img
          className={styles['channel-image']}
          stc={data.channelThumbnail}
          alt={`${data.channelTitle} 프로필 사진`}
        />
        <div>{data.channelTitle}</div>
      </a>
      <div className={styles.body}>
        <HorizontalCard data={data}/>
      </div>
    </div>
  );
}

export default SubscriptionCard;