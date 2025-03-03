import { useEffect } from "react";
import { useNavigate } from "react-router";
import companyLogo from "../../assets/Image/LandingPage_companyLogo.png";
const LandingPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/home");
        }, 3000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className='h-screen flex justify-center items-center'>
            <div className="animate-bounce">
                <img className="xl:h-16 lg:h-11 md:h-10 h-8" src={companyLogo} alt="companyLogo" />
            </div>
        </div>
    );
};

export default LandingPage;