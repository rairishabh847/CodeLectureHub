// src/pages/Signup.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let newErrors = {};
    if (!formData.fullname) newErrors.fullname = 'Full name is required';
    if (!formData.userName) newErrors.userName = 'Username is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const codelecturehub_users = localStorage.getItem('codelecturehub_users')
      if(codelecturehub_users && JSON.parse(codelecturehub_users)
        .some(user => user.email == formData.email))
      {
        setErrors({email : "Email is already registerd"})
        return
      }
      
      localStorage.setItem('codelecturehub_token',JSON.stringify(formData))
      if(codelecturehub_users)
        localStorage.setItem('codelecturehub_users',JSON.stringify([...JSON.parse(codelecturehub_users), formData]))
      else
        localStorage.setItem('codelecturehub_users',JSON.stringify([formData]))
      console.log('Registered successsfully for ', formData.email);
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
    {/* </div> <div className="bg-[radial-gradient(circle,_#d1d5db_1px,_transparent_1px)] [background-size:20px_20px] min-h-screen flex items-center justify-center"> */}
      <div className="max-w-md mx-auto p-8 text-center w-1/2 flex flex-col items-center justify-center bg-emerald-50 bg-opacity-80 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6">Signup</h2>
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          {['fullname', 'userName', 'email', 'password', 'confirmPassword'].map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium capitalize text-left">
                {field.replace(/([A-Z])/g, ' $1')}
              </label>
              <input
                type={(field.includes('password') || field.includes('Password')) ? 'password' : 'text'}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={field.replace(/([A-Z])/g, ' $1')}
                className="w-full p-2 border rounded"
              />
              {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
            </div>
          ))}
          <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 w-full cursor-pointer">
            Register
          </button>
        </form>
        <button onClick={() => navigate('/login')} className="text-blue-500 mt-4 hover:underline cursor-pointer">
          Back to Login
        </button>
      </div>
    </div>
  );  
};

//   return (
    
//      <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
//       <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {['fullname', 'userName', 'email', 'password', 'confirmPassword'].map((field) => (
//           <div key={field}>
//             <label className="block text-sm font-medium capitalize">{field.replace(/([A-Z])/g, ' $1')}</label>
//             <input
//               type={(field.includes('password') || field.includes('Password')) ? 'password' : 'text'}
//               name={field}
//               value={formData[field]}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//             />
//             {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
//           </div>
//         ))}
//         <button type="submit" className="w-full bg-blue-500 cursor-pointer text-white p-2 rounded">Register</button>
//       </form>
//       <button onClick={() => navigate('/login')} className="w-full text-blue-500 cursor-pointer mt-4">Back to Login</button>
//     </div>
//   );
// };

export default Signup;
