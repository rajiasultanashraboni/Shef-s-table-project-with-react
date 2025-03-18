import bannerImage from '../assets/Rectangle 1.png';

const 
Banner = () => {
    return (
      <div className="relative w-full h-[600px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bannerImage})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-opacity-100"></div>
  
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="text-lg mb-6 max-w-2xl">
              Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
            </p>
            <div className="flex space-x-4">
              <button className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition">
                Explore Now
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
                Our Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  