import {useEffect, useReducer} from "react"
import fetchData from "../helper"

const reducer = (state, action) => {

}

const initialState = {
	loading: false,
	err: false
}

export default function usePost() {
	const [state, dispatch] = useReducer(reducer, initialState)
	useEffect(() => {
		fetchData()
	})

	return [
		state, dispatch
		]
}