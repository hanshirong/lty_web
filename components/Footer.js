import Image from "next/image";

export default function Footer() {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content">
            <div>
                <Image alt="logo" height={80} width={80} src='/images/logo.png'/>
                <p className="font-bold leading-loose">强势围观VSinger<br/>每天都要康康VSinger在干什么</p>
                <p><span className="font-bold">Love</span> ™ 2012 - <span className="font-bold text-lg">∞</span> Any time</p>
            </div>
        </footer>
    );
}
