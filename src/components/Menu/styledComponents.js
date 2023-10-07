import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin: auto;
  width: 100%;

  @media (min-width: 768px) {
    margin: 0px;
    padding-top: 20px;
  }
`

export const MenuListItem = styled.li`
  margin: auto;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    padding-left: 20px;
  }
`

export const MenuListItemLink = styled(Link)`
  color: ${props => props.iconactive};
  display: flex;
  align-items: center;
  column-gap: 15px;
  justify-content: center;
  margin: auto;

  @media (min-width: 768px) {
    justify-content: flex-start;
    margin: 0px;
  }
`

export const MenuText = styled.p`
  width: 120px;
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.themeColor};

  @media (min-width: 768px) {
    font-size: 17px;
  }
`
