function SongListItem(props) {
    return (
        <div tabIndex={props.index} className="collapse collapse-arrow border border-base-300 bg-base-100 w-full">
            <div className="collapse-title text-xl font-medium truncate">
                {/*{`No.${props.index} ${props.title}`}*/}
                <span className="font-bold italic">{`No.${props.index}`}</span>
                <span>&nbsp;&nbsp;&nbsp;{`${props.title}`} </span>
            </div>
            <div className="collapse-content">
                <div className="flex flex-row w-full h-auto items-center truncate">
                    <div className="avatar">
                        <div className="w-24 rounded-xl">
                            <img src={props.cover} />
                        </div>
                    </div>
                    <p className="pl-8 text-4xl">{props.author}</p>
                </div>
            </div>
        </div>
    );
}

export default function SongList() {

    let fakeData = {
        "index": 1,
        "title": "洛水天依",
        "content": "华风夏韵"
    };

    let testData = [];
    for (let i = 0; i < 10; i++) {
        testData.push({
            "index": i + 1,
            "title": "洛水天依",
            "content": "华风夏韵",
            "cover": "./a.png",
            "author": "无名氏"
        })
    }

    return (
        <div className="flex flex-col w-full h-full justify-center items-center py-24">
            <h2 className="mb-8 text-4xl md:text-6xl">歌曲榜单</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 w-full md:w-10/12 lg:w-10/12  2xl:w-1200px h-auto">
                <div className="card flex justify-center items-center">
                    <span className="card-title pb-6">一日歌曲</span>
                    {testData.map((item, index) => (
                        <SongListItem key={index} index={item["index"]} title={item["title"]} cover={item["cover"]} author={item["author"]}
                                      content={item["content"]}/>
                    ))}
                </div>
                <div className="card flex justify-center items-center">
                    <span className="card-title pb-6">七日歌曲</span>
                    {testData.map((item, index) => (
                        <SongListItem key={index} index={item["index"]} title={item["title"]} cover={item["cover"]} author={item["author"]}
                                      content={item["content"]}/>
                    ))}
                </div>
                <div className="card flex justify-center items-center">
                    <span className="card-title pb-6">卅日歌曲</span>
                    {testData.map((item, index) => (
                        <SongListItem key={index} index={item["index"]} title={item["title"]} cover={item["cover"]} author={item["author"]}
                                      content={item["content"]}/>
                    ))}
                </div>
            </div>
        </div>
    );
}
