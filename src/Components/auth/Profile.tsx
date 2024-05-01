export type Profileprops = {
    name:string
}


export const Profile = ({name}:Profileprops) => {
    return (
        <div>Private Profile Component. Name is {name}</div>
    )
}