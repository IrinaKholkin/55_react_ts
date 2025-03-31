import styled from "@emotion/styled";

interface CardStyledProps {
    vip?: boolean;
}

export const CardStyles = styled.div<CardStyledProps>`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
justify-content: center;
padding: 20px;
width: ${({vip})=> vip? '300' : '200'};
height: ${({vip})=> vip? '300' : '200'};
border-radius: 10px;
background-color: ${({vip})=> vip? '#FA65E1' : '#F0D0FA'};
font-size: 18px;
`;

export const Title = styled.h2`
color: #333;
font-size: 50px;
`;

export const Description = styled.p`
color: #555;
`
