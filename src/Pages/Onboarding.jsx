import heart from '../assets/heart.png'
import door from '../assets/door.png'
import chat from '../assets/chat.png'

function Onboarding() {
  return (
    <div className='flex flex-row h-[100vh] family-sans'>
       <div className="w-[40%] bg-amber-500 rounded-2xl">mum</div>
      <div className="w-[60%]  pt-28 px-16 rounded-2xl">
      <div className="flex  justify-center flex-col">
        <h3 className="text-5xl ">
          At AQF, we wholeheartedly believe in the power of conversation

        </h3>
        <p className="text-4xl font-semibold pt-12 pb-2">We champion every dialogue:</p>

    </div>
      <div className="py-2 text-4xl">

         <div className='flex flex-row items-center'> 
          <img 
          src={heart} 
          alt="" 
          className='h-8 w-8 flex items-center'/>
          <p>a heart-to-heart with yourself </p>
          </div>
          <div className='flex flex-row'> 
          <img 
          src={chat} 
          alt="" 
          className='h-8 w-8 flex  items-center'/> <p>a comforting chart with a friend, or </p></div>
           <div className='flex flex-row'> 
          <img 
          src={door} 
          alt="" 
          className='h-8 w-8 flex  items-center'/>
         
         <p>opening up to someone new </p>
         </div>
        
      </div>
      <div className="flex flex-wrap justify-end pt-10 ">
    <a className="relative" href="#">
        <span className="absolute top-0 left-0 mt-1 ml-1  w-48 h-16 rounded bg-black"></span>
        <span className="flex justify-center items-center fold-bold relative  w-48 h-16 rounded border-2 border-black bg-orange-700 px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900 dark:bg-transparent">Next</span>
    </a>
      </div>

      </div>
     
     
    </div>
  )
}

export default Onboarding