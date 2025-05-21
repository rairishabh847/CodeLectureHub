// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const sections = [
//   {
//     title: "What We Offer",
//     content: (
//       <ul className="list-disc pl-5">
//         <li><strong>Integrated Learning Experience:</strong> Watch lecture videos, use the live code editor, and take notes—all in one place.</li>
//         <li><strong>Advanced Code Editor:</strong> Real-time coding with syntax highlighting, code completion, and error detection.</li>
//         <li><strong>Note-Taking System:</strong> Write, save, and organize notes synced with lecture videos and code snippets.</li>
//         <li><strong>User-Friendly Interface:</strong> Intuitive design for smooth navigation.</li>
//       </ul>
//     ),
//   },
//   {
//     title: "Why Choose CodeLecture Hub?",
//     content: (
//       <ul className="list-disc pl-5">
//         <li><strong>Unified Platform:</strong> Eliminates the need to switch between multiple tools.</li>
//         <li><strong>Interactive Learning:</strong> Real-time coding while watching lectures.</li>
//         <li><strong>Scalability and Flexibility:</strong> Supports various programming languages and topics.</li>
//         <li><strong>Future-Ready Features:</strong> Includes tools like syntax highlighting and error detection.</li>
//       </ul>
//     ),
//   },
//   {
//     title: "How It Works",
//     content: (
//       <ol className="list-decimal pl-5">
//         <li>Login: Securely log into your account.</li>
//         <li>Explore: Browse through our library of lectures.</li>
//         <li>Learn and Code: Watch lectures and code simultaneously.</li>
//         <li>Take Notes: Jot down key points and code snippets.</li>
//       </ol>
//     ),
//   },
//   {
//     title: "Work in Progress",
//     content: (
//       <ul className="list-disc pl-5">
//         <li>Implementing a code compilation system for real-time output generation.</li>
//         <li>Expanding support for additional programming languages.</li>
//       </ul>
//     ),
//   },
//   {
//     title: "Join the Revolution in Learning",
//     content: (
//       <p>At CodeLecture Hub, we believe learning to code should be interactive, immersive, and rewarding.</p>
//     ),
//   },
// ];

// const Hero = () => {
//   const words = ['C Programming', 'Java', 'JavaScript'];
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);
//   const [displayedText, setDisplayedText] = useState('');
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [activeSection, setActiveSection] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     let typingSpeed = 150;
//     if (isDeleting) typingSpeed /= 2;

//     const currentWord = words[currentWordIndex];
//     const updatedText = isDeleting
//       ? currentWord.substring(0, displayedText.length - 1)
//       : currentWord.substring(0, displayedText.length + 1);

//     setDisplayedText(updatedText);

//     if (!isDeleting && updatedText === currentWord) {
//       setTimeout(() => setIsDeleting(true), 2000);
//     } else if (isDeleting && updatedText === '') {
//       setIsDeleting(false);
//       setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
//     }

//     const timer = setTimeout(() => {}, typingSpeed);

//     return () => clearTimeout(timer);
//   }, [displayedText, isDeleting, currentWordIndex, words]);

//   return (
//     <div className="text-white bg-gray-800 w-full min-h-screen">
//       {/* Hero Section */}
//       <div className="max-w-[1200px] w-full min-h-screen mx-auto text-center flex flex-col justify-center px-4">
//         <p className="text-[#00df9a] font-bold p-2">
//           LEARN. CODE. GROW.
//         </p>
//         <h1 className="md:text-5xl sm:text-6xl text-4xl font-bold md:py-6">
//           Empower Your Coding Journey
//         </h1>
//         <div className="flex justify-center items-center">
//           <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
//             Master
//           </p>
//           <span className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#00df9a]">
//             {displayedText}
//           </span>
//         </div>
//         <p className="md:text-2xl text-xl font-bold text-gray-400">
//           Watch lectures, practice coding, and take notes — all in one place.
//         </p>
//         <button
//           onClick={() => navigate('/signup')}
//           className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black"
//         >
//           Start Learning
//         </button>
//       </div>

//       {/* About Section */}
//       <div className="max-w-5xl mx-auto px-4 py-12">
//         <header className="text-center mb-10">
//           <h2 className="text-4xl font-bold text-[#00df9a]">About CodeLecture Hub</h2>
//           <p className="text-gray-400 mt-4">
//             A seamless, integrated platform designed to transform the way you learn programming.
//           </p>
//         </header>

//         <section className="bg-gray-900 p-8 rounded-lg shadow-lg mb-10">
//           <h3 className="text-3xl font-semibold text-white mb-4">Our Vision</h3>
//           <p className="text-gray-400">
//             We aim to empower learners by providing an all-in-one platform where they can gain theoretical knowledge,
//             practice real-time coding, and document their learning — all in a cohesive and intuitive environment.
//           </p>
//         </section>

//         {/* Expandable Sections */}
//         {sections.map((section, index) => (
//           <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md mb-6">
//             <h3
//               className="text-2xl font-semibold text-[#00df9a] cursor-pointer"
//               onClick={() => setActiveSection(activeSection === index ? null : index)}
//             >
//               {section.title}
//             </h3>
//             {activeSection === index && (
//               <div className="text-gray-400 mt-4">
//                 {section.content}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Footer */}
//       <footer className="text-center py-6 bg-black border-t border-gray-800">
//         <p className="text-gray-500">&copy; 2024 CodeLecture Hub. All Rights Reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Hero;

