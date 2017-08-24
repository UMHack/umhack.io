import React from 'react'
import {
  Segment,
  Header,
  Image,
  Input,
  Button,
  Icon,
  Container,
  Divider
} from 'semantic-ui-react'
import logo from '../logo.svg'

export default class PageHeader extends React.Component {
  render() {
    return (
      <Segment textAlign="center" padded basic>
        <Container text>
          <Image src={logo} size="medium" alt="Logo of UMHack" centered />
          <Header as="h1">
            FaceHack 2017
            <Header.Subheader>
              FCSIT, University of Malaya | 17th – 19th November 2017

            </Header.Subheader>
          </Header>
          <Divider hidden />
          <Header size="tiny" textAlign="center">
            Subscribe for latest updates!
          </Header>
          <Input
            fluid
            action={
              <Button animated>
                <Button.Content visible>Subscribe</Button.Content>
                <Button.Content hidden>
                  <Icon name="feed" />
                </Button.Content>
              </Button>
            }
            icon="mail"
            iconPosition="left"
            placeholder="Your email address..."
          />
        </Container>
      </Segment>
    )
  }
}
