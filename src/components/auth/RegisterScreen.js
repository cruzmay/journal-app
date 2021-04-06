import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';

import { useForm } from '../../Hooks/useForm';

export const RegisterScreen = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const { msgError } = state.ui
    console.log(msgError)

    const [{name, email, password, password2}, handleInputChange ] = useForm({
        name: 'Hernando',
        email: 'otromail@gmail.com',
        password: '1234567',
        password2: '1234567',
    })

    const handleRegister = (e) => {
        e.preventDefault()
        if ( isFormValid() ) {
           dispatch(startRegisterWithEmailPasswordName(email, password, name))
        }
    }

    const isFormValid = () => {
        if (validator.isEmpty(name)) {
            dispatch(setError('Name is required'))
            return false
        } else if (!validator.isEmail( email )) {
             dispatch(setError('is not valid email'))
             return false   
        } else if (!validator.equals(password, password2)|| password.lenght < 5 ) {
           dispatch (setError('password should be at least 6 characters and match '))
            return false
        }
        dispatch(removeError())
        return true;
    }
   

    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={handleRegister}>
                {   
                    msgError &&
                    <div className="auth__alert-error">
                        { msgError }
                    </div>

                }


                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                    
                />
                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />
                <input 
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    value={password2}
                    onChange={handleInputChange}
                />
                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>
                <Link 
                    to="/auth/login"
                    className="link"
                >
                    Already registered?
                </Link>
            </form>
        </>
    )
}
