import React, { useState } from 'react'

 import AddLanguages from './components/AddLanguages'
 import DisplayLanguages from './components/DisplayLanguages'

 const App = () => {

  let [languagesArray, setLanguagesArray] = useState([])
return( 
  <>
  <AddLanguages setLanguagesArray= {setLanguagesArray} />
  <DisplayLanguages setLanguagesArray= {setLanguagesArray} />
  </>
)
 }

 export default App
