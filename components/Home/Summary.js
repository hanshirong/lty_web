export default function Summary() {
    return (
        <div
            className="w-full text-primary-content grid place-items-center items-end gap-20 py-20 bg-base-200">
            <div className="w-full flex justify-center">
                <div className="stats stats-vertical md:stats-horizontal bg-base-200">
                    <div className="stats stats-vertical md:stats-horizontal bg-base-200">
                        <a href="/observer"
                            className="stat place-items-center gap-0 bg-transparent px-10 hover:opacity-70">
                            <div className="stat-value tabular-nums">5</div>
                            <div className="stat-desc">总歌手</div>
                        </a>
                        <a href="/observer"
                            className="stat place-items-center gap-0 bg-transparent px-10 hover:opacity-70">
                            <div className="stat-value tabular-nums">2999</div>
                            <div className="stat-desc">总作曲人</div>
                        </a>
                        <a href="/observer"
                            className="stat place-items-center gap-0 bg-transparent px-10 hover:opacity-70">
                            <div className="stat-value tabular-nums"><span>16,200</span></div>
                            <div className="stat-desc">总评论</div>
                        </a>
                        <a href="/observer"
                            className="stat place-items-center gap-0 bg-transparent px-10 hover:opacity-70">
                            <div className="stat-value tabular-nums"><span>2,646,900</span></div>
                            <div className="stat-desc">总播放量</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex w-full justify-center">
                <a href="/observer" className="btn btn-primary btn-wide">查看全部数据</a>
            </div>
        </div>
    );
}
