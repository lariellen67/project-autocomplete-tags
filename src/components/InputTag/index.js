/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import React, { useState } from 'react'

import {
  Container, Tag, Input, Content, Button, Wrapper,
} from './styled'

export default function InputTag() {
  const [text, setText] = useState([])
  const [value, setValue] = useState('')

  function removeTag(item) {
    const newTag = [...text]
    newTag.splice(item, 1)
    setText(newTag)
  }

  function inputKeyDown(e) {
    const data = e.target.value
    if (e.key === 'Enter' && data) {
      if (text.find(tag => tag.toLowerCase() === data.toLowerCase())) {
        return
      }
      setText([...text, data])
      setValue('')
    } else if (e.key === 'Backspace' && !data) {
      removeTag(text.length - 1)
    }
  }
  console.log(text, 'text')
  console.log(value, 'value')

  return (
    <Container>
      <Tag>
        {text.map((item, i) => (
          <Content key={`unique-${item}`}>
            {item}
            <Button onClick={() => { removeTag(i) }}>+</Button>
          </Content>
        ))}
        <Wrapper>
          <Input
            type="text"
            onKeyDown={inputKeyDown}
            value={value}
            onChange={e => setValue(e.target.value)}
          />
        </Wrapper>
      </Tag>
    </Container>
  )
}
