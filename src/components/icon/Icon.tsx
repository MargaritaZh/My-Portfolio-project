import React from 'react';
import iconSprite from "../../assets/images/icons-sprite.svg"


type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon:React.FC <IconPropsType>= (props: IconPropsType) => {
    return (
        <svg width={props.width||"78"} height={props.height||"78"} viewBox={props.viewBox|| "0 0 78 78"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconSprite}#${props.iconId}`}/>
        </svg>
    );
};


