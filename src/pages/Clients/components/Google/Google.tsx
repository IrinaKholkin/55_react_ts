import { useNavigate } from "react-router-dom";
import Button from "../../../../components/Button/Button";
import { CompanyWrapper } from "./styles";

function Google (){
    const navigate = useNavigate();

    const goToClientsPage = ()=>{
        navigate('/clients')
      }

    return (
        <CompanyWrapper>
            <h2>Google</h2>
            <p>Industry: Internet</p>
            <p>Founded: 1998</p>
            <p>Employees: 182 500+</p>
            <Button name="Switch to Clients" onClick={goToClientsPage}/>
        </CompanyWrapper>
    );
}

export default Google;