import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from '../context'

const Search = () => {
  const {setSearchTerm} = useGlobalContext();
  const searchValue = useRef('')

  useEffect(()=> {
    searchValue.current.focus()
  }, [])

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }

  return (
    <div>
    <form onSubmit={(e) => e.preventDefault()} className="section-form">
      <input type="text" placeholder='search your cocktail' ref={searchValue} onChange={searchCocktail}/>
    </form>
    </div>
  )
}

export default Search