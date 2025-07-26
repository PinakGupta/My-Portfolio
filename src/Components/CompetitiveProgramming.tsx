import React from "react";
import PublicImage from "./PublicImage";

const achievements = [
  {
    platform: "LeetCode",
    link: "https://leetcode.com/u/Pinak_Gupta/",
    description:
      "Earned the prestigious Guardian badge on LeetCode with a peak rating of 2143, successfully solving 1000+ algorithmic problems. Achieved a top rank of 685 among 30K+ participants in LeetCode Weekly Contest 457.",
    stats: [
      { label: "Badge", value: "Guardian" },
      { label: "Peak Rating", value: "2143" },
      { label: "Problems Solved", value: "1000+" },
      { label: "Rank", value: "685 (Weekly Contest 457)" },
    ],
    logo: "leetcode.png",
  },
  {
    platform: "CodeChef",
    link: "https://www.codechef.com/users/coder_guptaji",
    description:
      "4⭐ programmer on CodeChef with a maximum rating of 1949. Secured an impressive rank of 85 in Starters 171 (Division 2), highlighting strong competitive-programming skills.",
    stats: [
      { label: "Rating", value: "1949 (4⭐)" },
      { label: "Best Rank", value: "85 (Starters 171, Div2)" },
    ],
    logo: "codechef.png",
  },
  {
    platform: "Codeforces",
    link: "https://codeforces.com/profile/coder_guptaji",
    description:
      "Achieved Expert status on Codeforces with a peak rating of 1667. Ranked 1192 in Codeforces Round 1002 (Div.2), showcasing algorithmic proficiency and speed.",
    stats: [
      { label: "Status", value: "Expert" },
      { label: "Peak Rating", value: "1667" },
      { label: "Rank", value: "1192 (Round 1002, Div2)" },
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
      {/* Section Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl font-bold text-white mb-4">
          <span className="text-primaryColor">05.&nbsp;</span>Competitive Programming
        </h1>
        <div className="w-24 h-1 bg-primaryColor mx-auto rounded-full mb-4"></div>
        <p className="text-textColor text-lg md-mx:text-base sm-mx:text-sm max-w-2xl mx-auto">
          Achievements and rankings across major competitive programming platforms
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay={index * 200}
            className="flex flex-col border shadow-[0_0_15px_0_#64FFDA50] hover:shadow-[0_0_25px_0_#64FFDA70] hover:-translate-y-3 transition-all duration-500 ease-in-out gap-4 p-6 rounded-2xl bg-bgColor/50 backdrop-blur-sm border-primaryColor/60 hover:border-primaryColor group"
          >
            <div className="flex flex-col gap-3">
              <div className="flex gap-4 items-center mb-2">
                <div className="relative">
                  <PublicImage
                    src={achievement.logo}
                    alt={achievement.platform}
                    className="w-16 h-16 rounded-full group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-primaryColor/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
                <h2 className="text-2xl font-semibold text-white group-hover:text-primaryColor transition-colors duration-300">
                  {achievement.platform}
                </h2>
              </div>
              
              {/* Enhanced View Profile Button */}
              <a
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block bg-bgColor text-white px-6 py-3 rounded-lg overflow-hidden group/btn w-fit border border-primaryColor/40 hover:border-primaryColor transition-all duration-300"
              >
                {/* Animated background */}
                <span className="absolute inset-0 bg-gradient-to-r from-primaryColor/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                
                {/* Moving sparkle effect */}
                <span className="absolute inset-0 flex">
                  <span className="h-full w-1/6 bg-gradient-to-r from-transparent via-primaryColor/40 to-transparent opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-pulse"></span>
                </span>
                
                {/* Button text */}
                <span className="relative text-sm font-medium z-10 text-primaryColor group-hover/btn:text-white transition-colors duration-300">
                  View Profile →
                </span>
              </a>
            </div>
            
            <p className="text-textColor leading-6 text-justify group-hover:text-white/90 transition-colors duration-300">
              {achievement.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {achievement.stats.map((stat, i) => (
                <div
                  key={i}
                  data-aos="zoom-in"
                  data-aos-delay={index * 200 + i * 100}
                  className="border border-primaryColor/60 hover:border-primaryColor text-white px-4 py-2 rounded-lg bg-primaryColor/10 hover:bg-primaryColor/20 text-sm font-medium transition-all duration-300 hover:scale-105"
                >
                  <span className="font-bold text-primaryColor">{stat.label}: </span>
                  <span className="text-white">{stat.value}</span>
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