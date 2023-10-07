import styled from 'styled-components'

export const TrendingVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => (props.themeColor ? '#0f0f0f' : '#f9f9f9')};

  @media (min-width: 768px) {
    flex-direction: row;
    width: 100%;
  }
`

export const VideosBanner = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 25px;
  width: 100%;

  background-color: ${props => (props.themeColor ? '#181818' : '#f1f1f1')};
`
export const VideoBannerIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px;
  background-color: ${props => (props.themeColor ? '#000000' : '#f1f5f9')};
  border-radius: 50%;
  margin-right: 15px;
`

export const VideoBannerHeading = styled.h1`
  color: ${props => (props.themeColor ? '#f1f1f1' : '#1e293b')};
  font-size: 24px;
`
