const index = new Vue({
    el: '#app',
    data: { 
        url: 'http://localhost:8000',
        title: 'foodiew',
        isLogin: '',
        email: '',
        password: '',
        confirm_password: '',
        items: [],
        emailError: '',
        passwordError: '',
        confirmPasswordError: '',
        isLoading: false,
        generalErrorMessage: ''
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
            this.isLoading = true
            if (this.password !== this.confirm_password) {
                this.passwordError = 'Your password not match with Confirmation Password'
                this.confirmPasswordError = 'Your Confirmation Password not match with Password'
                setTimeout(() => {
                    this.passwordError = ''
                    this.confirmPasswordError = ''
                }, 3000);
                this.isLoading = false
                return
            }
            // this.isLogin = 1
            // $('#staticBackdrop').modal('hide')
            // $('#staticBackdrop2').modal('hide')
            let url = this.url + '/api/registration'
            // let token = localStorage.getItem('token')
            let header = {
                // headers: {
                //     'Authorization': `${token}`,
                // }
            }
            let payload = {
                email: this.email,
                password: this.password,
            }
            axios.post(url, payload, header)
                .then((res) => {
                    console.log(res)
                    this.isLoading = false
                    if (res.status === 200) {
                        this.generalErrorMessage = res.data.message
                        $('#generalModal').modal('show')
                        this.email = ''
                        this.password = ''
                        this.confirm_password = ''
                        setTimeout(() => {
                            $('#generalModal').modal('hide')
                            $('#staticBackdrop').modal('hide')
                            $('#staticBackdrop2').modal('hide')
                        }, 5000);
                    }
                })
                .catch((err) => {
                    this.isLoading = false
                    if (err.response !== undefined) {
                        this.generalErrorMessage = err.response
                    } else {
                        this.generalErrorMessage = err
                    }
                    $('#generalModal').modal('show')
                    setTimeout(() => {
                        $('#generalModal').modal('hide')
                    }, 3000);
                })
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