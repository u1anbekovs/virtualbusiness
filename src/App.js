import './App.css';
import Header from "./components/header/Header";
import Virtual from "./components/virtual/Virtual";
import Service from "./components/service/Service";
import Every from "./components/every/Every";
import Complete from "./components/complete/Complete";
import Team from "./components/team/Team";
import Latest from "./components/latest/Latest";
import Footer from "./components/footer/Footer";
import {useState} from "react";

function App() {

    const [darkblue, setDarkblue] = useState(false)

    return (
        <div className="App" style={{
            background: darkblue ? "darkblue" : "#111827"
        }}>

            <Header darkblue={darkblue} setDarkblue={setDarkblue}/>
            <Virtual/>
            <Service/>
            <Every/>
            <Complete/>
            <Team/>
            <Latest/>
            <Footer/>
        </div>
    );
}

export default App;