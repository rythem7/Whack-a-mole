import './App.css'
import { useEffect, useState } from 'react'
import { themeChange } from 'theme-change'
// import NavBar from './components/Navbar';
// import Hero from './components/HeroCollection';
import ThemeSwitcher from './assets/ThemeSwitcher';
import Hole from './components/Hole';
// import Footer from './components/Footer';




function App() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
    const interval = setInterval(() => {
      // Randomly set the mole to a new hole every second
      setActiveIndex(Math.floor(Math.random() * 9)); // 9 holes
    }, 1000);

    // Clear the interval when the component unmounts (cleanup)
    return () => clearInterval(interval);  
  }, []);

  const handleWhack = (index) => {
    // Check if the mole is clicked in the active hole
    if (index === activeIndex) {
      setScore((prevScore) => prevScore + 1); // Increase score if it's the correct hole
      setActiveIndex(null); // Reset mole position after it's hit
    }
  };

  return(
    <div className='flex flex-col w-screen h-full justify-center items-center'>
      {/* <NavBar /> */}
      
      <main>
        <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center p-4 ">
          <h1 className="text-3xl font-bold mb-6">Whack-a-Mole</h1>
          <h2 className="text-xl font-semibold">Score: {score}</h2>
          
          <div className="grid grid-cols-3 gap-10 transform rotate-x-45 perspective-[1000px] overflow-hidden">
            {Array.from({ length: 9 }).map((_, index) => (
              <Hole
                key={index}
                index={index}
                isActive={activeIndex === index}
                onWhack={() => handleWhack(index)}
              />
            ))}
          </div>
          
        </div>
      </main>

      {/* <Footer /> */}

      <ThemeSwitcher />
    </div>
  );
}

export default App
