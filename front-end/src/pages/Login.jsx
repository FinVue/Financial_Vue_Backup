import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const loginUser = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      // Make a POST request to '/login' with login data
      const response = await axios.post('/login', data);
      console.log(response.data); // Log the response from the server
      // Check if login was successful
      if (response.data.success) {
        // Redirect the user to the home page
        window.location.href = 'http://localhost:5173/home';
      } else {
        // Display error message
        console.error('Login failed:', response.data.message);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={loginUser}>
        <div>
          <label>Email</label>
          <input
            type='email'
            placeholder='Enter your email...'
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type='password'
            placeholder='Enter your password...'
            value={data.password} 
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}









// import { useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom'; 

// export default function Login() {
//   const [data, setData] = useState({
//     email: '',
//     password: '',
//   });

//   const loginUser = async (e) => {
//     e.preventDefault();
//     try {
//       // Make a POST request to your login endpoint with login data
//       const response = await axios.post('/login', data);
//       console.log(response.data);
//       // Handle successful login, such as redirecting the user to a dashboard page
//     } catch (error) {
//       console.error('Login failed:', error);
//       // Handle login failure, such as displaying an error message to the user
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-4">Login</h2>
//         <form onSubmit={loginUser} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input type='email' placeholder='Enter your email...' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Password</label>
//             <input type='password' placeholder='Enter your password...' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
//           </div>
//           <button type='submit' className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300">Login</button>
//         </form>
//         <p className="mt-4 text-gray-600 text-sm">Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Register</Link></p>
//       </div>
//     </div>
//   );
// }
