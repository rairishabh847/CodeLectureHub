// src/pages/Login.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ emailOrUsername: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.emailOrUsername) tempErrors.emailOrUsername = 'Username or Email is required';
    if (!formData.password) tempErrors.password = 'Password is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const codelecturehub_users = JSON.parse(localStorage.getItem("codelecturehub_users"))
      if(!codelecturehub_users.length){
        alert("No user registered yet")
        return
      }

      const existingUser = codelecturehub_users.find(user => user.email == formData.emailOrUsername)

      if(!existingUser){
        alert("User with this email does not exists")
        return
      }

      if(existingUser.password === formData.password){
        localStorage.setItem('codelecturehub_token',JSON.stringify(existingUser))
      }else{
        alert("Invalid Credentials")
        return
      }
      console.log('login successsful for ', formData.emailOrUsername);
      navigate('/',{replace:true})
    }
  };

  useEffect(()=>{
      // component will mount
      if(localStorage.getItem("codelecturehub_token"))
        navigate('/',{replace:true})
    },[])

    return (
      <div className="bg-[radial-gradient(circle,_#9ca3af_1px,_transparent_1px)] [background-size:20px_20px] min-h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto p-8 text-center w-1/2 flex flex-col items-center justify-center bg-emerald-50 bg-opacity-80 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6">Login</h1>
          <form onSubmit={handleSubmit} className="space-y-4 w-full">
            <div>
              <input 
                type="text" 
                name="emailOrUsername" 
                value={formData.emailOrUsername} 
                onChange={handleChange} 
                placeholder="Username or Email" 
                className="w-full p-2 border rounded" 
              />
              {errors.emailOrUsername && <p className="text-red-500 text-sm">{errors.emailOrUsername}</p>}
            </div>
            <div>
              <input 
                type="password" 
                name="password" 
                value={formData.password} 
                onChange={handleChange} 
                placeholder="Password" 
                className="w-full p-2 border rounded" 
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
            <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 w-full cursor-pointer">
              Login
            </button>
          </form>
          <p className="mt-4">
            Don't have an account? 
            <button onClick={() => navigate('/signup')} className="text-blue-500 ml-1 hover:underline cursor-pointer">
              Create a new account
            </button>
          </p>
        </div>
      </div>
    );
  };
    export default Login;

  // return (
  //   <div className="max-w-md mx-auto p-8 text-center h-full w-1/2 flex flex-col items-center justify-center">
  //     <h1 className="text-3xl font-bold mb-6">Login</h1>
  //     <form onSubmit={handleSubmit} className="space-y-4 w-full">
  //       <div>
  //         <input 
  //           type="text" 
  //           name="emailOrUsername" 
  //           value={formData.emailOrUsername} 
  //           onChange={handleChange} 
  //           placeholder="Username or Email" 
  //           className="w-full p-2 border rounded" 
  //         />
  //         {errors.emailOrUsername && <p className="text-red-500 text-sm">{errors.emailOrUsername}</p>}
  //       </div>
  //       <div>
  //         <input 
  //           type="password" 
  //           name="password" 
  //           value={formData.password} 
  //           onChange={handleChange} 
  //           placeholder="Password" 
  //           className="w-full p-2 border rounded" 
  //         />
  //         {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
  //       </div>
  //       <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 w-full cursor-pointer">
  //         Login
  //       </button>
  //     </form>
  //     <p className="mt-4">
  //       Don't have an account? 
  //       <button onClick={() => navigate('/signup')} className="text-blue-500 ml-1 hover:underline cursor-pointer">
  //         Create a new account
  //       </button>
  //     </p>
  //   </div>
  // );
// };

// export default Login;

//-----------------------------------------------------------------------------