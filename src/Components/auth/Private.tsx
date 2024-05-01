import {Login} from './Login'
import {Profileprops} from "./Profile";

export type PrivateProps = {
    isLoggedIn: boolean,
    Component:React.ComponentType<Profileprops>
}
export const Private = ({
    isLoggedIn, Component
}:PrivateProps) => {
    if(isLoggedIn){
        return <Component name ='Ashutosh'/>
    } else {
        return <Login/>
    }
}