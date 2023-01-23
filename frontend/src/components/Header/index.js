import React from 'react'
import { Logo, HeaderContainer } from './styles'

import Icone from '../../assets/Copilot.png'

function Header(props) {
  return (
    <>
      <HeaderContainer>
        <Logo src={Icone} alt="PituTools - Encurtador de URL" />
        <h1>PituTools</h1>
        <p>{props.children}</p>
      </HeaderContainer>
    </>
  )
}

export default Header
