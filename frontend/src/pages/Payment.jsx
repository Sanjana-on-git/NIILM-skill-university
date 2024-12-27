import React,{useState} from 'react'

const Payment = () => {
const [registrationId, setRegistrationId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
    console.log('Logging in with:', registrationId, password);
  };
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <div className="bg-white p-10 rounded shadow-md">
            <h1 className="text-3xl font-bold mb-6">Welcome to Medhavi Skills University</h1>
            <p className="text-center mb-4">Already Registered? Sign in here</p>
    
            <div className="mb-4">
              <label htmlFor="registrationId" className="block text-sm font-medium mb-2">
                Registration ID/Email/Phone
              </label>
              <input
                type="text"
                id="registrationId"
                value={registrationId}
                onChange={(e) => setRegistrationId(e.target.value)}
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>
    
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>
    
            <div className="flex justify-between mb-4">
              <button
                onClick={handleLogin}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Sign In
              </button>
              <a href="#" className="text-blue-500 hover:underline">
                Forgot Password?
              </a>
            </div>
    
            <p className="text-center">Need assistance? Get Help Here</p>
    
            <div className="flex space-x-4 mt-4">
              <a href="#" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
                <i className="fab fa-apple"></i>
              </a>
            </div>
          </div>
        </div>
      );
}

export default Payment;