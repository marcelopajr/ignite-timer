import { NavLink } from 'react-router-dom'
import { Timer, Scroll } from 'phosphor-react'
import LogoIgnite from '../../assets/logo-ignite.svg'

import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoIgnite} alt="" />

      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
