import ekaterina from '../assets/ekaterina.jpg'

function Detail() {
  return (
    <div className='flex flex-col h-[100vh] w-[100%] family-sans bg-orange-400'>
      <div className='h-[30%] w-full'>
        <img src={ekaterina} className='w-full h-full object-cover' alt="" />
      </div>
          <div className=" pt-28 px-16 rounded-2xl flex flex-col  items-center">
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
                        <button className="w-40 h-16 bg-white rounded-full border-2 border-black" type="button">HE/HIM</button>
                        <button className="w-40 h-16 bg-white rounded-full border-2 border-black" type="button">SHE/HER</button>
                        <button className="w-40 h-16 bg-white rounded-full border-2 border-black" type="button">THEY/THEM</button>
                    </div>
              
                </div>

                <div className="flex flex-row justify-center items-center py-4">
                    <p className='text-3xl'>Relationship status</p>
                    <div>
                        <button className="w-40 h-16 bg-white rounded-full border-2 border-black hover:bg-amber-600 hover:border-2 hover:border-yellow-900" type="button">Single</button>
                        <button className="w-40 h-16 bg-white rounded-full border-2 border-black hover:bg-amber-600 hover:border-2 hover:border-yellow-900" type="button">in a relationship</button>
                        <button className="w-40 h-16 bg-white rounded-full border-2 border-black hover:bg-amber-600 hover:border-2 hover:border-yellow-900" type="button">other</button>
                    </div>
              
                </div>
              </div>
              </div>
              </div>
              
  )
}

export default Detail