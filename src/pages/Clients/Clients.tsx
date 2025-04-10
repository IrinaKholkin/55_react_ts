import { ClientsWrapper, CompanyLink } from "./styles";

function Clients (){

    return (
        <ClientsWrapper>
            <h1>Our Clients</h1>
            <CompanyLink to='/clients/facebook'>Facebook</CompanyLink>
            <CompanyLink to='/clients/google'>Google</CompanyLink>
            <CompanyLink to='/clients/amazon'>Amazon</CompanyLink>
        </ClientsWrapper>
    );
}

export default Clients;


