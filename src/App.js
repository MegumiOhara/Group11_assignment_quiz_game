import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" lement={<Login />} />
      </Routes>
    </div>

  );
}

export default App;
