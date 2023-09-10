import barbara from '../assets/barbara.jpg'
function Name() {
    return (
      <div className='flex flex-col h-[100vh] family-sans '>
          <div className="w-[100%] h-[40%] bg-black rounded-2xl">
            <img src={barbara} className='w-[100%] h-[100%] object-cover ' alt="" />
          </div>
          <div className="w-[100%] h-[60%] pt-28 px-16 rounded-2xl flex flex-col  items-center">
              <h3 className="font-bold text-4xl" >Hey [name], let us start with the basics ?</h3>
              <div className="w-[70%]">
              <div className="flex justify-center items-center space-x-10">
                <p className="text-3xl ">Email address </p>
              <input type="text" className="border-2  border-black w-[55%] h-8 rounded-full my-8" placeholder="please type in your name"/>
              </div>

              <div className="flex justify-center items-center space-x-24">
                <p className="text-3xl " >Password</p>
              <input type="text" className="border-2  border-black w-[55%] h-8 rounded-full my-8" placeholder="please type in your name"/>
              </div>

              <div className="flex justify-center items-center space-x-10">
                <p className="text-3xl " >Confirm Password</p>
              <input type="text" className="border-2  border-black w-[55%] h-8 rounded-full my-8" placeholder="please type in your name"/>
              </div>

              
              </div>
              
          </div>
          <div className="flex flex-wrap justify-end pt-12 ">
               <a className="relative" href="#">
               <span className="absolute top-0 left-0 mt-1 ml-1  w-52 h-12 rounded bg-black"></span>
                <span className="flex justify-center items-center fold-bold relative  w-52 h-12 rounded border-2 border-black bg-orange-700 px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900 dark:bg-transparent">Next</span>
      </a>
        </div>

      </div>
    )
  }
  
  export default Name