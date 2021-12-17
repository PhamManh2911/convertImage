import styled from "styled-components"

export const Wrapper = styled.button`
	background: none;
    outline: none;
    border: none;
    cursor: pointer;
    background-color: #2a73d9;
    border: 2px solid #2a73d9;
    color: #fff;
    text-align: center;
    font-size: 0.875em;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.02em;
    border-radius: 4px;
    height: 2.5em;
    flex-shrink: 0;
    white-space: nowrap;
    padding: 0 .9em;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    overflow: visible;
    min-width: 11em;
    transition: all 0.2s ease-out;

    &:hover {
    	color: #2a73d9;
    	background-color: white;
    }
`