import React from 'react'
import Container from './components/Container'
import MktoButton from './components/MktoButton'

function App() {
  return (
    <>
      <main>
        <Container>
          Hello! <MktoButton id="button1" />
        </Container>
      </main>
      <footer></footer>
    </>
  )
}

export default App
