import React from 'react';
import {Icon} from "../icon/Icon";

type LogoPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Logo: React.FC<LogoPropsType> = (props: LogoPropsType) => {
    return (
        <a href="">
            <Icon iconId={props.iconId} height={props.height} width={props.width} viewBox={props.viewBox}/>
        </a>
    );
};

