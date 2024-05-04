import { useState } from 'react';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast'; 
import { Link } from 'react-router-dom'; 

export default function Register() {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    try {
      const response = await axios.post('/register', { name, email, password });
      const responseData = response.data;
      if (responseData.error) {
        toast.error(responseData.error); 
      } else {
        // Update state without clearing all fields
        setData(prevData => ({ ...prevData, name: '', email: '', password: '' }));
        toast.success('Registration Successful! Welcome');
        // Redirect to login page
        window.location.href = '/login';
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register-container">
      <div className="container mx-auto mt-8">
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Create an Account</h2>
          <form onSubmit={registerUser} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input type='text' placeholder='Enter your name...' value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} className="mt-1 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type='email' placeholder='Enter your email...' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} className="mt-1 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input type='password' placeholder='Enter your password...' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} className="mt-1 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-500" />
            </div>
            <button type='submit' className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300 w-full">Register</button>
          </form>
          <p className="mt-4 text-gray-600 text-sm">Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link></p>
        </div>
      </div>
      <Toaster /> 
    </div>
  );
}
git 

// import { useState } from 'react';
// import axios from 'axios';
// import { Toaster, toast } from 'react-hot-toast'; // Import toast from react-hot-toast
// import { useNavigate } from 'react-router-dom';

// export default function Register() {
//   const navigate = useNavigate();
//   const [data, setData] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });

//   const registerUser = async (e) => {
//     e.preventDefault();
//     const { name, email, password } = data;
//     try {
//       const response = await axios.post('/register', { name, email, password });
//       const responseData = response.data;
//       if (responseData.error) {
//         toast.error(responseData.error); 
//       } else {
//         // Update state without clearing all fields
//         setData(prevData => ({ ...prevData, name: '', email: '', password: '' }));
//         toast.success('Login Successful! Welcome');
//         navigate('/login');
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div>
//       <Toaster /> {/* Place Toaster component outside of the form */}
//       <form onSubmit={registerUser}>
//         <label>Name</label>
//         <input type='text' placeholder='enter name...' value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
//         <label>Email</label>
//         <input type='email' placeholder='enter email...' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
//         <label>Password</label>
//         <input type='password' placeholder='enter password...' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
//         <button type='submit'>Submit</button>
//       </form>
//     </div>
//   );
// }