import React, {useEffect, useState, useRef} from 'react'
import Masonry from 'react-masonry-css'
// import Masonry from 'react-masonry-component';


import Fade from 'react-reveal/Fade';

function TypeSelect() {

    const handleClick = (e) => {
        console.log(e.target.value);
    };

    return (
        <div className="w-full flex justify-center items-center">
            <div
                className="w-full h-full lg:w-10/12  2xl:w-1200px flex flex-row flex-wrap justify-center lg:justify-start pt-24">
                <select className="select select-primary w-full max-w-xs md:mr-10">
                    <option selected defaultValue={"all"}>全部</option>
                    <option>洛天依</option>
                    <option>乐正绫</option>
                    <option>言和</option>
                    <option>乐正龙牙</option>
                    <option>墨清弦</option>
                    <option>徵羽摩柯</option>
                </select>

                <div className="flex flex-row">
                    <div className="form-control mr-6">
                        <label className="label cursor-pointer">
                            <span className="label-text mr-2">随机</span>
                            <input onChange={handleClick} type="radio" value="random" name="radio-10"
                                   className="radio checked:bg-red-500" defaultChecked={true}/>
                        </label>
                    </div>
                    <div className="form-control mr-6">
                        <label className="label cursor-pointer">
                            <span className="label-text mr-2">最新</span>
                            <input onChange={handleClick} type="radio" value="new" name="radio-10"
                                   className="radio checked:bg-green-500"/>
                        </label>
                    </div>
                    <div className="form-control mr-6">
                        <label className="label cursor-pointer">
                            <span className="label-text mr-2">最早</span>
                            <input onChange={handleClick} type="radio" value="old" name="radio-10"
                                   className="radio checked:bg-blue-500"/>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

function useDebounce(callback, delay) {
    const timeoutRef = useRef();
    return () => {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(callback, delay);
    };
}

function MasonryImage() {
    const [items, setItems] = useState([]);
    const [pages, setPages] = useState(1);
    const ref = useRef(null);

    let fakeImage = ["./a.png", "./b.png", "./c.png", "./d.png", "./e.png", "./f.png", "./g.png", "./h.png", "./i.jpg", "./i.png", "./j.jpg", "./k.jpg"];


    const breakpointColumnsObj = {
        default: 5,
        1100: 4,
        700: 3,
        500: 2
    };

    const options = {
        columnWidth: 3,
        resize: true,
    };

    const handleAddItem = () => {
        if (items.length <= 100) {
            let temp = [];
            for (let i = 0; i < 10; i++) {
                temp.push(fakeImage[Math.floor(Math.random() * fakeImage.length)]);
            }
            setItems(items => ([...items, ...temp]));
        }
    };

    useEffect(() => {
        handleAddItem();
    }, [pages]);

    const debouncedGetRect = useDebounce(() => {
        const element = ref.current;
        if (element) {
            const rect = element.getBoundingClientRect();
            setPages(pages => (pages + 1));
        }
    }, 200);

    useEffect(() => {
        handleAddItem();
        window.addEventListener('scroll', debouncedGetRect);
        return () => window.removeEventListener('scroll', debouncedGetRect);
    }, []);

    return (
        <div className="flex flex-col items-center mb-10 " ref={ref}>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="w-full px-4 my-10 flex md:px-0 lg:w-10/12  2xl:w-1200px"
                // options={options}
            >
                {
                    items.map((item, index) => (
                        <Fade key={index} bottom>
                        <div key={index}>
                            <a href={`#pic-${index}`} className="">
                                <img key={index} src={item} className="p-2 rounded-large cursor-pointer"
                                     alt={`${index}`}/>
                            </a>
                            <div className="modal" id={`pic-${index}`}>
                                <div className="modal-box max-w-5xl w-11/12 lg:w-10/12  2xl:w-1200px">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-2xl font-bold content-center">我是照片的标题</h3>
                                        <a href="#" className="btn btn-circle ">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                                 viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                      d="M6 18L18 6M6 6l12 12"/>
                                            </svg>
                                        </a>
                                    </div>
                                    <img key={index} src={item} className="w-full" alt={`${index}`}/>
                                    <p className="py-4">用一句话描述一下图片吧用一句话描述一下图片吧用一句话描述一下图片吧用一句话描述一下图片吧用一句话描述一下图片吧用一句话描述一下图片吧用一句话描述一下图片吧</p>
                                    <div className="modal-action">
                                        <a href="#" className="btn">朕已阅</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Fade>
                    ))
                }
            </Masonry>
            <div className="divider">到此为止吧</div>
        </div>
    );
}

export default function Photos() {
    return (
        <>
            <TypeSelect/>
            <MasonryImage/>
        </>
    )
}
