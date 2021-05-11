/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React, { useRef } from 'react'

import Autocomplete from '~/components/Autocomplete'
import InputTag from '~/components/InputTag'
import Multiple from '~/components/Multiple'
// import Select from '~/components/Select'

import { Container, Content, Title } from './styled'

export default function Main() {
  const codeRef = useRef('')
  const temp = [
    'Crazy in Love',
    'Sorry 1',
    'Sorry 2',
    'Sorry 3',
    'Sorry 4',
    'Formation',
    'Halo',
    'Flawless',
    'Single Ladies',
  ]

  return (
    <Container>
      <Content>
        {/* <Select
          options={[
            { id: 1, name: 'Crazy in Love', code: 'a' },
            { id: 2, name: 'Sorry', code: 'a' },
            { id: 3, name: 'Formation', code: 'a' },
            { id: 4, name: 'Halo', code: 'a' },
            { id: 5, name: 'Flawless', code: 'a' },
            { id: 6, name: 'Single Ladies', code: 'a' },
            { id: 7, name: 'Irreplaceble', code: 'a' },
            { id: 8, name: 'Don\'t hurt yourself', code: 'a' },
            { id: 9, name: 'Drunk in Love', code: 'a' },
          ]}
          inputRef={codeRef}
          optionSelected={5}
        /> */}
        <Title>Search some success of Queen Bey here</Title>
        <Autocomplete
          suggestions={temp}
        />
        <Title>Now here you can classify</Title>
        <InputTag />
        <Title>And find another Bey success</Title>
        <Multiple suggestions={[
          'Crazy in Love',
          'Sorry',
          'Formation',
          'Halo',
          'Flawless',
          'Single Ladies',
        ]}
        />
        <button type="button" onClick={() => console.log(codeRef.current.id, 'ref')}>clica</button>
      </Content>
    </Container>
  )
}
