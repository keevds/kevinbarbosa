import Link from 'next/link'
import styled from 'styled-components'
import { Instagram } from '@styled-icons/bootstrap/Instagram'

// TODO: Muting error, fix as soon as zeit/next.js/issues/7915 resolved
const originalError = console.error;

console.error = (...args) => {
  if (/Warning.*Function components cannot be given refs/.test(args[0])) {
    return;
  }
  originalError.call(console, ...args);
};

const Container = styled.div `
  margin: 50px 0px;
  text-align: center;

  @media (min-width: 768px) {
    display:flex;
    justify-content: space-between;
    text-align: start;

    margin: 50px 285px;
  }
  `
const NavLinks = styled.nav `
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      flex-direction: row;
    }
`
const Nome = styled.div ``
const Nav = styled.div ``

const Insta = styled(Instagram) `
  color: black;
  width:32px;
  cursor: pointer;

  :hover {
    opacity: 0.6;
  }

  @media (max-width:768px) {
    display: none;
  }
`
const Name = styled.a `
  text-decoration: none;
  color: black;
  font-weight: 700;

  :hover {
    opacity: 0.6;
  }

  @media (min-width: 768px) {
    margin-left: 24px;
  }
`


const StyledLink = styled.a `
  cursor: pointer;
  :hover {
      text-decoration: underline;
    }
  @media (min-width: 768px) {
    margin-left: 48px;
  }
` 
export default function Navbar () {
  return (
    <Container>
      <Nome>
        <Link href="https://www.instagram.com/kevinbbarbosa/">
          <a target="_blank">
            <Insta/>
          </a>
        </Link>
        <Name href="/">
          Kevin Barbosa
        </Name>
      </Nome>
      <Nav>
        <NavLinks>
          <Link href="/">
            <StyledLink>work</StyledLink>
          </Link>
          <Link href="/">
            <StyledLink>contact</StyledLink>
          </Link>
        </NavLinks>
      </Nav>
    </Container>

  )
}