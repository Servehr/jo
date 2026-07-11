import { z } from 'zod'

const loginSchema = z.object(
 {
    email: z
           .string()
           .email("Please enter a valid email address"),
    password: 
           z.string()
           .min(6, "Password must be at least 6 characters"),
 }
)

type User = z.infer<typeof loginSchema>;

export const Login = ()  =>
{ 
    return (
       <>
        <div 
          className="flex justify-center items-center min-h-screen"
        >
          <div 
             className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md -mt-60"
          >
            <h2 className="text-3xl font-bold mb-6 text-center text-white mb-10">
              <span className="text-gray-600">
                LogIn
              </span>
            </h2>
            <form>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  <i className="fas fa-envelope mr-2"></i>Email
                </label>
                <div>
                  <input id="email" type="email" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your email" />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  <i className="fas fa-lock mr-2"></i>Password
                </label>
                <div>
                  <input id="password" type="password" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your password" />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="bg-blue-900 hover:bg-blue-800 cursor-pointer flex justify-center items-center hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                  LogIn
                </div>
              </div>
            </form>
          </div>
        </div>
       </>
    )
}