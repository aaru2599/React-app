const ChildComponent=(props)=>{
    return(
        <div className="ml-5 mt-5">
            
                <dl>
                    <dt>Name:</dt>
                    <dd>{props.name}</dd>
                    <dt>Email:</dt>
                    <dd>{props.email}</dd>
                    <dt>Password</dt>
                    <dd>{props.password}</dd>
                    <dt>Number:</dt>
                    <dd>{props.number}</dd>
                    <dt>Gender:</dt>
                    <dd>{props.gender}</dd>
                    
                </dl>
        </div>
    )
}
export default ChildComponent