import ThemeContext from '../../context/ThemeContext'
import Menu from '../Menu'
import {
  ContactUs,
  ContactUsImage,
  ContactUsImageContainer,
  ContactUsText,
  ContactUsTitle,
  SideNavbarSection,
} from './styledComponents'

const facebookImg =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png'

const twitterImg =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png'

const linkedInImg =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png'

let isDarkMode

const SideNavbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      isDarkMode = isDark

      return (
        <SideNavbarSection themeColor={isDarkMode}>
          <Menu />
          <ContactUs>
            <ContactUsTitle themeColor={isDarkMode}>Contact Us</ContactUsTitle>
            <ContactUsImageContainer>
              <ContactUsImage src={facebookImg} alt="facebook logo" />
              <ContactUsImage src={twitterImg} alt="twitter logo" />
              <ContactUsImage src={linkedInImg} alt="linkedIn logo" />
            </ContactUsImageContainer>
            <ContactUsText themeColor={isDarkMode}>
              Enjoy! Now to see your channels and recommendations !
            </ContactUsText>
          </ContactUs>
        </SideNavbarSection>
      )
    }}
  </ThemeContext.Consumer>
)

export default SideNavbar
