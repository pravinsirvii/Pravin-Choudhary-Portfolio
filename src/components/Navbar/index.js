import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent'

import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import Logo from '../../images/MainLogo.png'
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <img src={Logo} alt="logo-image" style={{width:"50px" ,height:"50px"}} />

             <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
     
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#certificates'>Certificates</NavLink>
          <NavLink href='#education'>Education</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#contacts'>Contact</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
          
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
              <MobileLink href='#certificates' onClick={() => {
              setIsOpen(!isOpen)
              }}>Certificates</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>
            <MobileLink href='#contacts' onClick={() => {
              setIsOpen(!isOpen)
            }}>Contact</MobileLink>
              <GitHubButton
                style={{
                  padding: '10px 16px',
                  background: 'linear-gradient(135deg, red, green)', // Linear gradient of red and green
                  color: 'white', // Text color set to white
                  width: 'max-content'
                }}
                href={Bio.github}
                target="_blank"
              >
                Github Profile
              </GitHubButton>

          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar;