import {useState} from "react";

type AuthUser = {
    name:string,
    email: string,
}


export const User = () =>{
    const [user, setUser] = useState<AuthUser>({} as AuthUser);
    const handleLogin = () => {
        setUser({
            name:'Ashutosh',
            email:'ashutosh@gmail.com',
        })
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <div>User Name is {user.name}</div>
            <div>User Email is {user.email}</div>
        </div>
    )
}