import banner1 from '../../../assets/Images/Home/Banner_photo1.png';
import banner2 from '../../../assets/Images/Home/Banner_photo2.jpg';
import banner3 from '../../../assets/Images/Home/Banner_photo3.jpg';
import banner4 from '../../../assets/Images/Home/Banner_photo4.jpg';
import googleLogo from "../../../assets/Images/Home/Banner_googleLogo.png";
import service1 from "../../../assets/Images/Home/Banner_service1.png";
import service2 from "../../../assets/Images/Home/Banner_service2.png";
import service3 from "../../../assets/Images/Home/Banner_service3.png";
import overview1 from "../../../assets/Images/Home/Banner_overview1.png";
import overview2 from "../../../assets/Images/Home/Banner_overview2.png";
import overview3 from "../../../assets/Images/Home/Banner_overview3.png";
import overview4 from "../../../assets/Images/Home/Banner_overview4.png";
import user1 from "../../../assets/Images/Home/Banner_user1.png";
import user2 from "../../../assets/Images/Home/Banner_user2.png";
import { FaAngleRight, FaChevronLeft, FaChevronRight, FaStar, FaStarHalf } from 'react-icons/fa6';
import { FaStarHalfAlt } from 'react-icons/fa';
import { useEffect, useState } from 'react';


