import styled from 'styled-components'

export const LoginFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => (props.themeColor ? '#0f0f0f' : '#ffffff')};
`

export const LoginCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.themeColor ? '#0f0f0f' : '#ffffff')};
  box-shadow: 0px 0px 11px #000000;
  border-radius: 10px;
  padding: 20px 15px 30px 15px;
  width: 85%;
  height: 400px;

  @media (min-width: 768px) {
    width: 350px;
  }
`

export const WebsiteLogo = styled.img`
  width: 120px;
  align-self: center;
`

export const FormElement = styled.form`
  margin-top: 15px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  margin-top: 22px;
`
export const InputLabel = styled.label`
  font-size: 14px;
  font-weight: ${props => (props.themeColor ? '400' : '600')};
  color: ${props => (props.themeColor ? '#ffffff' : '#1e293b')};
  font-weight: ${props => (props.themeColor ? '400' : '600')};

  @media (min-width: 768px) {
    font-size: 16px;
  }
`
export const InputBox = styled.input`
  height: 40px;
  padding: 10px;
  outline: none;
  border: none;
  font-size: 14px;
  border-radius: 5px;
  color: ${props => (props.themeColor ? '#ffffff' : '#1e293b')};
  font-weight: ${props => (props.themeColor ? '400' : '600')};
  background-color: ${props => (props.themeColor ? '#181818' : '#f1f1f1')};

  @media (min-width: 768px) {
    font-size: 16px;
  }
`
export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
  margin-top: 10px;
  margin-bottom: 25px;
`
export const InputCheckBox = styled.input`
  width: 14px;
  height: 14px;
`
export const LoginButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`

export const LoginButton = styled.button`
  width: 100%;
  height: 40px;
  outline: none;
  border: none;
  border-radius: 7px;
  background-color: #4f46e5;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
`

export const ErrorMsgText = styled.p`
  color: #ff0000;
  font-weight: ${props => (props.textColor ? '400' : '500')};
  text-transform: capitalize;
`
