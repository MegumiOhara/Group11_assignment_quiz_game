import "../index.css";

    return (
        <div className="container">
             <form className="form-container">
               <h1>Login</h1>
                <label>
                    <input type="Text"
                     placeholder="Name" 
        
                    />
                         
                </label>
                <label>
                    <input type="password"
                     placeholder="Password"
                      
                    />   
                             
                </label>
                <button className="btn" type="submit" 
                 >
                
                    <p>Log in</p>     
                </button>
              </form>
    </div>  

);

export default Login;