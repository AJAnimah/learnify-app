// src/pages/Signup.jsx
export default function Signup() {
    return (
      <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
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
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 border rounded-lg"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-center">
            Already have an account? <a href="/login" className="text-blue-500">Login</a>
          </p>
        </div>
      </div>
    );
  }