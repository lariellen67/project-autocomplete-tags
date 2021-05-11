/* eslint-disable linebreak-style */
/* eslint-disable eqeqeq */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */

import React, { useEffect, useState } from 'react'

import {
  Container,
  Wrapper,
  Label,
  Mandatory,
  Pick,
  Option,
  List,
  Item,
  Touchable,
  ArrowDown,
  ArrowUp,
  NotFound,
} from './styled'

export default function Select({
  options, optionSelected, label, mandatory, placeholder, inputRef,
}) {
  const [listOptions, setListOptions] = useState([])
  const [showOptions, setShowOptions] = useState(false)
  const [userInput, setUserInput] = useState()
  const [idInput, setIdInput] = useState(optionSelected)
  let optionsListComponent

  useEffect(() => {
    const selected = options?.find(opt => opt.id == optionSelected)
    setUserInput(selected.name)
  }, [optionSelected !== undefined])

  function handleOpenOptions() {
    const list = options
    setListOptions(list)
    setShowOptions(!showOptions)
  }

  function handleSelectOption(value) {
    setShowOptions(false)
    setUserInput(value.name)
    setIdInput(value.id)
  }

  if (showOptions) {
    if (listOptions.length) {
      optionsListComponent = (
        <List>
          {listOptions.map(option => (
            <Item
              key={option.id}
              value={option.id}
              onClick={() => handleSelectOption(option)}
            >
              {option.name}
            </Item>
          ))}
        </List>
      )
    } else {
      optionsListComponent = (
        <List>
          <NotFound>
            <li>Sem sugestões</li>
          </NotFound>
        </List>
      )
    }
  }
  return (
    <Container>
      <Wrapper>
        <Label>{label}</Label>
        {mandatory && <Mandatory>*</Mandatory>}
      </Wrapper>
      <Pick>
        <Option
          placeholder={placeholder}
          type="text"
          ref={inputRef}
          value={userInput}
          id={idInput}
        />
        <Touchable onClick={handleOpenOptions}>
          {showOptions ? <ArrowUp /> : <ArrowDown />}
        </Touchable>
      </Pick>
      {optionsListComponent}
    </Container>
  )
}
