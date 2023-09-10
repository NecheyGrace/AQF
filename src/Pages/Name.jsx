
function Name() {
  return (
    <div className='flex flex-col h-[100vh] family-sans '>
        <div className="w-[100%] h-[30%] bg-amber-500 rounded-2xl">good</div>
        <div className="w-[100%] h-[70%] pt-28 px-16 rounded-2xl flex flex-col  items-center">
            <h3 className="font-bold text-4xl" >What is your name ?</h3>
            <input type="text" className="border-2 border-black w-[70%] h-12 rounded-full my-8" placeholder="please type in your name"/>
            <p className="text-lg font-medium">While we encourage real names for storytelling, use whatever name you feel most comfortable with.</p>
        </div>
        <div className="flex flex-wrap justify-end pt-4 mb-3 mr-3 ">
    <a className="relative" href="#">
        <span className="absolute top-0 left-0 mt-1 ml-1  w-52 h-12 rounded bg-black"></span>
        <span className="flex justify-center items-center fold-bold relative  w-52 h-12 rounded border-2 border-black bg-orange-700 px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900 dark:bg-transparent">Next</span>
    </a>
      </div>
    </div>
  )
}

export default Name