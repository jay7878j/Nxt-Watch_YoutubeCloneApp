import {withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import ThemeContext from '../../context/ThemeContext'
import {
  MenuList,
  MenuListItem,
  MenuListItemLink,
  MenuText,
} from './styledComponents'

const menuObject = [
  {
    id: 1,
    displayText: 'Home',
    menuIcon: <AiFillHome size="20px" />,
    path: '/',
  },
  {
    id: 2,
    displayText: 'Trending',
    menuIcon: <HiFire size="20px" />,
    path: '/trending',
  },
  {
    id: 3,
    displayText: 'Gaming',
    menuIcon: <SiYoutubegaming size="20px" />,
    path: '/gaming',
  },
  {
    id: 4,
    displayText: 'Saved Videos',
    menuIcon: <MdPlaylistAdd size="24px" />,
    path: '/saved-videos',
  },
]

const Menu = props => {
  const {location} = props
  console.log(location)

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <MenuList>
            {menuObject.map(each => {
              const {id, displayText, menuIcon, path} = each
              const themeCheck = isDark ? '#ffffff' : '#0f0f0f'
              const isActiveTab =
                location.pathname === path ? '#ff0000' : themeCheck

              return (
                <MenuListItem key={id}>
                  <MenuListItemLink to={path} iconactive={isActiveTab}>
                    {menuIcon}
                    <MenuText themeColor={isActiveTab}>{displayText}</MenuText>
                  </MenuListItemLink>
                </MenuListItem>
              )
            })}
          </MenuList>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Menu)
