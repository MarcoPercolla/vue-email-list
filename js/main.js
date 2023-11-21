const { createApp } = Vue;

const opzioni = {
    data: function () {
        return {
            mailList: [],
        }
    },
    methods: {
        // getMail() {
        //     axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(r => {
        //         let email = r.data.response;
        //         this.mailList.push(email);
        //     }
        //     )
        // },

        getMails(quantity) {
            this.mailList = [];
            for (let i = 0; i < quantity; i++) {
                
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail?' + i).then(r => {
                    email = r.data.response;
                    this.mailList.push(email);
                    console.log(i, this.mailList, email)

                })  
                
            }
            
        }
    }
};

createApp(opzioni).mount('#app')

