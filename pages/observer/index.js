import PagePiling from "../../components/PagePiling";
import PageSection from "../../components/PageSection";

import styles from "./Observer.module.css";

import React from "react";
import ReactECharts from 'echarts-for-react';
import Image from "next/image";

function Page1() {
    const [option, setOption] = React.useState({});
    React.useEffect(() => {
        const summaryChartOptions = {
            grid: {top: 8, right: 8, bottom: 24, left: 36},
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            },
            yAxis: {
                type: 'value',
            },
            series: [
                {
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line',
                    smooth: true,
                },
            ],
            tooltip: {
                trigger: 'axis',
            },
        };

        setOption(summaryChartOptions);
    }, []);
    return <ReactECharts className="w-full h-full" option={option}/>
}

function ColorCircle(props) {

    let fixedStyle = {
        borderRadius: '50%',
        backgroundImage: 'url("backgroundColor1.png")',
        backgroundSize: '100% 100%',
        position: 'absolute',
        rotate: props.rotate.toString(),
        width: props.size.toString(),
        height: props.size.toString(),
    }

    if (props.otherStyle) {
        fixedStyle = Object.assign(fixedStyle, props.otherStyle)
    }

    return (
        <div style={fixedStyle}/>
    );
}

function BasicLayout(props) {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#fefefe',
            overflow: 'hidden',
        }}>
            <ColorCircle size="220px" rotate="-45deg"
                         otherStyle={{
                             bottom: '-50px',
                             left: '-50px',
                             zIndex: 1,
                         }}
            />
            <ColorCircle size="600px" rotate="-45deg"
                         otherStyle={{
                             right: '-100px',
                             top: '-200px',
                             zIndex: 1,
                         }}
            />
            <ColorCircle size="120px" rotate="-90deg"
                         otherStyle={{
                             left: '-30px',
                             top: '-40px',
                             zIndex: 3,
                         }}
            />
            <div style={{
                position: "absolute",
                width: '100vw',
                height: '100vh',
                padding: '32px',
                zIndex: 2,
            }}
            >
                <div className="w-full h-full" style={{
                    borderRadius: '30px',
                    backgroundColor: '#ffffff',
                    boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
                }}>
                    {props.children}
                </div>
            </div>
        </div>
    );

}


function ColorText(props) {

    let className = `${props.textSize ? props.textSize : 'text-9xl'} ${props.startColor ? props.startColor : 'from-blue-600'} ${props.endColor ? props.endColor : 'to-blue-100'} ${props.otherClass ? props.otherClass : ''} bg-clip-text bg-gradient-to-b text-transparent`;

    return (
        <div className={className}>{props.text}</div>
    );
}

function ColorDot(props) {
    let className = `${props.dotColor ? props.dotColor : 'bg-white'} ${props.borderColor ? props.borderColor : 'border-blue-700'} ${props.otherClass ? props.otherClass : ''}  w-6 h-6 rounded-large border-8`;
    return (
        <div
            className={className}
        />
    );

}


// 欢迎页
function WelcomePage() {
    return (
        <>
            <BasicLayout>
                <div style={{
                    width: '100%',
                    height: '100%',
                }}>
                    <div
                        style={{
                            width: '180px',
                            height: '180px',
                            borderRadius: '50%',
                            border: '2px dashed blue',
                            float: 'right',
                            marginTop: '40px',
                            marginRight: '130px',
                            zIndex: 2,
                        }}
                    />
                    <ColorCircle size="20px" rotate="45deg" otherStyle={{
                        top: '80px',
                        right: '100px',
                        zIndex: 2,
                    }}/>
                    <ColorCircle size="20px" rotate="45deg" otherStyle={{
                        top: '220px',
                        right: '390px',
                        zIndex: 2,
                    }}/>
                    <div
                        style={{
                            backgroundImage: 'url("/images/bigdata/CornerShape.png")',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            width: "300px",
                            height: "300px",
                            position: 'absolute',
                            bottom: '32px',
                            right: '32px',
                            borderRadius: '32px',
                            zIndex: 2,
                        }}
                    />
                    <div style={{
                        width: '100%',
                        height: '100%',
                        position: 'relative',
                        // backgroundImage: 'url("/images/bigdata/AllSinger.png")',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        zIndex: 3,
                    }}>
                        <div style={{
                            width: '100%',
                            height: '100%',
                            position: 'relative',
                            // backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            borderRadius: '32px',
                            zIndex: 4,
                        }}>
                            <div
                                className="w-full h-full"
                            >
                                <div className="w-full ml-32" style={{height: '50%'}}>
                                    <div className="w-full" style={{height: '40%'}}/>
                                    {/*<span*/}
                                    {/*    className="text-9xl bg-clip-text bg-gradient-to-b from-blue-600 to-blue-100 text-transparent">*/}
                                    {/*    {(new Date()).getFullYear().toString()}*/}
                                    {/*</span>*/}
                                    <ColorText text={(new Date()).getFullYear().toString()}/>
                                    <div
                                        style={{
                                            position: 'relative',
                                            bottom: '20%',
                                            width: '100%',
                                        }}
                                        className="flex flex-col"
                                    >
                                        <span className="text-black text-7xl">VSinger观察</span>
                                        <span className="text-blue-600 text-3xl mt-2" style={{
                                            width: '460px',
                                            textAlignLast: 'justify',
                                            textAlign: 'justify',
                                            textJustify: 'distribute-all-lines',
                                        }}>记录过去·观察未来</span>
                                        <span className="text-black font-extralight">洛天依·言和·乐正绫·乐正龙牙·墨清弦·徵羽摩柯</span>
                                    </div>
                                </div>
                                <div className="w-full flex flex-col justify-between pb-16 pl-32"
                                     style={{height: '50%'}}>
                                    <div
                                        className="flex flex-col justify-center"
                                        style={{
                                            height: '50%',
                                        }}
                                    >
                                        <div className="flex">
                                            <div className="h-1 bg-blue-700 w-24"/>
                                            <div className="h-1 bg-gray-400 w-36"/>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        {/*<div*/}
                                        {/*    className="bg-white w-6 h-6 rounded-large border-8 border-blue-700 mr-2"*/}
                                        {/*/>*/}
                                        <ColorDot otherClass={'mr-2'}/>
                                        <p className="text-black">
                                            数据观察，我们是业余的
                                            <a className={styles['doudong'] + " text-blue-700"}
                                               href="http://luotianyi.moe">∠( ᐛ 」∠)＿</a>
                                        </p>
                                    </div>
                                </div>
                                <div style={{
                                    position: 'absolute',
                                    top: '0',
                                    right: '0',
                                    bottom: '0',
                                    backgroundImage: 'url("/images/bigdata/LTY.png")',
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    width: '30%',
                                    height: '100%',
                                }}/>
                            </div>
                        </div>
                    </div>
                </div>
            </BasicLayout>
        </>
    );
}

