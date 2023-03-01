import Carousel from "../Carousel";

export default function Banner() {
    return (
        <div className="flex justify-center w-full h-auto lg:p-24 from-primary to-accent text-primary-content bg-gradient-to-br">
            <div className="w-full h-full lg:w-10/12  2xl:w-1200px lg:flex">
                <div className="lg:flex-grow p-24 hidden lg:flex">
                    <span className="text-7xl font-bold text-base-100">洛天依天下无敌</span>
                </div>
                <Carousel classNameTag="w-screen h-screen lg:flex-row lg:card lg:w-96 lg:h-96"/>
            </div>
        </div>
    );
}
