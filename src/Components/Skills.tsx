import { SkillInfo } from "../User";
import SkillCard from "./SkillCard";

const Skills = () => {
    return (
        <div className="px-16 mx-20 md-mx:px-6 sm-mx:px-2 lg-mx:mx-0 my-10 mb-28 font-mono" id="Skills">
            {/* Section Header */}
            <div className="text-center mb-16">
                <h1 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl font-bold text-white mb-4">
                    <span className="text-primaryColor">03.&nbsp;</span>Skills
                </h1>
                <div className="w-24 h-1 bg-primaryColor mx-auto rounded-full mb-4"></div>
                <p className="text-textColor text-lg md-mx:text-base sm-mx:text-sm max-w-2xl mx-auto">
                    Technologies and tools I work with
                </p>
            </div>

            {/* Skills Grid */}
            <div className="flex flex-wrap justify-around md-mx:justify-between sm-mx:justify-center gap-6 md-mx:gap-4 sm-mx:gap-3">
                {SkillInfo.map((skill: any, index: number) => (
                    <SkillCard
                        key={index}
                        title={skill.title}
                        skills={skill.skills}
                        isCourses={skill.title === "Courses"} // Check if the current section is "Courses"
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default Skills;