import { useState } from "react"

export const useForm = (initialState={}) => {
    
    const [formState, setformState] = useState(initialState)

    const reset = () => {
        setformState(initialState)
    }

    const handleInputChange = ({target}) => {
        
        setformState({
            ...formState,
            [target.name]: target.value
        })
    }
    return [formState, handleInputChange, reset]
}