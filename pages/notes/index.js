export default function Notes() {
    return (
        <div className="flex flex-col">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="/a.png" className="max-w-sm rounded-box shadow-2xl"/>
                    <div>
                        <h1 className="text-5xl font-bold">一个蛋糕引发的狗血故事</h1>
                        <p className="py-6">论洛天依如何偷吃乐正绫的蛋糕，被言和发现后威胁要告诉乐正龙牙，结果墨清弦暗中阻拦，徵羽摩柯反手背刺。</p>
                        <button className="btn btn-primary">仔细说说</button>
                    </div>
                </div>
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="/f.png" className="max-w-sm rounded-box  shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">蛋糕好吃吗？</h1>
                        <p className="py-6">乐正绫暗中布置好洛天依诱捕器，结果没想到墨清弦梦游中发现蛋糕，吃完后一路飘到徵羽摩柯房间，恍惚中以为遇到了大包子，一口要下去，幸亏乐正龙牙及时阻拦才没有酿成大祸。</p>
                        <button className="btn btn-primary">让我康康！</button>
                    </div>
                </div>
            </div>
            <div className="btn-group bg-base-200 flex justify-center">
                <button className="btn">1</button>
                <button className="btn">2</button>
                <button className="btn btn-disabled">...</button>
                <button className="btn">99</button>
                <button className="btn">100</button>
            </div>
        </div>
    )
}
