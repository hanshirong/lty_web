import PagePiling from "../../components/PagePiling";
import PageSection from "../../components/PageSection";

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
                                    <div className="w-full" style={{height: '40%'}}></div>
                                    <span
                                        className="text-9xl bg-clip-text bg-gradient-to-b from-blue-600 to-blue-100 text-transparent">
                                        {(new Date()).getFullYear().toString()}
                                    </span>
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
                                            <div className="h-1 bg-blue-700 w-24"></div>
                                            <div className="h-1 bg-gray-400 w-36"></div>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div
                                            className="bg-white w-6 h-6 rounded-large border-8 border-blue-700 mr-2"
                                        />
                                        <p className="text-black">数据观察，我们是业余的 <a className="text-blue-700"
                                                                                 href="http://luotianyi.moe">∠( ᐛ
                                            」∠)＿</a>
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

function CountPage() {
    return (
        <>
            <BasicLayout>
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <h1 className="text-blue-700 text-7xl font-semibold">第一页</h1>
                </div>
            </BasicLayout>
        </>
    );
}

function SevenDayReview() {
    return (
        <>
            <BasicLayout>
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <h1 className="text-blue-700 text-7xl font-semibold">第二页</h1>
                </div>
            </BasicLayout>
        </>
    );
}

function SevenDayTop() {
    return (
        <>
            <BasicLayout>
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <h1 className="text-blue-700 text-7xl font-semibold">第三页</h1>
                </div>
            </BasicLayout>
        </>
    );
}

function MostTop() {
    return (
        <>
            <BasicLayout>
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <h1 className="text-blue-700 text-7xl font-semibold">第四页</h1>
                </div>
            </BasicLayout>
        </>
    );
}

function Partner() {
    return (
        <>
            <BasicLayout>
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <h1 className="text-blue-700 text-7xl font-semibold">第五页</h1>
                </div>
            </BasicLayout>
        </>
    );
}

function AuthorPartner() {
    return (
        <>
            <BasicLayout>
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <h1 className="text-blue-700 text-7xl font-semibold">第六页</h1>
                </div>
            </BasicLayout>
        </>
    );
}


function VSingerMerchandise() {
    return (
        <>
            <BasicLayout>
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <h1 className="text-blue-700 text-7xl font-semibold">第七页</h1>
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
                                    <span
                                        className="text-9xl bg-clip-text bg-gradient-to-b from-blue-400 to-blue-50 text-transparent">
                                        {(new Date()).getFullYear().toString()}
                                    </span>
                                    <div
                                        style={{
                                            position: 'relative',
                                            bottom: '20%',
                                            width: '100%',
                                        }}
                                        className="flex flex-col"
                                    >
                                        <span className="text-white text-7xl">VSinger会更好</span>
                                        <span className="text-blue-200 text-3xl mt-2" style={{
                                            width: '460px',
                                            textAlignLast: 'justify',
                                            textAlign: 'justify',
                                            textJustify: 'distribute-all-lines',
                                        }}>勇敢向前冲</span>
                                    </div>
                                </div>
                                <div className="w-full flex items-end pb-16 pl-32" style={{height: '50%'}}>
                                    <div
                                        className="bg-white w-6 h-6 rounded-large border-8 border-blue-700 mr-2"
                                    />
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
                <Partner/>
            </PageSection>
            <PageSection variant={7}>
                <AuthorPartner/>
            </PageSection>
            <PageSection variant={8}>
                <VSingerMerchandise/>
            </PageSection>
            <PageSection variant={9}>
                <TheLast/>
            </PageSection>
        </PagePiling>
    );
}