//-------------------------------------------try to make like home page-------------------------------------------------------------------

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const sections = [
  {
    title: "What We Offer",
    content: (
      <ul className="list-disc pl-5">
        <li><strong>Integrated Learning Experience:</strong> Watch lecture videos, use the live code editor, and take notes—all in one place.</li>
        <li><strong>Advanced Code Editor:</strong> Real-time coding with syntax highlighting, code completion, and error detection.</li>
        <li><strong>Note-Taking System:</strong> Write, save, and organize notes synced with lecture videos and code snippets.</li>
        <li><strong>User-Friendly Interface:</strong> Intuitive design for smooth navigation.</li>
      </ul>
    ),
  },
  {
    title: "Why Choose CodeLecture Hub?",
    content: (
      <ul className="list-disc pl-5">
        <li><strong>Unified Platform:</strong> Eliminates the need to switch between multiple tools.</li>
        <li><strong>Interactive Learning:</strong> Real-time coding while watching lectures.</li>
        <li><strong>Scalability and Flexibility:</strong> Supports various programming languages and topics.</li>
        <li><strong>Future-Ready Features:</strong> Includes tools like syntax highlighting and error detection.</li>
      </ul>
    ),
  },
  {
    title: "How It Works",
    content: (
      <ol className="list-decimal pl-5">
        <li>Login: Securely log into your account.</li>
        <li>Explore: Browse through our library of lectures.</li>
        <li>Learn and Code: Watch lectures and code simultaneously.</li>
        <li>Take Notes: Jot down key points and code snippets.</li>
      </ol>
    ),
  },
  {
    title: "Work in Progress",
    content: (
      <ul className="list-disc pl-5">
        <li>Implementing a code compilation system for real-time output generation.</li>
        <li>Expanding support for additional programming languages.</li>
      </ul>
    ),
  },
  {
    title: "Join the Revolution in Learning",
    content: (
      <p>At CodeLecture Hub, we believe learning to code should be interactive, immersive, and rewarding.</p>
    ),
  },
];

const Hero = () => {
  const words = ['C Programming', 'Java', 'JavaScript'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem('codelecturehub_token')
  );
  const [showToast, setShowToast] = useState(isAuthenticated);

  useEffect(() => {
    let typingSpeed = 150;
    if (isDeleting) typingSpeed /= 2;

    const currentWord = words[currentWordIndex];
    const updatedText = isDeleting
      ? currentWord.substring(0, displayedText.length - 1)
      : currentWord.substring(0, displayedText.length + 1);

    setDisplayedText(updatedText);

    if (!isDeleting && updatedText === currentWord) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }

    const timer = setTimeout(() => {}, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentWordIndex, words]);

  const handleLogout = () => {
    localStorage.removeItem('codelecturehub_token');
    setIsAuthenticated(false);
    setShowToast(false);
  };

  useEffect(() => {
    if (isAuthenticated) {
      const timer = setTimeout(() => setShowToast(false), 3000); // hide toast after 3s
      return () => clearTimeout(timer);
    }
  }, [isAuthenticated]);

  return (
    <div className="text-white bg-gray-800 w-full min-h-screen relative">
      {/* Toast Message */}
      {showToast && (
        <div className="fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-in-down">
          ✅ You are successfully logged in.
        </div>
      )}

      {/* Hero Section */}
      <div className="max-w-[1200px] w-full min-h-screen mx-auto text-center flex flex-col justify-center px-4">
        <p className="text-[#00df9a] font-bold p-2">
          LEARN. CODE. GROW.
        </p>
        <h1 className="md:text-5xl sm:text-6xl text-4xl font-bold md:py-6">
          Empower Your Coding Journey
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Master
          </p>
          <span className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#00df9a]">
            {displayedText}
          </span>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-400">
          Watch lectures, practice coding, and take notes — all in one place.
        </p>
        {!isAuthenticated ? (
          <button
            onClick={() => navigate('/signup')}
            className="bg-[#00df9a] w-[200px] rounded-md font-medium cursor-pointer my-6 mx-auto py-3 text-black"
          >
            Start Learning
          </button>
        ) : (
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white"
          >
            Logout
          </button>
        )}
      </div>

      {/* About Section */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <header className="text-center mb-10">
          <h2 className="text-4xl font-bold text-[#00df9a]">About CodeLecture Hub</h2>
          <p className="text-gray-400 mt-4">
            A seamless, integrated platform designed to transform the way you learn programming.
          </p>
        </header>

        <section className="bg-gray-900 p-8 rounded-lg shadow-lg mb-10">
          <h3 className="text-3xl font-semibold text-white mb-4">Our Vision</h3>
          <p className="text-gray-400">
            We aim to empower learners by providing an all-in-one platform where they can gain theoretical knowledge,
            practice real-time coding, and document their learning — all in a cohesive and intuitive environment.
          </p>
        </section>

        {/* Expandable Sections */}
        {sections.map((section, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md mb-6">
            <h3
              className="text-2xl font-semibold text-[#00df9a] cursor-pointer"
              onClick={() => setActiveSection(activeSection === index ? null : index)}
            >
              {section.title}
            </h3>
            {activeSection === index && (
              <div className="text-gray-400 mt-4">
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="text-center py-6 bg-black border-t border-gray-800">
        <p className="text-gray-500">&copy; 2024 CodeLecture Hub. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Hero;
