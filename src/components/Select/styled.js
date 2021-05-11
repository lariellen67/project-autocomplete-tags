/* eslint-disable linebreak-style */
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/all'

import styled from 'styled-components'

export const Container = styled.div``

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const Label = styled.p`
  font-size: 12.5px;
  margin-bottom: 3px;
  font-family: 'Roboto', sans-serif;
  color: #ffffff;
`

export const Mandatory = styled.p`
  font-size: 12.5px;
  margin-left: 5px;
  font-family: 'Roboto', sans-serif;
  color: #ffffff;
`

export const Pick = styled.div`
  display: flex;
  flex: 1;
  border: 1px solid #ffffff;
  background-color: transparent;
  padding: 5px 9px 6px;
  margin: 0 13px 0 0;
  width: 165px;
  align-items: center;
  border-radius: 3px;
  transition: all 0.2s ease-in-out;
`

export const Option = styled.input`
  width: 150px;
  color: #ffffff;
  background-color: transparent;
  border: 0;
  font-family: 'Roboto', sans-serif;
  outline: none;
`

export const List = styled.ul`
  background-color: #000000;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  list-style: none;
  margin-top: 0;
  z-index: 99;
  position: absolute;
  max-height: 130px;
  overflow-y: auto;
  padding-left: 0;
  width: 185px;

  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(204, 204, 204, 0.5);
  }

  ::-webkit-scrollbar-thumb {
    border: 0px solid transparent !important;
    -webkit-box-shadow: inset 0 0 4px #d51;
    box-shadow: inset 0 0 4px #d51;
    border: 0;
  }
`

export const Item = styled.li`
  padding: 0.5rem;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;

  &:hover {
    background-color: #999;
    cursor: pointer;
  }
`

export const Touchable = styled.button`
  padding: 0;
  border: 0;
  outline: none;
  cursor: pointer;
  background-color: transparent;
`

export const ArrowUp = styled(MdArrowDropUp).attrs(props => ({
  ...props,
  size: 18,
  color: '#fff',
}))`
  opacity: 0.8;
`

export const ArrowDown = styled(MdArrowDropDown).attrs(props => ({
  ...props,
  size: 18,
  color: '#fff',
}))`
  opacity: 0.8;
`

export const NotFound = styled.ul`
  color: #d4d;
  padding: 0.5rem;
  list-style: none;

  li {
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
  }
`
