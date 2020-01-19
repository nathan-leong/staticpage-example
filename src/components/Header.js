import React, {useState} from 'react'
import logo from '../images/logo.png';
import hamburger from '../images/hamburger.svg';

const MenuList = props => (
  <div className={props.expandMenu ? 'expandedMenuList' : 'menuList'}>
    <a href="/about-us" className={props.expandMenu ? 'expandedMenuItem' : 'menuItems'}><li>About Us</li></a>
    <a href="/relie-check/what-is-relie" className={props.expandMenu ? 'expandedMenuItem' : 'menuItems'}><li>Relie Check</li></a>
    <a href="/legals" className={props.expandMenu ? 'expandedMenuItem' : 'menuItems'}><li>Legals</li></a>
    <a href="/relie-check/jobs" className={props.expandMenu ? 'expandedMenuItem' : 'menuItems'}><li>Jobs</li></a>
  </div>
)
const Header = () => {
  const [expandMenu, setExpandMenu] = useState(false)
  return(
    <div className='headerWrapper'>
      <div className='header'>
        <a href="/"><img src={logo} className='logo'/></a>
        <div className='shrinkHide'>
          <MenuList/>
          <button onClick={() => window.open('#', "_blank")} className="headerLoginButton">Login to Relie</button>
        </div>
        <div className='expandHide'>
          <a onClick={()=> setExpandMenu(!expandMenu)}><img src={hamburger} className='hamburgerMenu'/></a>
          {expandMenu && <MenuList expandMenu={expandMenu}/>}
        </div>
      </div>
    </div>
  )
}

export default Header