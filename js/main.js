const { createApp } = Vue;

const opzioni = {
    data: function () {
        return {
            mailList: [],
        }
    },
    methods: {
        getMail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(r => {
                let email = r.data.response;
                this.mailList.push(email);
            }
            )
        },

        getMails() {
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(r => {
                    email = r.data.response;
                    this.mailList.push(email);

                })  
                
            }
            
        }
    }
};

createApp(opzioni).mount('#app')