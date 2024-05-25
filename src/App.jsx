import { useState } from 'react'
import Navbar from './components/Navbar'
import NewsBoard from './components/NewsBoard'


const App = () => {
  const [category, setCategory] = useState('technology')
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category}/>
    </div>
  )
}

export default App