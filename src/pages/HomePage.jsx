import { useRef } from "react"
import { setTrainerName } from "../store/slices/TrainerName.slice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import './styles/HomePage.css'

const HomePage = () => {

        const inputName = useRef()

        const dispatch = useDispatch()

        const navigate = useNavigate()

        const handleSubmit = e => {
            e.preventDefault()
            dispatch(setTrainerName(inputName.current.value.trim()))
            navigate('/pokedex')
        }
    
  return (
    <div className="pokedex__container">
        <h1 className="pokedex__title">Pokedex</h1>
        <h2 className="greeting">Hi Trainer!</h2>
        <p className="instructions">To start, please give me you trainer name</p>
        <form onSubmit={handleSubmit} className="name-form">
            <input ref={inputName} type="text" className="trainer-input"/>
            <button className="catch-btn">Catch them all!</button>
        </form>
    </div>
  )
}

export default HomePage