/* eslint-disable linebreak-style */
import styled from 'styled-components'

import { colors } from '~/themes'

export const Container = styled.div`
  background: ${colors.GREY_ONE};
  border: 1px solid ${colors.GREY_TWO};
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
`

export const Tag = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  width: 100%;
  list-style: none;
`

export const Wrapper = styled.div`
  background: none;
  flex-grow: 1;
  padding: 0;
`

export const Button = styled.button`
  align-items: center;
  appearance: none;
  background: ${colors.GREY_FOUR};
  border: 0;
  border-radius: 50%;
  color: ${colors.GREY_ONE};
  display: inline-flex;
  font-size: 12px;
  height: 15px;
  outline: none;
  justify-content: center;
  line-height: 0;
  margin-left: 8px;
  padding: 0;
  transform: rotate(45deg);
  width: 15px;
`

export const Content = styled.div`
  align-items: center;
  background: ${colors.PRIMARY};
  border-radius: 2px;
  color: ${colors.GREY_SIX};
  display: flex;
  font-weight: bold;
  list-style: none;
  margin-bottom: 5px;
  margin-right: 5px;
  padding: 5px 10px;
`

export const Input = styled.input`
  border: none;
  width: 100%;
`
