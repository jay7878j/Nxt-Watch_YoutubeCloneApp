import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  LoginFormContainer,
  LoginCard,
  WebsiteLogo,
  FormElement,
  InputContainer,
  InputLabel,
  InputBox,
  ShowPasswordContainer,
  InputCheckBox,
  LoginButtonContainer,
  LoginButton,
  ErrorMsgText,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const websiteLogoLight =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
const websiteLogoDark =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

let isDarkMode

class LoginForm extends Component {
  state = {
    username: 'rahul',
    password: 'rahul@2021',
    isLoginFailed: false,
    errorMsg: '',
    showPassword: false,
  }

  //   On Successful user login
  onSuccessfulLogin = token => {
    const {history} = this.props
    Cookies.set('jwt_token', token, {expires: 2})
    history.replace('/')
  }

  //   On failure to login
  onLoginFailure = errorMsg => {
    this.setState({
      isLoginFailed: true,
      errorMsg,
    })
  }

  //   On Login form submit
  onFormSubmit = async event => {
    const {username, password} = this.state
    event.preventDefault()
    const loginApi = 'https://apis.ccbp.in/login'
    const loginUserDetails = {
      username,
      password,
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(loginUserDetails),
    }

    const response = await fetch(loginApi, options)
    const data = await response.json()

    if (response.ok) {
      this.onSuccessfulLogin(data.jwt_token)
    } else {
      this.onLoginFailure(data.error_msg)
    }
  }

  //   Username Field
  usernameContainer = () => {
    const {username} = this.state

    const onUsernameChange = event => {
      this.setState({username: event.target.value})
    }

    return (
      <InputContainer>
        <InputLabel htmlFor="username" themeColor={isDarkMode}>
          USERNAME
        </InputLabel>
        <InputBox
          type="text"
          id="username"
          value={username}
          placeholder="Enter Username"
          onChange={onUsernameChange}
          themeColor={isDarkMode}
          required
        />
      </InputContainer>
    )
  }

  //   Password Field
  passwordContainer = () => {
    const {password, showPassword} = this.state
    const passwordType = showPassword ? 'text' : 'password'

    const onPasswordChange = event => {
      this.setState({password: event.target.value})
    }

    return (
      <InputContainer>
        <InputLabel htmlFor="password" themeColor={isDarkMode}>
          PASSWORD
        </InputLabel>
        <InputBox
          type={passwordType}
          id="password"
          value={password}
          placeholder="Enter Password"
          onChange={onPasswordChange}
          themeColor={isDarkMode}
          required
        />
      </InputContainer>
    )
  }

  //   Show Password Input Field
  showPasswordContainer = () => {
    const {showPassword} = this.state

    const onCheckboxClick = () => {
      this.setState(prev => ({
        showPassword: !prev.showPassword,
      }))
    }

    return (
      <ShowPasswordContainer>
        <InputCheckBox
          type="checkbox"
          id="checkbox"
          onClick={onCheckboxClick}
          value={showPassword}
        />
        <InputLabel htmlFor="checkbox" themeColor={isDarkMode}>
          Show Password
        </InputLabel>
      </ShowPasswordContainer>
    )
  }

  //   Login Button Field
  loginButtonContainer = () => {
    const {errorMsg, isLoginFailed} = this.state

    return (
      <LoginButtonContainer>
        <LoginButton themeColor={isDarkMode} type="submit">
          Login
        </LoginButton>
        {isLoginFailed && <ErrorMsgText>*{errorMsg}</ErrorMsgText>}
      </LoginButtonContainer>
    )
  }

  //   LoginForm Component
  render() {
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          isDarkMode = isDark
          const websiteLogo = isDarkMode ? websiteLogoDark : websiteLogoLight

          return (
            <LoginFormContainer themeColor={isDarkMode}>
              <LoginCard themeColor={isDark}>
                <WebsiteLogo src={websiteLogo} alt="website logo" />
                <FormElement onSubmit={this.onFormSubmit}>
                  {this.usernameContainer()}
                  {this.passwordContainer()}
                  {this.showPasswordContainer()}
                  {this.loginButtonContainer()}
                </FormElement>
              </LoginCard>
            </LoginFormContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default LoginForm
