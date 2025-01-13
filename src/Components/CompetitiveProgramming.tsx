import React from "react";
import { IconTrophy } from "@tabler/icons-react";
import PublicImage from "./PublicImage";

const achievements = [
  {
    platform: "LeetCode",
    link: "https://leetcode.com/u/Pinak_Gupta/",
    description:
      "Achieved Knight badge with a maximum rating of 1881, solved 800+ algorithmic problems, and secured a remarkable rank of 1050 among 35K+ participants in Weekly Contests.",
    stats: [
      { label: "Badge", value: "Knight" },
      { label: "Max Rating", value: "1881" },
      { label: "Problems Solved", value: "800+" },
      { label: "Rank", value: "1050/35K+" },
    ],
    logo: "leetcode.png",
  },
  {
    platform: "CodeChef",
    link: "https://www.codechef.com/users/coder_guptaji",
    description:
      "3-Star programmer with a maximum rating of 1784, achieving a great rank of 421 in Starters and 161 in Division 2 contests, demonstrating consistent problem-solving abilities.",
    stats: [
      { label: "Rating", value: "1784 (3⭐)" },
      { label: "Best Rank", value: "421 (Starters)" },
      { label: "Rank in Div 2", value: "161" },
    ],
    logo: "codechef.png",
  },
  {
    platform: "Codeforces",
    link: "https://codeforces.com/profile/coder_guptaji",
    description:
      "Achieved Pupil status with a peak rating of 1360, showcasing algorithmic proficiency in solving diverse challenges.",
    stats: [
      { label: "Status", value: "Pupil" },
      { label: "Max Rating", value: "1360" },
    ],
    logo: "codeforces.png",
  },
];

const CompetitiveProgramming = () => {
  return (
    <div
      className="px-16 mx-20 md-mx:px-6 sm-mx:px-2 lg-mx:mx-0 my-10 mb-28 font-mono"
      id="CompetitiveProgramming"
    >
      <h1 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl mb-10 font-bold text-center text-white">
        <span className="text-primaryColor">05.&nbsp;</span>Competitive Programming
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-duration="800"
            className="border shadow-[0_0_15px_0_#64FFDA50] hover:-translate-y-2 transition transform duration-300 ease-in-out flex flex-col gap-4 p-6 rounded-2xl bg-bgColor border-primaryColor"
          >
            <a
              href={achievement.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 items-center"
            >
              <PublicImage
                src={`${achievement.logo}`}
                alt={achievement.platform}
                className="w-16 h-16 rounded-full"
              />
              <h2 className="text-2xl font-semibold text-white">{achievement.platform}</h2>
            </a>
            <p className="text-textColor leading-6 text-justify">{achievement.description}</p>
            <div className="flex flex-wrap gap-2">
              {achievement.stats.map((stat, i) => (
                <div
                  key={i}
                  className="border border-primaryColor text-white px-4 py-2 rounded-lg bg-opacity-30 bg-primaryColor text-sm font-medium"
                >
                  <span className="font-bold">{stat.label}: </span>
                  {stat.value}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompetitiveProgramming;
