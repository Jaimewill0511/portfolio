import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillTwitterSquare, AiFillLinkedin } from 'react-icons/ai';


import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{display: 'flex', alignItems: "center", color: "white", marginBottom: '20px'}}    >
          <img src='/images/icon.png' height='40rem' weight ='40rem'/>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons  target="_blank" href="https://github.com/Jaimewill0511">
      <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons  target="_blank" href="https://www.linkedin.com/in/william-binitie-45aa45138/">
      <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons  target="_blank" href="https://Twitter.Com/JaimeofLagos">
      <AiFillTwitterSquare size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
