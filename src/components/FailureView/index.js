import {
  FailureViewContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewText,
  FailureViewButton,
} from './styledComponents'

const failureViewImg =
  'https://assets.ccbp.in/frontend/react-js/failure-img.png'

const FailureView = props => {
  const {isDarkMode, getVideosData} = props

  const onTryAgainBtn = () => {
    getVideosData()
  }

  return (
    <FailureViewContainer className="failure-view-container">
      <FailureViewImage src={failureViewImg} alt="failure view" />
      <FailureViewHeading themeColor={isDarkMode}>
        Oops! Something Went Wrong
      </FailureViewHeading>
      <FailureViewText className="para" themeColor={isDarkMode}>
        We are having some trouble to complete your request. Please try again.
      </FailureViewText>
      <FailureViewButton
        type="button"
        themeColor={isDarkMode}
        onClick={onTryAgainBtn}
      >
        Retry
      </FailureViewButton>
    </FailureViewContainer>
  )
}

export default FailureView
