import Banner from "../components/Home/Banner";
import Summary from "../components/Home/Summary";
import SongList from "../components/Home/SongList";
import SongRecommendation from "../components/Home/SongRecommendation";

export default function Home() {
    return (
        <div className="flex flex-col items-center w-full h-full">
            <Banner/>
            <Summary/>
            <SongList/>
            <SongRecommendation/>
        </div>
    )
}

