import {formatDistanceToNowStrict} from 'date-fns'
import {
  VideoChannelImage,
  VideoContent,
  VideoData,
  VideoInfo,
  VideoLink,
  VideoText,
  VideoThumbnailImage,
  VideoTitle,
  VideoViewsContainer,
  VideosListItem,
} from './styledComponents'

const VideoCard = props => {
  const {videoDetails, isDarkMode} = props
  const {
    id,
    thumbnailUrl,
    title,
    channel,
    viewCount,
    publishedAt,
  } = videoDetails

  const videoDate = formatDistanceToNowStrict(new Date(publishedAt))

  return (
    <VideosListItem>
      <VideoLink to={`/videos/${id}`}>
        <VideoThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
        <VideoContent>
          <VideoChannelImage src={channel.profileImageUrl} alt={channel.name} />
          <VideoInfo>
            <VideoTitle themeColor={isDarkMode}>{title}</VideoTitle>
            <VideoData>
              <VideoText themeColor={isDarkMode}>{channel.name}</VideoText>
              <VideoViewsContainer>
                <VideoText>{viewCount}</VideoText>
                <VideoText>{videoDate}</VideoText>
              </VideoViewsContainer>
            </VideoData>
          </VideoInfo>
        </VideoContent>
      </VideoLink>
    </VideosListItem>
  )
}

export default VideoCard
