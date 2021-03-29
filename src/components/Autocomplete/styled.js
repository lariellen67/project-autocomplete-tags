/* eslint-disable linebreak-style */
import styled from 'styled-components'

import { colors } from '~/themes'

export const Container = styled.div`
`
export const Content = styled.div`
  display: flex;
  border: 1px solid ${colors.GREY_THREE};
  background-color: ${colors.GREY_ONE};
  padding: 5px;
  margin: 5px 0px 0px;
  width: 100%;
  align-items: center;
  border-radius: 2px;
`

export const List = styled.ul`
  border: 1px solid ${colors.GREY_THREE};
  border-top-width: 0;
  list-style: none;
  margin-top: 0;
  max-height: 143px;
  overflow-y: auto;
  padding-left: 0;
  width: 100%;

  li {
  padding: 0.5rem;
  color: ${colors.GREY_ONE};
  }

  li:hover {
  background-color: ${colors.GREY_SIX};
  color: ${colors.PRIMARY};
  cursor: pointer;
  font-weight: bold;
  }

  li:not(:last-of-type) {
  border-bottom: 1px solid ${colors.GREY_THREE};
  }

  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(204, 204, 204, 0.5);
  }

  ::-webkit-scrollbar-thumb {
    border: 0px solid transparent !important;
    -webkit-box-shadow: inset 0 0 4px #d51;
    border: 0;
  }
`

export const Input = styled.input`
 display: flex;
 flex: 1;
 background-color: #ff0;
 border: 0;
 outline: none;
`

export const Button = styled.button`
  padding: 0;
  border: 0;
  outline: 0;
  background-color: transparent;
`

export const NotFound = styled.div`
  color: ${colors.PRIMARY};
  text-align: center;
`
