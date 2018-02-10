// array of json to save participates using vue
var postsObj = [
    {
    "userId": 1,
    "name":"mohanad",
    "codelabversion":"uot2018"
    },
    {
        "userId": 2,
        "name":"saif",
        "codelabversion":"uot2018"
        },
        {
            "userId": 3,
            "name":"ameer",
            "codelabversion":"uot2018"
            },
            {
                "userId":4,
                "name":"ahmed",
                "codelabversion":"uot2018"
                },
                {
                    "userId": 5,
                    "name":"ali",
                    "codelabversion":"uot2018"
                    },
                    
    ]
    
    
    var students = new Vue({
        el: "#std",
        data: {
            posts: postsObj,
        }
    })

    /////ajax and vue
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
    Vue.component('currency-input', {
        template: '\
          <div>\
            <label v-if="label">{{ label }}</label>\
            $\
            <input\
              ref="input"\
              v-bind:value="value"\
              v-on:input="updateValue($event.target.value)"\
              v-on:focus="selectAll"\
              v-on:blur="formatValue"\
            >\
          </div>\
        ',
        props: {
          value: {
            type: Number,
            default: 0
          },
          label: {
            type: String,
            default: ''
          }
        },
        mounted: function () {
          this.formatValue()
        },
        methods: {
          updateValue: function (value) {
            var result = currencyValidator.parse(value, this.value)
            if (result.warning) {
              this.$refs.input.value = result.value
            }
            this.$emit('input', result.value)
          },
          formatValue: function () {
            this.$refs.input.value = currencyValidator.format(this.value)
          },
          selectAll: function (event) {
            // Workaround for Safari bug
            // http://stackoverflow.com/questions/1269722/selecting-text-on-focus-using-jquery-not-working-in-safari-and-chrome
            setTimeout(function () {
                event.target.select()
            }, 0)
          }
        }
      })
      
      new Vue({
        el: '#app',
        data: {
          score: 0,
          showing: 0,
          programming: 0,
          tests: 0
        },
        computed: {
          total: function () {
            return ((
              this.score  + 
              this.showing  + 
              this.programming  + 
              this.tests
            ) ).toFixed(2)
          }
        }
      })
      
      
       