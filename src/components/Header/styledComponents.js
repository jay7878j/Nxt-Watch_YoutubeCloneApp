import styled from 'styled-components'

export const HeaderNavbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8vh;
  background-color: ${props => (props.themeColor ? '#0f0f0f' : '#ffffff')};
  position: fixed;
  width: 100%;
`
export const NavbarWebsiteLogo = styled.img`
  width: 90px;
  margin-left: 15px;

  @media (min-width: 768px) {
    margin-left: 25px;
    width: 110px;
  }
`

export const NavbarLinksList = styled.ul`
  display: ${props => (props.display ? 'flex' : 'none')};
  align-items: center;
  column-gap: 20px;
  margin-right: 20px;

  @media (min-width: 768px) {
    margin-right: 55px;
    display: ${props => (props.display ? 'none' : 'flex')};
  }
`
export const NavbarLinksListItem = styled.li``

export const IconButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background: none;
  color: ${props => (props.themeColor ? '#ffffff' : '#1e293b')};
  align-self: ${props => props.align && 'flex-end'};
  margin: ${props => props.align && '16px 60px 0px 0px'};
`

export const PopUpMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  background-color: ${props => (props.themeColor ? '#0f0f0f' : '#ffffff')};
`

export const ProfileImage = styled.img`
  height: 25px;
  cursor: pointer;
`

export const LogoutButton = styled.button`
  width: 110px;
  height: 40px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #4f46e5;
  color: ${props => (props.themeColor ? '#4f46e5' : '#ffffff')};
  background-color: ${props => (props.themeColor ? 'transparent' : '#4f46e5')};
  cursor: pointer;
`

export const PopupLogoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 200px;
  padding: 20px;
  margin: auto;
  border-radius: 8px;
  box-shadow: 0px 0px 11px #000000;
  background-color: ${props => (props.themeColor ? '#231f20' : '#ffffff')};

  @media (min-width: 768px) {
    width: 400px;
  }
`

export const PopupText = styled.p`
  color: ${props => (props.themeColor ? '#ffffff' : '#1e293b')};
  font-size: 22px;
  text-align: center;
  margin-bottom: 40px;
`

export const PopupLogoutButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-self: center;
  gap: 35px;
`

export const PopupLogoutButton = styled.button`
  color: ${props => (props.confirm ? '#ffffff' : 'gray')};
  background-color: ${props => (props.confirm ? '#3b82f6' : 'transparent')};
  border: ${props => (props.confirm ? 'none' : '1px solid gray')};
  width: 110px;
  height: 40px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
`
