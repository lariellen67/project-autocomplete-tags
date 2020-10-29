/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react'

import PropTypes from 'prop-types'

import { Container, NotFound, List, Input } from './styled'

export default function Autocomplete({ suggestions }) {
  const [activeSuggestion, setActiveSuggestion] = useState(0)
  const [filteredSuggestions, setFilteredSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [userInput, setUserInput] = useState('')
  let suggestionsListComponent

  function onChange(e) {
    const input = e.currentTarget.value
    const filtered = suggestions.filter(
      suggestion => suggestion.toLowerCase().indexOf(input.toLowerCase()) > -1,
    )
    setActiveSuggestion(0)
    setFilteredSuggestions(filtered)
    setShowSuggestions(true)
    setUserInput(input)
  }

  function onClick(e) {
    const input = e.currentTarget.innerText
    setActiveSuggestion(0)
    setFilteredSuggestions([])
    setShowSuggestions(false)
    setUserInput(input)
  }

  function onKeyDown(e) {
    if (e.keyCode === 13) {
      setActiveSuggestion(0)
      setShowSuggestions(false)
      setUserInput(filteredSuggestions[activeSuggestion])
    } else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return
      }
      setActiveSuggestion(activeSuggestion - 1)
    } else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return
      }
      setActiveSuggestion(activeSuggestion + 1)
    }
  }

  if (showSuggestions && userInput) {
    if (filteredSuggestions.length) {
      suggestionsListComponent = (
        <List>
          {filteredSuggestions.map(suggestion => (
            <li key={suggestion} onClick={onClick}>
              {suggestion}
            </li>
          ))}
        </List>
      )
    } else {
      suggestionsListComponent = (
        <NotFound>
          <p>No suggestions, you suck!</p>
        </NotFound>
      )
    }
  }

  return (
    <Container>
      <Input
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={userInput}
      />
      {suggestionsListComponent}
    </Container>
  )
}

Autocomplete.propTypes = { suggestions: PropTypes.oneOfType([PropTypes.array]).isRequired }
