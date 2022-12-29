import { BriefcaseIcon } from "@heroicons/react/20/solid";
import logoOfferLand from "../images/offerland.png";
import logoAmazon from "../images/amazon.png";
import logoFST from "../images/fst.png";
import logoNTU from "../images/ntu.png";

const resume = [
    {
        company: "OfferLand",
        title: "Co-Founder",
        logo: logoOfferLand,
        start: "Sep 2022",
        end: "Present",
    },
    {
        company: "Amazon",
        title: "Software Dev Engineer Intern",
        logo: logoAmazon,
        start: "Jul 2022",
        end: "Aug 2022",
    },
    {
        company: "FST Network",
        title: "Software Development Intern",
        logo: logoFST,
        start: "Mar 2021",
        end: "Jun 2021",
    },
    {
        company: "National Taiwan University",
        title: "TA of Programming for Business Computing",
        logo: logoNTU,
        start: "Sep 2021",
        end: "Jan 2022",
    },
];

const WorkingExperience = () => {
    return (
        <div className="pt-20 px-20 max-w-6xl mx-auto bg-white">
            <div className="rounded-2xl border border-zinc-100 p-6">
                <h2 className="flex text-xl font-semibold items-center">
                    <BriefcaseIcon className="h-6 w-6 flex-none" />
                    <span className="ml-3">Working Experience</span>
                </h2>
                <div className="overflow-hidden bg-white sm:rounded-md">
                    <ol className="mt-16 space-y-12">
                        {resume.map((role, roleIndex) => (
                            <li key={roleIndex} className="flex gap-4">
                                <div className="relative flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:ring-0">
                                    <img
                                        src={role.logo}
                                        alt=""
                                        className="h-7 w-7"
                                        unoptimized
                                    />
                                </div>
                                <dl className="flex flex-auto flex-wrap gap-x-2">
                                    <dt className="sr-only">Company</dt>
                                    <dd className="w-full flex-none text-sm font-medium">
                                        {role.company}
                                    </dd>
                                    <dt className="sr-only">Role</dt>
                                    <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                                        {role.title}
                                    </dd>
                                    <dt className="sr-only">Date</dt>
                                    <dd
                                        className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                                        aria-label={`${
                                            role.start.label ?? role.start
                                        } until ${role.end.label ?? role.end}`}
                                    >
                                        <time
                                            dateTime={
                                                role.start.dateTime ??
                                                role.start
                                            }
                                        >
                                            {role.start.label ?? role.start}
                                        </time>{" "}
                                        <span aria-hidden="true">—</span>{" "}
                                        <time
                                            dateTime={
                                                role.end.dateTime ?? role.end
                                            }
                                        >
                                            {role.end.label ?? role.end}
                                        </time>
                                    </dd>
                                </dl>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default WorkingExperience;
