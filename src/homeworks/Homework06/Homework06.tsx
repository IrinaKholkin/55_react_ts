import Input1 from "../../components/Input/Input";
import Input2 from "./StyleHomework06.css";

const Homework06: React.FC = () => {
    return (
            <div className="homework06-container">
                <h2>Homework 06</h2>
<Input1 placeholder="Введите ваше имя" name="username" />
<Input2 placeholder="Введите ваш email" name="email" />
            </div>
        );
};

export default Homework06;