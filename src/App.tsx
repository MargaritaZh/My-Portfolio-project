import './App.css';
import {Header} from "./assets/layout/header/Header";
import {Main} from "./assets/layout/sections/main/Main";
import {Services} from "./assets/layout/sections/services/Services";
import {Portfolio} from "./assets/layout/sections/portfolio/Portfolio";
import {Blog} from "./assets/layout/sections/blog/Blog";
import {Education} from "./assets/layout/sections/education/Education";
import {WorkHistory} from "./assets/layout/sections/workHistory/WorkHistory";
import {Recommendations} from "./assets/layout/sections/recommendations/Recommendations";
import {Footer} from "./assets/layout/footer/Footer";
import {Price} from "./assets/layout/sections/price/Price";


function App() {
    return (
        <div className="App">

         <div>
             <Header/>
             <Main/>
             <Services/>
             <Price/>
             <Recommendations/>
             <Education/>
             <WorkHistory/>
             <Portfolio/>
             <Blog/>
             <Footer/>
         </div>


        </div>
    );
}

export default App;

