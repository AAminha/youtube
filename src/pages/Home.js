import Layout from "../components/shared/Layout";
import HomeFilter from "../components/shared/home/HomeFilter";
import youtubeData from "../data/youtubeData.json"
import HomeCard from "../components/shared/home/HomeCard";
import styles from "./Home.module.css";
import { useState } from "react";

const target=['전체', 'Music', 'Entertainment', 'Comedy','BTS','LISA','아이폰'];

function Home() {
  const [filter, setFilter] = useState('전체');

  function mapFunc(data, index) {
    return (
      <HomeFilter
        filter={filter}   // 현재 필터값
        text={data}       // 필터의 종류
        onClickFilter={function() { // 현재 필터의 값을 map으로 받은 배열의 요소로 설정
          setFilter(data);
        }}
        key={`home-filter-${index}`}
      />
    )
  }

  function filterFunc(data) {
    if (filter === "전체"||data.category===filter||data.title.includes(filter) || data.description.includes(filter)) return true;
    return false;
  }

  return(
    <Layout activeMenu="home">
      <div className={styles.header}>{target.map(mapFunc)}</div>
      <div className={styles.container}>
        <div className={styles.grid}>
					{youtubeData['data'].filter(filterFunc).map(HomeCard)}
				</div>
      </div>
    </Layout>
  )
}

export default Home;