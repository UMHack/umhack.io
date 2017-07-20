import React from 'react'
import { Segment, Image, Grid } from 'semantic-ui-react'
import logo from '../logo.svg'

export default class Footer extends React.Component {
  render() {
    return (
      <Segment basic>
        <Grid stackable verticalAlign="middle">
          <Grid.Column width="12">
            <Image src={logo} size="tiny" alt="Logo of UMHack" />
          </Grid.Column>
          <Grid.Column width="4" textAlign="right">
            <p>
              UMHack © 2017
            </p>
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }
}
