import { ChangeEvent, useEffect, useState } from "react";
import Input from "../../components/Input/Input";
import { Homework11LessonContainer, Result } from "./styles";

function Homework11Lesson (){
const [note, setNote] = useState<string>('');
const [additNote, setAdditNote] = useState<string>('');
const [countNoteChange, setCountNoteChange] = useState<number>(0);

const onChangeNote = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value)
}

const onAdditChangeNote = (event: ChangeEvent<HTMLInputElement>) => {
    setAdditNote(event.target.value)
}
// state = 0, но функция не будет выполняться, если в поле note пустое значений
// useEffect(()=>{
//     if(note){
//         setCountNoteChange((prevValue)=>prevValue + 1)
//     }
// }, [note])

// state = 0
useEffect(()=>{
        setCountNoteChange((prevValue)=>prevValue + 1)
}, [note])

    return (
        <Homework11LessonContainer>
            <Input
            name="note"
            placeholder="Enter your note"
            value={note}
            onChange={onChangeNote}/>
             <Result>
                {/* state = -1. -1 не показывается, вместо нее мы поставляем 0 */}
                {/* Количество изменений в поле Note {countNoteChange === -1 ? 0 : countNoteChange}  */}
                  {/* state = 0 */}
                  Количество изменений в поле Note {countNoteChange -1 } 
            </Result>
              <Input
            name="note_additional"
            placeholder="Enter your additional note"
            value={additNote}
            onChange={onAdditChangeNote}/>
           
        </Homework11LessonContainer>
    )
}

export default Homework11Lesson;