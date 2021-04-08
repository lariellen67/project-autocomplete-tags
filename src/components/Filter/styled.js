/* eslint-disable linebreak-style */
import { MdClose, MdKeyboardArrowRight } from 'react-icons/all'

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  justify-content: center;
  align-items: center;
  z-index: 1050;
`

export const Content = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  width: 77%;
  height: 80%;
  overflow:hidden;
  margin: 50px auto;
  z-index: 1;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.07);
  background: #ffffff;
`

export const Header = styled.div`
  display: flex;
  /* flex-direction: row; */
  background-color: transparent;
  justify-content: space-between;
  padding: 10px 12px 0;
  border-bottom: 1px solid #DBDBDB;
`

export const Title = styled.p`
  font-size: 17px;
  font-family: 'Roboto', sans-serif;
  color: #000000;
  opacity: 0.8;
`

export const Close = styled.span`
  border: 0;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`

export const CloseIcon = styled(MdClose).attrs(props => ({
  ...props,
  size: 20,
  color: '#000000',
}))`
  opacity: 0.8;
`

export const Wrapper = styled.div`
  display: flex;
`
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 65vh;
  padding: 12px;
  /* background-color: #ff0; */
  background-color: transparent;

  &:not(:last-of-type) {
    border-right: 1px solid #DBDBDB;
  }
`
export const SectionTitle = styled.div`
  font-size: 15px;
  font-family: 'Roboto', sans-serif;
  color: #000000;
  opacity: 0.8;
  margin-bottom: 20px;
`

export const Option = styled.span`
  display: flex;
  outline: none;
  border: 0;
  padding: 1px 12px;
  justify-content: space-between;
  align-items: center;
  border: 1.7px solid #DBDBDB;
  border-radius: 3px;
  background-color: transparent;
  cursor: pointer;
  margin: 2px 0;

  &:focus{
    border: 1px solid #ff0;
  }
`

export const OptionText = styled.p`
  font-size: 13.5px;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  margin: 0;
  color: #27262E;
  opacity: 0.8;
`

export const Arrow = styled(MdKeyboardArrowRight).attrs(props => ({
  ...props,
  size: 20,
  color: '#27262E',
}))`
  opacity: 0.4;
`

export const Illustration = styled.img`
  height: 65px;
  margin: 45px 0 25px;
`

export const Text = styled.p`
  font-size: 13px;
  font-family: 'Roboto Light', sans-serif;
  text-align: center;
  margin: 0;
  color: #27262E;
  opacity: 0.6;
`
export const Message = styled.p`
  font-size: 11px;
  font-family: 'Roboto Light', sans-serif;
  text-align: center;
  margin-top: 10px;
  color: #27262E;
  opacity: 0.6;
`

export const Footer = styled.div`
  border-top: 1px solid #DBDBDB;
  display: flex;
  justify-content: flex-end;
`

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 0;
  background: rgba(0, 0, 0, 0.5);
`
