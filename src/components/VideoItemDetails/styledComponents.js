import styled from 'styled-components'

export const VideoItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9')};

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const VideoPlaySection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8vh;
  width: 100%;
  @media (min-width: 768px) {
    padding: 25px;
    margin-left: 250px;
  }
`
export const VideoDetailsCard = styled.div`
  @media (min-width: 768px) {
    width: 60%;
    align-self: center;
  }
`

export const VideoPlayer = styled.div`
  height: 220px;

  @media (min-width: 768px) {
    height: 400px;
  }
`
export const VideoInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 10px;
  align-self: center;
  margin-top: 20px;
`

export const VideoTitleText = styled.p`
  color: ${props => (props.textColor ? '#ffffff' : '#1e293b')};
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 15px;
`
export const VideoDataContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const VideoDataText = styled.p`
  color: #7e858e;
  font-weight: 500;
  font-size: 15px;
`
export const HorizontalLine = styled.hr`
  margin: 15px 0px;
`

export const VideoChannelInfo = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
`
export const ChannelImg = styled.img`
  height: 40px;
  align-self: center;
`
export const ChannelData = styled.div`
  margin-left: 15px;
`
export const ChannelName = styled.p`
  color: ${props => (props.textColor ? '#ffffff' : '#1e293b')};
  margin-bottom: 7px;
`
export const ChannelSubscribers = styled.p`
  color: #7e858e;
`
export const ChannelDescription = styled.p`
  color: ${props => (props.textColor ? '#ffffff' : '#1e293b')};
  font-size: 15px;
`

export const UserInteractionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;

  @media (min-width: 768px) {
    margin: 0px;
  }
`

export const InteractionButton = styled.button`
  color: ${props => (props.textColor ? '#2563eb ' : '#64748b ')};
  font-size: 18px;
  background: none;
  border: none;
  display: flex;
  gap: 5px;
  align-items: center;
  margin-right: 15px;
`
