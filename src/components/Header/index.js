import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {HiMoon} from 'react-icons/hi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {FaSun} from 'react-icons/fa'
import {RiCloseFill} from 'react-icons/ri'
import {
  HeaderNavbar,
  NavbarWebsiteLogo,
  NavbarLinksList,
  NavbarLinksListItem,
  IconButton,
  ProfileImage,
  LogoutButton,
  PopupLogoutContainer,
  PopupText,
  PopupLogoutButtonContainer,
  PopupLogoutButton,
  PopUpMenuContainer,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'
import Menu from '../Menu'

let isDarkMode
let onThemeChange
let themeIcon

const websiteLogoLight =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
const websiteLogoDark =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

const profileLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png'

const Header = props => {
  const onLogoutClick = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  //   Logout Popup Section
  const popupLogout = close => (
    <PopupLogoutContainer themeColor={isDarkMode}>
      <PopupText themeColor={isDarkMode}>
        Are you sure, you want to logout?
      </PopupText>
      <PopupLogoutButtonContainer>
        <PopupLogoutButton onClick={() => close()}>Cancel</PopupLogoutButton>
        <PopupLogoutButton
          confirm
          onClick={() => {
            onLogoutClick()
          }}
        >
          Confirm
        </PopupLogoutButton>
      </PopupLogoutButtonContainer>
    </PopupLogoutContainer>
  )

  //   Small Devices Navbar Links
  const smNavbarLinks = () => {
    // Popup Menu Container
    const popupMenuItem = () => (
      <NavbarLinksListItem>
        <Popup
          modal
          trigger={
            <IconButton type="button" themeColor={isDarkMode}>
              <GiHamburgerMenu size="22px" />
            </IconButton>
          }
        >
          {close => (
            <PopUpMenuContainer themeColor={isDarkMode}>
              <IconButton
                type="button"
                onClick={() => close()}
                themeColor={isDarkMode}
                align
              >
                <RiCloseFill size="30px" />
              </IconButton>
              <Menu />
            </PopUpMenuContainer>
          )}
        </Popup>
      </NavbarLinksListItem>
    )

    return (
      <NavbarLinksList display="true">
        <NavbarLinksListItem>
          <IconButton onClick={() => onThemeChange()} themeColor={isDarkMode}>
            {themeIcon}
          </IconButton>
        </NavbarLinksListItem>
        {popupMenuItem()}
        <NavbarLinksListItem>
          <Popup
            modal
            trigger={
              <IconButton
                themeColor={isDarkMode}
                type="button"
                onClick={onLogoutClick}
              >
                <FiLogOut size="22px" />
              </IconButton>
            }
          >
            {close => popupLogout(close)}
          </Popup>
        </NavbarLinksListItem>
      </NavbarLinksList>
    )
  }

  //   Medium Devices Navbar Links
  const mdNavbarLinks = () => (
    <NavbarLinksList>
      <NavbarLinksListItem>
        <IconButton onClick={() => onThemeChange()} themeColor={isDarkMode}>
          {themeIcon}
        </IconButton>
      </NavbarLinksListItem>
      <NavbarLinksListItem>
        <ProfileImage src={profileLogo} alt="user profile" />
      </NavbarLinksListItem>
      <NavbarLinksListItem>
        <Popup
          modal
          trigger={
            <LogoutButton themeColor={isDarkMode} type="button">
              Logout
            </LogoutButton>
          }
        >
          {close => popupLogout(close)}
        </Popup>
      </NavbarLinksListItem>
    </NavbarLinksList>
  )

  //   Header Component
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark, changeTheme} = value
        isDarkMode = isDark
        const websiteLogo = isDarkMode ? websiteLogoDark : websiteLogoLight
        onThemeChange = changeTheme
        themeIcon = isDarkMode ? <FaSun size="24px" /> : <HiMoon size="24px" />

        return (
          <HeaderNavbar themeColor={isDarkMode}>
            <Link to="/">
              <NavbarWebsiteLogo src={websiteLogo} alt="website logo" />
            </Link>
            {smNavbarLinks()}
            {mdNavbarLinks()}
          </HeaderNavbar>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)
