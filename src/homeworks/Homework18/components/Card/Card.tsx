import { useContext } from "react";
import Message from "../Message/Message";
import { CardWrapper, UserInfo } from "./styles";
import { BlogContext } from "../BlogManagement/BlogManagement";

function Card() {
  const {message} = useContext(BlogContext)
  return (
    <CardWrapper>
     <UserInfo>
        <div>Irina Kholkin</div>
        <div>student</div>
     </UserInfo>
      {message !== '' && <Message />}
    </CardWrapper>
  );
}

export default Card;