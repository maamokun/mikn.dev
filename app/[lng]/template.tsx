"use client";
import { Header, Footer, ToastProvider, useToast } from "@neodyland/ui";
import Image from "next/image";
import mikanLogo from "../assets/mikandev-circle.webp";
import mikanMascot from "../assets/MikanMascotFull.png";
import { useRouter, usePathname } from "next/navigation";
import CookieConsent from "react-cookie-consent";

import { FaDiscord, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import { SiMisskey } from "react-icons/si";
import { on } from "events";

export default function RootLayout({
    children,
}: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();

    const changeLanguage = () => {
        //@ts-ignore
        const pathSegments = pathname.split("/");
        if (pathSegments[1] === "en-GB") {
            pathSegments[1] = "ja-JP";
        } else if (pathSegments[1] === "ja-JP") {
            pathSegments[1] = "en-GB";
        }
        const newPath = pathSegments.join("/");
        router.push(newPath);
    };

    const nav = [
        {
            name: "ホーム",
            href: "/",
        },
        {
            name: "サポート",
            href: "/contact",
        },
        {
            name: "ドキュメント",
            href: "/docs",
        },
        {
            name: "利用規約",
            href: "/docs/terms",
        },
        {
            name: "プライバシーポリシー",
            href: "/docs/privacy",
        },
    ];

    const social = [
        {
            name: "GitHub",
            href: "https://github.com/maamokun",
            color: "hover:text-github hover:bg-github",
            icon: FaGithub,
        },
        {
            name: "Twitter",
            href: "https://twitter.com/kunkunmaamo",
            color: "hover:text-twitter hover:bg-twitter",
            icon: FaTwitter,
        },
        {
            name: "Discord",
            href: "https://discord.gg/FZCN6fjPuG",
            color: "hover:text-discord hover:bg-discord",
            icon: FaDiscord,
        },
        {
            name: "Misskey Server",
            href: "https://social.mikandev.tech/",
            color: "hover:text-misskey hover:bg-misskey",
            icon: SiMisskey,
        },
    ];

    const links = [
        {
            name: "Resouces",
            children: [
                {
                    name: "About us",
                    href: "/about",
                },
                {
                    name: "Partners",
                    href: "/partners",
                },
                {
                    name: "Services",
                    href: "/services",
                },
                {
                    name: "Blog",
                    href: "/blog",
                },
            ],
        },
        {
            name: "Support",
            children: [
                {
                    name: "Discord",
                    href: "https://discord.gg/FZCN6fjPuG",
                },
                {
                    name: "Contact Info",
                    href: "/contact",
                },
            ],
        },
        {
            name: "Legal",
            children: [
                {
                    name: "Terms of use",
                    href: "/terms",
                },
                {
                    name: "Privacy policy",
                    href: "/privacy",
                },
                {
                    name: "Payments",
                    href: "/payments",
                },
            ],
        },
    ];

    const buttons = [
        {
            href: "/account",
            title: "アカウント",
            colorScheme: "primary",
        },
        {
            title: "🌎",
            colorScheme: "primary",
            onClick: () => {
                changeLanguage();
            },
        },
    ];

    return (
        <>
            <Header
                navigation={nav}
                //@ts-ignore
                buttons={buttons}
                brand={{
                    showTitle: true,
                    name: "MikanDev",
                    href: "/",
                    logo: mikanLogo.src,
                }}
            />
            <div className="mx-auto min-h-screen max-w-7xl px-4 py-24">
                <ToastProvider>
                    {children}
                    <CookieConsent
                        location="bottom"
                        buttonText="Yum! 🍪"
                        cookieName="CookieConsent"
                        style={{ background: "#ff9900" }}
                        buttonStyle={{ color: "#261800", fontSize: "13px" }}
                        expires={150}
                    >
                        We use cookies to enhance your experience. Would you
                        like some?
                    </CookieConsent>
                </ToastProvider>
            </div>
            <Footer
                social={social}
                links={links}
                copylight="2020-2024 MikanDev"
            >
                <div className="flex items-center self-end">
                    <Image
                        src={mikanMascot.src}
                        width={200}
                        height={100}
                        alt="MikanDev Tech"
                        className="ml-2 mb-0"
                    />
                </div>
            </Footer>
        </>
    );
}
