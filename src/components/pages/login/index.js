import React, {useState, useEffect} from 'react'

const Login = () => {

        const [titlePage, setTitlePage] = useState("Login");

        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");

        useEffect(() => {
            setTimeout(()=> {
                setTitlePage ("Register Page");
            }, 3000);
        },[]);
        
        // const handleSubmit = () => { 
        //     console.log(username);
        //     console.log(password);
        // }
        const handleSubmit = () => {
            const data ={
                username: username,
                passowrd: password,
            };
            console.log(data);
        }

    return (
        <div className ="container">

            <h1 className="mt-5">{titlePage}</h1>
            <p>Username/Email</p>
            <input className="form-control" placeholder = "Masukan username / email" value={username} onChange={(event) => setUsername (event.target.value)}/>
            <p>Password</p>
            <input className="form-control" placeholder = "Password" value={password} type ="password" onChange={(event) => setPassword(event.target.value)}/>
            <br />
            <br />

            <button className="btn btn-primary" onClick={handleSubmit}>Sign In</button>
        </div>
    );
};

export default Login;