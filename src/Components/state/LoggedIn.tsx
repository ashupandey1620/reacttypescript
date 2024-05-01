import {useState} from "react";

export const loggedIn = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const handleLogin = () => {
        setIsLoggedIn(true)
    }
    const handleLogout = () => {
        setIsLoggedIn(false)
    }

    return(
        <div>
            <button onClick={handleLogin}> LOGIN </button>
            <button onClick={handleLogout}> LOGOUT </button>
            <div>User is { isLoggedIn ? 'logged In' : 'logged out' }</div>
        </div>
    )
}

