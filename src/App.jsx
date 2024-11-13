import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import { faArrowDown} from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="mt-14 max-w-6xl mx-auto grid grid-cols-[40%_60%]">
      <div>
        <div className="sticky top-14 grid grid-rows-[35%_45%_20%] h-screen">
          <div className='flex flex-col gap-3'>
            <div className='text-3xl text-primaryTitle font-semibold'>Hatsawat Intrasod</div>
            <div className='text-primaryContent font-semibold'>Fullstack Developer • Finding Internship</div>
            <div className='text-sm w-4/6'>Caption</div>
            <div className='mt-4'>
              <span className='rounded-md bg-primaryTitle py-2 px-4 text-primarySubContent'>
                View Resume
                <span className='inline-block rotate-90 ml-2'><FontAwesomeIcon className='animate-bounce' icon={faArrowDown} /></span>
                </span>
            </div>
          </div>
          <div>Nav</div>
          <div className="flex items-end">Link</div>
        </div>
      </div>
      <div>
        <div>About</div>
        <div className='mb-96'>Experince</div>
        <div className='mb-96'>Experince</div>
        <div className='mb-96'>Experince</div>
        <div className='mb-96'>Experince</div>
      </div>
    </div>
  )
}

export default App
