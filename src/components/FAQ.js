import React from 'react'
import { Segment, Header, Container, Grid } from 'semantic-ui-react'

export default class FAQ extends React.Component {
  render() {
    return (
      <Segment basic padded>
        <Container text textAlign="justified">
          <Header as="h2" textAlign="center">
            Questions? Get{"'"}em answers here.
            <Header.Subheader>
              Five dollars for each questions answered.
            </Header.Subheader>
          </Header>
          <Grid stackable padded="vertically">
            <Grid.Row columns={2}>
              <Grid.Column>
                <Header size="small">Size of your brain?</Header>
                <p>
                  In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                </p>
              </Grid.Column>
              <Grid.Column>
                <Header size="small">
                  How much coffee do you drink daily?
                </Header>
                <p>
                  Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
                </p>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Header size="small">Ironman or Spiderman?</Header>
                <p>
                  In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                </p>
              </Grid.Column>
              <Grid.Column>
                <Header size="small">
                  Tell me your secret lover.
                </Header>
                <p>
                  Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
                </p>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Header size="small">I would like to contribute.</Header>
                <p>
                  In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Header size="tiny" textAlign="center">
            Did we miss any questions?
            <Header.Subheader>
              E-mail us at <a href="#">umhack@gmail.com</a> to get more info.
            </Header.Subheader>
          </Header>
        </Container>
      </Segment>
    )
  }
}