function CountPageLastSevenDayStatus(props) {
    const [countPageLastSevenDayStatusOption, setCountPageLastSevenDayStatusOption] = React.useState({});
    React.useEffect(() => {
        setCountPageLastSevenDayStatusOption({
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                data: ['洛天依', '言和', '乐正绫', '乐正龙牙', '墨清弦', '徵羽摩柯']
            },
            color: [
                '#66ccff',
                '#00FFCC',
                '#EE0000',
                '#006666',
                '#FFFF00',
                '#0080FF',
            ],
            toolbox: {
                feature: {
                    saveAsImage: {
                        show: false
                    }
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['7天前', '6天前', '5天前', '4天前', '3天前', '2天前', '1天前']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '洛天依',
                    type: 'line',
                    stack: 'Total',
                    areaStyle: {},
                    emphasis: {
                        focus: 'series'
                    },
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                },
                {
                    name: '言和',
                    type: 'line',
                    stack: 'Total',
                    areaStyle: {},
                    emphasis: {
                        focus: 'series'
                    },
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '乐正绫',
                    type: 'line',
                    stack: 'Total',
                    areaStyle: {},
                    emphasis: {
                        focus: 'series'
                    },
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: '乐正龙牙',
                    type: 'line',
                    stack: 'Total',
                    areaStyle: {},
                    emphasis: {
                        focus: 'series'
                    },
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: '墨清弦',
                    type: 'line',
                    stack: 'Total',
                    label: {
                        show: true,
                        position: 'top'
                    },
                    areaStyle: {},
                    emphasis: {
                        focus: 'series'
                    },
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                },
                {
                    name: '徵羽摩柯',
                    type: 'line',
                    stack: 'Total',
                    label: {
                        show: true,
                        position: 'top'
                    },
                    areaStyle: {},
                    emphasis: {
                        focus: 'series'
                    },
                    data: [120, 132, 101, 134, 90, 230, 210]
                }
            ]
        });
    }, []);
    return <ReactECharts
        style={{
            height: '100%'
        }}
        className={props.classStyle ? props.classStyle : ''}
        option={countPageLastSevenDayStatusOption} opts={{renderer: 'svg'}}
    />
}

// 第一页
function CountPage() {
    return (
        <>
            <BasicLayout>
                <div className="w-full h-full flex "
                     style={{
                         backgroundImage: 'url("/images/bigdata/CornerShape.png")',
                         backgroundSize: '400px 400px',
                         backgroundRepeat: 'no-repeat',
                         backgroundPosition: 'right bottom',
                     }}
                >
                    <div
                        className="h-full flex flex-col justify-between"
                        style={{
                            width: '30%'
                        }}
                    >
                        <Image className="ml-12 mt-8" alt="logo" height={60} width={60} src='/images/logo.png'/>
                        <div style={{
                            width: '100%',
                            height: '100%',
                            backgroundImage: 'url("/images/bigdata/YZL.png")',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'bottom left',
                        }}/>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex justify-between mt-8">
                            <div className="flex flex-col items-center">
                                <ColorText text={"播放量"} textSize={'text-6xl'}/>
                                <div className="text-2xl " style={{
                                    marginTop: '-16px'
                                }}
                                >播放
                                </div>
                            </div>
                            <ColorText text={"|"} textSize={'text-6xl'} endColor={'to-white'} otherClass={'mx-4'}/>
                            <div className="flex flex-col items-center">
                                <ColorText text={"播放量"} textSize={'text-6xl'}/>
                                <div className="text-2xl " style={{
                                    marginTop: '-16px'
                                }}
                                >投币
                                </div>
                            </div>
                            <ColorText text={"|"} textSize={'text-6xl'} endColor={'to-white'} otherClass={'mx-4'}/>
                            <div className="flex flex-col items-center">
                                <ColorText text={"播放量"} textSize={'text-6xl'}/>
                                <div className="text-2xl " style={{
                                    marginTop: '-16px'
                                }}
                                >评论
                                </div>
                            </div>
                            <ColorText text={"|"} textSize={'text-6xl'} endColor={'to-white'} otherClass={'mx-4'}/>
                            <div className="flex flex-col items-center">
                                <ColorText text={"播放量"} textSize={'text-6xl'}/>
                                <div className="text-2xl " style={{
                                    marginTop: '-16px'
                                }}
                                >稿件
                                </div>
                            </div>
                            <ColorText text={"|"} textSize={'text-6xl'} endColor={'to-white'} otherClass={'mx-4'}/>
                        </div>
                        <div className="flex mt-4 h-full">
                            <div className="flex flex-1 flex-col h-full">
                                <ColorText text={"过去7日"} textSize={'text-6xl'}/>
                                <CountPageLastSevenDayStatus classStyle={"pt-8 "}/>
                            </div>
                            <div className="flex flex-1 flex-col">
                                <ColorText text={"新事件"} textSize={'text-6xl'}/>
                                <div className="flex items-center mt-2">
                                    <ColorDot/>
                                    <div className="text-black text-4xl ml-4">2023年，新的企划</div>
                                </div>
                                <a href="/" className="text-blue-700 text-4xl ml-8">点击前往</a>
                                <div className="flex items-center mt-2">
                                    <ColorDot/>
                                    <div className="text-black text-4xl ml-4">2023年，新的企划</div>
                                </div>
                                <a href="/" className="text-blue-700 text-4xl ml-8">点击前往</a>
                                <div className="flex items-center mt-2">
                                    <ColorDot/>
                                    <div className="text-black text-4xl ml-4">2023年，新的企划</div>
                                </div>
                                <a href="/" className="text-blue-700 text-4xl ml-8">点击前往</a>
                            </div>
                        </div>
                    </div>
                </div>
            </BasicLayout>
        </>
    );
}

