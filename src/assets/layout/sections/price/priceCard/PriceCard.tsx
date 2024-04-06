import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../../components/icon/Icon";
import {Button} from "../../../../../components/button/Button";

type PriceCardPropsType = {

    showMostPopular?: boolean
    title:string
    price: string
    iconTypeBoundary: number
};

export const PriceCard = (props: PriceCardPropsType) => {
    const featuresData = [
        {
            iconId: "check",
            text: "UI Design"
        },
        {
            iconId: "check",
            text: "Web Development"
        },
        {
            iconId: "check",
            text: "Logo Design"
        },
        {
            iconId: "check",
            text: "SEO Optimization"
        },
        {
            iconId: "check",
            text: "WordPress Integration"
        },
        {
            iconId: "check",
            text: "5 Websites"
        },
        {
            iconId: "check",
            text: "Unlimited Users"
        },
        {
            iconId: "check",
            text: "20 GB Bandwidth"
        }
    ];

    return (
        <StyledPriceCard>
            {props.showMostPopular && <span>most popular</span>}
            <h3>{props.title}</h3>
            <h2>{props.price}</h2>
            <span>/hour</span>
            <p>For most businesses that want to optimize web queries</p>

            <ul>

                {featuresData.map((feature, index) => (
                    <li key={index}>
                        <Icon width={"24"} height={"25"} viewBox={"0 0 25 24"}
                              iconId={index >= props.iconTypeBoundary ? "close" : feature.iconId}/>
                        <span>{feature.text}</span>
                    </li>
                ))}

            </ul>
            <Button text={"ORDER NOW"}/>
        </StyledPriceCard>
    );
};


const StyledPriceCard = styled.div`
    background-color: #9bcc9b;

`
