import React from 'react'
import Header from './components/Header'
import Footer from "./components/Footer"
import {Container} from 'react-bootstrap'
import HomeScreen from './containers/HomeScreen'

const App = () => {
  return (
    <div>
      <Header/>
      <main>
        <Container>
          <HomeScreen/>
        </Container>
      </main>
      <Footer/>
    </div>  
  )
}

export default App