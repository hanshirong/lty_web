function SongInfoCard(props) {
    return (
        <div
            className="flex flex-col justify-center mx-8 md:mx-0 w-full md:w-96 bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-200 rounded-2xl">
            <figure className="px-8 pt-10">
                <img src="./a.png" alt="Shoes" className="rounded-xl"/>
            </figure>
            <div className="w-full h-24 flex flex-row px-8 my-6">
                <img src="./c.png" alt="avatar" className="w-24 h-24 rounded-xl object-cover"/>
                <div className="flex flex-col flex-grow ml-4 overflow-ellipsis overflow-hidden">
                    <p className="text-2xl truncate">标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</p>
                    <p className="h-14">这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介</p>
                </div>
            </div>
        </div>
    );
}


export default function SongRecommendation() {
    return (
        <div className="flex flex-col w-full h-full justify-center items-center pb-24">
            <h2 className="mb-8 text-4xl md:text-6xl">歌曲推荐</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <SongInfoCard/>
                <SongInfoCard/>
                <SongInfoCard/>
                <SongInfoCard/>
                <SongInfoCard/>
                <SongInfoCard/>
                <SongInfoCard/>
                <SongInfoCard/>
                <SongInfoCard/>
                <SongInfoCard/>
                <SongInfoCard/>
                <SongInfoCard/>
            </div>
            <button className="btn gap-2 mt-10 btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
                再来一次
            </button>
        </div>
    );
}
