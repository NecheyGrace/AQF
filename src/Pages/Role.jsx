import couple from '../assets/couple.mp4'

function Role() {
  return (
    <div className='flex flex-col h-[100vh] family-sans '>
    <div className="h-[100vh] w-full bg-black rounded-2xl">
       <video src={couple} className='w-full h-[90vh] object-cover ' controls />
       </div>
    <div className="w-[100%] h-[]  px-16 rounded-2xl flex flex-col py-12 items-center">
        <h3 className="font-bold text-4xl pb-4" >There are two roles to play: Storyteller and Listener  </h3>
        <p className='text-xl font-medium py-2'>Storytellers record their triumphs, challenges they have learned from, and challenges they are still working through.</p>
        <p className='text-xl font-medium py-2'>Listeners are folks looking to understand through others, and lend a positive perspective whenever possible. </p>
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

export default Role