function SevenDayReviewStatus(props) {
    const [sevenDayReviewStatusOption, setSevenDayReviewStatusOption] = React.useState({});
    React.useEffect(() => {
        setSevenDayReviewStatusOption({
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    // Use axis to trigger tooltip
                    type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
                }
            },
            toolbox: {
                feature: {
                    saveAsImage: {
                        show: false
                    }
                }
            },
            legend: {},
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value'
            },
            yAxis: {
                type: 'category',
                data: ['歌曲1', '歌曲2', '歌曲3', '歌曲4', '歌曲5', '歌曲6', '歌曲7']
            },
            series: [
                {
                    name: '播放得分',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [320, 302, 301, 334, 390, 330, 320]
                },
                {
                    name: '评论得分',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '投币得分',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '弹幕得分',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [150, 212, 201, 154, 190, 330, 410]
                },
                {
                    name: '收藏得分',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [820, 832, 901, 934, 1290, 1330, 1320]
                }
            ]
        });
    }, []);
    return <ReactECharts
        style={{
            height: '100%'
        }}
        className={props.classStyle ? props.classStyle : ''}
        option={sevenDayReviewStatusOption} opts={{renderer: 'svg'}}
    />
}

// 第二页
function SevenDayReview() {
    return (
        <>
            <BasicLayout>
                <div className="w-full h-full flex flex-col">
                    <div className="flex items-center" style={{height: '80px'}}>
                        <Image className="ml-12 mr-4" alt="logo" height={60} width={60} src='/images/logo.png'/>
                        <ColorText text={'7日回顾'} textSize={'text-6xl'}/>
                    </div>
                    <div className="w-full h-full flex">
                        <div className="flex flex-col ">
                            <div className="flex-1 flex flex-col pl-8 py-8 justify-between">
                                <div className="flex flex-col items-center">
                                    <ColorText textSize={"text-3xl"} text={"播放量"}/>
                                    <div className="text-3xl text-green-600 font-bold"
                                         style={{marginTop: '-16px'}}>+2333
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <ColorText textSize={"text-3xl"} text={"粉丝"}/>
                                    <div className="text-3xl text-red-600 font-bold" style={{marginTop: '-16px'}}>-2333
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <ColorText textSize={"text-3xl"} text={"评论"}/>
                                    <div className="text-3xl text-green-600 font-bold"
                                         style={{marginTop: '-16px'}}>+2333
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <ColorText textSize={"text-3xl"} text={"投币"}/>
                                    <div className="text-3xl text-red-600 font-bold" style={{marginTop: '-16px'}}>-2333
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <ColorText textSize={"text-3xl"} text={"收藏"}/>
                                    <div className="text-3xl text-red-600 font-bold" style={{marginTop: '-16px'}}>-2333
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 flex-col">
                            <SevenDayReviewStatus/>
                        </div>
                        <form
                            className="flex flex-col justify-between items-end py-8 mr-8 text-white font-bold text-2xl"
                            style={{width: '200px'}}>
                            <div
                                className={styles["expand-label"] + " flex justify-center items-center bg-blue-600 w-auto p-2 rounded-large"}
                            >
                                <input type="radio" id="lty" defaultChecked={true} className={styles["expand-checkbox"]}
                                       value={'lty'} name={'vsinger'}/>
                                <label htmlFor="lty" className={styles["expand-area"] + " "}>洛天依</label>
                                <Image className="rounded-large" alt="洛天依" height={60} width={60}
                                       src='/images/vsinger/LTY.png'/>
                            </div>
                            <div
                                className={styles["expand-label"] + " flex justify-center items-center bg-blue-600 w-auto p-2 rounded-large"}
                            >
                                <input type="radio" id="yzl" className={styles["expand-checkbox"]} value={'yzl'}
                                       name={'vsinger'}/>
                                <label htmlFor="yzl" className={styles["expand-area"] + " "}>乐正绫</label>
                                <Image className="rounded-large" alt="乐正绫" height={60} width={60}
                                       src='/images/vsinger/YZL.png'/>
                            </div>
                            <div
                                className={styles["expand-label"] + " flex justify-center items-center bg-blue-600 w-auto p-2 rounded-large"}
                            >
                                <input type="radio" id="yh" className={styles["expand-checkbox"]} value={'yh'}
                                       name={'vsinger'}/>
                                <label htmlFor="yh" className={styles["expand-area"] + " "}>言和</label>
                                <Image className="rounded-large" alt="言和" height={60} width={60}
                                       src='/images/vsinger/YH.png'/>
                            </div>
                            <div
                                className={styles["expand-label"] + " flex justify-center items-center bg-blue-600 w-auto p-2 rounded-large"}
                            >
                                <input type="radio" id="yzly" className={styles["expand-checkbox"]} value={'yzly'}
                                       name={'vsinger'}/>
                                <label htmlFor="yzly" className={styles["expand-area"] + " "}>乐正龙牙</label>
                                <Image className="rounded-large" alt="乐正龙牙" height={60} width={60}
                                       src='/images/vsinger/YZLY.png'/>
                            </div>
                            <div
                                className={styles["expand-label"] + " flex justify-center items-center bg-blue-600 w-auto p-2 rounded-large"}
                            >
                                <input type="radio" id="mqx" className={styles["expand-checkbox"]} value={'mqx'}
                                       name={'vsinger'}/>
                                <label htmlFor="mqx" className={styles["expand-area"] + " "}>墨清弦</label>
                                <Image className="rounded-large" alt="墨清弦" height={60} width={60}
                                       src='/images/vsinger/MQX.png'/>
                            </div>
                            <div
                                className={styles["expand-label"] + " flex justify-center items-center bg-blue-600 w-auto p-2 rounded-large"}
                            >
                                <input type="radio" id="zymk" className={styles["expand-checkbox"]} value={'zymk'}
                                       name={'vsinger'}/>
                                <label htmlFor="zymk" className={styles["expand-area"] + " "}>徵羽摩柯</label>
                                <Image className="rounded-large" alt="徵羽摩柯" height={60} width={60}
                                       src='/images/vsinger/ZYMK.png'/>
                            </div>
                        </form>
                    </div>
                </div>
            </BasicLayout>
        </>
    );
}

