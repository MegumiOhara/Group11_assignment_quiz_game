import "../index.css";

    return (
        <div className="container">
             <form className="form-container">
               <h1>Login</h1>
                <label>
                    <input type="Text"
                     placeholder="Name" 
                     value={name}
                     onChange={(e) => setName(e.target.value)} 
                    />
                         
                </label>
                <label>
                    <input type="password"
                     placeholder="Password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}  
                    />   
                             
                </label>
                <button className="btn" type="submit" onCliock={handleSubmit}
                 >
                
                    <p>Log in</p>     
                </button>
              </form>
    </div>  

);
}
export default Login;