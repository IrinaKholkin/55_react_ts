import { useEffect, useState } from "react";
import { Homework11Container, ResultBlock } from "./styles";
import Input from "../../components/Input/Input";

function Homework11() {
  const [inputValue, setInputValue] = useState<string>("");
  const [secondInputValue, setSecondInputValue] = useState<string>("");
  const [changeCount, setChangeCount] = useState<number>(0);

  useEffect(() => {
    if (inputValue !== "") {
      setChangeCount((prevCount) => prevCount + 1);
    }
  }, [inputValue]);

  return (
    <Homework11Container>
        <h2>Homework 11</h2>
      <Input 
      name="firstInput" 
      type="text" 
      value={inputValue} 
      onChange={(event)=> setInputValue(event.target.value)} 
      placeholder="Изменяемый Input" />
      <Input 
      name="secondInput"
      type="text"
      value={secondInputValue}
      onChange={(event) => setSecondInputValue(event.target.value)}
      placeholder="Обычный Input"
       />
       <ResultBlock>Количество изменений: {changeCount}</ResultBlock>
    </Homework11Container>
  );
}

export default Homework11;
