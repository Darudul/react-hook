import React, { useReducer } from 'react'
import { initialState, reducer } from '../state/formReducer'

const LongForm = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const submit = (event) => {
        event.preventDefault()
        console.log(state)
    }

    return (
        <div>
            <form onSubmit={submit}>

                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" id="firstName" onBlur={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" id="lastName" onBlur={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onBlur={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} />
                </div>
                <div>
                    <h1>Gender</h1>
                    <div>
                        <div>
                            <input type="radio" name="gender" value='male' onClick={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} />
                            <label htmlFor='male'>Male</label>
                        </div>
                        <div>
                            <input type="radio" name="gender" value='female' onClick={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} />
                            <label htmlFor='male'>Female</label>
                        </div>
                        <div>
                            <input type="radio" name="gender" value='other' onClick={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} />
                            <label htmlFor='other'>Other</label>
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor='education'>Education</label>
                    <select name="education" id="education" onChange={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })}>
                        <option value="SSC">SSC</option>
                        <option value="HSC">HSC</option>
                        <option value="underGrad">Under Graduate</option>
                        <option value="graduate">Graduate</option>
                    </select>
                </div>
                <div>
                    <label>Number of PCs</label>
                    <div>
                        <button>-</button>
                        <div>
                            <span>0</span>
                        </div>
                        <button>+</button>
                    </div>
                </div>
                <div>
                    <label htmlFor='feedback'>Feedback</label>
                    <textarea name="feedback" id="feedback" cols="30" rows="4" onBlur={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })}></textarea>
                </div>
                <div>
                    <div>
                        <input type="checkbox" name='term' id='terms' />
                        <label htmlFor="terms">I agree to terms and conditions</label>
                    </div>
                    <button type="submit" >
                        Submit
                    </button>
                </div>
            </form >
        </div >
    )
}

export default LongForm
