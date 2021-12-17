import {useReducer} from 'react'
import {Wrapper, Loading} from "./Convert.styles"
import Button from "../Button"
import imageCompression from 'browser-image-compression'

const initialState = {
	imageUpload: null,
	imageAPI: null,
	loading: false,
	err: false
}

const reducer = (state, action) => {
	switch (action.type) {
		case "set_image_upload":
			return {
				...state,
				imageUpload: action.data
			}
		case "set_image_API":
			return {
				...state,
				imageAPI: action.data
			}
		case "reset_image_API":
			return {
				...state,
				imageAPI: initialState.imageAPI
			}
		case "toggle_loading":
			return {
				...state,
				loading: !state.loading
			}
		case "true_err":
			return {
				...state,
				err: true
			}
		case "false_err":
			return {
				...state,
				err: false
			}
		default: 
			return state
	}
}

export default function Convert() {
	const [state, dispatch] = useReducer(reducer, initialState)

	const handleConvert = async() => {
		try {
			dispatch({type: "toggle_loading"})

			const myHeaders = new Headers();
			myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM0OTI3NDU3LCJqdGkiOiJkMmZjZGJkYzMwODM0NjQ1YmE2NTBkY2FlMzllZDUzMiIsInVzZXJfaWQiOjMxOX0.fweLX5jMaCzF_Xw3AW8XINEkOSf9yM75Fx9MTfTXLG0");

			const formdata = new FormData();
			formdata.append("image", state.imageUpload, "[PROXY]");

			const requestOptions = {
				method: 'POST',
				headers: myHeaders,
				body: formdata,
				redirect: 'follow'
			};

			const data = await(await fetch("https://removebackground-wlaiaw5rxa-as.a.run.app/remove", requestOptions)).json()
			dispatch({type: "set_image_API", data: `data:image/png;base64,${data}`})
			dispatch({type: "false_err"})
			dispatch({type: "toggle_loading"})
		} catch {
			dispatch({type: "true_err"})
		}
	}

	const handleUpload = async e => {
		dispatch({type: "reset_image_API"})
		dispatch({type: "set_image_upload", data: e.target.files[0]})
		const options = {
			maxSizeMB: 1,
			maxWidthOrHeight: 1920,
			useWebWorker: true
		}
		try {
			const compressedFile = await imageCompression(e.target.files[0], options);
			dispatch({type: "set_image_upload", data: compressedFile})
		} catch (error) {
			dispatch({type: "true_err"})
		}
	}
	return (
		<Wrapper>
			<div>
				<input type="file" onChange={handleUpload} />
				<span>Choose or drop file</span>
			</div>
			{(state.imageUpload && !state.imageAPI) ? <img src={URL.createObjectURL(state.imageUpload)} alt="Thumb" title={state.imageUpload.name} /> : null}
			{state.imageAPI ? <img src={state.imageAPI} /> : null}
			{state.loading ? <Loading /> : null}
			{!state.imageAPI ? <Button text="Convert" handleClick={handleConvert} /> : null}
			{state.imageAPI ? <a href={state.imageAPI} download>Click to download</a> : null}
		</Wrapper>
	)
}