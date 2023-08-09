import { useState } from 'react'
import HomeScreen from './components/screens/HomeScreen';
import TodoScreen from './components/screens/TodoScreen';
import DoneScreen from './components/screens/DoneScreen';
import { screenTypes } from './constants';

function App() {

  const cityData = [
    { id: 1, name: 'Náchod', value: 'nachod' },
    { id: 2, name: 'Pardubice', value: 'pardubice' },
  ]
  const [city, setCity] = useState(cityData[0]);
  const handleCityChange = (event) => {
    setCity(event.target.value);
    setScreenType(screenTypes.TODO_SCREEN)
  }

  const [screenType, setScreenType] = useState(screenTypes.HOME_SCREEN);

  return (

    screenType === screenTypes.HOME_SCREEN ? <HomeScreen cityData={cityData} city={city} handleCityChange={handleCityChange} changeScreen={setScreenType} /> :
      screenType === screenTypes.TODO_SCREEN ? <TodoScreen city={city} changeScreen={setScreenType} /> :
        screenType === screenTypes.DONE_SCREEN && <DoneScreen changeScreen={setScreenType} />


  )
}

export default App;
