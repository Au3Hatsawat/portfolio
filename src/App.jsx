import { useEffect, useState } from 'react'
import './App.css'
import LeftSection from './sections/leftSection'
import RightSection from './sections/rightSection'

function App() {

  const [sectionIds , setSectionIds] = useState([]);
  const [navbarItem , setNavBarItem] = useState([]);
  const [currentSection , setCurrentSection] = useState("");

  const addSectionIds = (sectionId) => {
    const elementId = document.getElementById(sectionId).id;
    setSectionIds((prev) => [...new Set([...prev , elementId])]);

    const elementTitle = document.getElementById(sectionId).childNodes[0].textContent;
    const object = {title: elementTitle , sectionId: sectionId};
    setNavBarItem(
      (prev) => {
        if(prev.findIndex(e=>e.title === object.title) < 0){
            return [...prev , object];
        }
        return prev;
      }
    );
  }


  const handleScroll = () => {
      for (let index = 0; index < sectionIds.length; index++) {
        const element = sectionIds[index];
        const y = document.getElementById(element).getClientRects()[0].y;
        const height = document.getElementById(element).getClientRects()[0].height/2;
        const viewHeight = window.innerHeight * 0.3;

        if(document.documentElement.scrollTop === 0){
          setCurrentSection(sectionIds[0]);
        }else if(y <= 0){
          if((y+height) > viewHeight){
            setCurrentSection(element);
          }
        }else if(y > 0 && y < viewHeight){
          setCurrentSection(element);
        }

      }
  };

  useEffect(()=>{
    if(sectionIds.length > 0){
      setCurrentSection(sectionIds[0])
    }
  },[sectionIds])

  useEffect(() => {
    window.addEventListener('scroll',handleScroll);


    return () => {
      window.removeEventListener('scroll',handleScroll);
    }
  },[sectionIds])


  return (
    
    <div className="mt-14 max-w-6xl mx-auto grid lg:grid-cols-[40%_60%] gap-y-5">
      <LeftSection navbarItems = {navbarItem} currentSection = {currentSection}/>
      <RightSection onInitial = {addSectionIds}/>
    </div>
  )
}

export default App
