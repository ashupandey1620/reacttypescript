
type PersonList = {
    names:{
        first: string,
        last: string
    }[]
}

export const PersonList = (props:PersonList) =>{
    return (
        <div>
            <h2>
                {props.names.map((name)=>{
                    return (
                        <h2 key = {name.first}>{name.first} {name.last}</h2>
                    )
                })}
            </h2>

        </div>
    )
}