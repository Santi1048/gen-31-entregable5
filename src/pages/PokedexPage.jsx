import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard  from "../components/PokedexPage/PokeCard"
import SelectType from "../components/PokedexPage/SelectType"
import './styles/PokedexPage.css'


const PokedexPage = () => {

  const [inputValue, setInputValue] = useState('')
  const [selectValue, setSelectValue] = useState('')

  const trainerName = useSelector(store => store.trainerName)

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=1'
  const [ pokemons, getPokemons, getByTypePokemons ] = useFetch(url)

  useEffect(() => {
    if(selectValue === 'allPokemons') {
      getPokemons() 
    } else {
      getByTypePokemons(selectValue)
    }
    
  }, [selectValue])

  const inputSearch = useRef()

  const handleSubmit = e => {
    e.preventDefault()  
    setInputValue(inputSearch.current.value.toLowerCase().trim())
    inputSearch.current.value = ''
  }

  const cbFilter = (poke) => {
    const nameFiltered = poke.name.includes(inputValue)
    const typeFiltered = poke.type
    return nameFiltered
  }

  console.log(pokemons) 

  return (
    <div className="pokedex-container">
      <p className="pokedex-welcome">Welcome <span className="span">{ trainerName }</span>, here you can find your favorite pokemon. Lest´s go!</p>
      <div className="search-section">
        <form className="form" onSubmit={handleSubmit}>
          <input className="input" ref={inputSearch} type="text" />
          <button className="btn">Search</button>
        </form>
        <SelectType setSelectValue={setSelectValue} />
         
        {
          pokemons?.results.filter(cbFilter).map(poke => (
            <PokeCard
            key={poke.url}
            url={poke.url}
            />
          ))
        }
      </div>
    </div>
  )
}

export default PokedexPage