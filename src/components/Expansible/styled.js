/* eslint-disable linebreak-style */
import { MdClose } from 'react-icons/all'

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #2F2F37;
  transform: ${({ toggle }) => (toggle ? 'translateX(0)' : 'translateX(100%)')};
  height: 100%;
  width: 100%;
  /* position: relative; */
  z-index: 99;
  /* top: 0;
  right: 0;
  bottom: 0;
  left: 0; */
  margin: 55px;
  box-shadow: 1px 3px 6px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease-in-out;
  overflow-x: hidden;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 15px;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Title = styled.p`
  font-size: 17px;
  font-family: 'Roboto', sans-serif;
  color: #FFFFFF;
  opacity: 0.8;
`

export const Close = styled.button`
  border: 0;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`

export const CloseIcon = styled(MdClose).attrs(props => ({
  ...props,
  size: 20,
  color: '#FFFFFF',
}))`
  opacity: 0.8;
`
