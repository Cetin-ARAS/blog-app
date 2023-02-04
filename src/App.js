import "./App.css"
import Navbar from "./components/Navbar"
import AuthContext from "./contexts/AuthContext"

const App = () => {
  return (
    <div className="App">
      <AuthContext>
        <Navbar />
      </AuthContext>
      
    </div>
  )
}

export default App
