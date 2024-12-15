import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <div className='w-[100%] mx-auto  '>
        <div className=' flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 ml-4 mr-4 text-base'>
          <div className=" ">
          <Link
  to="/"
  className="flex items-center gap-2 transform transition-all duration-300 ease-in-out hover:scale-105 hover:text-purple-600 dark:text-white"
>
  <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 hover:underline">
  GetBiz
  </span>
</Link>
            <p className='w-full md:w-2/3 text-gray-600 my-10'>
                We are a team of professionals who are dedicated to providing the best services to our customers. We are here to help you find the best businesses in your area.
            </p>  
          </div>
          <div>
            <p className='text-xl font-medium mb-5 mt-5 '>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Support</li>
                <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <p className='text-xl font-medium mb-5 mt-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91- 987654321</li>
                <li>contact@gmail.com</li>
            </ul>
          </div>
        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ Nearest Solution - All Rights Reserved. </p>
        </div>
    </div>
  )
}

export default Footer