const fetchData = async() => {
	const data = await( await(fetch("https://removebackground-wlaiaw5rxa-as.a.run.app/remove", {
		method: "POST",
		header: {
			"Content-Type": "multipart/form-data",
			"Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM0OTI3NDU3LCJqdGkiOiJkMmZjZGJkYzMwODM0NjQ1YmE2NTBkY2FlMzllZDUzMiIsInVzZXJfaWQiOjMxOX0.fweLX5jMaCzF_Xw3AW8XINEkOSf9yM75Fx9MTfTXLG0"
		},
		body: JSON.stringify({
			form: "image: 'D:\picture\Venice_Italy.jpg'"
		})
	}))).json()
	console.log(data)
	return data
}

export default fetchData