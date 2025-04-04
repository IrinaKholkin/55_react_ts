import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { ImageWrapper,  Error, Lesson13Container } from "./styles";
import axios from "axios";
import Spinner from "../../components/Spinner/Spinner";

const API_URL = "https://dog.ceo/api/breeds/image/random"

function Lesson13 () {
    const [imageURL, setImageURL] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>("");

    const getImage = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.get(API_URL);
            setImageURL(response.data.message);
        } catch (error : any) {
            setError(error.message);
        } finally {
            setIsLoading(false)
        }
    };

    useEffect(()=>{
        getImage();
    }, []);

    const handleInputChange = (even: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(even.target.value);
        getImage();
    };

    const handleDeleteAll = () => {
        setImageURL("");
    };

    return (
        <Lesson13Container>
            <Input 
            name="request"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Введите любое название картинки или породы собаки "
            />
            <Button name="GET MORE IMAGES" onClick={getImage} disabled={isLoading}/>
            {imageURL.length > 0 &&  <Button name="DELETE ALL DATA" onClick={handleDeleteAll}/>}
            {isLoading && <Spinner/>}
            <Error>{error}</Error>
            {/* {imageURL.length > 0 && (<ImagesContainer>
            {imageURL.map((imageURL, index) => (<ImageWrapper key={index} src={imageURL}/>))}
            </ImagesContainer>)} */}
           
          <ImageWrapper src={imageURL}/>
           
        </Lesson13Container>
    )
}

export default Lesson13;

// При загрузке страницы (компонента Lesson13) должен происходить запрос на получение данных (ссылка на фотографию животного)
// Данные в виде картинки должны отображаться в на странице
// Также на странице должна быть кнопка ‘GET MORE IMAGES, при нажатии на которую также должен происходить запрос на получение данных
// Помимо кнопки на странице должен находиться Input и при любом изменении в поле должен также отправляться запрос на получение данных
// При получении ошибки, сообщение необходимо отобразить на странице
// При отправке запроса на странице должен быть показан спиннер

// При получении новой картинки она должна появиться на экране под предыдущей
// На странице должна быть вторая кнопка “DELETE ALL DATA”, 
// которая будет удалять все полученные данные 
// (при отсутствии фотографий в блоке, кнопка должна исчезать)
// Когда размер блока с данными заходит за предел 700px блок расширяться в высоту не должен,
//  а должен появиться скролл внутри блока с данными