function SevenDayTopWorkStatus(props) {
    const [sevenDayTopWordStatusOption, setSevenDayTopWordStatusOption] = React.useState({});
    React.useEffect(() => {
        setSevenDayTopWordStatusOption({
            tooltip: {
                trigger: 'item'
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 40,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        {value: 1048, name: 'Search Engine'},
                        {value: 735, name: 'Direct'},
                        {value: 580, name: 'Email'},
                        {value: 484, name: 'Union Ads'},
                        {value: 300, name: 'Video Ads'}
                    ]
                }
            ]
        });
    }, []);
    return <ReactECharts
        // style={{
        //     height: '100%'
        // }}
        className={props.classStyle ? props.classStyle : ''}
        option={sevenDayTopWordStatusOption} opts={{renderer: 'svg'}}
    />
}

function SevenDayTopWorkLoveSingerStatus(props) {
    const [sevenDayTopWorkLoveSingerStatusOption, setSevenDayTopWorkLoveSingerStatusOption] = React.useState({});
    React.useEffect(() => {
        setSevenDayTopWorkLoveSingerStatusOption({
            radar: {
                // shape: 'circle',
                indicator: [
                    {name: 'Sales', max: 6500},
                    {name: 'Administration', max: 16000},
                    {name: 'Information Technology', max: 30000},
                    {name: 'Customer Support', max: 38000},
                    {name: 'Development', max: 52000},
                    {name: 'Marketing', max: 25000}
                ]
            },
            series: [
                {
                    name: 'Budget vs spending',
                    type: 'radar',
                    data: [
                        {
                            value: [5000, 14000, 28000, 26000, 42000, 21000],
                            name: 'Actual Spending'
                        }
                    ]
                }
            ]
        });
    }, []);
    return <ReactECharts
        className={props.classStyle ? props.classStyle : ''}
        option={sevenDayTopWorkLoveSingerStatusOption} opts={{renderer: 'svg'}}
    />
}

function SevenDayTop() {
    return (
        <>
            <BasicLayout>
                <div className="w-full h-full flex flex-col">
                    <div className="flex items-center" style={{height: '80px'}}>
                        <Image className="ml-12 mr-4" alt="logo" height={60} width={60} src='/images/logo.png'/>
                        <ColorText text={'7日回顾'} textSize={'text-6xl'}/>
                    </div>
                    <div className="flex justify-between mt-2 pb-6 w-full h-full">
                        <div className="flex flex-col pl-8 flex-1">
                            <div className="flex items-center space-x-2">
                                <ColorDot/>
                                <div className="text-blue-700 text-4xl">作品分布</div>
                            </div>
                            <SevenDayTopWorkStatus/>
                            <div className="flex items-center space-x-2">
                                <ColorDot/>
                                <div className="text-blue-700 text-4xl">TOP N</div>
                            </div>
                            <div className="text-blue-700 text-3xl">TOP N</div>
                            <div className="text-blue-700 text-3xl">TOP N</div>
                            <div className="text-blue-700 text-3xl">TOP N</div>
                            <div className="text-blue-700 text-3xl">TOP N</div>
                        </div>
                        <div className="flex flex-col flex-1 card shadow-2xl items-center h-full py-8 mx-8"
                             style={{width: '40%'}}>
                            <Image className="rounded-large" alt="洛天依" height={100} width={100}
                                   src='/images/vsinger/LTY.png'/>
                            <div className="text-blue-700 text-3xl mt-4">TOP N</div>
                            <Image className="mt-2" alt="洛天依" height={180} width={320} src='/a.png'/>
                            <div className="grid grid-cols-2 gap-4 w-full mt-4">
                                <div className="flex flex-col items-center">
                                    <ColorText text={"1234"} textSize={'text-4xl'}/>
                                    <div className="text-black text-xl" style={{marginTop: '-16px'}}>播放</div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <ColorText text={"1234"} textSize={'text-4xl'}/>
                                    <div className="text-black text-xl" style={{marginTop: '-16px'}}>播放</div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <ColorText text={"1234"} textSize={'text-4xl'}/>
                                    <div className="text-black text-xl" style={{marginTop: '-16px'}}>播放</div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <ColorText text={"1234"} textSize={'text-4xl'}/>
                                    <div className="text-black text-xl" style={{marginTop: '-16px'}}>播放</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col flex-1">
                            <div className="flex items-center space-x-2">
                                <ColorDot/>
                                <div className="text-blue-700 text-4xl">作品分布</div>
                            </div>
                            <SevenDayTopWorkLoveSingerStatus/>
                        </div>
                    </div>
                </div>
            </BasicLayout>
        </>
    );
}

