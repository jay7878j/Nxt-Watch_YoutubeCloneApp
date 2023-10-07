import {
  NotFoundMainContainer,
  NotFoundImg,
  NotFoundHeading,
  NotFoundText,
} from './styledComponents'
import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value

      return (
        <>
          <Header />
          <NotFoundMainContainer bgColor={isDark}>
            <NotFoundImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
              alt="not found"
            />
            <NotFoundHeading textColor={isDark}>Page Not Found</NotFoundHeading>
            <NotFoundText>
              we are sorry, the page you requested could not be found.
            </NotFoundText>
          </NotFoundMainContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
