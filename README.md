# Getting Started with Create React App
- [모각코](https://cafe.naver.com/codeuniv) 웹-리액트 편 스터디 - 유튜브 클론 코딩
- 2022.2.14 ~ 2022.2.28

## 1. 데이터 준비
- 유튜브 클론코딩을 위해서는 [유튜브에서 제공하는 API](https://developers.google.com/youtube/v3/docs) 사용
- 각 페이지에 진입할 때마다 API 호출해서 데이터 받음.
- 이 클론코딩에서는 JSON 이용

### JSON
- JavaScript Object Notation의 줄임말
- 키 - 값 쌍으로 이루어진 형태의 데이터
- 보통 서버에 데이터를 요청하고, 서버가 데이터를 보내줄 때 사용

```
// src/App.js
import youtubeData from './data/youtubeData.json';

function App() {
  console.log('youtubeData : ', youtubeData);

  return <div>리액트로 데이터 불러오기</div>;
}

export default App;
```

## 2. 레이아웃 구성
- 페이지 구현 시 가장 처음 해야하는 것은 __설계__
- 폴더로 구성 나누기
- 모든 화면에 공통된 부분을 컴포넌트로 분리 => 합치면 페이지의 틀

## 3. 아이콘과 헤더
### 아이콘
- 아이콘 이용하기 위한 라이브러리 설치 `npm install react-icons`
- 라이브러리 사용법은 [공식 홈페이지](https://react-icons.github.io/react-icons/icons?name=bi)에 나옴
```
import { FiMenu } from 'react-icons/fi';
import { IoSearchOutline } from 'react-icons/io5';
import { BsGrid3X3Gap } from 'react-icons/bs';
```

### 이미지
```
import youtube_logo from '../../data/youtube_logo.png';

<img src={youtube_logo} alt="로고" className={styles.logo} />
```
## 4. SPA와 링크
### SPA
- Sing Page Application
- 리액트의 특성으로 페이지가 하나인 어플리케이션이라는 뜻 => 페이지 이동 불가
- 라우팅(routing) : 페이지 이동이 아닌 주솟값에 따른 화면을 만들어 줌
- 라이브러리 설치 `npm install react-router-dom`

### react-router-dom 이용
- 리액트 앱에서 라우팅 기능 허용하는 방법\
src 폴더의 index.js 파일에서 App 컴포넌트를 BrowserRouter로 감싸기
```
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
```

### 주소값 생성
- __Routes__ : Route 컴포넌트를 묶어주는 컴포넌트
- __Route__ : 링크를 생성하는 컴포넌트
- 주소값이 변경되었을 때, 작성한 Route 컴포넌트 중 주소값과 path 속성이 겹치는 컴포넌트 렌더링
```
// src/App.js
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Subscription from './pages/Subscription';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/subscription" element={<Subscription />} />
        </Routes>
    );
}

export default App;
```

### 링크 구현
- Link 컴포넌트의 to 속성 이용
```
import { Link } from 'react-router-dom';
import styles from './Menu.module.css';

function Menu() {
  return (
    <div>
      <div>
        <Link to="/">홈</Link>
      </div>
      <div>
        <Link to="/explore">탐색</Link>
      </div>
      <div>
        <Link to="/subscription">구독</Link>
      </div>
    </div>
  );
}

export default Menu;
```

## 5. 메뉴 구현
- 조건에 따른 스타일링 구현 => 클래스명을 다르게 설정
```
className={activeMenu === 'home} ? syles.focused : styles.link}
```
## 6. 미디어 쿼리
- 미디어 쿼리 : 구체적인 조건으로 스타일을 적용할 수 있도록 확장된 문법
- __반응형 웹__ : 화면의 크기에 따라 스타일이 변경되는 웹 페이지
- 반응형 웹 구현 방법 중 하나가 미디어 쿼리
```
.container {
  width: 300px;
  height: 300px;
}
@media screen and (max-width: 600px) {
  .container {
    background-color: black;
  }
}
@media screen and (min-width: 600px) and (max-width: 1000px) {
  .container {
    background-color: red;
  }
}
@media screen and (min-width: 1000px) {
  .container {
    background-color: blue;
  }
}
```

## 7. map
- map : 배열과 함수를 인자로 받고, 배열의 요소를 돌면서 전달된 함수를 적용한 새로운 배열을 반환하는 메소드
```
function Explore() {
  function mapFunction(data, index) {
    return (
      <div>
        {index} : {data}
      </div>
    );
  }

  return (
    <Layout activeMenu="explore">
      <ContentsLayout>
        {['모각코', '리액트', '유튜브', '클론코딩'].map(mapFunction)}
      </ContentsLayout>
    </Layout>
  );
}
```
위에서 표현된 `배열.map(mapFunction)`을 풀어쓰면 아래와 같다.
```
{mapFuncion('모각코', 0)}
{mapFuncion('리액트', 1)}
{mapFuncion('유튜브', 2)}
{mapFuncion('클론코딩', 3)}
```

### 실제 데이터에 map 함수 적용
```
/* 먼저 정의된 ExploreCard 함수 */
function ExploreCard(data, index) {
  return (
    <div>
      <div>{index}.</div>
      <div>제목 : {data.title}</div>
      <div>업로더 : {data.channelTitle}</div>
      <br />
    </div>
  );
}

/* 위의 함수를 map함수와 적용시키면 */
{youtubeData['data'].map(ExploreCard)}
```

### key 속성 추가
- 배열의 요소들로 map 함수를 통해 새로 생성된 자식 컴포넌트에게는 고유한 key가 필요
- key 속성을 추가해서 컴포넌트의 유일성 부여
- 이유 : 각각의 컴포넌트를 식별할 key가 없으면 어떤 컴포넌트의 데이터가 변경되었는지 알 수 없음 => 데이터가 변경된 컴포넌트가 리렌더링하면 되는 것을 배열의 모든 컴포넌트를 리렌더링하는 불필요한 과정이 발생.
- key 속성은 리턴되는 JSX의 최상단 태그에 부여하면 된다.
```
function ExploreCard(data,index) {
  return (
    <div key={`explore-card-${index}`}>
    <div>{index}.</div>
    <div>제목 : {data.title}</div>
  );
}
```