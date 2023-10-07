import {Component} from 'react'
import Cookies from 'js-cookie'
import {RiCloseFill} from 'react-icons/ri'

import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'
import {
  HomeRouteContainer,
  VideosSection,
  HomeBannerSection,
  HomeBannerContent,
  HomeBannerText,
  HomeBannerGetNowButton,
  HomeBannerCloseButton,
  SearchContainer,
  SearchBox,
  SearchButton,
  SearchIcon,
  NoSearchResults,
  NoSearchResultsImage,
  NoSearchResultsHeading,
  NoSearchResultsText,
  RetryButton,
  VideosList,
} from './styledComponents'
import SideNavbar from '../SideNavbar'
import LoadingView from '../LoadingView'
import FailureView from '../FailureView'
import VideoCard from '../VideoCard'

const apiConstraints = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

let isDarkMode

class Home extends Component {
  state = {
    apiStatus: apiConstraints.initial,
    videosList: [],
    showPremiumBanner: true,
    searchInput: '',
  }

  componentDidMount() {
    this.getVideosData()
  }

  //   Get Videos Data
  getVideosData = async () => {
    this.setState({apiStatus: apiConstraints.inProgress})
    const {searchInput} = this.state

    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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

      const videosList = data.videos.map(eachItem => ({
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

      //   console.log(videosList)

      this.setState({videosList, apiStatus: apiConstraints.success})
    } else {
      this.setState({apiStatus: apiConstraints.failure})
    }
  }

  //   Home Videos Section
  videosListContainer = () => {
    const {videosList} = this.state
    return (
      <VideosList>
        {videosList.map(eachVideo => (
          <VideoCard
            videoDetails={eachVideo}
            key={eachVideo.id}
            isDarkMode={isDarkMode}
          />
        ))}
      </VideosList>
    )
  }

  //   No Search Results View
  noSearchResults = () => {
    const noResultsImg =
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png'

    const onTryAgainBtn = () => {
      this.setState({searchInput: ''}, this.getVideosData)
    }

    return (
      <NoSearchResults>
        <NoSearchResultsImage src={noResultsImg} alt="no videos" />
        <NoSearchResultsHeading themeColor={isDarkMode}>
          No Search Results Found
        </NoSearchResultsHeading>
        <NoSearchResultsText themeColor={isDarkMode}>
          Try different key words or remove search filter
        </NoSearchResultsText>
        <RetryButton type="button" onClick={onTryAgainBtn}>
          Retry
        </RetryButton>
      </NoSearchResults>
    )
  }

  //   Successful Render View
  renderSuccessView = () => {
    const {videosList} = this.state
    if (videosList.length === 0) {
      return this.noSearchResults()
    }

    return this.videosListContainer()
  }

  //   Input search container
  userSearchContainer = () => {
    const {searchInput} = this.state

    const onSearchValue = event => {
      this.setState({searchInput: event.target.value})
    }

    const onEnterKeyPress = event => {
      if (event.key === 'Enter') {
        this.getVideosData()
      }
    }

    return (
      <SearchContainer themeColor={isDarkMode}>
        <SearchBox
          themeColor={isDarkMode}
          type="search"
          value={searchInput}
          placeholder="Search"
          onKeyDown={onEnterKeyPress}
          onChange={onSearchValue}
        />
        <SearchButton type="button" onClick={() => this.getVideosData()}>
          <SearchIcon size="22px" />
        </SearchButton>
      </SearchContainer>
    )
  }

  //   Premium Plans Banner section
  homeBannerSection = () => {
    const setBannerStatus = () => {
      this.setState({showPremiumBanner: false})
    }

    return (
      <HomeBannerSection>
        <HomeBannerContent>
          <HomeBannerText>Buy NxtWatch Premium Plans with UPI</HomeBannerText>
          <HomeBannerGetNowButton>Get Now</HomeBannerGetNowButton>
        </HomeBannerContent>
        <HomeBannerCloseButton onClick={setBannerStatus}>
          <RiCloseFill size="26px" />
        </HomeBannerCloseButton>
      </HomeBannerSection>
    )
  }

  //   Render Views
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
            getVideosData={this.getVideosData}
          />
        )

      default:
        return null
    }
  }

  // Render Home Route
  render() {
    const {showPremiumBanner} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          isDarkMode = isDark

          return (
            <>
              <Header />
              <HomeRouteContainer themeColor={isDarkMode}>
                <SideNavbar />
                <VideosSection>
                  {showPremiumBanner && this.homeBannerSection()}
                  {this.userSearchContainer()}
                  {this.getRenderViews()}
                </VideosSection>
              </HomeRouteContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
