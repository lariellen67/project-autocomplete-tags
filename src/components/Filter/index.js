/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react'

import tags from '~/assets/tags.svg'

import {
  Container,
  Content,
  Header,
  Title,
  Close,
  CloseIcon,
  Wrapper,
  Column,
  SectionTitle,
  Option,
  OptionText,
  Arrow,
  Illustration,
  Text,
  Message,
  Footer,
  Overlay,
} from './styled'

function Modal({ visible, close, columns, type, ...rest }) {
  const Date = () => {
    const data = 'data'
    return (
      <>
        <SectionTitle>Filtro Data</SectionTitle>
        <p>{data}</p>
      </>
    )
  }

  const Time = () => {
    const time = 'time'
    return (
      <>
        <SectionTitle>Filtro Time</SectionTitle>
        <p>{time}</p>
      </>
    )
  }

  const Status = () => {
    const status = 'status'
    return (
      <>
        <SectionTitle>Filtro Status</SectionTitle>
        <p>{status}</p>
      </>
    )
  }

  function handleMiddleColumn() {
    switch (type) {
      case 'date':
        return <Date />
      case 'time':
        return <Time />
      case 'status':
        return <Status />
      default:
        return <Date />
    }
  }
  return (
    <>
      {visible ? (
        <Container {...rest}>
          <Content>
            <Header>
              <Title>Filtro Avançado</Title>
              {close && (
              <Close onClick={close}>
                <CloseIcon />
              </Close>
              )}
            </Header>
            <Wrapper>
              <Column>
                <SectionTitle>Colunas</SectionTitle>
                {columns.map(item => (
                  <Option id={item.id} key={item.id} onClick={() => console.log('maria')}>
                    <OptionText>{item.name}</OptionText>
                    <Arrow />
                  </Option>
                ))}
              </Column>
              <Column>
                {handleMiddleColumn()}
              </Column>
              <Column>
                <Illustration src={tags} alt="tags" />
                <Text>Os filtros aplicados irão aparecer aqui</Text>
                <Message>Para aplicar um filtro, selecione uma opção à esquerda</Message>
              </Column>
            </Wrapper>
            <Footer>
              <span>lala</span>
            </Footer>
          </Content>
          <Overlay onClick={close} />
        </Container>
      ) : null}
    </>
  )
}

export default Modal
