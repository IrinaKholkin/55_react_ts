
import Button from "../../../../components/Button/Button";
import { useBlogContext } from "../BlogManagement/BlogManagement";
import { ButtonContainer, MessageWrapper } from "./styles";


function Message() {
    const {message, setMessage} = useBlogContext();

    const handleDelete = () => {setMessage('');
    };
  return (
<MessageWrapper>
    <div>{message}</div>
    <ButtonContainer>
    <Button name="Delete Post" onClick={handleDelete} danger/>
    </ButtonContainer>
</MessageWrapper>
  );
}
    

export default Message;