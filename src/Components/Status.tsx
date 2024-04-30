type StatusProp = {
    status: 'loading'|'success'|'error'
}


export const Status = (props:StatusProp) => {

    let message
    if (props.status==='loading') {
        message = 'Loading...'
    }else if(props.status==='success') {
        message = 'Data Fetched Successfully'
    }else if(props.status === 'error'){
        message = 'Error Fetching Data'
    }
    return (
        <div>
            Status == {props.status}
        </div>
    )
}