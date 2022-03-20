import React from 'react'
import Banner from './components/Banner/Banner'
import Nav from './components/Nav/Nav'
import Row from './components/Row/Row'
import requests from './requests'
const App = () => {
  return (
    <main className='app'>
      <Nav />
      <Banner />
      <Row title="Netflix Originals" fetchURL={requests.fetchOriginals} isLargePoster />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated Movie" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movie" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movie" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movie" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movie" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaries Movie" fetchURL={requests.fetchDocumentariesMovies} />
    </main>
  )
}

export default App
