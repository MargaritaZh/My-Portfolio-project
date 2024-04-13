import React from 'react';
import styled from "styled-components";
import {Button} from "../../../components/button/Button";
import {SkillsAdnLanguagesCard} from "./skillsAdnLanguagesCard/SkillsAdnLanguagesCard";
import {ExtraSkillsCard} from "./extraSkillsCard/ExtraSkillsCard";
import {MainCard} from "./mainCard/MainCard";
import {DescriptionCard} from "./descriptionCard/DescriptionCard";
import {theme} from "../../../styles/Theme";


const descriptionItems = [
    {name: "Age:", description: "24"},
    {name: "Residence:", description: "BD"},
    {name: "Freelance:", description: "Available"},
    {name: "Address:", description: "Dhaka,Bangladesh"},
]


const languagesItems = [
    {name: "Bangla", percentage: "100%"},
    {name: "English", percentage: "80%"},
    {name: "Spanish", percentage: "60%"}
]

const skillsItems = [
    {name: "HTML", percentage: "90%"},
    {name: "CSS", percentage: "85%"},
    {name: "JavaScript", percentage: "80%"},
    {name: "PHP", percentage: "75%"},
    {name: "WordPress", percentage: "85%"}
]

const extraSkillsItems = ["Bootstrap, Materialize", "Stylus, Sass, Less", "Gulp, Webpack, Grunt", "GIT Knowledge"]

export const Sidebar = () => {
    return (
        <StyledSidebar>
            <MainCard/>
            <DescriptionCard items={descriptionItems}/>
            <SkillsAdnLanguagesCard title={"Languages"} items={languagesItems}/>
            <SkillsAdnLanguagesCard title={"Skills"} items={skillsItems}/>
            <ExtraSkillsCard title={"Extra Skills"} items={extraSkillsItems}/>
            <Button text={"Download cv"} iconId={"btnDownload"} width={"14"} height={"16"} viewBox={"0 0 14 16"}/>
        </StyledSidebar>
    );
};

const StyledSidebar = styled.aside`
    background-color: ${theme.colors.secondaryBg};
    display: flex;
    flex-direction: column;
    width: 305px;
    padding: 50px 50px 25px 35px;
    outline: 1px solid #a443a4;

    height: 100vh;
    overflow: auto;

    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 999;
`




