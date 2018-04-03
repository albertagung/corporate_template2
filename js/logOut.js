$(document).ready(() => {

	// Loading overlay start
	$('body').loading('start')

	// Wait for elements rendered correctly
	setTimeout(() => {
		// Define sign out url
		const urlSignOut = 'http://localhost:3000/auth/signOut'

		// Define update login state url
		const urlUpdateLoginState = `http://localhost:3000/loginState/5ac27641eb4fab1b5c9eab87`

		// When button log out pressed
		$('#btnLogOut').click( async (e) => {
			console.log('clicked')
			await e.preventDefault()
			// Clear the local storage
			await localStorage.clear()
			// Sign out user
			await axios.get(urlSignOut)
			.then((response) => {
				// Make login state database null prior to log out
				let objUser = {
					firstName: null,
					lastName: null,
					email: null
				}
				axios.put(urlUpdateLoginState, objUser)
				.then((response) => {
					// Load to login page
					window.location.replace('http://form.mmsustainability.ac.id/page-login.html')
				})
			})
		})

		// Loading overlay stop
	$('body').loading('stop')

	}, 1000)

})