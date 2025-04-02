import axios from "axios";
import { useEffect, useState } from "react";

import { FactWrapper, Homework12Container, Error } from "./styles";
import Spinner from "../../components/Spinner/Spinner";
import Button from "../../components/Button/Button";

const FACT_URL = "https://catfact.ninja/fact";

function Homework12 () {
const [fact, setFact] = useState<string | undefined> (undefined);
const [error, setError] = useState<string | undefined>(undefined);
const [isLoading, setIsLoading] = useState<boolean>(false);

const fetchFact = async () => {
    setError(undefined);
    setIsLoading(true);
    try {
        const response = await axios.get<{fact : string}>(FACT_URL);
        setFact(response.data.fact);
    } catch (err: any) {
        setError("Ошибка загрузки данных");
    } finally {
        setIsLoading(false);
    }
};

useEffect (() => {
    fetchFact();
}, []);

    return (
<Homework12Container>
    <Button 
    name="GET MORE FACTS"
    onClick={fetchFact}
    disabled={isLoading}>
    </Button>
    <FactWrapper>{isLoading ? <Spinner/> : fact}</FactWrapper>
    {error && <Error>{error}</Error>}
</Homework12Container>
    )
}

export default Homework12;