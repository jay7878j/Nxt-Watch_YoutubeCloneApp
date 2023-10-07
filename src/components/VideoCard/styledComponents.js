import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const VideosListItem = styled.li`
  @media (min-width: 768px) {
    width: 340px;
    flex-shrink: 0;
  }
`

export const VideoLink = styled(Link)`
  display: flex;
  flex-direction: column;
`

export const VideoThumbnailImage = styled.img`
  height: 220px;

  @media (min-width: 768px) {
    height: 200px;
  }
`

export const VideoContent = styled.div`
  display: flex;
  padding: 10px;
  column-gap: 10px;
`

export const VideoChannelImage = styled.img`
  margin-top: 7px;
  height: 35px;
`

export const VideoInfo = styled.div``

export const VideoTitle = styled.p`
  font-size: 15px;
  color: ${props => (props.themeColor ? '#ffffff' : '#000000')};
`

export const VideoData = styled.div`
  display: flex;
  margin-top: 7px;

  @media (min-width: 768px) {
    flex-direction: column;
  }
`

export const VideoChannelName = styled.p`
  font-size: 16px;
  color: ${props => (props.themeColor ? '#ffffff' : '#000000')};
`

export const VideoViewsContainer = styled.div`
  display: flex;
  margin-left: 7px;
  column-gap: 5px;
  align-items: center;

  @media (min-width: 768px) {
    margin: 0px;
    margin-top: 5px;
  }
`
export const VideoInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`

export const VideoText = styled.p`
  font-size: 14px;
  color: #7e858e;
`
