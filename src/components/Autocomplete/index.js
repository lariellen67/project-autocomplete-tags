/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react'
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/all'

import PropTypes from 'prop-types'

import {
  Container, AutocompleteGroup, NotFound, List, Item, Input, Touchable,
} from './styled'

export default function Autocomplete({ suggestions }) {
  const [filteredOptions, setFilteredOptions] = useState([])
  const [showOptions, setShowOptions] = useState(false)
  const [userInput, setUserInput] = useState()
  let suggestionsListComponent

  function handleUserInput(e) {
    const input = e.currentTarget.value
    const filtered = suggestions?.filter(
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
    setUserInput(value)
  }

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

  return (
    <Container>
      <AutocompleteGroup>
        <Input
          type="text"
          onChange={handleUserInput}
          value={userInput}
        />
        <Touchable onClick={handleOpenOptions}>
          {showOptions ? <MdArrowDropDown size={15} /> : <MdArrowDropUp size={15} />}
        </Touchable>
      </AutocompleteGroup>
      {suggestionsListComponent}
    </Container>
  )
}

Autocomplete.propTypes = { suggestions: PropTypes.oneOfType([PropTypes.array]).isRequired }
