import { Info } from "../User";
import Typewriter from "typewriter-effect";
import { Button, useMatches } from "@mantine/core";
import ResumeViewer from "./ResumeViewer";
import { useDisclosure } from "@mantine/hooks";
import { IconDownload } from "@tabler/icons-react";
import Particles from "./magicui/Particles";
import { NeonGradientCard } from "./magicui/neon-gradient-card";
import PublicImage from "./PublicImage";

const About = () => {
    const [opened, { open, close }] = useDisclosure(false);
    const btn = useMatches({
        xs: 'xs',
        sm: 'sm',
        md: 'md',
        lg: 'lg'
    });

    return (
        <>
            <div 
                data-aos="zoom-out-up" 
                data-aos-duration="800" 
                className="min-h-screen flex relative overflow-hidden justify-around items-center font-mono px-16 py-20 md-mx:px-6 sm-mx:px-4 xs-mx:px-2 xs-mx:py-10 lg-mx:justify-between bs-mx:flex-wrap bs-mx:flex-col-reverse bs-mx:!overflow-visible bs-mx:gap-8" 
                id="About"
            >
                <Particles
                    className="absolute -z-20 inset-0"
                    quantity={1000}
                    ease={80}
                    vx={.1}
                    vy={.1}
                    color="#64FFDA"
                    refresh
                />
                
                {/* Content Section */}
                <div className="bs:ml-10 bs:w-3/5 flex flex-col lg-mx:gap-4 bs-mx:items-center bs-mx:text-center bs-mx:w-full">
                    {/* Greeting */}
                    <div className="text-primaryColor text-3xl lg-mx:text-2xl md-mx:text-xl xs-mx:text-lg font-medium mb-2 bs-mx:text-center bs:text-left">
                        Hi, I am
                    </div>
                    
                    {/* Name with enhanced styling */}
                    <div className="text-white text-[4.25rem] font-extrabold lg-mx:text-5xl md-mx:text-4xl sm-mx:text-3xl xs-mx:text-2xl mb-4 leading-tight bs-mx:text-center bs:text-left">
                        <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            {Info.name}
                        </span>
                    </div>
                    
                    {/* Dynamic Role - Fixed alignment */}
                    <div className="text-white text-4xl flex font-semibold lg-mx:text-3xl md-mx:text-2xl sm-mx:text-xl xs-mx:text-lg mb-6 bs-mx:items-center bs-mx:justify-center bs-mx:flex-wrap bs:items-start bs:justify-start">
                        <span>I'm a&nbsp;</span>
                        <span className="text-primaryColor">
                            <Typewriter 
                                options={{ 
                                    strings: Info.stack, 
                                    autoStart: true, 
                                    loop: true,
                                    delay: 75,
                                    deleteSpeed: 50
                                }} 
                            />
                        </span>
                    </div>
                    
                    {/* Bio */}
                    <div className="text-textColor text-xl w-[90%] bs-mx:w-full text-justify bs-mx:text-center my-8 lg-mx:my-4 font-medium lg-mx:text-lg md-mx:text-base sm-mx:text-sm xs-mx:text-xs leading-relaxed">
                        {Info.bio}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-4 mt-4 bs-mx:w-full bs-mx:justify-center xs-mx:flex-col xs-mx:items-center xs-mx:gap-3 bs:justify-start">
                        <Button 
                            onClick={open} 
                            className="focus-visible:!outline-none !text-bgColor !w-fit xs-mx:!w-full hover:scale-105 transition-transform duration-300" 
                            size={btn} 
                            variant="filled" 
                            color="#64FFDA"
                            radius="lg"
                        >
                            Check Resume
                        </Button>
                        <Button 
                            component="a" 
                            href="/Resume.pdf" 
                            download={Info.name} 
                            className="focus-visible:!outline-none !text-primaryColor !w-fit xs-mx:!w-full hover:scale-105 transition-transform duration-300" 
                            size={btn} 
                            variant="outline" 
                            color="#64FFDA" 
                            rightSection={<IconDownload size={20} />}
                            radius="lg"
                        >
                            Download
                        </Button>
                    </div>
                </div>
                
                {/* Profile Image Section */}
                <div className="h-fit flex justify-center items-center rounded-full bs:mr-10 w-fit bs-mx:mb-8">
                    <NeonGradientCard className="w-[350px] h-[350px] lg-mx:w-80 lg-mx:h-80 md-mx:w-72 md-mx:h-72 sm-mx:w-64 sm-mx:h-64 xs-mx:w-56 xs-mx:h-56 items-center justify-center text-center hover:scale-105 transition-transform duration-500">
                        <PublicImage 
                            className="w-full h-full rounded-full object-cover" 
                            src="profile.png" 
                            alt="profile" 
                        />
                    </NeonGradientCard>
                </div>
            </div>
            
            <ResumeViewer opened={opened} close={close} />
        </>
    );
};

export default About;