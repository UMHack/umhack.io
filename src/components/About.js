import React from 'react'
import { Segment, Header, Container, Divider, Grid } from 'semantic-ui-react'

export default class About extends React.Component {
  render() {
    return (
      <Segment basic padded>
        <Container text textAlign="justified">
          <Header as="h2" textAlign="center" color="blue">
            <span id="about">About Us</span>
          </Header>
          <p>
            FaceHack 2017 is the signature Artificial Intelligence hackathon in Malaysia, bringing together 100 students and tech enthusiasts from various local universities to learn about the current state of Artificial Intelligence by competing in a 48-hour hackathon format.
          </p>
          <p>
            Organized by Department of Artificial Intelligence at Faculty of Computer Science & IT, University of Malaya, FaceHack will give participants a platform to build and validate their innovative Artificial Intelligence ideas and take their ideas to the next level: Execution.
          </p>
          <p>
            FaceHack aims to be the stepping stone to start a new AI conversation in the country and an effort to build accurate and scientific awareness of current state of AI, among students and tech scene in Malaysia.
          </p>
          <Divider hidden />
          <Header as="h2" textAlign="center" color="blue">Venue</Header>
          <Grid stackable columns={2} padded="vertically">
            <Grid.Column>
              <p>
                Faculty of Computer Science and Information Technology,<br />
                University of Malaya,<br />
                Jalan Universiti,<br />
                50603 Kuala Lumpur,<br />
                Wilayah Persekutuan Kuala Lumpur,<br />
                Malaysia.
              </p>
            </Grid.Column>
            <Grid.Column>
              <p>
                University of Malaya is one of the oldest and most esteemed university in Malaysia, located in the southwest of Kuala Lumpur.
              </p>
              <p>
                To get to University of Malaya, simply take the LRT to KL Gateway-Universiti LRT Station (KJ19), where Rapid KL Bus (T789) can get you here easily. If you are taking MRT, make a stop at Phileo Damansara MRT station (SBK11) and look for MRT Feeder Bus (T815), which heads straight to University of Malaya.
              </p>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    )
  }
}
