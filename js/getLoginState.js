$(document).ready(() => {

	// Define get login state url
	const urlGetLoginState = 'https://server.mmsustainability.ac.id/loginState'

	// Get the login state
	axios.get(urlGetLoginState).then((response) => {
		localStorage.setItem('loginState', JSON.stringify(response.data[0]))
		// Hide login button, show logout button
		let loginStateData = JSON.parse(localStorage.getItem('loginState'))
		if (loginStateData.firstName !== null) {
			// Change the link login to be #
			$('#linkLogin').attr('href', '#')
			$('#linkLogin').empty()
			// Changing the button
			$('#linkLogin').append(`
				<span id="btnLogOut" class="btn__text">
					LOGOUT
				</span>
			`)
			// Change the apply link to be form-index.html
			$('#linkApply').attr('href', 'https://server.mmsustainability.ac.id/form_index.html')
		}
	})
	.catch((err) => {
		console.log(err)
	})

})