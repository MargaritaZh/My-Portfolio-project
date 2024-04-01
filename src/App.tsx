import './App.css';
import {Header} from "./assets/layout/header/Header";
import {Main} from "./assets/layout/sections/main/Main";
import {Services} from "./assets/layout/sections/services/Services";
import {Portfolio} from "./assets/layout/sections/portfolio/Portfolio";


function App() {
    return (
        <div className="App">

         <div>
             <Header/>
             <Main/>
             <Services/>
             <Portfolio/>
         </div>


        </div>
    );
}

export default App;

