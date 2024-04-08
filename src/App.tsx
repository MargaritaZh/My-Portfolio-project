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
import {Sidebar} from "./assets/layout/sidebarLeft/Sidebar";
import {NavBar} from "./assets/layout/navBar/NavBar";
import styled from "styled-components";



function App() {
    return (
        <div className="App">
            <Sidebar/>
            <MainContent>
                    {/*<Header/>*/}
                    <Main/>
                    <Services/>
                    <Price/>
                    <Recommendations/>
                    <Education/>
                    <WorkHistory/>
                    <Portfolio/>
                    <Blog/>
                    <Footer/>
            </MainContent>
            <NavBar/>
        </div>
    );
}

export default App;



const MainContent = styled.main`
    padding: 0 133px 0 330px;
    outline: solid 3px #ffae00;
`



