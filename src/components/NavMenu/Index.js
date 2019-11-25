import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class NavMenu extends Component {
  state = {}

  handleItemClick = (e, { name }) =>
  this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu key={this.props.username}>
        <Menu.Item
          name='profile'
          active={activeItem === 'profile'}
          content='Profile'
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='logout'
          active={activeItem === 'logout'}
          content='Logout'
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}
export default NavMenu;