const Banner = () => {
    const banners = [
        banner1,
        banner2,
        banner3,
        banner4,
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            goNext();
        }, 3000); 
        return () => clearInterval(interval);
    }, [currentIndex]);

    const goNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === banners?.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goPrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? banners?.length - 1 : prevIndex - 1
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event?.target;
        const firstname = form?.firstname?.value;
        const lastname = form?.lastname?.value;
        const email = form?.email?.value;
        const phone = form?.phone?.value;

        // validation
        if (firstname?.length < 3) {
            alert("Firstname should have at least 3 characters !");
            return;
        }
        if (firstname?.length > 15) {
            alert("Firstname should have a maximum of 15 characters !");
            return;
        }
        if (lastname?.length < 3) {
            alert("Lastname should have at least 3 characters !");
            return;
        }
        if (lastname?.length > 15) {
            alert("Lastname should have a maximum of 15 characters !");
            return;
        }
        const gmailRegex = /^[a-zA-Z0-9._-]+@gmail\.com$/;
        if (!gmailRegex.test(email)) {
            alert("Email is not in the correct format!");
            return;
        }
        if ((phone?.length !== 10)) {
            alert("Phone number must be 10 digit!");
            return;
        }

        if (firstname && lastname && email && phone) {
            console.log("-----Submit Info----", "First Name: ", firstname, "Last Name: ", lastname, "Email: ", email, "Phone: ", phone);
            alert("The form is submitted successfully!");
            form.reset();
        } else {
            alert("Kindly fill up the form correctly!");
        }
    };

    return (
        <div className='h-screen relative '>
            <img className='lg:block hidden h-screen w-full' src={banner1} alt="banner1" />
            <div className='lg:hidden visible'>
                <div className="w-full relative">
                    <div className="relative">
                        <img
                            src={banners[currentIndex]}
                            alt={`banner ${currentIndex + 1}`}
                            className="w-full md:h-96 h-64 object-cover shadow-lg transition-all duration-500"
                        />
                        <button
                            onClick={goPrev}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white md:p-3 p-[10px] rounded-full shadow-md"
                        >
                            <FaChevronLeft className="text-[#00AA6C] md:text-base text-sm" />
                        </button>
                        <button
                            onClick={goNext}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white md:p-3 p-[10px] rounded-full shadow-md"
                        >
                            <FaChevronRight className="text-[#00AA6C] md:text-base text-sm" />
                        </button>
                    </div>

                    <div className="flex justify-center relative md:bottom-14 bottom-12 md:-mb-20 -mb-16 md:gap-5 gap-2">
                        {banners
                            .filter((_, index) => index !== currentIndex) // Exclude the current banner
                            .map((banner, index) => {
                                const originalIndex = banners.indexOf(banner);

                                return (
                                    <img
                                        key={originalIndex}
                                        src={banner}
                                        alt={`thumbnail ${originalIndex + 1}`}
                                        className="md:w-28 w-20 md:h-20 h-16 object-cover cursor-pointer rounded-md"
                                        onClick={() => setCurrentIndex(originalIndex)}
                                    />
                                );
                            })}
                    </div>

                </div>
            </div>
            <div className='flex lg:rounded-lg m-auto lg:absolute inset-0 xl:w-[80%] lg:w-[88%] xl:h-[82%] lg:h-[88%] bg-[#E6F4EB] xl:p-12 lg:p-8 md:px-10 md:py-14 px-5 py-9'>
                <div className='flex lg:flex-row flex-col lg:items-center xl:gap-12 lg:gap-8 md:gap-7 gap-6 w-full'>
                    <div className='lg:w-[55%] flex flex-col items-start xl:gap-8 lg:gap-6 md:gap-7 gap-6'>
                        {/* google rating */}
                        <div className='w-auto bg-white px-3 lg:py-2 py-[6px] flex items-center justify-start xl:gap-[6px] lg:gap-1 md:gap-[6px] gap-1 rounded-lg'>
                            <img className='xl:w-[14px] lg:w-3 md:w-[14px] w-3' src={googleLogo} alt="googleLogo" />
                            <div className='text-[#E6A53B] flex xl:gap-[2px] gap-[1.5px] xl:text-sm/none lg:text-[13px]/none md:text-[12.5px]/none text-xs/none'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalfAlt />
                            </div>
                            <p className='text-[#102442] md:text-[11px]/none text-[10px]/none'>(4.8/5.0)</p>
                        </div>
                        {/* heading */}
                        <h1 className='xl:text-[44px]/none lg:text-[36px]/none md:text-[35px]/none text-3xl/none font-semibold text-black'>Small warehouse space <br />for rent in <span className='text-[#00AA6C]'>Upper West <br className='lg:block hidden' />Side, <br className='lg:hidden md:block hidden' />Atlanta, GA</span></h1>
                        {/* services */}
                        <div className='flex flex-col xl:gap-5 lg:gap-[14px] md:gap-3 gap-4'>
                            <div className='flex md:items-center items-start xl:gap-4 lg:gap-3 md:gap-[10px] gap-3'>
                                <img className='xl:w-10 xl:h-10 lg:w-9 lg:h-9 md:w-8 md:h-8 w-9 h-9' src={service1} alt="service1" />
                                <div className='text-[#102442] flex flex-col xl:gap-[6px] lg:gap-1 md:gap-[4.5px] gap-1'>
                                    <h5 className='font-bold xl:text-lg/none lg:text-base/none md:text-[15.5px]/none text-[15px]/none'>Flexible spaces & leases</h5>
                                    <p className='xl:text-base/none lg:text-[14.3px]/none md:text-sm/none text-[13.5px]/4'>Leases as short as 6 months. Upscale or downscale anytime!</p>
                                </div>
                            </div>
                            <div className='flex md:items-center items-start xl:gap-4 lg:gap-3 md:gap-[10px] gap-3'>
                                <img className='xl:w-10 xl:h-10 lg:w-9 lg:h-9 md:w-8 md:h-8 w-9 h-9' src={service2} alt="service2" />
                                <div className='text-[#102442] flex flex-col xl:gap-[6px] lg:gap-1 md:gap-[4.5px] gap-1'>
                                    <h5 className='font-bold xl:text-lg/none lg:text-base/none md:text-[15.5px]/none text-[15px]/none'>All-inclusive warehousing</h5>
                                    <p className='xl:text-base/none lg:text-[14.3px]/none md:text-sm/none text-[13.5px]/4'>Rental includes racking, equipment, loading docks & more</p>
                                </div>
                            </div>
                            <div className='flex md:items-center items-start xl:gap-4 lg:gap-3 md:gap-[10px] gap-3'>
                                <img className='xl:w-10 xl:h-10 lg:w-9 lg:h-9 md:w-8 md:h-8 w-9 h-9' src={service3} alt="service3" />
                                <div className='text-[#102442] flex flex-col xl:gap-[6px] lg:gap-1 md:gap-[4.5px] gap-1'>
                                    <h5 className='font-bold xl:text-lg/none lg:text-base/none md:text-[15.5px]/none text-[15px]/none'>Immediate availability</h5>
                                    <p className='xl:text-base/none lg:text-[14.3px]/none md:text-sm/none text-[13.5px]/4'>Move in today!</p>
                                </div>
                            </div>
                        </div>
                        {/* overview */}
                        <div className='lg:grid grid-cols-4 xl:gap-4 lg:gap-3 lg:block hidden'>
                            <img className='w-full' src={overview1} alt="overview1" />
                            <img className='w-full' src={overview2} alt="overview2" />
                            <img className='w-full' src={overview3} alt="overview3" />
                            <img className='w-full' src={overview4} alt="overview4" />
                        </div>
                        {/* ask for space */}
                        <button className='lg:hidden visible flex items-center xl:gap-2 gap-[6px] font-semibold bg-[#00AA6C] text-white justify-center rounded-md xl:py-3 lg:py-[10px] py-2 md:w-[35%] w-full'>
                            <span className='xl:text-base/none lg:text-[15px]/none'>Ask about a space</span>
                            <FaAngleRight />
                        </button>
                        {/* pricing */}
                        <p className='text-[#00AA6C] font-bold xl:text-lg/none lg:text-base/none md:text-[15.5px]/none text-[15px]/none'>200-2,000 sq ft starting as low as $625/month</p>
                    </div>
                    <div className='lg:w-[45%] bg-white rounded-lg xl:p-6 lg:p-5 md:p-4 p-[14px]'>
                        <h3 className='text-[#000000] font-semibold xl:text-[28px]/none lg:text-2xl/none md:text-[25px]/none text-[22px]/none'>Visit for an in-person tour</h3>
                        {/* users */}
                        <div className='flex md:flex-row flex-col items-center md:gap-0 gap-3 xl:mt-5 lg:mt-3 mt-4 xl:mb-10 lg:mb-6 md:mb-7 mb-8'>
                            <div className='flex items-center'>
                                <img className='xl:w-12 xl:h-12 lg:w-10 lg:h-10 md:w-9 md:h-9 w-[34px] h-[34px] rounded-full' src={user1} alt="user1" />
                                <img className='relative xl:right-3 lg:right-3 xl:mr-3 lg:mr-3 right-2.5 mr-2.5  xl:w-12 xl:h-12 lg:w-10 lg:h-10 md:w-9 md:h-9 w-[34px] h-[34px] rounded-full' src={user2} alt="user2" />
                            </div>
                            <p className='text-[#102442] italic xl:text-[15px]/none lg:text-[13.5px]/none md:text-[13px]/none text-xs w-[90%] md:text-left text-center'>Cashana or Khadijah will answer your questions and find you a space that meets your needs. No commitment necessary!</p>
                        </div>
                        {/* form */}
                        <form onSubmit={handleSubmit} className='flex flex-col xl:gap-3 lg:gap-[10px] gap-2'>
                            <input className='placeholder:text-[#00000066] lg:placeholder:font-medium xl:text-base/none lg:text-[15px]/none md:text-[15px]/none text-[14px]/none xl:placeholder:text-base/none lg:placeholder:text-[15px]/none md:placeholder:text-[15px]/none placeholder:text-[14px]/none border-2 border-[#DCDCDC] rounded-md xl:py-2 lg:py-[7px] py-[6px] xl:px-4 lg:px-3 md:px-4 px-3 w-full' type="text" name="firstname" placeholder='First name here' required />
                            <input className='placeholder:text-[#00000066] lg:placeholder:font-medium xl:text-base/none lg:text-[15px]/none md:text-[15px]/none text-[14px]/none xl:placeholder:text-base/none lg:placeholder:text-[15px]/none md:placeholder:text-[15px]/none placeholder:text-[14px]/none border-2 border-[#DCDCDC] rounded-md xl:py-2 lg:py-[7px] py-[6px] xl:px-4 lg:px-3 md:px-4 px-3 w-full' type="text" name="lastname" placeholder='Last name here' required />
                            <input className='placeholder:text-[#00000066] lg:placeholder:font-medium xl:text-base/none lg:text-[15px]/none md:text-[15px]/none text-[14px]/none xl:placeholder:text-base/none lg:placeholder:text-[15px]/none md:placeholder:text-[15px]/none placeholder:text-[14px]/none border-2 border-[#DCDCDC] rounded-md xl:py-2 lg:py-[7px] py-[6px] xl:px-4 lg:px-3 md:px-4 px-3 w-full' type="email" name="email" placeholder='Email here' required />
                            <input className='placeholder:text-[#00000066] lg:placeholder:font-medium xl:text-base/none lg:text-[15px]/none md:text-[15px]/none text-[14px]/none xl:placeholder:text-base/none lg:placeholder:text-[15px]/none md:placeholder:text-[15px]/none placeholder:text-[14px]/none border-2 border-[#DCDCDC] rounded-md xl:py-2 lg:py-[7px] py-[6px] xl:px-4 lg:px-3 md:px-4 px-3 w-full' type="number" name="phone" placeholder='Phone number (Just so we can remind you of your appt)' required />
                            <button className='xl:mt-5 lg:mt-3 md:mt-5 mt-3 flex items-center xl:gap-2 gap-[6px] font-semibold bg-[#00AA6C] text-white justify-center rounded-md xl:py-3 lg:py-[10px] py-2'>
                                <span className='xl:text-base/none lg:text-[15px]/none'>Step 2: Find a time that works</span>
                                <FaAngleRight />
                            </button>
                        </form>
                        <p className='text-[#102442] xl:text-base/none lg:text-[15px]/none xl:mt-3 lg:mt-2 md:mt-[10px] mt-2'>Questions? Give us a call: <span className='text-[#00AA6C] border-b-2'>415-985-0940</span></p>
                        <button className='text-[#102442] xl:text-base/none lg:text-[15px]/none bg-[#E6F4EB] rounded-3xl xl:px-6 lg:px-5 px-[18px] xl:py-3 lg:py-[10px] py-2 xl:mt-10 lg:mt-6 md:mt-8 mt-7'>Looking for a job? <span className='border-b-2'>Click here.</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;