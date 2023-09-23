import React from 'react'
import {Link} from 'react-router-dom'
import Header from './navbar';
import Footer from './footer';
import backgroundImage from '../../assets/background.jpg'
import logo from '../../assets/GDSC-LOGO.png'
import focus_logo from '../../assets/focus_logo.png';
import team_logo from '../../assets/team.png';
import calander_logo from '../../assets/calander.png';
import contact_logo from '../../assets/contact_log.png';
import linkedin_logo from '../../assets/contactUs/LinkedIn.png';
import instagram_log from '../../assets/contactUs/instagram.jpg';
import discord_logo from '../../assets/contactUs/discord.png';
import Side_logo from '../../assets/side.png';
import {FaInstagramSquare} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {IoLogoDiscord} from 'react-icons/io5'




const Home = () => {
  return (
       <>
            <div style={{ backgroundImage: `url(${Side_logo})`}}>

            </div>
        <div id='home' className='w-full h-auto ' style={{ backgroundImage: `url(${backgroundImage})`}}  >
            <Header/>
            
            <div id='aboutus' className='max-w-full md:max-w-[1000px] mx-auto px-[20px] md:px-[80px] flex flex-col pt-10 md:pt-20 h-full gap-40 md:gap-64'>

                <div className='flex flex-col pt-9 gap-4'>
                    <div className='flex flex-row gap-2'>
                    <img
                        src={logo}
                        width={90}
                        height={20}
                        alt="logo"
                    />
                        <p className='font text-4xl pl-2'> Google Developer Student Clubs</p>
                    </div>
                    <div className='px-auto ml-7 py-auto' >
                        <p className='ml-20 font text-2xl '>MIT ADT UNIVERSITY</p>
                    </div>
                    <div>
                        <p className='text-[#7B7B7B] text-2xl mt-5'>GDSC MIT ADT offers cool workshops, exciting projects and opportunities to connect with tech pros. It helps you get hands-on experience and access Google's resources, making your career tech-ready. It's where young developers meet, learn and rock the tech world together!</p>
                    </div>
                </div>


                <div className='flex flex-col pt-9 gap-4'>
                    <div className='flex flex-row gap-2 items-center'>
                        <img src={focus_logo} width={80} height={30} alt="logo" className=''/>
                        <p className='font-medium text-5xl text-[#0059B2] '> Our Focus</p>
                    </div>
                    <div>
                        <p className='text-[#7B7B7B]  text-2xl  mt-5'>We're on a mission to catapult aspiring developers to the stars of success! Join us in unleashing the tech universe's limitless wonders. Collaborate with fellow developers to build innovative projects, with access to Google's vast resources.</p>
                    </div>
                </div>


                <div id='ourteam' className='flex flex-col pt-9 gap-4 '>
                        <img src={team_logo} width={100} height={60} alt="logo" className='mr-5' />
                    <div className='flex flex-row gap-2 items-center'>
                        <p className=' font-medium text-red-700 text-5xl'> Our Team</p>
                    </div>

                    <div>
                        <p className='text-[#7B7B7B]  text-2xl  mt-5'>Unveiling to you our stupendous team of speed freak Coders, supportive superintendent Managers, our very own influencers being the Social Media team along with Sponsorship and PR team and to capture all our beautiful moments, the Content and Documentation team!</p>
                    </div>

                    <div className='pr-10 '>
                    <a href='https://team-gdsc.netlify.app/' className="text-blue-600 cursor-pointer ">
                            <button className='rounded-xl border-2 border-blue-600 px-10 py-3 my-2 text-xl hover:bg-blue-600 hover:text-white  mr-20 h-20 w-48'>
                                The Team
                            </button>
                    </a>
                    </div>
                </div>

                <div id='events' className='flex flex-col pt-9 gap-4'>
                        <img src={calander_logo} width={100} height={60} alt="logo" />
                    <div className='flex flex-row gap-2 items-center'>
                        <p className='font-medium text-5xl text-[#DEB200]'> Our Events</p>
                    </div>
                    <div>
                        <p className='text-[#7B7B7B]  text-2xl  mt-5'>We offer fabulous workshops, exciting projects and opportunities to connect with tech pros. It helps you get hands-on experience and access Google's resources, making your career tech-ready. It's where young developers meet, learn and rock the tech world together!</p>
                    </div>

                    <div className=''>
                    <Link to='/events' className="text-blue-600 cursor-pointer  ">
                            <button className='rounded-xl border-2 border-blue-600 px-10 py-3 my-2 text-xl hover:bg-blue-600 hover:text-white  mr-20 h-20 w-48'>
                                Our Events
                            </button>
                    </Link>
                    </div>
                </div>

                <div id="contact" className='flex flex-col gap-4 pt-10'>
                    <div className='flex flex-row gap-2 items-center'>
                        <img src={contact_logo} width={80} height={30} alt="logo" />
                        <p className='font-medium text-5xl text-[#00681C]'>Contact Us</p>
                    </div>
                    <div>
                        <p className='text-[#7B7B7B] text-2xl  mt-5'>We're social butterflies on the internet – follow our digital footprints!</p>
                    </div>

                    <div className='flex flex-row gap-8 mt-4 '>
                        <a href="https://in.linkedin.com/company/gdsc-mitadt" target="_blank" rel="noopener noreferrer">
                            <BsLinkedin className='text-5xl text-[#265CAC]'/>
                        </a>

                        <a href="https://www.instagram.com/gdsc.mitadt/" target="_blank" rel="noopener noreferrer">
                            <FaInstagramSquare className='text-5xl text-[#265CAC]'/>
                        </a>
                        
                        <a href="https://discord.com/invite/Vnwn2RAQzw" target="_blank" rel="noopener noreferrer">
                            <IoLogoDiscord className='text-5xl text-[#265CAC]'/>
                        </a>
                    </div>

                </div>
            </div>
            <Footer/>
    
        </div>
        </>
  )
}

export default Home