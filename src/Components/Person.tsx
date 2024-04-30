type PersonProp = {
    name:{
        first: string,
        last: string,
    }
}



export const Person=(personProp:PersonProp) => {
    return (
        <div>
            {
                personProp.name.first
            }
            {
                personProp.name.last
            }
        </div>
    )
}