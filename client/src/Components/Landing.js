import React, {useState} from 'react'

function Landing({setUser}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    // const [createUsername, setCreateUsername] = useState('')
    // const [createPassword, setCreatePassword] = useState('')
    // const [passwordConfirmation, setPasswordConfirmation] = useState('')
    // const [email, setEmail] = useState('')

    const onLogin = e => {
        e.preventDefault()
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        }).then(r => r.json()).then(user => setUser(user))
    }

    const onLogout = () => {
        fetch('/logout', {
            method: 'DELETE'
        }).then(() => setUser(null))
    }

    return (
    <div>
        <form onSubmit={onLogin}>
            <label>Username
                <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username..."/>
            </label>
            <label>Password
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password..."/>
            </label>
            <button type="submit">login</button>
            <button onClick={onLogout}>logout</button>
        </form>
    </div>
    )
}

export default Landing