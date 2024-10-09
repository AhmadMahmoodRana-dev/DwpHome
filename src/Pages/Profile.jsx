// import React, { useState, useEffect } from 'react';

// const ChangePassword = () => {
//   const [username, setUsername] = useState('');
//   const [designation, setDesignation] = useState('');
//   const [currentPassword, setCurrentPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');

//   // Load username and designation from localStorage on initial render
//   useEffect(() => {
//     const auth = JSON.parse(localStorage.getItem('user'));
//     if (auth) {
//       setUsername(auth.user.username);
//       setDesignation(auth.user.designation);
//     }
//   }, []);

//   const handlePasswordChange = () => {
//     // Add password change logic here (e.g., API call to update password)
//     console.log('Current Password:', currentPassword);
//     console.log('New Password:', newPassword);

//     // Example: Reset fields after password change
//     setCurrentPassword('');
//     setNewPassword('');
//   };

//   return (
//     <div className="max-w-lg mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4">Profile Information</h2>

//       {/* Username */}
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Username</label>
//         <input
//           type="text"
//           value={username}
//           readOnly
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100"
//         />
//       </div>

//       {/* Designation */}
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Designation</label>
//         <input
//           type="text"
//           value={designation}
//           readOnly
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100"
//         />
//       </div>

//       <h2 className="text-2xl font-semibold mb-4">Change Password</h2>

//       {/* Current Password */}
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Current Password</label>
//         <input
//           type="password"
//           value={currentPassword}
//           onChange={(e) => setCurrentPassword(e.target.value)}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
//         />
//       </div>

//       {/* New Password */}
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">New Password</label>
//         <input
//           type="password"
//           value={newPassword}
//           onChange={(e) => setNewPassword(e.target.value)}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
//         />
//       </div>

//       <button
//         className="bg-blue-500 text-white px-4 py-2 rounded-md"
//         onClick={handlePasswordChange}
//       >
//         Change Password
//       </button>
//     </div>
//   );
// };

// export default ChangePassword;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ChangePassword = () => {
//   const [currentPassword, setCurrentPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState('');
//   const [username, setUsername] = useState('');
//   const [designation, setDesignation] = useState('');

//   useEffect(() => {
//     try {
//       const auth = JSON.parse(localStorage.getItem('user'));

//       if (auth && auth.user) {
//         setUsername(auth.user.user || '');
//         setDesignation(auth.user.user_designation || '');
//       } else {
//         setError('User details not found in localStorage.');
//       }
//     } catch (e) {
//       console.error('Error parsing user data from localStorage:', e);
//       setError('Failed to retrieve user details.');
//     }
//   }, []);

//   const handlePasswordChange = async () => {
//     if (!currentPassword || !newPassword) {
//       setError('Please provide both current and new passwords.');
//       return;
//     }

//     try {
//       const response = await axios.post('/api/change-password', {
//         username,
//         currentPassword,
//         newPassword
//       });

//       setMessage(response.data.message);
//       setError('');
//       // Reset fields
//       setCurrentPassword('');
//       setNewPassword('');
//     } catch (error) {
//       setMessage('');
//       setError(error.response?.data?.message || 'An error occurred.');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen">
//       <div className="bg-slate-100 p-6 rounded-lg shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-semibold mb-4 text-gray-900">Change Password</h2>

//         {/* Display username */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Username</label>
//           <input
//             type="text"
//             value={username}
//             readOnly
//             className="mt-1 block w-full rounded-md border-sky-500 border-2 shadow-sm bg-gray-100"
//           />
//         </div>

//         {/* Display designation */}
//         <div className="mb-5">
//           <label className="block text-sm font-medium text-gray-700">Designation</label>
//           <input
//             type="text"
//             value={designation}
//             readOnly
//             className="mt-1 block w-full rounded-md border-sky-500 border-2 shadow-sm bg-gray-100"
//           />
//         </div>

