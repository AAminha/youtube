import styles from "./HomeFilter.module.css";

// 카테고리 이름과 클릭 이벤트를 받아서 필터 디자인을 리턴

function HomeFilter({ filter, text, onClickFilter }) {
  return (
    <button
      className={filter === text ? styles.black : styles.gray}
      onClick={onClickFilter}
    >
      {text}
    </button>
  );
}

export default HomeFilter;