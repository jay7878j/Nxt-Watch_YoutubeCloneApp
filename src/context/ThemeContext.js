import React from 'react'

const ThemeContext = React.createContext({
  isDark: false,
  savedVideosList: [],
  likedVideosList: [],
  dislikedVideosList: [],
  changeTheme: () => {},
  onSaveVideo: () => {},
  onLikedVideo: () => {},
  onDislikedVideo: () => {},
})

export default ThemeContext
