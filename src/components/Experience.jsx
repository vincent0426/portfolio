import Amazon from "../images/Amazon.png";
import FST from "../images/FST.png";
import NTU from "../images/NTU.png";

function Experience() {
    return (
        <div className="min-h-screen bg-white">
            <div className="flex flex-col pt-16 relative">
                <h1 className="text-5xl text-gold text-center font-kalam">
                    Work Experience
                </h1>
                <div className="mt-12 flex justify-center font-kalam">
                    <div className="space-y-10 px-10 md:w-[45%] ml-10 md:ml-52">
                        <div className="relative border-l-4 pl-4">
                            <div>
                                <img
                                    className="absolute -left-48 top-8 h-12 hidden md:block"
                                    src={Amazon}
                                    alt="FST Network"
                                />
                                <h3 className="text-3xl font-medium flex justify-between">
                                    Amazon
                                    <p className="text-xl text-gray-400">
                                        July 2022 - Aug 2022
                                    </p>
                                </h3>

                                <p className="text-xl text-gray-600">
                                    Software Dev Engineer Intern
                                </p>

                                <ul className="list-disc px-6 mt-2">
                                    <li>
                                        Reduced 70% of time by integrating the
                                        system with AWS
                                    </li>
                                    <li>
                                        Redesigned and implemented the
                                        automation testing between Amazon
                                        Devices(Echo Flex & Tile)
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="relative border-l-4 pl-4">
                            <div>
                                <img
                                    className="absolute -left-40 top-2 h-28 hidden md:block"
                                    src={FST}
                                    alt="FST Network"
                                />
                                <h3 className="text-3xl font-medium flex justify-between">
                                    FST Network
                                    <p className="text-xl text-gray-400">
                                        Mar 2022 - Jun 2022
                                    </p>
                                </h3>
                                <p className="text-xl text-gray-600">
                                    Software Development Intern
                                </p>
                                <ul className="list-disc px-6 mt-2">
                                    <li>
                                        Created manually testing and automation
                                        testing on over 50+ API
                                    </li>
                                    <li>
                                        Increased 50% of productivity by
                                        executing and writing testing procedures
                                        and documents
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="relative border-l-4 pl-4">
                            <div>
                                <img
                                    className="absolute -left-36 top-10 h-20 hidden md:block"
                                    src={NTU}
                                    alt="FST Network"
                                />
                                <h3 className="text-3xl font-medium flex justify-between">
                                    NTU
                                    <p className="text-xl text-gray-400">
                                        Sep 2021 - Jan 2022
                                    </p>
                                </h3>
                                <p className="text-xl text-gray-600">
                                    Teaching Assistant at business programming
                                </p>
                                <ul className="list-disc px-6 mt-2">
                                    <li>
                                        Supported 800+ students in understanding
                                        programming concepts and practicing
                                        coding
                                    </li>
                                    <li>
                                        Provided students with one-on-one
                                        tutoring and guided them to solve the
                                        problems
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
