import React, {useState} from 'react'

const Register = () => {

        const [titlePage ] = useState("Register");
        const [username, setUsername] = useState("");
        const [fullname, setFullname] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");



        
        const handleSubmit = () => {
            const data ={
                username: username,
                fullname: fullname,
                email: email,
                passowrd: password,
            };
            console.log(data);
        }

    return (
        <div className ="container">

            <h1 className="mt-5">{titlePage}</h1>

            <br/>
            <p>Username</p>
            <input className="form-control" placeholder = "Example: brendaambat" 
            value={username} onChange={(event) => setUsername (event.target.value)}/>

            <br/>
            <p>Full name</p>
            <input className="form-control" placeholder = "Nama lengkap" 
            value={fullname} onChange={(event) => setFullname (event.target.value)}/>

             <br/>
            <p>Email</p>
            <input className="form-control" placeholder = "Brendaambat@gmail,com" 
            value={email} onChange={(event) => setEmail (event.target.value)}/>

            <br/>
            <p>Password</p>
            <input className="form-control" placeholder = "kata sandi" 
            value={password} type ="password" onChange={(event) => setPassword(event.target.value)}/>
            <br />
            <br />

            <button className="btn btn-primary" onClick={handleSubmit}>Sign In</button>
        </div>
    );
};

export default Register;