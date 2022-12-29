import { Card } from "./Card";
import { CodeBracketIcon, LinkIcon } from "@heroicons/react/20/solid";
import logoOfferLand from "../images/offerland.png";
import logoFlappy from "../images/flappy.png";
import logoCovid from "../images/covid.png";
import logoNft from "../images/nft.png";
import logoStock from "../images/stock.png";

const projects = [
    {
        name: "OfferLand",
        description:
            "Create a platform for students who want to study abroad to find their dream school and get the best offer.",
        link: { href: "https://offerland.cc", label: "offerland.cc" },
        logo: logoOfferLand,
    },
    {
        name: "Flappy Jenny",
        description:
            "Recreate the famous Flappy Bird game with C++ and SFML library.",
        link: {
            href: "https://github.com/vincent0426/Flappy-Jenny",
            label: "vincent0426/Flappy-Jenny",
        },
        logo: logoFlappy,
    },
    {
        name: "COVID-19 Dashboard",
        description:
            "Create a dashboard to visualize the COVID-19 data around the world.",
        link: {
            href: "https://github.com/vincent0426/COVID-19-dashboard",
            label: "vincent0426/COVID-19-dashboard",
        },
        logo: logoCovid,
    },
    {
        name: "NFT Marketplace",
        description:
            "Create a marketplace for users to buy and sell NFTs on the Ethereum blockchain.",
        link: {
            href: "https://github.com/vincent0426/nft-marketplace",
            label: "vincent0426/nft-marketplace",
        },
        logo: logoNft,
    },
    {
        name: "Stock Analysis",
        description:
            "Create an application for client to analyze the stock market.",
        link: {
            href: "https://github.com/vincent0426/stock",
            label: "vincent0426/stock",
        },
        logo: logoStock,
    },
];

function Projects() {
    return (
        <div className="py-20 px-20 max-w-6xl mx-auto bg-white">
            <div className="rounded-2xl border border-zinc-100 p-6">
                <h2 className="flex text-xl font-semibold items-center text-gray-600">
                    <CodeBracketIcon className="h-6 w-6 flex-none" />
                    <span className="ml-3">Projects</span>
                </h2>
                <ul className="mt-12 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <Card as="li" key={project.name}>
                            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">
                                <img
                                    src={project.logo}
                                    alt=""
                                    className="h-8 w-8"
                                />
                            </div>
                            <h2 className="mt-6 text-base font-semibold text-zinc-800">
                                <Card.Link href={project.link.href}>
                                    {project.name}
                                </Card.Link>
                            </h2>
                            <Card.Description>
                                {project.description}
                            </Card.Description>
                            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500">
                                <LinkIcon className="h-6 w-6 flex-none" />
                                <span className="ml-2">
                                    {project.link.label}
                                </span>
                            </p>
                        </Card>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Projects;
