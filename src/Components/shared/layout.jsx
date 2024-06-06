import React from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import { Container } from 'react-bootstrap'


export default function Layout() {
  return (
    <React.Fragment>
    <Header/>
    <Container fluid='md'>
    <Outlet/>
    </Container>
    </React.Fragment>
  )
}
