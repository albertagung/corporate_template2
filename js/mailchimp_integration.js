$(document).ready(() => {

	postSubscriberData = () => {

		// Get element from subscribe component
		let subscriberName = $('#subscriberName').val()
		let subscriberEmail = $('#subscriberEmail').val()
		
		// Obj data subscriber
		let objSubscriber = {
			email_address: subscriberEmail,
			status: 'subscribed',
			merge_fields: {
				FNAME: subscriberName
			}
		}

		// Check if the fields are empty
		if (subscriberName === "" || subscriberEmail === "") {
			swal("Alert!", "Please fill your name and email address", "warning")
		} else {
			// Define url for posting data to server mailchimp
			const urlPostSubscriber = 'http://form.mmsustainability.ac.id/mailchimp'

			// Post data using axios
			axios.post(urlPostSubscriber, objSubscriber).then((response) => {
				swal("Success", "Thank you for subscribing us!", "success")
				.then(() => {
					window.location.reload()
				})
			})
			.catch((err) => {
				console.log(err)
			})
		}

	}

	// Trigger the function
	$('#btnSubscribe').click((e) => {
		e.preventDefault()
		// Call the function
		postSubscriberData()
	})

})