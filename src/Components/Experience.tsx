import { ExperienceInfo } from "../User";
import { IconMapPin, IconCalendar, IconBriefcase } from "@tabler/icons-react";
import PublicImage from "./PublicImage";

const Experience = () => {
    return (
        <div className="px-16 my-20 font-mono md-mx:px-6" id="Experience">
            {/* Section Header */}
            <div className="text-center mb-16">
                <h1 className="text-5xl sm-mx:text-4xl xs-mx:text-3xl font-bold text-white mb-4">
                    <span className="text-primaryColor">02.&nbsp;</span>Experience
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-primaryColor to-blue-500 mx-auto rounded-full"></div>
                <p className="text-textColor mt-4 text-lg max-w-2xl mx-auto">
                    Professional journey and research contributions
                </p>
            </div>

            <div className="flex flex-col gap-8 max-w-6xl mx-auto">
                {ExperienceInfo.map((experience, index) => (
                    <div 
                        key={index} 
                        data-aos="fade-up" 
                        data-aos-duration="800" 
                        className="group relative bg-gradient-to-br from-bgColor to-bgColor/50 border border-primaryColor/20 rounded-2xl p-8 hover:border-primaryColor/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primaryColor/20 hover:transform hover:scale-[1.02]"
                    >
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primaryColor/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="relative z-10">
                            <div className="flex items-start gap-6 mb-6 sm-mx:flex-col sm-mx:items-center sm-mx:text-center">
                                {/* Company Logo */}
                                <div className="flex-shrink-0 relative">
                                    <div className="w-20 h-20 bg-white rounded-xl p-3 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                                        {experience.logo === "iit_mandi_logo" ? (
                                            <PublicImage 
                                                src="/iit_mandi_logo.png" 
                                                alt="IIT Mandi Logo"
                                                className="w-full h-full object-contain"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-inner">
                                                IIT
                                            </div>
                                        )}
                                    </div>
                                    {/* Decorative ring */}
                                    <div className="absolute -inset-2 bg-gradient-to-r from-primaryColor/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
                                </div>
                                
                                {/* Experience Header */}
                                <div className="flex-grow">
                                    <h3 className="text-3xl font-bold text-white mb-2 lg-mx:text-2xl sm-mx:text-xl group-hover:text-primaryColor transition-colors duration-300">
                                        {experience.role}
                                    </h3>
                                    <h4 className="text-2xl text-primaryColor font-semibold mb-4 lg-mx:text-xl sm-mx:text-lg">
                                        {experience.company}
                                    </h4>
                                    
                                    {/* Duration and Location */}
                                    <div className="flex flex-wrap gap-6 text-textColor text-base mb-4 sm-mx:justify-center sm-mx:gap-4">
                                        <div className="flex items-center gap-2 bg-primaryColor/10 px-3 py-2 rounded-lg border border-primaryColor/20">
                                            <IconCalendar size={18} className="text-primaryColor" />
                                            <span className="font-medium">{experience.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-2 bg-blue-500/10 px-3 py-2 rounded-lg border border-blue-500/20">
                                            <IconMapPin size={18} className="text-blue-400" />
                                            <span className="font-medium">{experience.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2 bg-green-500/10 px-3 py-2 rounded-lg border border-green-500/20">
                                            <IconBriefcase size={18} className="text-green-400" />
                                            <span className="font-medium">{experience.type}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="mb-6">
                                <h5 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-primaryColor rounded-full"></span>
                                    Key Achievements
                                </h5>
                                <ul className="text-textColor space-y-3">
                                    {experience.description.map((point, pointIndex) => (
                                        <li key={pointIndex} className="flex items-start gap-3 p-3 rounded-lg hover:bg-primaryColor/5 transition-colors duration-300">
                                            <span className="text-primaryColor mt-1 flex-shrink-0 text-lg">▶</span>
                                            <span className="text-justify leading-relaxed lg-mx:text-base sm-mx:text-sm font-medium">
                                                {point}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Skills */}
                            <div>
                                <h5 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                    Technologies & Skills
                                </h5>
                                <div className="flex flex-wrap gap-3">
                                    {experience.skills.map((skill, skillIndex) => (
                                        <span 
                                            key={skillIndex}
                                            className="px-4 py-2 bg-gradient-to-r from-primaryColor/15 to-blue-500/15 text-primaryColor rounded-full text-sm font-semibold border border-primaryColor/30 hover:bg-gradient-to-r hover:from-primaryColor/25 hover:to-blue-500/25 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primaryColor/25 cursor-default lg-mx:text-xs lg-mx:px-3 lg-mx:py-1"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom decoration */}
            <div className="flex justify-center mt-16">
                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primaryColor to-transparent rounded-full opacity-50"></div>
            </div>
        </div>
    );
};

export default Experience;