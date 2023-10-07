import styled from 'styled-components'

export const NotFoundMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-bottom: 30px;
  text-align: center;
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#ffffff')};
`

export const NotFoundImg = styled.img`
  height: 250px;

  @media (min-width: 768px) {
    height: 350px;
  }
`

export const NotFoundHeading = styled.h1`
  color: ${props => (props.textColor ? '#ffffff' : '#1e293b')};
  font-size: 22px;
  margin-top: 10px;
  margin-bottom: 10px;
`
export const NotFoundText = styled.p`
  color: #7e858e;
  font-size: 16px;
`
