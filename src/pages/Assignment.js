import styles from '../Assignment.module.css';
import Layout from "../components/shared/Layout";
import {useState} from "react";

function Assignment() {
  const [result, setResult] = useState(false);
  
  function onClick() {
    setResult(!result);
  }

  return(
    <Layout activeMenu='assignment'>
      <div className={`${styles.container} ${result ? styles.day : styles.night}`}>
        <div className = {`${styles.contents} ${result ? styles.day : styles.night}`}>안녕하세요!!</div>
        <button className = {styles.btn} onClick = {onClick}>{result ? <div>🌞낮 모드🌞</div> : <div>⭐밤 모드🌛</div>}</button>
      </div>
    </Layout>
  )
}

export default Assignment;