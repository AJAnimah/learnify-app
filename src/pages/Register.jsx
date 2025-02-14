// function Courses() {
//     return (
//       <div className="mt-20 text-center">
//         <h1 className="text-3xl font-bold text-gray-800">Courses Page</h1>
//         <p className="text-lg text-gray-500">Courses will be here.</p>
//       </div>
//     );
//   }
  
//   export default Courses;
  

// src/pages/Register.jsx
export default function Register() {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Course Registration</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg"
            required
          />
          <input
            type="text"
            placeholder="Course"
            className="w-full p-3 border rounded-lg"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}