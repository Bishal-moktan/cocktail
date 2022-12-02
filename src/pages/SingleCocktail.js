import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import Loading from '../components/Loading'


const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="



const SingleCocktail = () => {
  const [loading, setLoading] = useState(false)
  const [cocktail, setCocktail] = useState(null)
  const {id} = useParams()

  useEffect(()=> {
    const fetchData = async() => {
      setLoading(true)
      try{
        const response = await fetch(`${url}${id}`)
        const data = await response.json()
        const {drinks} = data
        if(drinks){
          const {
            strDrink: name,
            strAlcoholic: info,
            strGlass: glass,
            strCategory: category,
            strDrinkThumb: image,
            strInstructions:instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0]
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5
          ]

          const newCocktail = {
            name,
            info,
            glass,
            category, 
            image,
            instructions,
            ingredients
          }
          setCocktail(newCocktail)
          setLoading(false)
        }else{
          setCocktail(null)
          setLoading(false)
        }
      }catch(error){
        console.log(error)
        setLoading(false)
      }
    }
    // document.title = cocktail.name
    fetchData()
  }, [id])

  if (loading) {
    return <Loading/>
  }
  if (!cocktail) {
    return <h2 className='section'>no cocktail to display</h2>
  }else{
    const { name,
      info,
      glass,
      category, 
      image,
      instructions,
      ingredients} = cocktail
    return (
      <div className='section cocktail-section'>
      <img src={image} alt={name} />
      <div className="drink-info">
        <p>
          <span className='drink-data'>name:</span> {name}
        </p>
        <p>
          <span className='drink-data'>info:</span> {info}
        </p>
        <p>
          <span className='drink-data'>category:</span> {category}
        </p>
        <p>
          <span className='drink-data'>glass:</span> {glass}
        </p>
        <p>
          <span className='drink-data'>instructions:</span> {instructions}
        </p>
          <span className='drink-data'>ingredients: </span>
          <ul>

          {ingredients.map((item, index) => {
          return item ? <li key={index} >{item} </li>: null
          }
          )}
          </ul>
      </div>
      </div>
        
  )
}

}
export default SingleCocktail