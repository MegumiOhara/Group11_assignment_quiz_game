import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" lement={<Login />} />
      </Routes>
    </div>

  );
}

export default App;
