import React, { useCallback, useContext, useEffect, useState } from "react";

const AppContext = React.createContext()

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

const AppProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('a')
    const [cocktail, setCocktail] = useState([])
    
    const fetchData = useCallback(async() => {
        setLoading(true)
        try{
            const response = await fetch(`${url}${searchTerm}`)
            const data = await response.json()
            const {drinks} = data
            if(drinks){
                const newDrinks = drinks.map(item => {
                    const {strDrink, strCategory,strDrinkThumb, idDrink} = item
                    return{
                        id: idDrink,
                        name: strDrink,
                        category: strCategory,
                        image: strDrinkThumb
                    }
                })
                setCocktail(newDrinks)
            }else{
                setCocktail([])
            }
            setLoading(false)
        }catch(error){
            console.log(error)
            setLoading(false)
        }
    }, [searchTerm])
    useEffect(() => {
        fetchData()
    }, [searchTerm, fetchData])
    return <AppContext.Provider value={{
        searchTerm,
        cocktail,
        loading,
        setSearchTerm,
    }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
} 

export {AppContext, AppProvider}