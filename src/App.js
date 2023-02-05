import "./App.css"
import AppRouter from "./approuter/AppRouter"
import AuthContext from "./contexts/AuthContext"

const App = () => {
  return (
    <div className="App">
      <AuthContext>
        <AppRouter />
      </AuthContext>
      
    </div>
  )
}

export default App