// 第三页
function MostTop() {
    return (
        <>
            <BasicLayout>
                <div className="w-full h-full flex flex-col">
                    <div className="flex items-center" style={{height: '80px'}}>
                        <Image className="ml-12 mr-4" alt="logo" height={60} width={60} src='/images/logo.png'/>
                        <ColorText text={'作品之最'} textSize={'text-6xl'}/>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="flex flex-col items-center">
                            <div className="text-3xl text-blue-700">劳模!</div>
                            <div className="flex flex-col w-full pl-8 space-y-4">
                                <div className="flex items-center space-x-2">
                                    <Image className="rounded-box border-4 border-gold" alt="logo" height={60}
                                           width={60} src='/images/vsinger/lty.png'/>
                                    <div className="text-2xl text-blue-700">无名氏共123件作品</div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Image className="rounded-box border-4 border-silver" alt="logo" height={60}
                                           width={60} src='/images/vsinger/lty.png'/>
                                    <div className="text-2xl text-blue-700">无名氏共123件作品</div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Image className="rounded-box border-4 border-bronze" alt="logo" height={60}
                                           width={60} src='/images/vsinger/lty.png'/>
                                    <div className="text-2xl text-blue-700">无名氏共123件作品</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-3xl text-blue-700">天神下凡</div>
                            <div className=" flex flex-col w-full px-12 h-full w-auto space-y-2" style={{
                                backgroundImage: 'url("/images/bigdata/triangle.png")',
                                backgroundPosition: 'center',
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "100% 100%"
                            }}>
                                <div className="flex justify-center items-center space-x-2">
                                    <Image className="rounded-box border-4 border-gold" alt="logo" height={60}
                                           width={60} src='/images/vsinger/lty.png'/>
                                    <div className="text-2xl text-white">无名氏共123件作品</div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Image className="rounded-box border-4 border-silver" alt="logo" height={60}
                                           width={60} src='/images/vsinger/lty.png'/>
                                    <div className="text-2xl text-blue-700">无名氏共123件作品</div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Image className="rounded-box border-4 border-bronze" alt="logo" height={60}
                                           width={60} src='/images/vsinger/lty.png'/>
                                    <div className="text-2xl text-blue-700">无名氏共123件作品</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-3xl text-blue-700">传说之人</div>
                            <div className="flex w-full pl-8">
                                <div className="flex flex-col space-y-4">
                                    <Image className="rounded-box border-4 border-gold" alt="logo" height={60}
                                           width={60} src='/images/vsinger/lty.png'/>
                                    <div className="bg-gold h-full" style={{width: '60px', height: '200px'}}/>
                                </div>
                                <div className="flex flex-col pl-4">
                                    <div className="flex items-center text-2xl text-blue-700"
                                         style={{height: '60px'}}>XXX 传说1234件
                                    </div>
                                    <div className="flex">
                                        <div className="flex flex-col space-y-4">
                                            <Image className="rounded-box border-4 border-silver" alt="logo" height={60}
                                                   width={60} src='/images/vsinger/lty.png'/>
                                            <div className="bg-silver h-full"
                                                 style={{width: '60px', height: '140px'}}/>
                                        </div>
                                        <div className="flex flex-col pl-4">
                                            <div className="flex items-center text-2xl text-blue-700"
                                                 style={{height: '60px'}}>XXX 传说1234件
                                            </div>
                                            <div className="flex">
                                                <div className="flex flex-col space-y-4">
                                                    <Image className="rounded-box border-4 border-bronze" alt="logo"
                                                           height={60} width={60} src='/images/vsinger/lty.png'/>
                                                    <div className="bg-bronze h-full"
                                                         style={{width: '60px', height: '80px'}}/>
                                                </div>
                                                <div className="flex flex-col pl-4">
                                                    <div className="flex items-center text-2xl text-blue-700"
                                                         style={{height: '60px'}}>XXX 传说1234件
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-3xl text-blue-700">殿堂之才</div>
                            <div className="flex items-center text-2xl text-blue-700" style={{height: '60px'}}>XXX
                                传说1234件
                            </div>
                            <div className="flex justify-between items-end">
                                <div className="flex items-center text-2xl text-blue-700" style={{height: '60px'}}>XXX
                                    传说1234件
                                </div>

                                <div className="flex flex-col" style={{
                                    borderRadius: '50%',
                                    border: '2px dashed blue',
                                    height: '240px',
                                    width: '240px'
                                }}>
                                    <div className="flex flex-col items-center flex-1">
                                        <Image className="rounded-large border-4 border-gold" alt="logo" height={60}
                                               width={60} src='/images/vsinger/lty.png'/>
                                    </div>
                                    <div className="flex justify-between flex-1">
                                        <div className="flex flex-col">
                                            <Image className="rounded-large border-4 border-gold" alt="logo" height={60}
                                                   width={60} src='/images/vsinger/lty.png'/>
                                        </div>
                                        <div className="flex flex-col">
                                            <Image className="rounded-large border-4 border-gold" alt="logo" height={60}
                                                   width={60} src='/images/vsinger/lty.png'/>
                                        </div>

                                    </div>
                                </div>
                                <div className="flex items-center text-2xl text-blue-700" style={{height: '60px'}}>XXX
                                    传说1234件
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BasicLayout>
        </>
    );
}

