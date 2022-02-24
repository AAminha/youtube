import Layout from "../components/shared/Layout";
import SubscriptionCard from "../components/subscription/SubscriptionCard";
import sortedYoutubeData from "../data/sortedYoutubeData.json";
import ContentsLayout from "../components/shared/ContentsLayout";


function Subscription() {
    return(
        <Layout activeMenu="subscription">
            <ContentsLayout>
                {sortedYoutubeData['data'].map(function (data, index) {
                    return(
                        <SubscriptionCard data={data} key={`subscription-card-${index}`}/>
                    );
                })}
            </ContentsLayout>
        </Layout>
    )
}

export default Subscription;