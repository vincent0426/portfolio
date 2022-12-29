import covid_19 from "../images/covid-19.png";
import flappy from "../images/flappy.png";
import stock from "../images/stock.jpg";
import nft_marketplace from "../images/nft.png";
import offer from "../images/offer.png";
import more from "../images/more.png";

const files = [
    {
        title: "OfferLand",
        size: "Golang, React",
        source: offer,
        href: "https://github.com/offerland-cc",
    },
    {
        title: "COVID-19 Dashboard",
        size: "python",
        source: covid_19,
        href: "https://github.com/Vincent0426/COVID-19-dashboard",
    },
    {
        title: "Flappy Jenny",
        size: "C++",
        source: flappy,
        href: "https://github.com/Vincent0426/Flappy-Jenny",
    },
    {
        title: "Stock crawler",
        size: "python",
        source: stock,
        href: "https://github.com/Vincent0426/stock",
    },
    {
        title: "NFT Marketplace",
        size: "Solidity, React",
        source: nft_marketplace,
        href: "https://github.com/vincent0426/nft-marketplace",
    },

    {
        title: "",
        size: "",
        source: more,
        href: "https://github.com/vincent0426",
    },
];

function Projects() {
    return (
        <div className="min-h-screen bg-white max-w-5xl mx-auto">
            <div className="flex flex-col pt-16 relative">
                <h1 className="text-5xl text-gold text-center font-kalam">
                    Projects
                </h1>
                <div className="my-16 p-10">
                    <ul
                        role="list"
                        className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8"
                    >
                        {files.map((file) => (
                            <li key={file.source} className="relative">
                                <div className="rounded-lg bg-white focus-within:ring-2 focus-within:ring-gold focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                                    <a
                                        href={file.href}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img
                                            className="w-full h-48 object-cover rounded-t-lg"
                                            src={file.source}
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <p className="text-center pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                                    {file.title}
                                </p>
                                <p className="text-center pointer-events-none block text-sm font-medium text-gray-500">
                                    {file.size}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Projects;
