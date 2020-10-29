import React, { useState, createRef } from 'react'

import {
  Container, ListTags, Input, ListItem, Button, Wrapper,
} from './styled'

let tagInput = createRef()

export default function InputTag() {
  const [tags, setTags] = useState([])

  function removeTag(item) {
    const newTag = [...tags]
    newTag.splice(item, 1)
    setTags(newTag)
  }

  function inputKeyDown(e) {
    const data = e.target.value
    if (e.key === 'Enter' && data) {
      if (tags.find(tag => tag.toLowerCase() === data.toLowerCase())) {
        return
      }
      setTags([...tags, data])
      tagInput.value = null
    } else if (e.key === 'Backspace' && !data) {
      removeTag(tags.length - 1)
    }
  }

  return (
    <Container>
      <ListTags>
        { tags.map((tag, i) => (
          <ListItem key={tag}>
            {tag}
            <Button type="button" onClick={() => { removeTag(i) }}>+</Button>
          </ListItem>
        ))}
        <Wrapper>
          <Input type="text" onKeyDown={inputKeyDown} ref={c => { tagInput = c }} />
        </Wrapper>
      </ListTags>
    </Container>
  )
}
