import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import Firstpage from './Components/firstpage'
import Secondpage from './Components/Secondpage'
import Thirdpage from './Components/Thirdpage'
import Fourthpage from './Components/Fourthpage'
import Lastpage from './Components/Lastpage'


function Portfolio() {
  const [count, setCount] = useState(0)

  return (
    <>
      <complete>
        <Navbar/>
        <Firstpage /> 
        <Secondpage />
        <Thirdpage />
        <Fourthpage />
        <Lastpage />
      </complete>
      
    </>
  )
}

export default Portfolio
