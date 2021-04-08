/* eslint-disable linebreak-style */
import React, { useState } from 'react'

import Filter from '../../components/Filter'
import { Container } from './styled'

function Main() {
  const [modalOpen, setModalOpen] = useState(false)

  const handleModalOpen = () => {
    setModalOpen(!modalOpen)
  }

  const handleClose = () => {
    setModalOpen(!modalOpen)
  }

  const opt = [
    { id: 1, name: 'Produto', type: 'undefined' },
    { id: 2, name: 'Modelo', type: 'undefined' },
    { id: 3, name: 'Revisão', type: 'undefined' },
    { id: 4, name: 'Cliente', type: 'undefined' },
    { id: 5, name: 'Data', type: 'date' },
    { id: 6, name: 'Cycle Time', type: 'time' },
    { id: 7, name: 'Status', type: 'status' },
  ]

  return (
    <Container>
      <button type="button" onClick={handleModalOpen}>Abrir modal</button>
      <Filter
        visible={modalOpen}
        close={handleClose}
        columns={opt}
      />
    </Container>
  )
}

export default Main
