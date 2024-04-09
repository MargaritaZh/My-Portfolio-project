import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../../components/icon/Icon";
import {Button} from "../../../../../components/button/Button";
import {theme} from "../../../../../styles/Theme";
import {SectionTextDescription} from "../../../../../components/SectionTextDescription";

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
            {props.showMostPopular && <span>Most Popular</span>}
            <CardTitle>{props.title}</CardTitle>
            <Wrapper>
                <h2>{props.price}</h2>
                <span>/Hour</span>
            </Wrapper>
            <TextDescription>For most businesses that want to optimize web queries</TextDescription>
            <ListItem>
                {featuresData.map((feature, index) => (
                    <Item key={index}>
                        <Icon width={"24"} height={"25"} viewBox={"0 0 25 24"}
                              iconId={index >= props.iconTypeBoundary ? "close" : feature.iconId}/>
                        <span>{feature.text}</span>
                    </Item>
                ))}

            </ListItem>
            <Button text={"ORDER NOW"}/>
        </StyledPriceCard>
    );
};


const StyledPriceCard = styled.div`
    background-color: ${theme.colors.secondaryBg};
    width: 310px;
    padding: 54px 32px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;

`
const CardTitle=styled.h3`
    color: ${theme.colors.font};
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 19px;
`

const Wrapper=styled.div`
display: flex;
    justify-content: center;
    align-items: flex-end;
    gap:10px;
    margin-bottom: 8px;
`

const TextDescription=styled.p`
    color: ${theme.colors.fontDescription};
    font-size: 15px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 21px;
`

const ListItem=styled.ul`
display: flex;
    flex-direction: column;
    gap:16px;
    
    margin-bottom: 21px;
`
const Item=styled.li`
  display: flex;
    align-items: center;
    gap:15px;
`