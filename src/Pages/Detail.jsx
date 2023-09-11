import ekaterina from '../assets/ekaterina.jpg'
import {Link } from "react-router-dom";

function Detail() {
  return (
    <div className='flex flex-col h-[100vh] w-[100%] family-sans bg-amber-200 '>
      <div className='h-[40%] w-full'>
        <img src={ekaterina} className='w-full h-full object-cover' alt="" />
      </div>
          <div className=" h-[60%] pt-12 px-16 rounded-2xl flex flex-col  items-center">
              <h3 className="font-bold text-4xl" >A few more details</h3>
              <div>
                <div className="flex flex-row justify-center items-center py=4">
                    <p className='text-3xl'>What year were you born</p>
                    <input   type="text"
                              className="w-24 px-4 py-2 border border-gray-300 rounded-full focus:ring focus:ring-blue-200"
                                  placeholder="YYYY"
                                             />
                </div>

                <div className="flex flex-row justify-center items-center py-4">
                    <p className='text-3xl'>What do you live</p>
                    <select
        className="w-72 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
      >
        <option value="" disabled>
          Select your country
        </option>
        <option value="USA">USA</option> 
        <option value="Nigeria">Nigeria</option>
        <option value="Canada">Canada</option>
        <option value="Others">Others</option>
      </select>
                </div>


                <div className="flex flex-row justify-center items-center py-4">
                    <p className='text-3xl'>pronoun</p>
                    <div>
                        <button className="w-40 h-10 bg-white rounded-full border-2 border-black" type="button">HE/HIM</button>
                        <button className="w-40 h-10 bg-white rounded-full border-2 border-black" type="button">SHE/HER</button>
                        <button className="w-40 h-10 bg-white rounded-full border-2 border-black" type="button">THEY/THEM</button>
                    </div>
              
                </div>

                <div className="flex flex-row justify-center items-center py-4">
                    <p className='text-3xl'>Relationship status</p>
                    <div>
                        <button className="w-40 h-10 bg-white rounded-full border-2 border-black hover:bg-amber-600 hover:border-2 hover:border-yellow-900" type="button">Single</button>
                        <button className="w-40 h-10 bg-white rounded-full border-2 border-black hover:bg-amber-600 hover:border-2 hover:border-yellow-900" type="button">in a relationship</button>
                        <button className="w-40 h-10 bg-white rounded-full border-2 border-black hover:bg-amber-600 hover:border-2 hover:border-yellow-900" type="button">other</button>
                    </div>
              
                </div>
              </div>
              </div>
              <Link to='/role'>

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

export default Detail