import React from 'react'
import { useGlobalContext } from '../context'
import Cocktail from './Cocktail'
import Loading from './Loading'

const CocktailList = () => {
    const {cocktail, loading} = useGlobalContext()
    if(loading){
        return <Loading />
    }

    if(cocktail.length === 1){
        return (
            <div className='section'>
            <h1>No cocktail found from your search</h1>
        </div>
        )
    }
    
  return (
        <section className='cocktail-lists'>
    {cocktail.map(item => {
    return <Cocktail key={item.id} {...item}/>
    })}
    </section>
  )
}

export default CocktailList