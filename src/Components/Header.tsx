import { IconHexagonLetterP } from "@tabler/icons-react";
import SideBar from "./SideBar";
import { useMediaQuery } from "@mantine/hooks";
import { em } from "@mantine/core";
import { useEffect, useState } from "react";

// Updated links array to include Experience
const links = ["About", "Experience", "Projects", "Skills", "Education", "CompetitiveProgramming", "Contact"];

const navLinks = (col: Boolean, clicked: any) => {
    const handleClick = () => {
        if (clicked) clicked();
    };
    
    return links.map((link, index) => {
        return (
            <a 
                key={index} 
                onClick={handleClick} 
                className={`${col ? 'flex flex-col items-center py-2' : ''} text-textColor text-lg font-mono hover:text-primaryColor transition-all duration-300 relative group cursor-pointer`} 
                href={`#${link}`}
            >
                <span className="text-primaryColor font-bold">0{index + 1}. </span>
                <span className="relative">
                    {link}
                    {/* Underline animation */}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primaryColor transition-all duration-300 group-hover:w-full"></span>
                </span>
            </a>
        );
    });
};

const Header = () => {
    const isMobile = useMediaQuery(`(max-width: ${em(476)})`);
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [shadow, setShadow] = useState(false);
    const [activeSection, setActiveSection] = useState("About");

    // Control navbar visibility on scroll
    const controlNavbar = () => {
        if (window.scrollY > lastScrollY && window.scrollY > 70) {
            setShow(false);
        } else {
            setShow(true);
        }
        
        if (window.scrollY > 70) {
            setShadow(true);
        } else {
            setShadow(false);
        }
        
        setLastScrollY(window.scrollY);
    };

    // Track active section
    const updateActiveSection = () => {
        const sections = links.map(link => document.getElementById(link));
        const scrollPosition = window.scrollY + 200;

        for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            if (section && section.offsetTop <= scrollPosition) {
                setActiveSection(links[i]);
                break;
            }
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            controlNavbar();
            updateActiveSection();
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    // Enhanced navLinks with active state
    const enhancedNavLinks = (col: Boolean, clicked: any) => {
        const handleClick = () => {
            if (clicked) clicked();
        };
        
        return links.map((link, index) => {
            const isActive = activeSection === link;
            
            return (
                <a 
                    key={index} 
                    onClick={handleClick} 
                    className={`${col ? 'flex flex-col items-center py-3 px-4 rounded-lg' : 'px-3 py-2 rounded-lg'} 
                    ${isActive ? 'text-primaryColor bg-primaryColor/10 border border-primaryColor/20' : 'text-textColor'} 
                    text-lg font-mono hover:text-primaryColor hover:bg-primaryColor/5 transition-all duration-300 relative group cursor-pointer`} 
                    href={`#${link}`}
                >
                    <span className={`${isActive ? 'text-primaryColor' : 'text-primaryColor'} font-bold`}>
                        0{index + 1}. 
                    </span>
                    <span className="relative">
                        {link}
                        {/* Enhanced underline animation */}
                        <span className={`absolute bottom-0 left-0 h-0.5 bg-primaryColor transition-all duration-300 ${
                            isActive ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}></span>
                    </span>
                </a>
            );
        });
    };

    return (
        <nav className={`flex ${show ? "translate-y-0" : "-translate-y-28"} ${
            shadow ? "shadow-[0px_10px_30px_-10px_#020c1b] backdrop-blur-sm bg-bgColor/95" : "bg-bgColor"
        } transition-all duration-500 ease-in-out fixed w-full z-50 h-28 px-10 justify-between items-center xs-mx:px-4 xs-mx:h-20 border-b border-primaryColor/10`}>
            
            {/* Logo with enhanced hover effect */}
            <div className="relative group">
                <IconHexagonLetterP 
                    className="z-10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 cursor-pointer" 
                    size={isMobile ? 45 : 60} 
                    color="#64FFDA" 
                    stroke={1.25}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                />
                {/* Glow effect */}
                <div className="absolute inset-0 bg-primaryColor/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>

            {/* Desktop Navigation */}
            <div className="bs:flex gap-6 hidden">
                {enhancedNavLinks(false, null)}
            </div>

            {/* Mobile Sidebar */}
            <SideBar />

            {/* Progress bar */}
            <div className="fixed top-0 left-0 w-full h-1 bg-bgColor/50 z-50">
                <div 
                    className="h-full bg-gradient-to-r from-primaryColor to-blue-500 transition-all duration-300 ease-out"
                    style={{
                        width: `${(window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`
                    }}
                ></div>
            </div>
        </nav>
    );
};

export default Header;
export { navLinks, links };