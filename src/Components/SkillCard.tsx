import PublicImage from "./PublicImage";

const SkillBadge = (skills: [], isCourses: boolean) => {
    return skills.map((skill: any, index: number) => (
        <div
            key={index}
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay={index * 50}
            className="flex gap-2 border border-primaryColor/40 hover:border-primaryColor rounded-2xl items-center py-2 px-3 bs-mx:py-1.5 bs-mx:px-2 bs-mx:gap-1 mb-2 hover:shadow-[0_0_15px_0_#64FFDA30] hover:-translate-y-1 transition-all duration-300 ease-in-out group bg-bgColor/50 backdrop-blur-sm"
        >
            {!isCourses && ( // Only show the icon if not a course section
                <PublicImage
                    className="w-[48px] bs-mx:w-[36px] xsm-mx:w-[28px] !p-1 group-hover:scale-110 transition-transform duration-300"
                    src={`Icons/${skill}.png`}
                    alt={`${skill} icon`}
                />
            )}
            <div className="text-textColor group-hover:text-primaryColor text-xl font-medium sm-mx:text-lg xs-mx:text-sm transition-colors duration-300">
                {skill}
            </div>
        </div>
    ));
};

const SkillCard = ({ title, skills, isCourses, index }: any) => {
    return (
        <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay={index * 200}
            data-aos-easing="ease-in-sine"
            className="w-[47%] shadow-[0_0_15px_0_#64FFDA50] hover:shadow-[0_0_25px_0_#64FFDA70] hover:-translate-y-2 rounded-3xl mb-6 border border-primaryColor/60 hover:border-primaryColor p-6 bs-mx:p-4 sm-mx:w-full transition-all duration-500 ease-in-out bg-bgColor/50 backdrop-blur-sm group"
        >
            {/* Card Header */}
            <div className="text-center mb-6">
                <div className="text-3xl mb-3 text-white group-hover:text-primaryColor sm-mx:text-2xl xs-mx:text-xl font-bold transition-colors duration-300">
                    {title}
                </div>
                {/* Underline animation */}
                <div className="w-16 h-1 bg-primaryColor/60 group-hover:bg-primaryColor mx-auto rounded-full group-hover:w-24 transition-all duration-300"></div>
            </div>

            {/* Skills Container */}
            <div className="flex gap-3 bs-mx:gap-2 justify-center flex-wrap">
                {SkillBadge(skills, isCourses)} {/* Pass `isCourses` to SkillBadge */}
            </div>

            {/* Skills Count Badge */}
            <div className="flex justify-center mt-4">
                <div className="px-3 py-1 bg-primaryColor/10 border border-primaryColor/30 rounded-full text-primaryColor text-sm font-medium">
                    {skills.length} {isCourses ? 'Courses' : 'Skills'}
                </div>
            </div>
        </div>
    );
};

export default SkillCard;