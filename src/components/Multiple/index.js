/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react'
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/all'

import PropTypes from 'prop-types'

import {
  Container, Content, Button, Tag, AutocompleteGroup, NotFound, List, Item, Input, Touchable,
} from './styled'

export default function Autocomplete({ suggestions }) {
  const [filteredOptions, setFilteredOptions] = useState([])
  const [showOptions, setShowOptions] = useState(false)
  const [userInput, setUserInput] = useState('')
  const [tagArray, setTagArray] = useState([])

  let suggestionsListComponent

  function handleUserInput(e) {
    const input = e.currentTarget.value
    const filtered = suggestions.filter(
      suggestion => suggestion.toLowerCase().indexOf(input.toLowerCase()) > -1,
    )
    setFilteredOptions(filtered)
    setShowOptions(true)
    setUserInput(input)
  }

  function handleOpenOptions() {
    const filtered = suggestions
    setFilteredOptions(filtered)
    setShowOptions(!showOptions)
  }

  function handleSelectOption(value) {
    setShowOptions(false)
    if (tagArray.find(tag => tag.toLowerCase() === value.toLowerCase())) {
      return
    }
    setTagArray([...tagArray, value])
    setUserInput('')
  }

  console.log(userInput, 'userinput')
  console.log(tagArray, 'tagArray')

  if (showOptions) {
    if (filteredOptions.length) {
      suggestionsListComponent = (
        <List>
          {filteredOptions.map(suggestion => (
            <Item key={suggestion} value={suggestion} onClick={() => handleSelectOption(suggestion)}>
              {suggestion}
            </Item>
          ))}
        </List>
      )
    } else {
      suggestionsListComponent = (
        <List>
          <NotFound>
            <li>No suggestions, you suck!</li>
          </NotFound>
        </List>
      )
    }
  }

  function removeTag(item) {
    const newTag = [...tagArray]
    newTag.splice(item, 1)
    setTagArray(newTag)
  }

  function inputKeyDown(e) {
    const data = e.target.value
    if (e.key === 'Enter' && data) {
      if (tagArray.find(tag => tag.toLowerCase() === data.toLowerCase())) {
        return
      }
      setTagArray([...tagArray, data])
      setUserInput('')
    } else if (e.key === 'Backspace' && !data) {
      removeTag(tagArray.length - 1)
    }
  }

  return (
    <Container>
      <AutocompleteGroup>
        <Tag>

          {tagArray.map((item, i) => (
            <Content key={`unique-${item}`}>
              {item}
              <Button onClick={() => { removeTag(i) }}>+</Button>
            </Content>
          ))}
          <Input
            type="text"
            onKeyDown={inputKeyDown}
            onChange={handleUserInput}
            value={userInput}
          />
          <Touchable onClick={handleOpenOptions}>
            {showOptions ? <MdArrowDropDown size={15} /> : <MdArrowDropUp size={15} />}
          </Touchable>
        </Tag>
      </AutocompleteGroup>
      {suggestionsListComponent}
    </Container>
  )
}

Autocomplete.propTypes = { suggestions: PropTypes.oneOfType([PropTypes.array]).isRequired }
