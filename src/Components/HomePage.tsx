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

const HomePage = () => {
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        }, 5000) 
    }, [])
    return <div className={` focus-visible:[&_button]:!outline-none min-h-[100dvh] ${loading?"flex":""} items-center overflow-hidden justify-center`}>
{   loading!==true?<>
    <Toaster/>
        <Header />
        <About />
        <Projects />
        <Skills />
        <Education />
        <CompetitiveProgramming/>
        <Contact />
        <Footer/>
        <Mail />
        <Social />
        </>:
        <Loader/>}
    </div>
};
export default HomePage;