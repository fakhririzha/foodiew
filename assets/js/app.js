const index = new Vue({
    el: '#app',
    data: { 
        title: 'foodiew',
        isLogin: '',
        email: '',
        password: '',
        confirm_password: '',
        items: []
    },
    created () {
        let token = localStorage.getItem('token')
        if (token !== null) {
            this.isLogin = 1
            this.getListItems()
        }
    },
    methods: {
        register: function () {
            if (this.password !== this.confirm_password) {
                alert ('Pastikan anda memasukkan password yang sama!')
                return
            }
            this.isLogin = 1
            $('#staticBackdrop').modal('hide')
            $('#staticBackdrop2').modal('hide')
            // let url = 'https://api.foodiew.com/login'
            // let token = localStorage.getItem('token')
            // let header = {
            //     headers: {
            //         'Authorization': `${token}`,
            //     }
            // }
            // let payload = {
            //     email: this.email,
            //     password: this.password,
            // }
            // axios.post(url, payload, header)
            //     .then((res) => {
            //         if (res.status === 200) {
            //             this.isLogin = 1
            //             $('#staticBackdrop').modal('hide')
            //             $('#staticBackdrop2').modal('hide')
            //         }
            //     })
            //     .catch((err) => {
            //         $('#staticBackdrop').modal('hide')
            //         $('#staticBackdrop2').modal('hide')
            //         console.log(err)
            //     })
        },
        getListItems: function () {
            // let url = 'https://api.foodiew.com/getlist'
            // axios.get(url)
            //     .then((res) => {
            //        this.items,push(res)
            //     })
            //     .catch((err) => {
            //         console.log(err)
            //     })
        }
    }
})