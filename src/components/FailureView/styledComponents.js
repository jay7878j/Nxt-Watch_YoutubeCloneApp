import styled from 'styled-components'

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  row-gap: 15px;

  @media (min-width: 768px) {
    margin-top: 45px;
  }
`

export const FailureViewImage = styled.img`
  height: 250px;

  @media (min-width: 768px) {
    height: 280px;
  }
`

export const FailureViewHeading = styled.h1`
  font-size: 22px;
  color: ${props => (props.themeColor ? '#ffffff' : '#000000')};
  text-align: center;
`

export const FailureViewText = styled.p`
  font-size: 16px;
  color: ${props => (props.themeColor ? '#ffffff' : '#000000')};
  text-align: center;
`

export const FailureViewButton = styled.button`
  width: 110px;
  height: 40px;
  background-color: #4f46e5;
  border-radius: 5px;
  color: #ffffff;
  font-size: 16px;
  border: none;
  outline: none;
  cursor: pointer;
`
