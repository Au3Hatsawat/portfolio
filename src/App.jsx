import './App.css'
import LeftSection from './sections/leftSection'
import RightSection from './sections/rightSection'

function App() {
  return (
    <div className="mt-14 max-w-6xl mx-auto grid lg:grid-cols-[40%_60%] gap-y-5">
      <LeftSection/>
      <RightSection/>
    </div>
  )
}

export default App
