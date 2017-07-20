import React from 'react'
import { Menu } from 'semantic-ui-react'
import logo from '../logo.svg'

export default class Navbar extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    return (
      <Menu secondary>
        <Menu.Item>
          <img src={logo} alt="Logo of UMHacks" />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item name="About" onClick={this.handleItemClick} />
          <Menu.Item name="Sponsor" onClick={this.handleItemClick} />
          <Menu.Item name="FAQ" onClick={this.handleItemClick} />
        </Menu.Menu>
      </Menu>
    )
  }
}
