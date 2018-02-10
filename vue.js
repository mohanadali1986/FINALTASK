var vm = new Vue({
    el: '#vue',
    data: {
        url:"",
        posts: [],
        user: [],
        iscompleted: false,
    },
    methods: {
        getfullname: function () {
            $.ajax({
                url: 'https:jsonplaceholder.typicode.com/posts',
                method: 'GET',
                data: {},
                success: function (res) {
                    posts = res
                    console.log(posts)
                    console.log(posts)
                    $.ajax({

                        url: 'https://jsonplaceholder.typicode.com/users',
                        method: 'GET',
                        data: {},
                        success: function (users) {
                            user = users
                            console.log(user)
                            fillData(posts, user)

                        },
                        error: function (err) { console.log(err) }

                    })
                }, error: function (err) { console.log(err) }

            })

        },

    }
})
function fillData(posts, users) {
    for (var i = 0; i < posts.length; i++) {
        var card = `
<div class="card" style="width: 18rem; margin-bottom: 10px;">
       <div class="card-body">
         <h5 class="card-title">${posts[i].title}</h5>
         <h6 class="card-subtitle mb-2 text-muted">${users[posts[i].userId].email}</h6>
         <p class="card-text">${posts[i].body}</p>
         <a href="#" class="${posts[i].title}</a>
         <a href="#" class="card-link">Another link</a>
       </div>
     </div>
 `;
        $('#posts').append(card);
    }
}

var nael = new Vue({
    el: "#nael",
    data:
        {
            users: [],


        },
    methods: {
        getallusers: function () {
            $.ajax({
                url: 'https://jsonplaceholder.typicode.com/users',
                method: 'GET',
                data: {},
                success: function (users) {
                    nael.users = users
                },
                
            })
        }
    },
    created: function () {
        this.getallusers()
    }
})
var nael2 = new Vue({
    el: "#nael2",
    data:
        {
            users: [],


        },
    methods: {
        getallusers: function () {
            $.ajax({
                url: 'https:jsonplaceholder.typicode.com/posts',
                method: 'GET',
                data: {},
                success: function (users) {
                    nael2.users = users
                },
                

            })
        }
    },
    created: function () {
        this.getallusers()
    }
})
var mohanad = new Vue({
    el: "#mohanad",
    data:
        {
            users: [],


        },
    methods: {
        getallusers: function () {
            $.ajax({
                url: 'https://api.github.com/users/hadley/orgs',
                method: 'GET',
                data: {},
                success: function (users) {
                    mohanad.users = users
                },
                

            })
        }
    },
    created: function () {
        this.getallusers()
    }
})
var Child = {
    template:
     `<ul> <li>1 component</li>
     <li>2</li></ul>`
  }
 
  var components=new Vue({
   el:'#components',
   data:{

   },
    components: {
     
      'my': Child
    }
  })
 
 


   
