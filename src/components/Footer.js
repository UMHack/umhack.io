import React from 'react'
import { Segment, Image } from 'semantic-ui-react'
import logo from '../logo.svg'

export default class Footer extends React.Component {
  render() {
    return (
      <Segment basic textAlign="right">
        <p>
          UMHack © 2017
          {' '}
          <Image
            src={logo}
            size="tiny"
            alt="Logo of UMHack"
            inline
            verticalAlign="middle"
          />
        </p>
      </Segment>
    )
  }
}
