import styled from 'styled-components'

import { colors } from '~/themes'

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.GREY_SIX};
`

export const Content = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 400px;
  margin: 30px;
  background-color: ${colors.GREY_SIX};
  border-radius: 4px;
  border: 1px solid ${colors.PRIMARY};
`

export const Title = styled.p`
  color: ${colors.PRIMARY};
  text-align: center;
  margin-top: 30px;
`
