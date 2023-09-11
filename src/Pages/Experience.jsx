import {Link } from "react-router-dom";


function Experience() {
  return (
    <div  className="h-[100vh] font-sans">
        <div className="flex justify-center items-center h-[100vh]">
            <div>
            <h3 className="text-5xl font-bold  pb-5">Now, let us dive into your experiences</h3>
            <p className="text-4xl font-medium">We are will use your answers to provide curated guidance and <br /> thoughtful prompts to kickstart your experience </p>
        </div>
        </div>
        <Link to='/topic'>

              <div className="flex flex-wrap justify-end pt-4 mb-3 mr-3 ">
    <a className="relative" href="#">
        <span className="absolute top-0 left-0 mt-1 ml-1  w-52 h-12 rounded bg-black"></span>
        <span className="flex justify-center items-center fold-bold relative  w-52 h-12 rounded border-2 border-black bg-orange-700 px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900 dark:bg-transparent">Next</span>
    </a>
      </div>
      </Link>
    </div>
  )
}

export default Experience