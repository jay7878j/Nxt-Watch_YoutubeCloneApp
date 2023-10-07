import styled from 'styled-components'

export const SideNavbarSection = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    min-height: 92vh;
    background-color: ${props => (props.themeColor ? '#181818' : 'f9f9f9')};
    width: 250px;
    justify-content: space-between;
    flex-shrink: 0;
    margin: 0px;
    margin-top: 8vh;
    align-self: flex-start;
  }
`

export const ContactUs = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  padding: 20px;
`

export const ContactUsTitle = styled.h1`
  font-size: 22px;
  color: ${props => (props.themeColor ? '#ffffff' : '#475569')};
`

export const ContactUsImageContainer = styled.div`
  display: flex;
  column-gap: 15px;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 15px;
`

export const ContactUsImage = styled.img`
  height: 30px;
`

export const ContactUsText = styled.p`
  font-size: 16px;
  color: ${props => (props.themeColor ? '#ffffff' : '#1e293b')};
  font-weight: ${props => (props.themeColor ? '400' : '500')};
`