//         {/* Current Password */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Current Password</label>
//           <input
//             type="password"
//             value={currentPassword}
//             onChange={(e) => setCurrentPassword(e.target.value)}
//             className="mt-1 block w-full rounded-md border-sky-500 border-2 shadow-sm"
//           />
//         </div>

//         {/* New Password */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">New Password</label>
//           <input
//             type="password"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//             className="mt-1 block w-full rounded-md border-sky-500 border-2 shadow-sm"
//           />
//         </div>

//         <button
//           className="bg-blue-500 text-white px-4 py-2 rounded-md"
//           onClick={handlePasswordChange}
//         >
//           Change Password
//         </button>

//         {/* Display message or error */}
//         {message && <p className="mt-4 text-green-500">{message}</p>}
//         {error && <p className="mt-4 text-red-500">{error}</p>}
//       </div>
//     </div>
//   );
// };

// export default ChangePassword;
// import React, { useState, useEffect } from 'react';

// const ChangePassword = () => {
//   const [username, setUsername] = useState('');
//   const [designation, setDesignation] = useState('');
//   const [currentPassword, setCurrentPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');

//   // Load username and designation from localStorage on initial render
//   useEffect(() => {
//     const auth = JSON.parse(localStorage.getItem('user'));
//     if (auth) {
//       setUsername(auth.user.username);
//       setDesignation(auth.user.designation);
//     }
//   }, []);

//   const handlePasswordChange = () => {
//     // Add password change logic here (e.g., API call to update password)
//     console.log('Current Password:', currentPassword);
//     console.log('New Password:', newPassword);

//     // Example: Reset fields after password change
//     setCurrentPassword('');
//     setNewPassword('');
//   };

//   return (
//     <div className="max-w-lg mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4">Profile Information</h2>

//       {/* Username */}
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Username</label>
//         <input
//           type="text"
//           value={username}
//           readOnly
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100"
//         />
//       </div>

//       {/* Designation */}
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Designation</label>
//         <input
//           type="text"
//           value={designation}
//           readOnly
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100"
//         />
//       </div>

//       <h2 className="text-2xl font-semibold mb-4">Change Password</h2>

//       {/* Current Password */}
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Current Password</label>
//         <input
//           type="password"
//           value={currentPassword}
//           onChange={(e) => setCurrentPassword(e.target.value)}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
//         />
//       </div>

//       {/* New Password */}
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">New Password</label>
//         <input
//           type="password"
//           value={newPassword}
//           onChange={(e) => setNewPassword(e.target.value)}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
//         />
//       </div>

//       <button
//         className="bg-blue-500 text-white px-4 py-2 rounded-md"
//         onClick={handlePasswordChange}
//       >
//         Change Password
//       </button>
//     </div>
//   );
// };

// export default ChangePassword;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ChangePassword = () => {
//   const [currentPassword, setCurrentPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState('');
//   const [username, setUsername] = useState('');
//   const [designation, setDesignation] = useState('');

//   useEffect(() => {
//     try {
//       const auth = JSON.parse(localStorage.getItem('user'));

//       if (auth && auth.user) {
//         setUsername(auth.user.user || '');
//         setDesignation(auth.user.user_designation || '');
//       } else {
//         setError('User details not found in localStorage.');
//       }
//     } catch (e) {
//       console.error('Error parsing user data from localStorage:', e);
//       setError('Failed to retrieve user details.');
//     }
//   }, []);

//   const handlePasswordChange = async () => {
//     if (!currentPassword || !newPassword) {
//       setError('Please provide both current and new passwords.');
//       return;
//     }

//     try {
//       const response = await axios.post('/api/change-password', {
//         username,
//         currentPassword,
//         newPassword
//       });

