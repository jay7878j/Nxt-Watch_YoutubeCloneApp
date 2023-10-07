import styled from 'styled-components'
import {AiOutlineSearch} from 'react-icons/ai'

export const HomeRouteContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => (props.themeColor ? '#181818' : '#f9f9f9')};

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const VideosSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 8vh;
  @media (min-width: 768px) {
    margin-left: 250px;
  }
`

export const HomeBannerSection = styled.div`
  display: flex;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-position: center;
  background-size: cover;
  height: 170px;
  justify-content: space-between;
  padding: 20px;
`

export const HomeBannerContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const HomeBannerText = styled.p`
  font-size: 19px;
  color: #000000;
  font-weight: 600;
  margin-bottom: 25px;
`
export const HomeBannerGetNowButton = styled.button`
  border: 1px solid gray;
  width: 120px;
  height: 40px;
  color: #000000;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  background: none;
  font-size: 16px;
`

export const HomeBannerCloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  align-self: flex-start;
`

export const SearchContainer = styled.div`
  display: flex;
  width: 90%;
  align-self: center;
  margin: 20px;
  border-radius: 3px;
  background-color: ${({themeColor}) =>
    themeColor ? 'transparent' : '#ffffff'};
  font-size: 16px;
  border: 1px solid gray;

  @media (min-width: 768px) {
    align-self: flex-start;
    width: 450px;
  }
`

export const SearchBox = styled.input`
  height: 35px;
  width: 100%;
  border: none;
  outline: none;
  background: none;
  padding: 10px;
  font-size: 16px;
  color: ${({themeColor}) => (themeColor ? '#f1f1f1' : '#000000')};
`

export const SearchButton = styled.button`
  background-color: gray;
  border: none;
  outline: none;
  width: 60px;
`

export const SearchIcon = styled(AiOutlineSearch)`
  margin-top: 4px;
  color: #ffffff;
  width: 20px;
  height: 20px;
`
export const NoSearchResults = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
  row-gap: 10px;
`

export const NoSearchResultsImage = styled.img`
  height: 250px;
  @media (min-width: 768px) {
    height: 300px;
  }
`
export const NoSearchResultsHeading = styled.h1`
  font-size: 22px;
  font-weight: ${props => (props.themeColor ? '400' : '600')};
  color: ${props => (props.themeColor ? '#ffffff' : '#1e293b')};
`

export const NoSearchResultsText = styled.p`
  color: #7e858e;
  font-size: 16px;
`
export const RetryButton = styled.button`
  width: 110px;
  height: 40px;
  color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  font-weight: 500;
  background-color: #4f46e5;
`

export const VideosList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  @media (min-width: 768px) {
    margin: 20px;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 25px;
  }
`
