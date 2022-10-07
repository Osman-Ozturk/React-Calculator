import Keypoad from "./components/Keypoad"
import DisplayContextProvider from "./contexts/DisplayContext"
import './App.css'
export default function App() {
    return (
        <DisplayContextProvider>
            <div className="App">
                <Keypoad />
            </div>
        </DisplayContextProvider>
    )
}
