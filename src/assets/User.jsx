function User(props){
    return(
        <div className="user">
            <h2>user name is {props.name}</h2>
            <p>email : {props.email}</p>
        </div>
    );
}
export default User;