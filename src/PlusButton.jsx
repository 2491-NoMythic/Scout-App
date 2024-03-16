import { useState } from 'react';

/*
Single button that has it's own state. You can't see this outside of this component
*/
const PlusButton = () => {
  console.log('hello');
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue(value + 1);
  }

  return (
    <button onClick={handleClick}>Plus Button {value}</button>
  )
}

export default PlusButton;
