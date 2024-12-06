import React, { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { LuMoveRight } from "react-icons/lu";
import { Images } from "../constant";
import StatisticsSection from "../components/StatisticsCarousel/StatisticsSection";
import { Link } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsPlaying(false);
  };

  return (
    <>
      {/* Responsive Navigation */}
      <nav className="fixed inset-x-0 top-0 z-20 mx-auto w-[95vw] md:w-[80vw] max-w-screen-lg border-gray-100 bg-black/15 py-2 shadow backdrop-blur-lg md:top-3 md:rounded-full">
        <div className="px-2 md:px-4">
          <div className="flex items-center justify-between">
            <div className="flex shrink-0">
              <a aria-current="page" className="flex items-center" href="/">
                <img src={Images.Logo} className="w-12 md:w-16" alt="Logo" />
              </a>
            </div>
            <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
              <Link to="/" className="inline-block rounded-lg px-2 py-1 text-sm font-thin text-white hover:bg-gray-100 hover:text-gray-900">
                Home
              </Link>
              <Link to="/detailed-stats" className="inline-block rounded-lg px-2 py-1 text-sm font-thin text-white hover:bg-gray-100 hover:text-gray-900">
                Resources
              </Link>
              <Link to="/contact" className="inline-block rounded-lg px-2 py-1 text-sm font-thin text-white hover:bg-gray-100 hover:text-gray-900">
                Contact
              </Link>
            </div>
            <div className="flex items-center justify-end">
              <a
                type="submit"
                className="flex justify-center text-white items-center shadow-xl backdrop-blur-md text-sm md:text-base lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#d35d25]/80 border hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative before:border-white z-10 px-2 md:px-4 py-1 md:py-2 overflow-hidden rounded-full group"
              >
                <span className='font-thin text-xs md:text-sm' onClick={() => navigate('/contact')}>Get Help Now</span>
                <svg className="w-5 h-5 md:w-7 md:h-7 justify-end group-hover:rotate-90 text-gray-50 ease-linear duration-300 p-2 rotate-45" viewBox="0 0 16 19" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        className="flex items-center gap-5 justify-center min-h-screen p-4 bg-cover bg-center"
        style={{
          background: `url(${Images.home})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className='flex flex-col items-center justify-center shadow backdrop-blur-lg bg-black/15 p-4 md:p-12 rounded-2xl mt-[15vh] md:mt-[25vh] gap-4 md:gap-6 mx-4'>
          <h1 className='text-2xl md:text-4xl lg:text-6xl text-white text-center'>Empowering Voices, Breaking Chains,</h1>
          <h1 className='text-white font-bold text-2xl md:text-4xl lg:text-6xl text-center'>
            <span className='text-[#fe5811]'>Together Against Violence.</span>
          </h1>
          <p className='text-white text-center text-sm md:text-base lg:text-lg mt-2 md:mt-4 px-2 md:px-4'>
            We stand united in the fight against violence, providing support and resources to help those affected. 
            <span className="hidden md:block">Every woman and girl deserves to live free from fear and oppression.</span>
            <span className="hidden md:block">Join us in creating a safer, more empowered future for all.</span>
          </p>

          <button className="relative flex items-center px-4 md:px-6 py-2 md:py-3 overflow-hidden font-medium transition-all border rounded-full group">
            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#fd7304] rounded group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#fd7304] rounded group-hover:-ml-4 group-hover:-mb-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-[#d35c25c6] rounded-xl group-hover:translate-x-0"></span>
            <span onClick={() => navigate('/detailed-stats')} className="relative w-full text-left text-white text-sm md:text-base transition-colors duration-200 ease-in-out group-hover:text-white">
              Learn More
            </span>
          </button>
        </div>
      </div>

      {/* Video Section */}
      <section className="flex flex-col md:flex-row gap-7 mx-auto w-[90vw] md:w-[80vw] pt-8 md:pt-16">
        <div className="relative h-[50vh] md:h-[80vh] w-full md:w-1/2 mb-6 md:mb-0">
          <video
            ref={videoRef}
            className="rounded-lg shadow-lg h-full w-full object-cover"
            src="https://www.youtube.com/watch?v=5yvT85TitEI&t=15s"
            poster={Images.about}
          ></video>
          {!isPlaying && (
            <button
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10 rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 md:w-16 md:h-16 text-white bg-[#f14c46be] hover:bg-[#f14c4671] duration-300 transition rounded-full ps-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.752 11.168l-5.197-3.482A1 1 0 008 8.482v7.036a1 1 0 001.555.832l5.197-3.482a1 1 0 000-1.664z"
                />
              </svg>
            </button>
          )}
        </div>

        <div className="w-full md:w-1/2 md:pl-8 pt-4 md:pt-7">
          <h2 className="text-2xl md:text-3xl font-bold text-[#fe5811] pb-3 md:pb-5">About US</h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base">
            We are a platform dedicated to combating violence against women. Our mission is to raise awareness, inform, and support women who are victims of violence, while mobilizing society for lasting change.
          </p>
          <div className="text-gray-600 ps-4 md:ps-7 flex flex-col gap-2 md:gap-3 pt-4 md:pt-6 text-sm md:text-base">
            <p><strong className="text-gray-600">Inform </strong> Provide resources and reliable data to understand the different forms of violence.</p>
            <p><strong className="text-gray-600">Raise Awareness</strong> Break taboos and encourage open discussions on this crucial issue.</p>
            <p><strong className="text-gray-600">Support </strong> Connect victims with help services, associations, and competent professionals.</p>
          </div>
          <p className="text-gray-600 pt-8 md:pt-16 text-sm md:text-base">
            <strong>Empower Equip women</strong> with the knowledge and tools to recognize their rights, seek help, and reclaim their autonomy. By fostering resilience, confidence, and self-determination, we aim to create a supportive environment where women can rebuild their lives and thrive, free from violence and fear.
          </p>
        </div>
      </section>

      <StatisticsSection />

      {/* Quote Section */}
      <section className="relative pt-6 md:pt-10">
        <img
          src={Images.act}
          alt="Background"
          className="h-[60vh] md:h-[90vh] w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-start bg-black bg-opacity-10 mt-6 md:mt-10 px-4 md:px-8">
          <div className="text-white max-w-[90%] md:max-w-lg">
            <blockquote className="text-xl md:text-2xl lg:text-4xl font-semibold italic leading-relaxed">
              "Violence against women is a consequence of discrimination against women, in law and also in practice, and of persisting inequalities between men and women."
            </blockquote>
            <p className="mt-2 md:mt-4 text-xs md:text-sm lg:text-lg opacity-75">— Rashida Manjoo</p>
            <p className="pt-3 md:pt-7 text-gray-200 text-sm md:text-base">These quote emphasize the universality of the issue and the need for collective action to challenge and change the societal norms and structures enabling violence against women.</p>
          </div>
        </div>
      </section>

      {/* Hashtag Section */}
      <div className="flex justify-center overflow-hidden gap-6 md:gap-12 h-[20vh] md:h-[30vh] bg-black/5 mt-4 md:mt-8 items-center">
        <h1 className="text-base md:text-xl flex gap-6 md:gap-12 font-normal animate-slogan whitespace-nowrap">
          <span className="text-red-500">#NoExcuse</span>
          <span className="text-purple-500">#لا_عذر</span>
          <span className="text-orange-500">#PasdExcuse</span>
          <span className="text-red-600">#没有借口</span>
          <span className="text-purple-700">#NoHayExcusa</span>
          <span className="text-pink-500">#НетОправдания</span>
          <span className="text-blue-600">#NessunaScusa</span>
          <span className="text-indigo-500">#KeineEntschuldigung</span>
          <span className="text-teal-500">#SemDesculpas</span>
        </h1>
        <h1 className="text-base md:text-xl flex gap-6 md:gap-12 font-normal animate-slogan whitespace-nowrap">
          <span className="text-red-500">#NoExcuse</span>
          <span className="text-purple-500">#لا_عذر</span>
          <span className="text-orange-500">#PasdExcuse</span>
          <span className="text-red-600">#没有借口</span>
          <span className="text-purple-700">#NoHayExcusa</span>
          <span className="text-pink-500">#НетОправдания</span>
          <span className="text-blue-600">#NessunaScusa</span>
          <span className="text-indigo-500">#KeineEntschuldigung</span>
          <span className="text-teal-500">#SemDesculpas</span>
        </h1>
      </div>

     
    </>
  );
};

export default Home;