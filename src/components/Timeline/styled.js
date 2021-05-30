/* eslint-disable linebreak-style */
import styled from 'styled-components'

import { colors } from '~/themes'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: transparent;

  &::after {
    background-color: #e17b77;
    content: '';
    position: absolute;
    margin: 0 20px;
    width: 4px;
    height: 100%;
  }
`

export const Flow = styled.div`
   display: flex;
    padding-left: 30px;
    position: relative;
    margin: 10px 0;
`

export const Node = styled.span`
  background-color: #fff;
    border: 3px solid #e17b77;
    border-radius: 50%;
    position: absolute;
    left: 12px;
    right: auto;
    width: 20px;
    height: 20px;
    z-index: 100;
`

export const FlowItem = styled.div`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    background-color: #fff;
    display: flex;
    padding: 5px;
    width: 40vw;
    position: relative;
    text-align: left;
    align-items: flex-start;
    margin-left: 10px;
`

export const Title = styled.p`
  color: ${colors.PRIMARY};
  text-align: center;
  margin-top: 30px;
`
