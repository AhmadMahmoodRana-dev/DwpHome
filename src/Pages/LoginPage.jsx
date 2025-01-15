
// /*import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const LoginPage = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const login = async () => {
//         try {
//             const response = await fetch('https://dwpcare.com.pk/dwp/Login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ username, password }),
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 console.log(data);
//                 alert('Login successful');
//                 navigate('/home'); // Redirect to the home page
//             } else {
//                 alert('Login failed');
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             alert('Login failed');
//         }
//     };
// */
// import React, { useState, useEffect } from 'react';
// import {  useNavigate } from "react-router-dom";
// import { ESModulesRunner } from 'vite/runtime';


// function LoginPage() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   //const history = useHistory();

//   const navigate= useNavigate();
//  /* useEffect(()=>{
//    const auth=localStorage.getItem('user');
//   if (auth){
//         navigate('/');
//     }

// });
// */

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       // Send login request to the backend
//       const response = await fetch('https://dwpcare.com.pk/dwp/Login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       // Check if login was successful
//       const data = await response.json();
      
     
//       if (response.ok) {
//         if (data.success==true)
//         {
//          /// localStorage.setItem("user",JSON.stringify(data));

//           navigate('/Home');
//           console.log(data.success)
//         }else{
//           setError(data.error);
//         }
        


  
    
//       } else {
        
//         console.log('Login failed:', data.error);
//         setError(data.error);
//       }
//     } catch (error) {
//       console.error('Error logging in:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

 
//     return (
        
//         <>
       
//         <div className="flex h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//           <div className="md:mx-auto md:w-full sm:max-w-sm ">
//             <img
//               alt="Your Company"
//               src="https://dwpcare.com.pk/uploads/dwpcarewhite.PNG"
//               className="mx-auto h-28 w-auto"
//             />
//             <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
//               Sign in to your account
//             </h2>
//           </div>
  
//           <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//             <form className="space-y-6">
//               <div>
//                 <label htmlFor="username" className="block text-sm font-medium leading-6 text-white">
//                   User Name
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     id="username"
//                     name="username"
//                     type="text"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     required
//                     autoComplete="username"
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
//                   />
//                 </div>
//               </div>
  
//               <div>
//                 <div className="flex items-center justify-between">
//                   <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
//                     Password
//                   </label>
//                   <div className="text-sm">
//                     <a href="#" className="font-semibold text-indigo-300 hover:text-indigo-200">
//                       Forgot password?
//                     </a>
//                   </div>
//                 </div>
//                 <div className="mt-2">
//                   <input
//                     id="password"
//                     name="password"
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                     autoComplete="current-password"
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
//                   />
//                 </div>
//                 {error && <p className="text-red-500 mb-4">{error}</p>}
//               </div>
  
//               <div>
//                 <button
//                 onClick={handleSubmit}
                 
//                   className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                 >
//                   Sign in
//                 </button>
//               </div>
//             </form>
  
            
//           </div>
//         </div>
//       </>
//     );
// };

// export default LoginPage;



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate('/Home');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send login request to the backend
      const response = await fetch('https://dwpcare.com.pk/dwp/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      // Check if login was successful
      const data = await response.json();

      if (response.ok) {
        if (data.success === true) {
          localStorage.setItem('user', JSON.stringify(data)); // Save login data to localStorage
          navigate('/Home'); // Redirect to the home page
        } else {
          setError('Username and password are incorrect');
        }
      } else {
        setError('Login failed');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="md:mx-auto md:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="https://dwpcare.com.pk/uploads/dwpcarewhite.PNG"
          className="mx-auto h-28 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-white">
              User Name
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoComplete="username"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-300 hover:text-indigo-200">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
              />
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
