import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import Secondpage from './Components/Secondpage'
import Thirdpage from './Components/Thirdpage'
import Fourthpage from './Components/Fourthpage'
import Lastpage from './Components/Lastpage'
import Firstpage from './Components/Firstpage'


function Portfolio() {
  const [count, setCount] = useState(0)

  return (
    <>
      <complete>
        <Navbar />
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
