/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React from 'react'

import {
  Container, Content, Wrapper, Title, Close, CloseIcon,
} from './styled'

function Expansible({
  open,
  reference,
  title,
  close,
  children,
  id,
  ...rest
}) {
  return (
    <Container toggle={open} ref={reference} id={id} {...rest}>
      <Content>
        <Wrapper>
          <Title>{title}</Title>
          {close && (
            <Close type="button" onClick={close}>
              <CloseIcon />
            </Close>
          )}
        </Wrapper>
        {children}
      </Content>
    </Container>
  )
}

export default Expansible
