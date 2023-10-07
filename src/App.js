import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import ThemeContext from './context/ThemeContext'
import LoginForm from './components/LoginForm'

import './App.css'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'
import TrendingVideos from './components/TrendingVideos'
import GamingVideos from './components/GamingVideos'
import ProtectedRoute from './components/ProtectedRoute'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

class App extends Component {
  state = {
    isDark: true,
    savedVideosList: [],
    likedVideosList: [],
    dislikedVideosList: [],
  }

  componentDidMount() {
    const localSavedList = localStorage.getItem('savedList')
    const localLikedList = localStorage.getItem('likedList')
    const localDislikedList = localStorage.getItem('dislikedList')
    const savedParsedData = JSON.parse(localSavedList)
    const likedParsedData = JSON.parse(localLikedList)
    const dislikedParsedData = JSON.parse(localDislikedList)

    if (savedParsedData === null) {
      this.setState({savedVideosList: []})
    } else {
      this.setState({savedVideosList: savedParsedData})
    }

    if (likedParsedData === null) {
      this.setState({likedVideosList: []})
    } else {
      this.setState({likedVideosList: likedParsedData})
    }

    if (dislikedParsedData === null) {
      this.setState({dislikedVideosList: []})
    } else {
      this.setState({dislikedVideosList: dislikedParsedData})
    }
  }

  componentDidUpdate() {
    const {savedVideosList, likedVideosList, dislikedVideosList} = this.state
    localStorage.setItem('savedList', JSON.stringify(savedVideosList))
    localStorage.setItem('likedList', JSON.stringify(likedVideosList))
    localStorage.setItem('dislikedList', JSON.stringify(dislikedVideosList))
  }

  onChangeTheme = () => {
    this.setState(prev => ({
      isDark: !prev.isDark,
    }))
  }

  onSaveVideo = video => {
    const {savedVideosList} = this.state

    const isVideoPresent = savedVideosList.find(
      eachVideo => eachVideo.id === video.id,
    )

    if (isVideoPresent === undefined) {
      this.setState(prev => ({
        savedVideosList: [
          ...prev.savedVideosList,
          {...video, isVideoSaved: true},
        ],
      }))
    } else {
      const filterSavedVideosList = savedVideosList.filter(
        eachVideo => eachVideo.id !== video.id,
      )
      this.setState({
        savedVideosList: filterSavedVideosList,
      })
    }
  }

  onLikedVideo = video => {
    const {likedVideosList, dislikedVideosList} = this.state
    const findObject = likedVideosList.find(each => each.id === video.id)
    if (findObject === undefined) {
      const filterList = dislikedVideosList.filter(each => each.id !== video.id)
      this.setState(prev => ({
        likedVideosList: [...prev.likedVideosList, {...video, isLike: true}],
        dislikedVideosList: filterList,
      }))
    } else {
      const filterList = likedVideosList.filter(each => each.id !== video.id)
      this.setState({
        likedVideosList: filterList,
      })
    }
  }

  onDislikedVideo = video => {
    const {dislikedVideosList, likedVideosList} = this.state
    const findObject = dislikedVideosList.find(each => each.id === video.id)
    if (findObject === undefined) {
      const filterList = likedVideosList.filter(each => each.id !== video.id)
      this.setState(prev => ({
        dislikedVideosList: [
          ...prev.dislikedVideosList,
          {...video, isDislike: true},
        ],
        likedVideosList: filterList,
      }))
    } else {
      const filterList = dislikedVideosList.filter(each => each.id !== video.id)
      this.setState({
        dislikedVideosList: filterList,
      })
    }
  }

  render() {
    const {
      isDark,
      savedVideosList,
      likedVideosList,
      dislikedVideosList,
    } = this.state

    return (
      <ThemeContext.Provider
        value={{
          isDark,
          savedVideosList,
          likedVideosList,
          dislikedVideosList,
          changeTheme: this.onChangeTheme,
          onSaveVideo: this.onSaveVideo,
          onLikedVideo: this.onLikedVideo,
          onDislikedVideo: this.onDislikedVideo,
        }}
      >
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/trending" component={TrendingVideos} />
          <ProtectedRoute exact path="/gaming" component={GamingVideos} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
