
type GreetProps = {
    name:string
}

export const Greet = (props:GreetProps) => {
    return (
        <div>
            <h2>WelCome {props.name}!!! You have many backlog</h2>
        </div>
    )
}

//use types while building Applications
//use interfaces while building libraries