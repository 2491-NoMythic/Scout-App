/*
This is a button that can be reused
*/
const ClickButton = ({buttonHandler, valueId}) => {

  const handleClick = () => {
    buttonHandler({valueId: valueId});
  }
  
  return (
    <button onClick={handleClick}>Plus Button</button>
  )
}

export default ClickButton;
