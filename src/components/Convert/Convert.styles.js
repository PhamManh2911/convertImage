import styled from "styled-components"



export const Wrapper = styled.div`
	--blue: #2a73d9;
	--white: #fff;

	padding: 2rem;
	margin: 1rem auto;
	max-width: 600px;
	border: 1px solid black;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	gap: 1rem;

	>div:first-child {
		height: 2.5rem;
		min-width: 15rem;
		padding: 1rem;
		position: relative;
		background-color: white;
		border: 1px solid var(--blue);
		color: var(--blue);
		border-radius: 4px;

		input {
			cursor: pointer;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			opacity: 0;
			line-height: 4.5rem;
		}

		span {
			pointer-events: none;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%)
		}
	}
	img {
		height: 300px;
		width: auto;
	}
	a {
		text-decoration: none;
		height: 0.5rem;
		padding: .9rem;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: white;
		border: 1px solid var(--blue);
		color: var(--blue);

		&:hover {
			box-shadow: 0px 2px 5px gray;
		}
	}
`

export const Loading = styled.div`
	width: 50px;
	height: 50px;
	border: 5px solid #eee;
	border-top: 5px solid #353535;
	border-radius: 50%;
	animation: spin 1s ease-in infinite;
	margin: 20px auto;
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`