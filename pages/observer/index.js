import PagePiling from "../../components/PagePiling";
import PageSection from "../../components/PageSection";

import React from "react";
import ReactECharts from 'echarts-for-react';

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
        rotate: props.rotate.toString(),
        width: props.size.toString(),
        height: props.size.toString(),
    }

    if (props.otherStyle) {
        fixedStyle = Object.assign(fixedStyle, props.otherStyle)
    }

    return (
        <div style={fixedStyle} />
    );
}

// 欢迎页
function WelcomePage() {
    return (
        <>
            <div className="w-full h-full">
                <ColorCircle size="200px" rotate="-45deg" otherStyle={{
                    position: 'absolute'
                }}/>
            </div>
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
                <div className="flex flex-col justify-center items-center w-full h-full">
                    {/*<Page1/>*/}
                    <WelcomePage/>
                </div>
            </PageSection>
            <PageSection variant={2}>
                <div className="flex flex-col justify-center items-center bg-green-400 w-full h-full">
                    <h1>About</h1>
                    <p>Personally, I'd put something about myself here.</p>
                </div>
            </PageSection>
            <PageSection variant={3}>
                <div className="flex flex-col justify-center items-center bg-blue-400 w-full h-full">
                    <h1>Resume</h1>
                    <p>Kinda makes sense to put a resume too.</p>
                </div>
            </PageSection>
        </PagePiling>
    );
}