//       setMessage(response.data.message);
//       setError('');
//       // Reset fields
//       setCurrentPassword('');
//       setNewPassword('');
//     } catch (error) {
//       setMessage('');
//       setError(error.response?.data?.message || 'An error occurred.');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen">
//       <div className="bg-slate-100 p-6 rounded-lg shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-semibold mb-4 text-gray-900">Change Password</h2>

//         {/* Display username */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Username</label>
//           <input
//             type="text"
//             value={username}
//             readOnly
//             className="mt-1 block w-full rounded-md border-sky-500 border-2 shadow-sm bg-gray-100"
//           />
//         </div>

//         {/* Display designation */}
//         <div className="mb-5">
//           <label className="block text-sm font-medium text-gray-700">Designation</label>
//           <input
//             type="text"
//             value={designation}
//             readOnly
//             className="mt-1 block w-full rounded-md border-sky-500 border-2 shadow-sm bg-gray-100"
//           />
//         </div>

//         {/* Current Password */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Current Password</label>
//           <input
//             type="password"
//             value={currentPassword}
//             onChange={(e) => setCurrentPassword(e.target.value)}
//             className="mt-1 block w-full rounded-md border-sky-500 border-2 shadow-sm"
//           />
//         </div>

//         {/* New Password */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">New Password</label>
//           <input
//             type="password"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//             className="mt-1 block w-full rounded-md border-sky-500 border-2 shadow-sm"
//           />
//         </div>

//         <button
//           className="bg-blue-500 text-white px-4 py-2 rounded-md"
//           onClick={handlePasswordChange}
//         >
//           Change Password
//         </button>

//         {/* Display message or error */}
//         {message && <p className="mt-4 text-green-500">{message}</p>}
//         {error && <p className="mt-4 text-red-500">{error}</p>}
//       </div>
//     </div>
//   );
// };

// export default ChangePassword;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [designation, setDesignation] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    try {
      const auth = JSON.parse(localStorage.getItem('user'));

      if (auth && auth.user) {
        setUsername(auth.user.user || '');
        setDesignation(auth.user.user_designation || '');
      } else {
        setError('User details not found in localStorage.');
      }
    } catch (e) {
      console.error('Error parsing user data from localStorage:', e);
      setError('Failed to retrieve user details.');
    }
  }, []);

  const handlePasswordChange = async (e) => {
    e.preventDefault();

    if (!currentPassword || !newPassword || newPassword !== confirmPassword) {
      setError('Please provide valid current and new passwords, and ensure new passwords match.');
      return;
    }

    try {
      const response = await axios.post('https://dwpcare.com.pk/DWP/change-password', {
        username,
        currentPassword,
        newPassword
      });

      setMessage(response.data.message);
      setError('');
      // Reset fields
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      
      // Show message and then redirect after a short delay
      setTimeout(() => {
        navigate('/Home'); 
      }, 2000); // Redirect after 2 seconds
    } catch (error) {
      setMessage('');
      setError(error.response?.data?.message || 'An error occurred.');
    }
  };

  const handleGoBack = () => {
    navigate('/Home'); // Navigate back to the home page
  };

  return (
    <section className="">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full p-6 bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:mt-0 sm:max-w-md sm:p-8">
          <h2 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Change Password
          </h2>
          <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" onSubmit={handlePasswordChange}>
            <div>
              <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                readOnly
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-0 focus:border-gray-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="designation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Designation</label>
              <input
                type="text"
                id="designation"
                value={designation}
                readOnly
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-0 focus:border-gray-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="current-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current Password</label>
              <input
                type="password"
                id="current-password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-0 focus:border-gray-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="new-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
              <input
                type="password"
                id="new-password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-0 focus:border-gray-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-0 focus:border-gray-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Change Password
            </button>
            {message && <p className="mt-4 text-green-500">{message}</p>}
            {error && <p className="mt-4 text-red-500">{error}</p>}
          </form>
          <button
            onClick={handleGoBack}
            className="mt-4 w-full bg-gray-500 text-white hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Go Back
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChangePassword;
