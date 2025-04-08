import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const CourseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 60px;
  background-color: rgba(220, 119, 193, 0.76);
`;

export const Title = styled.div`
 font-size: 40px;
 font-weight: bold;
 color:rgb(253, 247, 62);
 margin-bottom: 40px;
`;

export const TopicList = styled.ul`
list-style: none;
padding: 0;
width: 80%;
max-width: 800px;
`;

export const TopicItem = styled.li`
padding: 15px 20px;
margin: 10px 0;
background-color: rgba(255, 255, 255, 0.2);
border-radius: 8px;
color: white;
font-size: 18px;
`;

export const BackLink = styled(NavLink)`
margin-top: 40px;
padding: 12px 30px;
background-color: rgb(253, 247, 62);
color: #000;
text-decoration: none;
border-radius: 4px;
font-weight: bold;
font-size: 18px;

&:hover {
    background: white;
}
`;