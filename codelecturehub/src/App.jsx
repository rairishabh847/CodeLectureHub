// // src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './components/About';
import Lecture from './components/Lecture';
import Editor from'./components/Editor';
import Notes from './components/Notes';
import SplitView from './components/SplitView';
// import YT from './components/YT';
import CLH from './components/CLH';


const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        {/* below code for add search box and line  */}
        {/* <div className="p-4">
          <input type="text" placeholder="CODELECTURE HUB" className="w-full p-2 border rounded" />
        </div> */}
        {/* <hr className="border-b w-[96%] mx-auto"/> */}
        <div className="flex-1 overflow-y-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/lecture" element={<Lecture />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/about" element={<About />} />
            <Route path="/clh" element={<CLH/>}/>
             {/* <Route path="/yt" element={<YT/>}/> */}
            <Route path="/splitview" element={<SplitView />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;

//----------------------------

// // src/App.jsx
// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import About from './components/About';
// import Lecture from './components/Lecture';
// import Editor from './components/Editor';
// import Notes from './components/Notes';
// import SplitView from './components/SplitView';
// // import TextAnimation from './components/TextAnimation';

// // Simple authentication check (you can improve this with context or JWT later)
// const isAuthenticated = () => {
//   return localStorage.getItem('authToken'); // Replace 'authToken' with your actual key
// };

// // Protected Route wrapper
// const PrivateRoute = ({ children }) => {
//   return isAuthenticated() ? children : <Navigate to="/login" replace />;
// };

// const App = () => {
//   return (
//     <div className="flex h-screen">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <div className="flex-1 overflow-y-auto p-4">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/about" element={<About />} />
//             {/* <Route path="/textanimation" element={<TextAnimation/>}/> */}

//             {/* Protected Routes */}
//             <Route path="/lecture" element={
//               <PrivateRoute>
//                 <Lecture />
//               </PrivateRoute>
//             } />
//             <Route path="/editor" element={
//               <PrivateRoute>
//                 <Editor />
//               </PrivateRoute>
//             } />
//             <Route path="/notes" element={
//               <PrivateRoute>
//                 <Notes />
//               </PrivateRoute>
//             } />
//             <Route path="/splitview" element={
//               <PrivateRoute>
//                 <SplitView />
//               </PrivateRoute>
//             } />
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;


