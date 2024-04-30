
type HeadingProp = {
    children:string
}

export const Heading =(prop:HeadingProp) =>{
    return (
        <div>
            <h2>
                {prop.children}
            </h2>
        </div>
    )
}