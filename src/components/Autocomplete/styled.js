import styled from 'styled-components'

import { colors } from '~/themes'

export const Container = styled.div`
`

export const NotFound = styled.div`
  color: ${colors.GREY_SIX};
  padding: 10px;
`

export const List = styled.ul`
  border: 1px solid ${colors.GREY_THREE};
  border-top-width: 0;
  list-style: none;
  margin-top: 0;
  max-height: 143px;
  overflow-y: auto;
  padding-left: 0;
  width: calc(300px + 1rem);

  li {
  padding: 0.5rem;
  }

  li:hover {
  background-color: ${colors.GREY_SIX};
  color: ${colors.PRIMARY};
  cursor: pointer;
  font-weight: 700;
  }

  li:not(:last-of-type) {
  border-bottom: 1px solid ${colors.GREY_THREE};
  }
`

export const Input = styled.input`
  border: 1px solid ${colors.GREY_THREE};
  padding: 0.5rem;
  width: 300px;
  border-radius: 5px;
`
