import {HiFire} from 'react-icons/hi'
import {formatDistanceToNowStrict} from 'date-fns'

import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideNavbar from '../SideNavbar'
import {
  SavedVideosContainer,
  EmptySavedVideosContainer,
  EmptySavedVideosImage,
  EmptySavedVideosHeading,
  EmptySavedVideosText,
  SavedVideosListItem,
  SavedVideosLinkItem,
  SavedVideosSection,
  SavedVideosImage,
  SavedVideosInfoContainer,
  SavedVideosChannelImage,
  SavedVideosList,
} from './styledComponents'
import {
  VideosBanner,
  VideoBannerIconContainer,
  VideoBannerHeading,
} from '../TrendingVideos/styledComponents'
import {
  VideoTitle,
  VideoText,
  VideoInfoSection,
} from '../VideoCard/styledComponents'

let isDarkMode
let videosList

const SavedVideos = () => {
  // Saved Video List View
  const videosListContainer = () => (
    <SavedVideosList>
      {videosList.map(eachVideo => {
        const {
          id,
          channel,
          publishedAt,
          thumbnailUrl,
          title,
          viewCount,
        } = eachVideo
        const {name, profileImageUrl} = channel
        const videoDate = formatDistanceToNowStrict(new Date(publishedAt))

        return (
          <SavedVideosListItem key={eachVideo.id}>
            <SavedVideosLinkItem to={`/videos/${id}`}>
              <SavedVideosImage src={thumbnailUrl} alt="video thumbnail" />
              <SavedVideosInfoContainer>
                <SavedVideosChannelImage
                  src={profileImageUrl}
                  alt="channel logo"
                />
                <VideoInfoSection>
                  <VideoTitle themeColor={isDarkMode}>{title}</VideoTitle>
                  <VideoText
                    themeColor={isDarkMode}
                  >{`${name} . ${viewCount} views . ${videoDate} ago`}</VideoText>
                </VideoInfoSection>
              </SavedVideosInfoContainer>
            </SavedVideosLinkItem>
          </SavedVideosListItem>
        )
      })}
    </SavedVideosList>
  )

  //   Saved Videos Banner List
  const savedVideosBannerSection = () => (
    <VideosBanner themeColor={isDarkMode}>
      <VideoBannerIconContainer themeColor={isDarkMode}>
        <HiFire color="red" size="24px" />
      </VideoBannerIconContainer>
      <VideoBannerHeading themeColor={isDarkMode}>
        Saved Videos
      </VideoBannerHeading>
    </VideosBanner>
  )

  const SavedVideosSectionContainer = () => (
    <SavedVideosSection>
      {savedVideosBannerSection()}
      {videosListContainer()}
    </SavedVideosSection>
  )

  //   Empty SavedVideos View
  const emptySavedVideosContainer = () => {
    const noSavedVideoImg =
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png '

    return (
      <EmptySavedVideosContainer>
        <EmptySavedVideosImage src={noSavedVideoImg} alt="no saved videos" />
        <EmptySavedVideosHeading themeColor={isDarkMode}>
          No saved videos found
        </EmptySavedVideosHeading>
        <EmptySavedVideosText>
          You can save your videos while watching them
        </EmptySavedVideosText>
      </EmptySavedVideosContainer>
    )
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark, savedVideosList} = value
        isDarkMode = isDark
        videosList = savedVideosList

        const isVideoListEmpty = savedVideosList.length === 0

        return (
          <>
            <Header />
            <SavedVideosContainer themeColor={isDarkMode}>
              <SideNavbar />
              {isVideoListEmpty
                ? emptySavedVideosContainer()
                : SavedVideosSectionContainer()}
            </SavedVideosContainer>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SavedVideos
