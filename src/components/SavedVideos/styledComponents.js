import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => (props.themeColor ? '#0f0f0f' : '#f9f9f9')};

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const EmptySavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 60vh;
  align-self: center;
  justify-content: center;
  align-items: center;
  margin-top: 8vh;
  @media (min-width: 768px) {
    margin-left: 250px;
  }
`

export const EmptySavedVideosImage = styled.img`
  height: 250px;
  @media (min-width: 768px) {
    height: 300px;
  }
`

export const EmptySavedVideosHeading = styled.h1`
  color: ${props => (props.themeColor ? '#ffffff' : '#1e293b')};
  font-size: 22px;
  margin-top: 15px;
  margin-bottom: 5px;
  text-align: center;
`

export const EmptySavedVideosText = styled.p`
  color: #7e858e;
  font-size: 16px;
  text-align: center;
`

export const SavedVideosSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 8vh;
  @media (min-width: 768px) {
    margin-left: 250px;
  }
`

export const SavedVideosList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  @media (min-width: 768px) {
    padding: 20px;
    margin: 0px;
  }
`

export const SavedVideosListItem = styled.li`
  margin-bottom: 20px;
`

export const SavedVideosLinkItem = styled(Link)`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`
export const SavedVideosImage = styled.img`
  height: 220px;
  @media (min-width: 768px) {
    width: 400px;
    height: 230px;
  }
`

export const SavedVideosInfoContainer = styled.div`
  padding: 15px;
  display: flex;
`

export const SavedVideosChannelImage = styled.img`
  height: 35px;
  margin-right: 15px;
  align-self: flex-start;

  @media (min-width: 768px) {
    display: none;
  }
`
