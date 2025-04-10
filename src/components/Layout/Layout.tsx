import { v4 } from "uuid"
import { Link, useNavigate } from "react-router-dom"

import {
  LayoutComponent, 
  Header, 
  LogoText, 
  Nav, 
  Main, 
  Footer,
  StyledNavLink,
  LogoImage,
  ButtonContainer
} from "./styles"
import { LayoutProps, NavLinkObj } from "./types"
import { navLinksData } from "./data"
import Logo from '../../assets/avatar.jpg'
import Button from "../Button/Button"


function Layout({children} : LayoutProps) {
const navigate = useNavigate();

const goBack = ()=>{
    //при вызове функции navigate, если добавить в качестве атрибута -1,
  //тогда при выполнении функции нас всегда будет возвращать на предыдущую открытую страницу
  navigate(-1)
}

  const navLinks = navLinksData.map((navLink: NavLinkObj) => {
    return (
      <StyledNavLink key={v4()} to={navLink.to} style={
        ({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })
      }>{navLink.linkName}</StyledNavLink>
    )
  })
  
  return (
    <LayoutComponent>
      <Header>
        <Link to='/'>
          <LogoImage src={Logo}/>
          </Link>
        <Nav>
          {/* NavLink - это компонент библиотеки, который добавляет ссылку на страницу 
          по маршруту через prop to */}
             {/* <StyledNavLink to='/' style={
            ({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })
          }>Home</StyledNavLink>
          <StyledNavLink to='/about' style={
            ({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })
          }>About</StyledNavLink>
          <StyledNavLink to='/course' style={
            ({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })
          }>Course</StyledNavLink>
          <StyledNavLink to='/courseLesson' style={
            ({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })
          }>CourseLesson</StyledNavLink> */}
          {/* Через константу  navLinks создаем массив с объектами и в </Nav> вставляем лишь navLinks*/}

          {navLinks}
        </Nav>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <ButtonContainer>
        <Button name="<-" onClick={goBack}/>
        </ButtonContainer>
        <LogoText>Company name</LogoText>
      </Footer>
    </LayoutComponent>
  )
}
export default Layout;