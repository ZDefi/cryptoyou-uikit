import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => (
    <Svg width="94" height="99" viewBox="0 0 94 99" {...props}>
        <g filter="url(#filter0_d_6619_5951)">
            <rect x="30" y="20" width="44" height="44" rx="22" fill="#1D2633"/>
            <rect x="32.5" y="22.5" width="39" height="39" rx="19.5" stroke="#343D4F" stroke-width="5"/>
        </g>
        <path d="M47 48.0003C46.8023 48.0003 46.609 47.9416 46.4446 47.8317C46.2802 47.7218 46.152 47.5657 46.0764 47.383C46.0007 47.2003 45.9809 46.9992 46.0194 46.8053C46.058 46.6113 46.1532 46.4332 46.293 46.2933L56.293 36.2933C56.4811 36.1086 56.7345 36.0057 56.9982 36.0068C57.2618 36.008 57.5142 36.1133 57.7007 36.2997C57.8871 36.4861 57.9923 36.7386 57.9935 37.0022C57.9947 37.2658 57.8917 37.5192 57.707 37.7073L47.707 47.7073C47.6143 47.8003 47.5041 47.8741 47.3828 47.9244C47.2614 47.9747 47.1314 48.0005 47 48.0003V48.0003Z" fill="#FFB751"/>
        <path d="M57.0001 48.0003C56.8687 48.0005 56.7387 47.9747 56.6173 47.9244C56.496 47.8741 56.3858 47.8003 56.2931 47.7073L46.2931 37.7073C46.1084 37.5192 46.0054 37.2658 46.0066 37.0022C46.0078 36.7386 46.113 36.4861 46.2995 36.2997C46.4859 36.1133 46.7383 36.008 47.002 36.0068C47.2656 36.0057 47.519 36.1086 47.7071 36.2933L57.7071 46.2933C57.8469 46.4332 57.9421 46.6113 57.9807 46.8053C58.0192 46.9992 57.9994 47.2003 57.9238 47.383C57.8481 47.5657 57.7199 47.7218 57.5555 47.8317C57.3911 47.9416 57.1978 48.0003 57.0001 48.0003Z" fill="#FFB751"/>
        <defs>
            <filter id="filter0_d_6619_5951" x="0" y="-5" width="104" height="104" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="5"/>
                <feGaussianBlur stdDeviation="15"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6619_5951"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6619_5951" result="shape"/>
            </filter>
        </defs>
    </Svg>


);

export default Icon;
