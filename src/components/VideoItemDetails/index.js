import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {formatDistanceToNowStrict} from 'date-fns'

import {BiDislike, BiLike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'

import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'

import {
  VideoItemContainer,
  VideoPlaySection,
  VideoPlayer,
  VideoInformationContainer,
  VideoTitleText,
  VideoDataText,
  VideoChannelInfo,
  ChannelImg,
  ChannelData,
  ChannelName,
  ChannelSubscribers,
  ChannelDescription,
  UserInteractionContainer,
  HorizontalLine,
  VideoDataContainer,
  VideoDetailsCard,
  InteractionButton,
} from './styledComponents'
import SideNavbar from '../SideNavbar'
import LoadingView from '../LoadingView'
import FailureView from '../FailureView'

const apiConstraints = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

let isDarkMode
let saveVideos
let likeVideos
let dislikeVideos
let likedVideosData
let dislikeVideosData
let savedVideosListData

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiConstraints.initial,
    videoDetails: {},
  }

  componentDidMount() {
    this.getVideoItemDetailsData()
  }

  //   Video Item Details Data
  getVideoItemDetailsData = async () => {
    this.setState({
      apiStatus: apiConstraints.inProgress,
    })

    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      // console.log(data.video_details)
      const videoDetails = {
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        description: data.video_details.description,
        id: data.video_details.id,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
        isVideoSaved: false,
        isLike: false,
        isDislike: false,
      }
      //   console.log(videoDetails)
      this.setState({videoDetails, apiStatus: apiConstraints.success})
    } else {
      this.setState({apiStatus: apiConstraints.failure})
    }
  }

  //   Video player
  getVideoPlayerCard = () => {
    const {videoDetails} = this.state
    const {videoUrl} = videoDetails

    return (
      <VideoPlayer>
        <ReactPlayer url={videoUrl} controls width="100%" height="100%" />
      </VideoPlayer>
    )
  }

  //   User Interaction Container : Like & DisLike
  userInteractionContainer = () => {
    const {videoDetails} = this.state
    // console.log(videoDetails)

    const likedObject = likedVideosData.find(
      each => each.id === videoDetails.id,
    )
    const dislikedObject = dislikeVideosData.find(
      each => each.id === videoDetails.id,
    )
    const savedObject = savedVideosListData.find(
      each => each.id === videoDetails.id,
    )

    const like = likedObject === undefined ? false : likedObject.isLike
    const dislike =
      dislikedObject === undefined ? false : dislikedObject.isDislike
    const save = savedObject === undefined ? false : savedObject.isVideoSaved
    const saveText = save ? 'saved' : 'save'

    const onLikeClick = () => {
      likeVideos(videoDetails)
    }

    const onDislikeClick = () => {
      dislikeVideos(videoDetails)
    }

    const onSave = () => {
      saveVideos(videoDetails)
    }

    return (
      <UserInteractionContainer>
        <InteractionButton type="button" onClick={onLikeClick} textColor={like}>
          <BiLike />
          Like
        </InteractionButton>
        <InteractionButton
          type="button"
          onClick={onDislikeClick}
          textColor={dislike}
        >
          <BiDislike />
          Dislike
        </InteractionButton>
        <InteractionButton type="button" onClick={onSave} textColor={save}>
          <MdPlaylistAdd />
          {saveText}
        </InteractionButton>
      </UserInteractionContainer>
    )
  }

  //   Video Info Container
  videoInfoContainer = () => {
    const {videoDetails} = this.state
    const {title, viewCount, publishedAt, channel, description} = videoDetails
    const {subscriberCount, profileImageUrl, name} = channel
    const videoDate = formatDistanceToNowStrict(new Date(publishedAt))

    return (
      <VideoInformationContainer>
        <VideoTitleText textColor={isDarkMode}>{title}</VideoTitleText>
        <VideoDataContainer>
          <VideoDataText>{`${viewCount} views . ${videoDate} ago`}</VideoDataText>
          {this.userInteractionContainer()}
        </VideoDataContainer>
        <HorizontalLine />
        <VideoChannelInfo>
          <ChannelImg src={profileImageUrl} alt="channel logo" />
          <ChannelData>
            <ChannelName textColor={isDarkMode}>{name}</ChannelName>
            <ChannelSubscribers>{`${subscriberCount} subscribers`}</ChannelSubscribers>
          </ChannelData>
        </VideoChannelInfo>
        <ChannelDescription textColor={isDarkMode}>
          {description}
        </ChannelDescription>
      </VideoInformationContainer>
    )
  }

  //   On Successful Render View
  renderSuccessView = () => (
    <VideoDetailsCard>
      {this.getVideoPlayerCard()}
      {this.videoInfoContainer()}
    </VideoDetailsCard>
  )

  //   Get Render Views
  getRenderViews = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiConstraints.inProgress:
        return <LoadingView />

      case apiConstraints.success:
        return this.renderSuccessView()

      case apiConstraints.failure:
        return (
          <FailureView
            isDarkMode={isDarkMode}
            getVideosData={this.getTrendingVideos}
          />
        )

      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {
            isDark,
            onSaveVideo,
            savedVideosList,
            likedVideosList,
            dislikedVideosList,
            onLikedVideo,
            onDislikedVideo,
          } = value
          isDarkMode = isDark
          saveVideos = onSaveVideo
          likeVideos = onLikedVideo
          dislikeVideos = onDislikedVideo
          likedVideosData = likedVideosList
          dislikeVideosData = dislikedVideosList

          savedVideosListData = savedVideosList
          return (
            <>
              <Header />
              <VideoItemContainer bgColor={isDarkMode}>
                <SideNavbar />
                <VideoPlaySection>{this.getRenderViews()}</VideoPlaySection>
              </VideoItemContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
