import { ChangeEvent, createContext, useContext, useState } from "react";
import Input from "../../../../components/Input/Input";
import { BlogContextType } from "./types";
import Button from "../../../../components/Button/Button";
import Card from "../Card/Card";
import { BlogManagementWrapper, ButtonContainer } from "./styles";


export const BlogContext = createContext<BlogContextType>({
    message: '',
    setMessage: ()=>{},
});

export const useBlogContext = () => useContext(BlogContext) 

export function BlogManagement (){
    const [inputValue, setInputValue] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)};

    const handlePost = () => {
        setMessage(inputValue);
        setInputValue('');
    };

    return (
        <BlogContext.Provider value={{message, setMessage}}>
            <BlogManagementWrapper>
                
            <Input 
            name="blogInput"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Write your message..."
            />
            <ButtonContainer>
                <Button name="Post" onClick={handlePost}></Button>
            </ButtonContainer>
            <Card />
            </BlogManagementWrapper>
        </BlogContext.Provider>
    )
}

export default BlogManagement;