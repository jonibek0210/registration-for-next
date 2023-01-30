import { useForm } from "react-hook-form";

const Register = () => {

   const { register, handleSubmit, formState: { errors } } = useForm();

   const submit = data => console.log(data);

   return (
      <div className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 || w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
         <form onSubmit={handleSubmit(submit)} className="space-y-6" action="#">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">register</h5>
            <div className="relative">
               <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
               <input type="email" {...register("email", { required: true })} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" />
               <p>{errors.email?.message}</p>
               {errors.email && <span className="absolute -bottom-6 left-0 text-red-600">This field is required</span>}
            </div>
            <div className="relative">
               <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
               <input type="name" {...register("firstName", { required: true })} placeholder="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
               {errors.firstName && <span className="absolute -bottom-6 left-0 text-red-600">This field is required</span>}
            </div>
            <div className="relative">
               <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
               <input type="password" {...register("password", { required: true })} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
               {errors.password && <span className="absolute -bottom-6 left-0 text-red-600">This field is required</span>}
            </div>
            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
         </form>
      </div>
   );
}

export default Register;