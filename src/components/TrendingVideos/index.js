import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'

import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'

import {
  TrendingVideosContainer,
  VideosBanner,
  VideoBannerIconContainer,
  VideoBannerHeading,
} from './styledComponents'

import {VideosSection, VideosList} from '../Home/styledComponents'
import SideNavbar from '../SideNavbar'
import VideoCard from '../VideoCard'
import LoadingView from '../LoadingView'
import FailureView from '../FailureView'

let isDarkMode

const apiConstraints = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class TrendingVideos extends Component {
  state = {
    apiStatus: apiConstraints.initial,
    trendingVideos: [],
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  //   Get Trending Videos Data
  getTrendingVideos = async () => {
    this.setState({apiStatus: apiConstraints.inProgress})

    const apiUrl = `https://apis.ccbp.in/videos/trending`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      //   console.log(data)

      const trendingVideos = data.videos.map(eachItem => ({
        channel: {
          name: eachItem.channel.name,
          profileImageUrl: eachItem.channel.profile_image_url,
        },
        id: eachItem.id,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))

      //   console.log(trendingVideos)

      this.setState({trendingVideos, apiStatus: apiConstraints.success})
    } else {
      this.setState({apiStatus: apiConstraints.failure})
    }
  }

  // Video Banner Section
  bannerSection = () => (
    <VideosBanner themeColor={isDarkMode}>
      <VideoBannerIconContainer themeColor={isDarkMode}>
        <HiFire color="red" size="24px" />
      </VideoBannerIconContainer>
      <VideoBannerHeading themeColor={isDarkMode}>Trending</VideoBannerHeading>
    </VideosBanner>
  )

  //   On Successful Render View
  renderSuccessView = () => {
    const {trendingVideos} = this.state

    return (
      <VideosList>
        {trendingVideos.map(eachVideo => (
          <VideoCard
            videoDetails={eachVideo}
            key={eachVideo.id}
            isDarkMode={isDarkMode}
          />
        ))}
      </VideosList>
    )
  }

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
          const {isDark} = value
          isDarkMode = isDark

          return (
            <>
              <Header />
              <TrendingVideosContainer themeColor={isDarkMode}>
                <SideNavbar />
                <VideosSection>
                  {this.bannerSection()}
                  {this.getRenderViews()}
                </VideosSection>
              </TrendingVideosContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default TrendingVideos
