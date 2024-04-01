import './App.css';
import {Header} from "./assets/layout/header/Header";
import {Main} from "./assets/layout/sections/main/Main";
import {Services} from "./assets/layout/sections/services/Services";


function App() {
    return (
        <div className="App">

         <div>
             <Header/>
             <Main/>
             <Services/>
         </div>


        </div>
    );
}

export default App;

