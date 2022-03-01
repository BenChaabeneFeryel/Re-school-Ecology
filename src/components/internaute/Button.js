import React from 'react';
import '../../assets/internaute/css/header.css'

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

const Button = ({children,type,buttonStyle,buttonSize,onClick}) => {
    const checkButtonStyle =STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <div>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                    onClick={onClick} type={type}>
                <a href='/'>{children}</a>
            </button>
        </div>
    );
}

export default Button;
