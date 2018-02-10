
var btn = $('#submit');
let posts = null;
let users = null;

btn.click(function (event) {
	event.preventDefault();
	// use this if you want help or something else
	$.ajax({

		url: 'https:jsonplaceholder.typicode.com/posts',
		method: 'GET',
		data: {},
		success: function (posts) {
			
			console.log(posts)
			$.ajax({

				url: 'https://jsonplaceholder.typicode.com/users',
				method: 'GET',
				data: {},
				success: function (users) {
				
					console.log(users)
					fillData(posts, users)

				},
				error: function(err) { console.log(err)}

			})
		},error: function(err) { console.log(err)}

	})

})
	
function fillData(posts, users) {
	for (var i = 0; i < posts.length; i++) {
		var card = `
	<div class="card" style="width: 18rem; margin-bottom: 10px;">
		   <div class="card-body">
			 <h5 class="card-title">${posts[i].title}</h5>
			 <h6 class="card-subtitle mb-2 text-muted">${users[posts[i].userId].name}</h6>
			 <p class="card-text">${posts[i].body}</p>
			 <a href="#" class="card-link">Card link</a>
			 <a href="#" class="card-link">Another link</a>
		   </div>
		 </div>
	 `;
	
	$('#posts').append(card);
	}
}
