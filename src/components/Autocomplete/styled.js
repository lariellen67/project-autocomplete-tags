/* eslint-disable linebreak-style */
import styled from 'styled-components'

import { colors } from '~/themes'

export const Container = styled.div`
`
export const AutocompleteGroup = styled.div`
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

  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(204, 204, 204, 0.5);
  }

  ::-webkit-scrollbar-thumb {
    border: 0px solid transparent !important;
    -webkit-box-shadow: inset 0 0 4px ${colors.PRIMARY};
    box-shadow:  inset 0 0 4px ${colors.PRIMARY};
    border: 0;
  }
`

export const Item = styled.li`
  padding: 0.5rem;
  color: ${colors.GREY_ONE};

  &:hover {
  background-color: ${colors.GREY_FOUR};
  cursor: pointer;
  }

  /* &:not(:last-of-type) {
  border-bottom: 1px solid ${colors.GREY_THREE};
  } */
`

export const Input = styled.input`
 display: flex;
 flex: 1;
 background-color: transparent;
 border: 0;
 outline: none;
`

export const Touchable = styled.button`
  padding: 0;
  border: 0;
  outline: 0;
  background-color: transparent;
`

export const NotFound = styled.ul`
  color: ${colors.PRIMARY};
  padding: 0.5rem;
  list-style: none;
`
