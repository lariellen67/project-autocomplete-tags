import styled from 'styled-components'

import { colors } from '~/themes'

export const Container = styled.div`
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
`

export const Input = styled.input`
  border: 1px solid ${colors.GREY_THREE};
  padding: 10px;
  margin: 5px 0px 0px;
  width: 100%;
  border-radius: 5px;
`

export const NotFound = styled.div`
  color: ${colors.PRIMARY};
  text-align: center;
`
