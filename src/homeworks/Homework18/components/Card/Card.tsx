import Message from "../Message/Message";
import { CardWrapper, UserInfo } from "./styles";

function Card() {
  return (
    <CardWrapper>
     <UserInfo>
        <div>Irina Kholkin</div>
        <div>student</div>
     </UserInfo>
      <Message />
    </CardWrapper>
  );
}

export default Card;