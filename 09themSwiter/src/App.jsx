import { useEffect, useState } from 'react'
import { ThemeContextProvider } from './Context/theme'
import './App.css'
import ThemeBtn from './Components/ThemeBtn'
import Card from './Components/Card'

function App() {

  const [themeMode, setThemeMode] = useState('light')

  const darkTheme = ()=>{
    setThemeMode('dark')
  }
  const lightTheme = ()=>{
    setThemeMode('light')
  }
useEffect(() => {
    const doc = document.querySelector('html')
    doc.classList.remove("light", "dark")
    doc.classList.add(themeMode)
},[themeMode])

return (
   <ThemeContextProvider value={{themeMode, darkTheme, lightTheme}}>
<div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
               <Card/>
          </div>
      </div>
</div>
</ThemeContextProvider>
  )
}

export default App
