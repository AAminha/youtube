import Layout from "../components/shared/Layout";
// JS에서 기본적인 시간 계산하는 Date 객체가 있지만
// 외부 라이브러리 중 하나인 Moment JS의 사용 편의성이 더 좋음!
import 'moment/locale/ko';      // 시간의 차이를 한글로 출력
import moment from 'moment';    // moment 객체를 불러옴

function Subscription() {
    /*console.log('년 : ', moment().year());
    console.log('월 : ', moment().month() + 1);
    console.log('일 : ', moment().date());
    console.log('시 : ', moment().hour());
    console.log('분 : ', moment().minute());
    console.log('초 : ', moment().second());*/

    // 형태 : 년-월-일T시-분-초
    const time1 = moment('2022-03-10T08:00:33');
    const time2 = moment('2022-02-24T08:00:33');
    const time3 = moment('2022-02-24T09:50:33');

    console.log('time1과의 차이 : ', time1.fromNow());
    console.log('time2과의 차이 : ', time2.fromNow());
    console.log('time3과의 차이 : ', time3.fromNow());

    return(
        <Layout activeMenu="subscription">
            <div>*구독</div>
        </Layout>
    )
}

export default Subscription;