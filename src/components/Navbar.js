import React from 'react'
import { Menu, Container } from 'semantic-ui-react'

export default class Navbar extends React.Component {
  render() {
    return (
      <Container text textAlign="center">
        <Menu secondary compact>
          <Menu.Item name="About" href="#about" />
          <Menu.Item name="Sponsor" href="#sponsor" />
          <Menu.Item name="FAQ" href="#faq" />
        </Menu>
      </Container>
    )
  }
}
