import {Component} from 'react'
import {FaGamepad} from 'react-icons/fa'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'

import {
  GamingRoute,
  GamingVideosList,
  GamingVideoListItem,
  GamingImage,
  GameTitleText,
  GameDataText,
} from './styledComponents'
import {
  VideosBanner,
  VideoBannerIconContainer,
  VideoBannerHeading,
} from '../TrendingVideos/styledComponents'
import SideNavbar from '../SideNavbar'
import LoadingView from '../LoadingView'
import FailureView from '../FailureView'
import {VideosSection} from '../Home/styledComponents'

const apiConstraints = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

let isDarkMode

class GamingVideos extends Component {
  state = {
    apiStatus: apiConstraints.initial,
    gamingVideos: [],
  }

  componentDidMount() {
    this.getGamingVideosData()
  }

  //   Get Gaming Videos Data
  getGamingVideosData = async () => {
    this.setState({apiStatus: apiConstraints.inProgress})

    const apiUrl = `https://apis.ccbp.in/videos/gaming`
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

      const gamingVideos = data.videos.map(eachItem => ({
        id: eachItem.id,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      //   console.log(gamingVideos)
      this.setState({gamingVideos, apiStatus: apiConstraints.success})
    } else {
      this.setState({apiStatus: apiConstraints.failure})
    }
  }

  // Video Banner Section
  videoHeaderSection = () => (
    <VideosBanner themeColor={isDarkMode}>
      <VideoBannerIconContainer>
        <FaGamepad color="red" size="24px" />
      </VideoBannerIconContainer>
      <VideoBannerHeading themeColor={isDarkMode}>Gaming</VideoBannerHeading>
    </VideosBanner>
  )

  //   Game Video Card
  getVideoItemDetails = video => {
    const {id, thumbnailUrl, title, viewCount} = video

    return (
      <GamingVideoListItem key={id}>
        <Link to={`videos/${id}`}>
          <GamingImage src={thumbnailUrl} alt="video thumbnail" />
          <GameTitleText themeColor={isDarkMode}>{title}</GameTitleText>
          <GameDataText themeColor={isDarkMode}>
            {viewCount} Watching Worldwide
          </GameDataText>
        </Link>
      </GamingVideoListItem>
    )
  }

  //   On Successful Render View
  renderSuccessView = () => {
    const {gamingVideos} = this.state

    return (
      <>
        <GamingVideosList>
          {gamingVideos.map(eachVideo => this.getVideoItemDetails(eachVideo))}
        </GamingVideosList>
      </>
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

  //   Gaming Route Render
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          isDarkMode = isDark

          return (
            <>
              <Header />
              <GamingRoute themeColor={isDarkMode}>
                <SideNavbar />
                <VideosSection>
                  {this.videoHeaderSection()}
                  {this.getRenderViews()}
                </VideosSection>
              </GamingRoute>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default GamingVideos
