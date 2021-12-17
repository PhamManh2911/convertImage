import {Wrapper} from "./Button.styles"

export default function Button({text, handleClick}) {
 	return (
 		<Wrapper onClick={handleClick}>{text}</Wrapper>
 	)
 } 