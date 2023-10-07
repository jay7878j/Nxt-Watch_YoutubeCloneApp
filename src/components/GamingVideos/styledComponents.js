import styled from 'styled-components'

export const GamingRoute = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => (props.themeColor ? '#0f0f0f' : '#f9f9f9')};

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const GamingVideosList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-self: center;
  width: 90%;
  margin-top: 30px;
  gap: 20px;
  justify-content: space-between;
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`

export const GamingVideoListItem = styled.li`
  width: 40vw;

  @media (min-width: 768px) {
    width: 14vw;
  }
`

export const GamingImage = styled.img`
  width: 100%;
  border-radius: 15px;
`

export const GameTitleText = styled.p`
  color: ${props => (props.themeColor ? '#f1f1f1' : '#000000')};
  font-weight: 500;
  font-size: 16px;
  margin-top: 10px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`

export const GameDataText = styled.p`
  color: #7e858e;
  font-weight: 500;
  font-size: 14px;
  margin-top: 7px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`
