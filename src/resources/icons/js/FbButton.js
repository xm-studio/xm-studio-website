import React from 'react';

const SVG =({
    style = {},
    fill='black',
    width='50px',
    className ='',
    viewBox = '0 0 32 32'
}) => (
    <svg
        width={width}
        style={style}
        height={width}
        viewBox = {viewBox}
        xmlns ="http://www.w3.org/2000/svg"
        className ={`svg-icon ${className || ""}`}
        xmlnsXlink = "http://www.w3.org/1999/xlink"
    >
        <path fill ={fill} d="M214.69,325.47c0-16.12,0-32.25,0-48.37,0-1.62-.41-2.06-2-2.05-9.24.09-18.49.05-27.73,0-4.73,0-6.42-1.66-6.42-6.33q0-18.28,0-36.57c0-4.49,1.82-6.31,6.31-6.31,9.25,0,18.49,0,27.73,0,1.63,0,2.2-.25,2.18-2.08-.1-9.17-.14-18.35,0-27.52a63.09,63.09,0,0,1,6.78-28.19c6.66-12.89,17.11-21.28,30.89-25.58a66.64,66.64,0,0,1,19.95-2.86q14.94,0,29.89,0c4,0,5.9,1.9,5.91,5.91q0,17.3,0,34.6c0,4.05-1.86,5.83-5.9,5.89-8.13.12-16.26-.38-24.37.32-4.36.37-8.4,1.58-10.73,5.79a15,15,0,0,0-1.77,7.18c-.11,8.39,0,16.77-.15,25.16,0,1.51.77,1.32,1.7,1.32h33.23c4.78,0,6.51,1.72,6.51,6.49q0,18.28,0,36.57c0,4.47-1.7,6.15-6.19,6.15-11.08,0-22.15.05-33.23,0-1.69,0-2,.51-2,2.08q.06,47.78,0,95.55c0,5.18-1.64,6.85-6.76,6.85H221c-4.54,0-6.3-1.76-6.31-6.29Z" />

    </svg>
);

export default SVG;
