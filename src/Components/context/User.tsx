import {UserContext} from "./userContext";
import {useContext} from "react";

export const User = () => {

    const userContext = useContext(UserContext);

    const handleLogin = () => {

        if(userContext){
            userContext.setUser({
                name:"Ashutosh",
                email:"Ashutosh@gmail.com",
            })
        }

    }

    const handleLogout = () => {

        if(userContext){
            userContext.setUser(null)
        }
    }

    return(
        <div>
            <button onClick={handleLogout}>Logout</button>
            <button onClick={handleLogin}>LogIn</button>
            <div>User Name is {userContext?.user?.name} </div>
            <div>User Name is {userContext?.user?.email} </div>
        </div>
    )
}