import './App.css';
import {Header} from "./assets/layout/header/Header";
import {Main} from "./assets/layout/sections/main/Main";
import {Services} from "./assets/layout/sections/services/Services";
import {Portfolio} from "./assets/layout/sections/portfolio/Portfolio";
import {Blog} from "./assets/layout/sections/blog/Blog";


function App() {
    return (
        <div className="App">

         <div>
             <Header/>
             <Main/>
             <Services/>
             <Portfolio/>
             <Blog/>
         </div>


        </div>
    );
}

export default App;
