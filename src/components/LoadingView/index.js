import Loader from 'react-loader-spinner'
import LoadingViewContainer from './styledComponents'

const LoadingView = () => (
  <LoadingViewContainer>
    <Loader type="ThreeDots" color="red" height="70" width="70" />
  </LoadingViewContainer>
)

export default LoadingView
