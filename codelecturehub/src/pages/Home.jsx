// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// const messages = [
//   "Welcome to CodeLecture Hub",
//   "Empower Your Learning",
//   "Live Coding, Notes & Videos",
//   "Start Your Journey Today 🚀"
// ];

// const Home = () => {
//   const navigate = useNavigate();
//   const [index, setIndex] = useState(0);
//   const [isAuthenticated, setIsAuthenticated] = useState(
//     localStorage.getItem("codelecturehub_token") || false
//   );

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % messages.length);
//     }, 2000); // Changes text every 2 seconds
//     return () => clearInterval(interval);
//   }, []);

//   const handleLogout = (e) => {
//     e.preventDefault();
//     localStorage.removeItem("codelecturehub_token");
//     setIsAuthenticated(false);
//   };

//   return (
//     <div className="flex h-screen w-full">
//       {/* Left Section - Animated Text */}
//       <div className="w-3/4 flex items-center justify-center bg-[#0A043C] text-white p-10">
//         <div className="relative text-4xl font-bold text-left">
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 10 }}
//             transition={{ duration: 0.5 }}
//             className="absolute"
//           >
//             {messages[index]}
//           </motion.div>
//         </div>
//       </div>

//       {/* Right Section - Login/Signup */}
//       <div className="w-1/4 flex flex-col items-center justify-center bg-black text-white">
//         {!isAuthenticated ? (
//           <>
//             <h1 className="text-3xl font-bold mb-6">Get Started</h1>
//             <div className="flex space-x-4">
//               <button
//                 onClick={() => navigate("/login")}
//                 className="bg-blue-600 px-6 py-3 rounded-full text-white text-lg hover:bg-blue-700 transition"
//               >
//                 Log in
//               </button>
//               <button
//                 onClick={() => navigate("/signup")}
//                 className="bg-blue-600 px-6 py-3 rounded-full text-white text-lg hover:bg-blue-700 transition"
//               >
//                 Sign up
//               </button>
//             </div>
//           </>
//         ) : (
//           <>
//             <h1 className="text-green-400 text-3xl font-bold">You are logged in</h1>
//             <button
//               className="bg-red-500 text-white py-2 px-4 mt-4 rounded-full hover:bg-red-600 transition"
//               onClick={handleLogout}
//             >
//               Logout
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;



// src/pages/Home.jsx

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const navigate = useNavigate();
//   const [isAuthenticated, setIsAuthenticated] = useState(
//     localStorage.getItem("codelecturehub_token") || false
//   );

//   const handleLogout = (e) => {
//     e.preventDefault();
//     localStorage.removeItem("codelecturehub_token");
//     setIsAuthenticated(false);
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-8 text-center h-full flex flex-col items-center justify-center">
//       <h1 className="text-4xl font-bold mb-6">Code Lecture Hub</h1>
//       {!isAuthenticated ? (
//         <>
//           <p className="text-lg mb-4">
//           The platform aims to enhance learning by integrating lecture viewing, live coding and notes into a single interface.It reduces cognitive load by eliminating tool-switching, improves knowledge retention through real-time coding and notes, and supports multiple programming languages to accommodate diverse learners.
//           </p>
//           <button
//             onClick={() => navigate("/signup")}
//             className="bg-blue-500 text-white px-6 py-3 rounded mt-6 hover:bg-blue-600 cursor-pointer"
//           >
//             Get Started
//           </button>
//           <button
//                 onClick={() => navigate("/login")}
//                 className="bg-blue-500 text-white px-6 py-3 rounded mt-6 hover:bg-blue-600 cursor-pointer"
//               >
//                 Log in
//               </button>
              
//         </>
//       ) : (
//         <>
//           <h1 className="text-green-400 text-3xl font-bold">
//             You are logged in
//           </h1>
//           <button
//             className="bg-red-500 text-white py-2 px-4 mt-2 rounded cursor-pointer"
//             onClick={handleLogout}
//           >
//             Logout
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

// export default Home;
//------------------------------------------------------------------
import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Home = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("codelecturehub_token") || false
  );

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("codelecturehub_token");
    setIsAuthenticated(false);
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#0f172a] text-white">
      {/* Animated Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "#0f172a" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              grab: { distance: 150, line_linked: { opacity: 0.5 } },
              push: { quantity: 2 },
            },
          },
          particles: {
            color: { value: "#60a5fa" },
            links: {
              color: "#60a5fa",
              distance: 140,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              outModes: { default: "bounce" },
            },
            number: {
              value: 60,
              density: { enable: true, area: 800 },
            },
            size: { value: { min: 1, max: 3 } },
            opacity: { value: 0.4 },
          },
        }}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      {/* Foreground Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="bg-black bg-opacity-30 backdrop-blur-md p-10 rounded-xl shadow-lg max-w-2xl text-center border border-gray-600">
          <h1 className="text-5xl font-extrabold text-blue-400 mb-4">Code Lecture Hub</h1>
          {!isAuthenticated ? (
            <>
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                Enhance your learning with real-time lecture viewing, coding, and note-taking —
                all in one sleek interface. Designed for productivity, built for coders.
              </p>
              <div className="flex justify-center gap-6">
                <button
                  onClick={() => navigate("/signup")}
                  className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full font-medium transition"
                >
                  Get Started
                </button>
                <button
                  onClick={() => navigate("/login")}
                  className="border border-blue-400 text-blue-300 hover:text-white hover:bg-blue-500 px-6 py-3 rounded-full font-medium transition"
                >
                  Log In
                </button>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-green-400 text-3xl font-semibold mb-4">You are logged in</h2>
              <button
                className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-full font-medium transition"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
