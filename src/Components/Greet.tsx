
type GreetProps = {
    name:string,
    messageCount:number,
    isLoggedIn:boolean,
}

export const Greet = (props:GreetProps) => {
    const {messageCount = 0} = props;
    return (
        <div>
            <h2>
                {
                props.isLoggedIn ? `WelCome ${props.name}!!! You have many ${props.messageCount} backlog`:`Welcome Guest`
            }
            </h2>
        </div>
    )
}

//use types while building Applications
//use interfaces while building libraries