import React from "react";
import PublicImage from "./PublicImage";

const achievements = [
  {
    platform: "LeetCode",
    link: "https://leetcode.com/u/Pinak_Gupta/",
    description:
      "Earned the prestigious Knight badge on LeetCode with a peak rating of 2056, successfully solving 900+ advanced algorithmic problems. Secured a top rank of 1050 among 35K+ participants in LeetCode Weekly Contest 401.",
    stats: [
      { label: "Badge", value: "Knight" },
      { label: "Peak Rating", value: "2056" },
      { label: "Problems Solved", value: "900+" },
      { label: "Rank", value: "1050 (Weekly Contest 401)" },
    ],
    logo: "leetcode.png",
  },
  {
    platform: "CodeChef",
    link: "https://www.codechef.com/users/coder_guptaji",
    description:
      "4-Star programmer on CodeChef 2 with a maximum rating of 1847. Achieved a remarkable rank of 85 in Starters 171 (Division 2), demonstrating advanced problem-solving capabilities.",
    stats: [
      { label: "Rating", value: "1847 (4⭐)" },
      { label: "Best Rank", value: "85 (Starters 171, Div 2)" },
    ],
    logo: "codechef.png",
  },
  {
    platform: "Codeforces",
    link: "https://codeforces.com/profile/coder_guptaji",
    description:
      "Attained Specialist status on Codeforces 2 with a peak rating of 1553. Ranked 1192 in Codeforces Round 1002 (Div. 2), showcasing algorithmic proficiency and speed.",
    stats: [
      { label: "Status", value: "Specialist" },
      { label: "Peak Rating", value: "1553" },
      { label: "Rank", value: "1192 (Round 1002, Div 2)" },
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
            className="flex flex-col border shadow-[0_0_15px_0_#64FFDA50] hover:-translate-y-2 transition transform duration-300 ease-in-out gap-4 p-6 rounded-2xl bg-bgColor border-primaryColor"
          >
            <div className="flex flex-col gap-2">
              <div className="flex gap-4 items-center">
                <PublicImage
                  src={achievement.logo}
                  alt={achievement.platform}
                  className="w-16 h-16 rounded-full"
                />
                <h2 className="text-2xl font-semibold text-white">{achievement.platform}</h2>
              </div>
              
              {/* Sparkling View Profile Button */}
              <a
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block bg-bgColor text-white px-6 py-2 rounded-lg overflow-hidden group w-fit ml-2"
              >
                {/* Sparkling border animation */}
                <span className="absolute inset-0 border-2 border-primaryColor rounded-lg"></span>
                
                {/* Sparkle effect that moves around the border */}
                <span className="absolute inset-0 flex">
                  <span className="h-full w-1/6 bg-gradient-to-r from-transparent via-primaryColor to-transparent opacity-30 animate-sparkle-horizontal"></span>
                </span>
                <span className="absolute inset-0 flex flex-col">
                  <span className="h-1/6 w-full bg-gradient-to-b from-transparent via-primaryColor to-transparent opacity-30 animate-sparkle-vertical"></span>
                </span>
                
                {/* Button text with light background for readability */}
                <span className="relative text-sm font-medium z-10 text-primaryColor">
                  View Profile
                </span>
              </a>
            </div>
            
            <p className="text-textColor leading-6 text-justify">
              {achievement.description}
            </p>
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

// Add these animation styles to your global CSS file
const globalStyles = `
@keyframes sparkleHorizontal {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(200%);
  }
}

@keyframes sparkleVertical {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(200%);
  }
}

.animate-sparkle-horizontal {
  animation: sparkleHorizontal 2s infinite linear;
}

.animate-sparkle-vertical {
  animation: sparkleVertical 2s infinite linear;
}
`;

export default CompetitiveProgramming;