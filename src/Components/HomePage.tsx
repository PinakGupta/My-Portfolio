import { useEffect, useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header"
import { Loader } from "./Loader";
import Mail from "./Mail";
import Projects from "./Projects";
import Skills from "./Skills";
import Social from "./Social";
import { Toaster } from "react-hot-toast";
import Education from "./Education";
import CompetitiveProgramming from "./CompetitiveProgramming";
import Experience from "./Experience";

const HomePage = () => {
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        // Optimize loading time for better UX
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000); // Reduced from 5000ms to 3000ms
        
        return () => clearTimeout(timer);
    }, []);

    // Add smooth scrolling behavior
    useEffect(() => {
        if (!loading) {
            document.documentElement.style.scrollBehavior = 'smooth';
        }
    }, [loading]);

    return (
        <div className={`focus-visible:[&_button]:!outline-none min-h-[100dvh] ${loading ? "flex" : ""} items-center overflow-hidden justify-center bg-bgColor`}>
            {loading !== true ? (
                <>
                    <Toaster 
                        position="top-right"
                        toastOptions={{
                            duration: 4000,
                            style: {
                                background: '#0a192f',
                                color: '#ccd6f6',
                                border: '1px solid #64ffda',
                            },
                        }}
                    />
                    <Header />
                    
                    {/* Main Content Sections */}
                    <main className="relative">
                        <About />
                        <Experience />
                        <Projects />
                        <Skills />
                        <Education />
                        <CompetitiveProgramming />
                        <Contact />
                    </main>
                    
                    {/* Footer and Fixed Elements */}
                    <Footer />
                    <Mail />
                    <Social />
                    
                    {/* Scroll to top button */}
                    <ScrollToTop />
                </>
            ) : (
                <Loader />
            )}
        </div>
    );
};

// Scroll to top component for better UX
const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            className={`fixed bottom-8 right-8 z-50 p-3 bg-primaryColor text-bgColor rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
            }`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
            </svg>
        </button>
    );
};

export default HomePage;