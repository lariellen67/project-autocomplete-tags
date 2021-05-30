/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react'

import { Container, Flow, FlowItem, Node } from './styled'

export default function Timeline({ timelineData }) {
  return timelineData.length > 0 && (
    <Container>
        {timelineData.map(item => (
          <Flow>
            <Node />
            <FlowItem>
              <p>{item.text}</p>
            </FlowItem>
          </Flow>
        ))}
    </Container>
  )
}
