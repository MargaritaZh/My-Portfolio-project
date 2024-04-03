import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../../components/icon/Icon";

export const ContactInfo = () => {
    return (
        <StyledContactInfo>
            <Title>Contact information</Title>
            <Card>
                <Icon iconId={"location"} height={"18"} width={"18"} viewBox={"0 0 18 18"}/>
                <div>
                    <span>Country:</span>
                    <span>Bangladesh</span>
                </div>
                <div>
                    <span>City:</span>
                    <span>Dhaka</span>
                </div>
                <div>
                    <span>Streat:</span>
                    <span>35 vhatara, Badda</span>
                </div>
            </Card>
            <Card>
                <Icon iconId={"mail"} height={"18"} width={"18"} viewBox={"0 0 18 18"}/>
                <div>
                    <span>Email:</span>
                    <span>youremail@gmail.com</span>
                </div>
                <div>
                    <span>Skype:</span>
                    <span>@yourusername</span>
                </div>
                <div>
                    <span>@yourusername</span>
                    <span>@yourusername</span>
                </div>
            </Card>
            <Card>
                <Icon iconId={"mobile"} height={"18"} width={"18"} viewBox={"0 0 18 18"}/>
                <div>
                    <span>Support services:</span>
                    <span>15369</span>
                </div>
                <div>
                    <span>Office:</span>
                    <span>+58 (021)356 587 235</span>
                </div>
                <div>
                    <span>Personal:</span>
                    <span>+58 (021)356 587 235</span>
                </div>
            </Card>


        </StyledContactInfo>
    );
};

const StyledContactInfo = styled.div`
    background-color: #88b988;
    min-height: 756px;
    
`

const Title = styled.h2``

const Card = styled.div`
    background-color: chartreuse;
    min-height: 210px;
    display: flex;
    flex-direction: column;
    margin:20px;
`

