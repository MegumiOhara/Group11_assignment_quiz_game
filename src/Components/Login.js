import "../index.css";

const Login = () => {
    return (
        <div className="container">
             <form>
               <h1>Register</h1>
               <label>
                   <input type="text"
                     placeholder="Name"  />   
                     
              </label>
                <label>
                    <input type="password"
                         placeholder="Password"   />   
                             
                </label>
                <button className="btn" type="submit"
                 >
                
                    <p>Log In</p>     
                </button>
              </form>
        
        </div>  

);
}
export default Login;