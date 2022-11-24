import React from 'react'
import CocktailList from '../components/CocktailList'
import Search from '../components/Search'

const Home = () => {
  return (
    <main className='section'>
      <Search />
      <CocktailList />
    </main>
  )
}

export default Home