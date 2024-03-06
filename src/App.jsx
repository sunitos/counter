import React from 'react'
import ClassComp from './ClassComp'
import FuncComp from './FuncComp'

const App = () => {
  const [korunotClass, setClass] = React.useState(true);
  const [korunotFunc, setFunc] = React.useState(true);
  const [showTakeBack, setTakeBack] = React.useState(false);

  const onKill = (comp) => {
    if (comp === 'class') {
      setClass(false);
    } else if (comp === 'func') {
      setFunc(false);
    }
    setTakeBack(true);
  };
  

  const takeBack = () => {
    setClass(true);
    setFunc(true);
    setTakeBack(false);
  };

  return (
    <div>
      {korunotClass && <ClassComp onKill={() => onKill('class')} />}
      <hr />
      {korunotFunc && <FuncComp onKill={() => onKill('func')} />}
      {showTakeBack && <button onClick={takeBack}>take back</button>}
    </div>
  )
}

export default App
