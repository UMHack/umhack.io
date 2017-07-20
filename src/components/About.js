import React from 'react'
import { Segment, Header, Container, Divider, Grid } from 'semantic-ui-react'

export default class About extends React.Component {
  render() {
    return (
      <Segment basic padded>
        <Container text textAlign="justified">
          <Header as="h2" textAlign="center">About Us</Header>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
          </p>
          <p>
            In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
          </p>
          <Divider hidden />
          <Header as="h2" textAlign="center">Venue</Header>
          <Grid stackable columns={2} padded="vertically">
            <Grid.Column>
              <p>
                Lorem ipsum dolor sit,<br />
                Consectetuer adipiscing,<br />
                Aenean commodo ligula.,<br />
                Aenean massa strong.
              </p>
            </Grid.Column>
            <Grid.Column>
              <p>
                In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
              </p>
              <p>
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
              </p>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    )
  }
}
