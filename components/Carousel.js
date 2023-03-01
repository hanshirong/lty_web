export default function Carousel(props) {

    // let img_data = ["./a.png", "./b.png", "./c.png"];
    let img_data = [
        {
            "img": "./a.png",
            "position": "object-center",
        },
        {
            "img": "./b.png",
            "position": "object-top",
        },
        {
            "img": "./c.png",
            "position": "object-top"
        },
    ]

    return (
        <div className={`carousel ${props.classNameTag}`}>
            {
                img_data.map(
                    (item, index) => (
                        <div key={index} id={"slide" + index} className="carousel-item relative w-full h-full">
                            <img src={item["img"]} className={"w-full object-cover " + item["position"]}/>
                            <div
                                className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href={"#slide" + ((img_data.length + index - 1) % img_data.length)}
                                   className="btn btn-circle">❮</a>
                                <a href={"#slide" + ((img_data.length + index + 1) % img_data.length)}
                                   className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    )
                )
            }
        </div>
    );
}
