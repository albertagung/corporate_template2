$(document).ready(() => {
	$('#btnViewCurriculum').click(() => {
		return new Promise ((resolve, reject) => {
			resolve($.LoadingOverlay("show"))
		})
		.then(() => {
			axios({
			  url: 'https://storage.googleapis.com/images_props_mmcsr/PDF/2018-MM-Sustainability%20Trisakti%20University%20Curriculum.pdf',
			  method: 'GET',
			  responseType: 'blob', // important
			  headers: {
			  	'Access-Control-Allow-Origin' : '*'
			  }
			})
			.then((response) => {
				return new Promise ((resolve, reject) => {
					resolve($.LoadingOverlay("hide"))
				})
				.then(() => {
					const url = window.URL.createObjectURL(new Blob([response.data]));
				  const link = document.createElement('a');
				  link.href = url;
				  link.setAttribute('download', 'mm_sustainability_curriculum.pdf');
				  document.body.appendChild(link);
				  link.click();
				})
			})
		})
	})
})