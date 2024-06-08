import React from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import SliderComponent from './SliderComponent'


export default function Layout() {
  return (
    <React.Fragment>
    <Header/>
    <SliderComponent/>
    <Container fluid='md'>
    <Outlet/>
    </Container>
    </React.Fragment>
  )
}
