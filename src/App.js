import './App.css';
import youtubeData from './data/youtubeData.json';

function App() {
  console.log('id : ', youtubeData['data'][0]["id"], '-> 영상 id');
  console.log('channelId : ', youtubeData['data'][0]["channelId"], '-> 채널 id');
  console.log('date : ', youtubeData['data'][0]["date"], '-> 영상 게시 날짜');
  console.log('title : ', youtubeData['data'][0]["title"], '-> 영상 제목');
  console.log('thumbnail : ', youtubeData['data'][0]["thumbnail"], '-> 영상 섬네일 이미지 주소');
  console.log('description : ', youtubeData['data'][0]["description"].substr(0,13), '-> 영상 소개 내용');
  console.log('channelTitle', youtubeData['data'][0]["channelTitle"], '-> 채널 이름');
  console.log('category : ', youtubeData['data'][0]["category"], '-> 영상 카테고리');
  console.log('viewCount : ', youtubeData['data'][0]["viewCount"], '-> 조회수');
  console.log('likeCount : ', youtubeData['data'][0]["likeCount"], '-> 좋아요 수');
  console.log('channelUrl : ', youtubeData['data'][0]["channelUrl"], '-> 채널 주소');
  console.log('channelThumbnail : ', youtubeData['data'][0]["channelThumbnail"], '-> 채널 섬네일 이미지 주소');

  return (
    <div>리액트로 데이터 불러오기</div>
  );
}

export default App;
