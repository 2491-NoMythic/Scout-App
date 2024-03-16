import { useState } from 'react';
import ClickButton from './ClickButton';

/*
This is a container that holds two buttons.
This is only one way to deal with the onClicks.
*/
const MultiButton = () => {
  
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  const handleClick = (props) => {
    if (props.valueId === 1) {
      console.log('button 1 pressed');
      setValue1(value1 + 1);
    } else {
      console.log('button 2 pressed');
      setValue2(value2 + 1);
    }
  }
  
  return (
    <>
      <div>Value 1: {value1}</div>
      <div>Value 2: {value2}</div>
      <ClickButton buttonHandler={handleClick} valueId={1} />
      <ClickButton buttonHandler={handleClick} valueId={2} />
    </>
  )
}

export default MultiButton;
