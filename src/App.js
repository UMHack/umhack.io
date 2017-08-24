import React, { Component } from 'react'
import { Container, Divider } from 'semantic-ui-react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
// import Sponsor from './components/Sponsor'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <Container fluid className="blackBG">
        <Container className="whiteBG">
          <Navbar />
          <Header />
          <Divider />
          <About />
          <Divider />
          <FAQ />
          <Divider />
          <Footer />
        </Container>
      </Container>
    )
  }
}

export default App
