Vue.config.devtools = true;

var app = new Vue ({
    el: '#app',
    data:  {
        logo: 'https://nexgen.codings.dev/wp-content/uploads/2021/03/logo.svg',
        userName:'',
        userMail: '',
        userPhone: '',
        userMessage: '',
        userData : [],
        links : [
            'home', 
            'about', 
            'projects', 
            'process', 
            'testimonials'
        ],
        
        contacts : {
          hour: 'Mon-Sat-9:00-18:00',
          number: '+1(305) 1234-5678',
          email: 'hello@example.com',
          address: 'Main Avenue, 987'
        }
            
        
       
    },

    methods: {

    // prende i dati forniti dall'utente nel form del footer

        addData() {       

         this.userData.push(this.userName, this.userMail, this.userPhone, this.userMessage);

         console.log(this.userData);
        }
        
    }   
})
console.log(app);
