import React from "react";
import Avatar from "../images/avatar.png";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { CloudArrowDownIcon } from "@heroicons/react/20/solid";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";

import Resume from "../files/resume.pdf";

function Hero() {
    const rotations = [
        "rotate-3",
        "-rotate-2",
        "rotate-5",
        "-rotate-3",
        "rotate-2",
    ];

    return (
        <div className="pt-36 px-20 max-w-6xl mx-auto bg-white">
            <div className="flex">
                <div>
                    <h1 className="text-4xl font-kalam">
                        Software Engineer, Co-Founder
                    </h1>
                    <div className="max-w-xl text-md text-gray-500 py-10 leading-7">
                        Hi, I'm Vincent, a software engineer and Co-Founder
                        based in Taipei, Taiwan.
                        <br />
                        Currently studying Information Management at National
                        Taiwan University. I'm passionate about self-learning
                        and building things that can help people change their
                        lives.
                    </div>
                </div>
                <img src={Avatar} alt="" className="h-48 w-48 ml-40" />
            </div>
            <div className="flex gap-6 text-gray-500 items-center">
                <BsGithub
                    className="h-5 w-5"
                    href="https://github.com/vincent0426"
                    aria-label="Follow on GitHub"
                />
                <BsLinkedin
                    className="h-5 w-5"
                    href="https://www.linkedin.com/in/vincent0426/"
                    aria-label="Follow on LinkedIn"
                />
                <div className="flex items-center gap-2">
                    <CloudArrowDownIcon className="h-5 w-5" />
                    <a href={Resume} download="vincent hsieh">
                        Download Resume
                    </a>
                </div>
            </div>
            <div className="mt-16 flex gap-5 overflow-hidden py-4 sm:gap-8">
                {[image1, image2, image3, image4].map((image, imageIndex) => (
                    <div
                        key={imageIndex}
                        className={`relative aspect-[9/10] w-44 overflow-hidden rounded-xl sm:w-72 sm:rounded-2xl ${rotations[imageIndex]}`}
                    >
                        <img
                            src={image}
                            alt=""
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Hero;
