import React, { Component } from 'react';

class Loading extends Component {
    render() {
        return (
            <svg style={{margin:"0 auto",display:"block"}}
                version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px" y="0px"
                width="200px" height="200px" viewBox="0 0 200 200" enableBackground="new 0 0 200 200"
                xmlSpace="preserve">
                <g>
                    <path fill="none" stroke="#E667AE" strokeWidth="2" strokeMiterlimit="10" d="M126.502,100c0,14.638-11.864,26.502-26.502,26.502
                    c-14.636,0-26.501-11.864-26.501-26.502c0-14.636,11.865-26.501,26.501-26.501"/>
                    <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 100 100"
                                      to="360 100 100"
                                      dur="2s" repeatCount="indefinite"/>
                </g>
                <g>
                    <path fill="none" stroke="#D6A9A7" strokeWidth="3" strokeMiterlimit="10" d="M120.494,100c0,11.32-9.174,20.494-20.494,20.494
                    c-11.319,0-20.495-9.174-20.495-20.494c0-11.319,9.176-20.495,20.495-20.495"/>
                    <animateTransform attributeType="xml" attributeName="transform" type="rotate"
                                      from="0 100 100"
                                      to="360 100 100" dur="1s" repeatCount="indefinite"/>
                </g>
            </svg>
        )
    }
}


export default Loading;

