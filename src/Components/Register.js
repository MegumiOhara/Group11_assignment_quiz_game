import "../index.css";

const Register = () => {
  
    return (
        <div className="container">
             <form>
               <h1>Register</h1>
               <label>
                   <input type="text"
                     placeholder="Name"
                   />          
              </label>
                <label>
                    <input type="email"
                     placeholder="Email"  
                    />
                </label>
                <label>
                    <input type="password"
                     placeholder="Password"
                    />   
                             
                </label>
                <button className="btn" type="submit" 
                 >
                
                    <p>Register</p>     
                </button>
              </form>
    </div>  

);
}
export default Register;