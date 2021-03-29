/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react'
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/all'

import PropTypes from 'prop-types'

import {
  Container, Content, NotFound, List, Input, Button,
} from './styled'

export default function Autocomplete({ suggestions }) {
  const [filteredOptions, setFilteredOptions] = useState([])
  const [showOptions, setShowOptions] = useState(false)
  const [userInput, setUserInput] = useState('')
  let suggestionsListComponent

  function onChange(e) {
    const input = e.currentTarget.value
    const filtered = suggestions.filter(
      suggestion => suggestion.toLowerCase().indexOf(input.toLowerCase()) > -1,
    )
    setFilteredOptions(filtered)
    setShowOptions(true)
    setUserInput(input)
  }

  function clickArrow() {
    const filtered = suggestions
    setFilteredOptions(filtered)
    setShowOptions(!showOptions)
  }

  function handleSelectOption(value) {
    setShowOptions(false)
    setUserInput(value)
  }

  if (showOptions) {
    if (filteredOptions.length) {
      suggestionsListComponent = (
        <List>
          {filteredOptions.map(suggestion => (
            <li key={suggestion} value={suggestion} onClick={() => handleSelectOption(suggestion)}>
              {suggestion}
            </li>
          ))}
        </List>
      )
    } else {
      suggestionsListComponent = (
        <List>
          <NotFound>
            <p>No suggestions, you suck!</p>
          </NotFound>
        </List>
      )
    }
  }

  return (
    <Container>
      <Content>
        <Input
          type="text"
          onChange={onChange}
          value={userInput}
        />
        <Button onClick={clickArrow}>
          {showOptions ? <MdArrowDropDown size={15} /> : <MdArrowDropUp size={15} />}
        </Button>
      </Content>
      {suggestionsListComponent}
    </Container>
  )
}

Autocomplete.propTypes = { suggestions: PropTypes.oneOfType([PropTypes.array]).isRequired }