// 第四页
function MostTop2() {
    return (
        <>
            <BasicLayout>
                <div className="w-full h-full flex flex-col">
                    <div className="flex items-center" style={{height: '80px'}}>
                        <Image className="ml-12 mr-4" alt="logo" height={60} width={60} src='/images/logo.png'/>
                        <ColorText text={'作品之最'} textSize={'text-6xl'}/>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="flex flex-col items-center">
                            <div className="text-3xl text-blue-700">众所周知</div>
                            <div className="flex justify-around w-full py-4">
                                <div className="flex flex-col items-center space-y-8">
                                    <div
                                        className={styles['gradient-gold'] + " card h-36 w-36 flex flex-col items-center justify-around"}>
                                        <Image className="rounded-box border-4 border-gold" alt="logo" height={60}
                                               width={60} src='/images/vsinger/lty.png'/>
                                        <div className="text-white font-bold text-xl">
                                            无名氏
                                        </div>
                                    </div>
                                    <div className="text-2xl text-blue-700">一亿播放</div>
                                </div>
                                <div className="flex flex-col items-center space-y-8">
                                    <div
                                        className={styles['gradient-silver'] + " card h-36 w-36 flex flex-col items-center justify-around"}>
                                        <Image className="rounded-box border-4 border-gold" alt="logo" height={60}
                                               width={60} src='/images/vsinger/lty.png'/>
                                        <div className="text-white font-bold text-xl">
                                            无名氏
                                        </div>
                                    </div>
                                    <div className="text-2xl text-blue-700">一亿播放</div>

                                </div>
                                <div className="flex flex-col items-center space-y-8">
                                    <div
                                        className={styles['gradient-copper'] + " card h-36 w-36 flex flex-col items-center justify-around"}>
                                        <Image className="rounded-box border-4 border-gold" alt="logo" height={60}
                                               width={60} src='/images/vsinger/lty.png'/>
                                        <div className="text-white font-bold text-xl">
                                            无名氏
                                        </div>
                                    </div>
                                    <div className="text-2xl text-blue-700">一亿播放</div>

                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-3xl text-blue-700">一节更比六节强</div>
                            <div className="flex justify-around w-full py-4">
                                <div className="flex flex-col items-center">
                                    <div style={{
                                        height: '20px',
                                        width: '20px',
                                        borderRadius: '6px 6px 0px 0px',
                                    }}
                                         className="bg-gold"
                                    />
                                    <div style={{
                                        width: '120px',
                                        height: '160px',
                                        borderRadius: '10px'
                                    }}
                                         className="flex flex-col justify-around items-center bg-gold"
                                    >
                                        <Image className="rounded-box border-4 border-gold" alt="logo" height={60}
                                               width={60} src='/images/vsinger/lty.png'/>
                                        <div className="text-white font-bold text-xl">
                                            无名氏
                                        </div>
                                        <div className="text-white font-bold ">
                                            1小时
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div style={{
                                        height: '20px',
                                        width: '20px',
                                        borderRadius: '6px 6px 0px 0px',
                                    }}
                                         className="bg-silver"
                                    />
                                    <div style={{
                                        width: '120px',
                                        height: '160px',
                                        borderRadius: '10px'
                                    }}
                                         className="flex flex-col justify-around items-center bg-silver"
                                    >
                                        <Image className="rounded-box border-4 border-gold" alt="logo" height={60}
                                               width={60} src='/images/vsinger/lty.png'/>
                                        <div className="text-white font-bold text-xl">
                                            无名氏
                                        </div>
                                        <div className="text-white font-bold ">
                                            1小时
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div style={{
                                        height: '20px',
                                        width: '20px',
                                        borderRadius: '6px 6px 0px 0px',
                                    }}
                                         className="bg-bronze"
                                    />
                                    <div style={{
                                        width: '120px',
                                        height: '160px',
                                        borderRadius: '10px'
                                    }}
                                         className="flex flex-col justify-around items-center bg-bronze"
                                    >
                                        <Image className="rounded-box border-4 border-gold" alt="logo" height={60}
                                               width={60} src='/images/vsinger/lty.png'/>
                                        <div className="text-white font-bold text-xl">
                                            无名氏
                                        </div>
                                        <div className="text-white font-bold ">
                                            1小时
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-3xl text-blue-700">好热闹啊</div>
                            <div className="flex flex-col w-full h-full pl-8 space-y-8">
                                <div className="flex w-full space-x-4">
                                    <Image className="rounded-box border-4 border-gold" alt="logo" height={60}
                                           width={60} src='/images/vsinger/lty.png'/>
                                    <div className="chat chat-start w-full">
                                        <div className="chat-bubble chat-bubble-info">xxx作品，评论数量XXX</div>
                                    </div>
                                </div>
                                <div className="flex w-full space-x-4">
                                    <div className="chat chat-end w-full">
                                        <div className="chat-bubble chat-bubble-success">xxx作品，评论数量XXX</div>
                                    </div>
                                    <Image className="rounded-box border-4 border-gold" alt="logo" height={60}
                                           width={60} src='/images/vsinger/lty.png'/>
                                </div>
                                <div className="flex w-full space-x-4">
                                    <Image className="rounded-box border-4 border-gold" alt="logo" height={60}
                                           width={60} src='/images/vsinger/lty.png'/>
                                    <div className="chat chat-start w-full">
                                        <div className="chat-bubble chat-bubble-warning">xxx作品，评论数量XXX</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-3xl text-blue-700">很快啊！</div>
                            <div className="flex w-full h-full justify-around items-center">
                                <div className="flex flex-col items-center">
                                    <div
                                        style={{
                                            backgroundImage: 'url("/images/bigdata/running_man.png")',
                                            backgroundSize: 'contain',
                                            backgroundPosition: 'top',
                                            backgroundRepeat: 'no-repeat',
                                            height: '190px',
                                            width: '130px'
                                        }}
                                    >
                                        <Image className="rounded-large border-4 border-gold float-right" alt="logo"
                                               height={60}
                                               width={60} src='/images/vsinger/lty.png'/>
                                    </div>
                                    <div className="text-2xl text-blue-700">xxx作品时长1分钟</div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div
                                        style={{
                                            backgroundImage: 'url("/images/bigdata/running_man.png")',
                                            backgroundSize: 'contain',
                                            backgroundPosition: 'top',
                                            backgroundRepeat: 'no-repeat',
                                            height: '190px',
                                            width: '130px'
                                        }}
                                    >
                                        <Image className="rounded-large border-4 border-gold float-right" alt="logo"
                                               height={60}
                                               width={60} src='/images/vsinger/lty.png'/>
                                    </div>
                                    <div className="text-2xl text-blue-700">一亿播放</div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div
                                        style={{
                                            backgroundImage: 'url("/images/bigdata/running_man.png")',
                                            backgroundSize: 'contain',
                                            backgroundPosition: 'top',
                                            backgroundRepeat: 'no-repeat',
                                            height: '190px',
                                            width: '130px'
                                        }}
                                    >
                                        <Image className="rounded-large border-4 border-gold float-right" alt="logo"
                                               height={60}
                                               width={60} src='/images/vsinger/lty.png'/>
                                    </div>
                                    <div className="text-2xl text-blue-700">一亿播放</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BasicLayout>
        </>
    );
}

function PartnerHotMapStatus(props) {
    const [partnerHotMapStatusOption, setPartnerHotMapStatusOption] = React.useState({});
    React.useEffect(() => {
        setPartnerHotMapStatusOption({
            tooltip: {
                position: 'top',
            },
            xAxis: {
                type: 'category',
                data: ['洛天依', '乐正绫', '言和', '乐正龙牙', '墨清弦', '徵羽摩柯'],
            },
            yAxis: {
                type: 'category',
                data: ['洛天依', '乐正绫', '言和', '乐正龙牙', '墨清弦', '徵羽摩柯'],
            },
            visualMap: {
                min: 0,
                max: 10,
                calculable: true,
                orient: 'horizontal',
                left: 'center',
                bottom: '15%'
            },
            series: [
                {
                    name: 'Punch Card',
                    type: 'heatmap',
                    data: [
                        [0, 0, 10],
                        [1, 1, 9],
                        [2, 2, 8],
                        [3, 3, 7],
                        [4, 4, 6],
                        [5, 5, 5],
                    ],
                    label: {
                        show: true
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        });
    }, []);
    return <ReactECharts
        style={props.classStyle ? props.classStyle : {}}
        option={partnerHotMapStatusOption} opts={{renderer: 'svg'}}
    />
}

function PartnerRelationshipStatus(props) {
    const [partnerRelationshipStatusOption, setPartnerRelationshipStatusOption] = React.useState({});
    React.useEffect(() => {
        setPartnerRelationshipStatusOption({
            title: {
                text: 'Basic Graph'
            },
            tooltip: {},
            animationDurationUpdate: 1500,
            animationEasingUpdate: 'quinticInOut',
            series: [
                {
                    type: 'graph',
                    layout: 'none',
                    symbolSize: 50,
                    roam: true,
                    label: {
                        show: true
                    },
                    edgeSymbol: ['circle', 'arrow'],
                    edgeSymbolSize: [4, 10],
                    edgeLabel: {
                        fontSize: 20
                    },
                    data: [
                        {
                            name: 'Node 1',
                            x: 300,
                            y: 300
                        },
                        {
                            name: 'Node 2',
                            x: 800,
                            y: 300
                        },
                        {
                            name: 'Node 3',
                            x: 550,
                            y: 100
                        },
                        {
                            name: 'Node 4',
                            x: 550,
                            y: 500
                        }
                    ],
                    // links: [],
                    links: [
                        {
                            source: 0,
                            target: 1,
                            symbolSize: [5, 20],
                            label: {
                                show: true
                            },
                            lineStyle: {
                                width: 5,
                                curveness: 0.2
                            }
                        },
                        {
                            source: 'Node 2',
                            target: 'Node 1',
                            label: {
                                show: true
                            },
                            lineStyle: {
                                curveness: 0.2
                            }
                        },
                        {
                            source: 'Node 1',
                            target: 'Node 3'
                        },
                        {
                            source: 'Node 2',
                            target: 'Node 3'
                        },
                        {
                            source: 'Node 2',
                            target: 'Node 4'
                        },
                        {
                            source: 'Node 1',
                            target: 'Node 4'
                        }
                    ],
                    lineStyle: {
                        opacity: 0.9,
                        width: 2,
                        curveness: 0
                    }
                }
            ]
        });
    }, []);
    return <ReactECharts
        style={props.classStyle ? props.classStyle : {}}
        option={partnerRelationshipStatusOption} opts={{renderer: 'svg'}}
    />
}

// 第五页
function Partner() {
    return (
        <>
            <BasicLayout>
                <div className="w-full h-full flex flex-col">
                    <div className="flex items-center" style={{height: '80px'}}>
                        <Image className="ml-12 mr-4" alt="logo" height={60} width={60} src='/images/logo.png'/>
                        <ColorText text={'最佳搭档'} textSize={'text-6xl'}/>
                    </div>
                    <div className="flex h-full  w-full ">
                        <div className="flex-1">
                            <PartnerHotMapStatus classStyle={{width: '100%', height: '100%'}}/>
                        </div>
                        <div className="flex-1">
                            <PartnerRelationshipStatus classStyle={{width: '100%', height: '100%'}}/>
                        </div>
                    </div>
                </div>
            </BasicLayout>
        </>
    );
}

function AuthorPartnerHotMapStatus(props) {
    const [AuthorPartnerHotMapStatusOption, setAuthorPartnerHotMapStatusOption] = React.useState({});
    const data = [];
    for (let i = 0; i < 5; ++i) {
        data.push(Math.round(Math.random() * 200));
    }
    React.useEffect(() => {
        setAuthorPartnerHotMapStatusOption({
            xAxis: {
                max: 'dataMax'
            },
            yAxis: {
                type: 'category',
                data: ['A', 'B', 'C', 'D', 'E'],
                inverse: true,
                animationDuration: 300,
                animationDurationUpdate: 300,
                max: 2 // only the largest 3 bars will be displayed
            },
            series: [
                {
                    realtimeSort: true,
                    name: 'X',
                    type: 'bar',
                    data: data,
                    label: {
                        show: true,
                        position: 'right',
                        valueAnimation: true
                    }
                }
            ],
            legend: {
                show: true
            },
            animationDuration: 0,
            animationDurationUpdate: 3000,
            animationEasing: 'linear',
            animationEasingUpdate: 'linear'
        });
    }, []);
    return <ReactECharts
        style={props.classStyle ? props.classStyle : {}}
        option={AuthorPartnerHotMapStatusOption} opts={{renderer: 'svg'}}
    />
}

function AuthorPartnerRelationshipStatus(props) {
    const [AuthorPartnerRelationshipStatusOption, setAuthorPartnerRelationshipStatusOption] = React.useState({});
    React.useEffect(() => {
        setAuthorPartnerRelationshipStatusOption({
            title: {
                text: 'Basic Graph'
            },
            tooltip: {},
            animationDurationUpdate: 1500,
            animationEasingUpdate: 'quinticInOut',
            series: [
                {
                    type: 'graph',
                    layout: 'none',
                    symbolSize: 50,
                    roam: true,
                    label: {
                        show: true
                    },
                    edgeSymbol: ['circle', 'arrow'],
                    edgeSymbolSize: [4, 10],
                    edgeLabel: {
                        fontSize: 20
                    },
                    data: [
                        {
                            name: 'Node 1',
                            x: 300,
                            y: 300
                        },
                        {
                            name: 'Node 2',
                            x: 800,
                            y: 300
                        },
                        {
                            name: 'Node 3',
                            x: 550,
                            y: 100
                        },
                        {
                            name: 'Node 4',
                            x: 550,
                            y: 500
                        }
                    ],
                    // links: [],
                    links: [
                        {
                            source: 0,
                            target: 1,
                            symbolSize: [5, 20],
                            label: {
                                show: true
                            },
                            lineStyle: {
                                width: 5,
                                curveness: 0.2
                            }
                        },
                        {
                            source: 'Node 2',
                            target: 'Node 1',
                            label: {
                                show: true
                            },
                            lineStyle: {
                                curveness: 0.2
                            }
                        },
                        {
                            source: 'Node 1',
                            target: 'Node 3'
                        },
                        {
                            source: 'Node 2',
                            target: 'Node 3'
                        },
                        {
                            source: 'Node 2',
                            target: 'Node 4'
                        },
                        {
                            source: 'Node 1',
                            target: 'Node 4'
                        }
                    ],
                    lineStyle: {
                        opacity: 0.9,
                        width: 2,
                        curveness: 0
                    }
                }
            ]
        });
    }, []);
    return <ReactECharts
        style={props.classStyle ? props.classStyle : {}}
        option={AuthorPartnerRelationshipStatusOption} opts={{renderer: 'svg'}}
    />
}

// 第六页
function AuthorPartner() {
    return (
        <>
            <BasicLayout>
                <div className="w-full h-full flex flex-col">
                    <div className="flex items-center" style={{height: '80px'}}>
                        <Image className="ml-12 mr-4" alt="logo" height={60} width={60} src='/images/logo.png'/>
                        <ColorText text={'友好合作'} textSize={'text-6xl'}/>
                    </div>
                    <div className="flex h-full  w-full ">
                        <div className="flex-1">
                            <AuthorPartnerHotMapStatus classStyle={{width: '100%', height: '100%'}}/>
                        </div>
                        <div className="flex-1">
                            <AuthorPartnerRelationshipStatus classStyle={{width: '100%', height: '100%'}}/>
                        </div>
                    </div>
                </div>
            </BasicLayout>
        </>
    );
}


function VSingerMerchandise() {
    return (
        <>
            <BasicLayout>
                <div className="w-full h-full flex flex-col">
                    <div className="flex items-center" style={{height: '80px'}}>
                        <Image className="ml-12 mr-4" alt="logo" height={60} width={60} src='/images/logo.png'/>
                        <ColorText text={'周边信息'} textSize={'text-6xl'}/>
                    </div>
                    <div className="grid grid-cols-3 gap-4 h-full w-full">
                        <div className="flex flex-col items-center">
                            <ColorText text={"专辑"}/>
                            <div
                                className="flex justify-center items-center bg-blue-700 text-white text-4xl cursor-pointer"
                                style={{
                                    height: '100px',
                                    width: '200px',
                                    marginTop: '-40px'
                                }}>
                                100份
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <ColorText text={"手办"}/>
                            <div
                                className="flex justify-center items-center bg-blue-700 text-white text-4xl cursor-pointer"
                                style={{
                                    height: '100px',
                                    width: '200px',
                                    marginTop: '-40px'
                                }}>
                                100份
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <ColorText text={"演唱会"}/>
                            <div
                                className="flex justify-center items-center bg-blue-700 text-white text-4xl cursor-pointer"
                                style={{
                                    height: '100px',
                                    width: '200px',
                                    marginTop: '-40px'
                                }}>
                                100份
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <ColorText text={"联动"}/>
                            <div
                                className="flex justify-center items-center bg-blue-700 text-white text-4xl cursor-pointer"
                                style={{
                                    height: '100px',
                                    width: '200px',
                                    marginTop: '-40px'
                                }}>
                                100份
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <ColorText text={"代言"}/>
                            <div
                                className="flex justify-center items-center bg-blue-700 text-white text-4xl cursor-pointer"
                                style={{
                                    height: '100px',
                                    width: '200px',
                                    marginTop: '-40px'
                                }}>
                                100份
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <ColorText text={"游戏"}/>
                            <div
                                className="flex justify-center items-center bg-blue-700 text-white text-4xl cursor-pointer"
                                style={{
                                    height: '100px',
                                    width: '200px',
                                    marginTop: '-40px'
                                }}>
                                100份
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 pl-8 pb-8">
                        <ColorDot/>
                        <div>点击查看详情并补充</div>
                    </div>
                </div>
            </BasicLayout>
        </>
    );
}


function TheLast() {
    return (
        <>
            <BasicLayout>
                <div style={{
                    width: '100%',
                    height: '100%',
                }}>
                    <div
                        style={{
                            width: '180px',
                            height: '180px',
                            borderRadius: '50%',
                            border: '2px dashed blue',
                            float: 'right',
                            marginTop: '40px',
                            marginRight: '80px',
                            zIndex: 2,
                        }}
                    />
                    <ColorCircle size="20px" rotate="45deg" otherStyle={{
                        top: '80px',
                        right: '80px',
                        zIndex: 2,
                    }}/>
                    <ColorCircle size="20px" rotate="45deg" otherStyle={{
                        top: '140px',
                        right: '360px',
                        zIndex: 2,
                    }}/>
                    <div
                        style={{
                            backgroundImage: 'url("/images/bigdata/CornerShape.png")',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            width: "300px",
                            height: "300px",
                            position: 'absolute',
                            bottom: '32px',
                            right: '32px',
                            borderRadius: '32px',
                            zIndex: 2,
                        }}
                    />
                    <div style={{
                        width: '100%',
                        height: '100%',
                        position: 'relative',
                        backgroundImage: 'url("/images/bigdata/AllSinger.png")',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        zIndex: 3,
                    }}>
                        <div style={{
                            width: '100%',
                            height: '100%',
                            position: 'relative',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            borderRadius: '32px',
                            zIndex: 4,
                        }}>
                            <div
                                className="w-full h-full"
                            >
                                <div className="w-full ml-32" style={{height: '50%'}}>
                                    <div className="w-full" style={{height: '40%'}}/>
                                    <ColorText text={(new Date()).getFullYear().toString()} textSize={'text-9xl'}
                                               startColor={'from-blue-400'} endColor={'to-blue-50'}/>
                                    <div
                                        style={{
                                            position: 'relative',
                                            bottom: '20%',
                                            width: '100%',
                                        }}
                                        className="flex flex-col"
                                    >
                                        <span className={styles['doudong'] + " text-white text-7xl"}>VSinger会更好</span>
                                        <span className="text-blue-200 text-3xl mt-2" style={{
                                            width: '460px',
                                            textAlignLast: 'justify',
                                            textAlign: 'justify',
                                            textJustify: 'distribute-all-lines',
                                        }}>勇敢向前冲</span>
                                    </div>
                                </div>
                                <div className="w-full flex items-end pb-16 pl-32" style={{height: '50%'}}>
                                    {/*<div*/}
                                    {/*    className="bg-white w-6 h-6 rounded-large border-8 border-blue-700 mr-2"*/}
                                    {/*/>*/}
                                    <ColorDot otherClass={'mr-2'}/>
                                    <p className="text-white">欢迎志同道合，喜欢VSinger的加入我们 <a className="text-blue-700"
                                                                                       href="http://luotianyi.moe">点我咨询</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BasicLayout>
        </>
    );
}

export default function Observer() {

    function onViewChange(view) {
        // history.replaceState({}, '', `${window.location.origin}/observer?view=${view}`);
    }

    return (
        <PagePiling initialView={0} onViewChange={onViewChange}>
            <PageSection variant={1}>
                <WelcomePage/>
            </PageSection>
            <PageSection variant={2}>
                <CountPage/>
            </PageSection>
            <PageSection variant={3}>
                <SevenDayReview/>
            </PageSection>
            <PageSection variant={4}>
                <SevenDayTop/>
            </PageSection>
            <PageSection variant={5}>
                <MostTop/>
            </PageSection>
            <PageSection variant={6}>
                <MostTop2/>
            </PageSection>
            <PageSection variant={7}>
                <Partner/>
            </PageSection>
            <PageSection variant={8}>
                <AuthorPartner/>
            </PageSection>
            <PageSection variant={9}>
                <VSingerMerchandise/>
            </PageSection>
            <PageSection variant={10}>
                <TheLast/>
            </PageSection>
        </PagePiling>
    );
}
