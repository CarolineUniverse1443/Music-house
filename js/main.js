const app = {
    data() {
        return {
            currentPage: 'catalog',
            user: {
                data: {

                },
                token: '12'
            },
            products: [
                {id: 1, name: 'Пианино 3000', image: 'images/eef58e896eb2b75fa6526e15a30c74f4.png', price: 20000, release_date: 2020, category:'Клавишные', country: 'Россия', model: '6723576'},
                {id: 2, name: 'Скрипка Strunal', image: 'images/2d5d0cc68ffe42f62dddcda05bf80304.jpeg', price: 15000, release_date: 2019, category:'Смычковые', country: 'Германия', model: '68453576'},
                {id: 3, name: 'Пианино 2000', image: 'images/61e3012c9fbb2126150a65217989ac40.jpeg', price: 25000, release_date: 2021, category:'Клавишные', country: 'Россия', model: '9023576'},
                {id: 4, name: 'Гитара 4253', image: 'images/e9a917c442e68e8721fb6dcece67ea7c.jpeg', price: 60000, release_date: 2020, category:'Струнные', country: 'Франция', model: '6223578'},
                {id: 5, name: 'Скрипка Вивальди', image: 'images/64cfdacbf99b58def0266e5637f67a60.jpeg', price: 30000, release_date: 2022, category:'Смычковые', country: 'Россия', model: '1633576'},
            ], 
            slidesVisible: 0,
            goodIndex: 0,
            formLogin: {
                login: '',
                password: ''
            },

            formRegister: {
                name: '',
                surname: '',
                patronymic: '',
                email: '',
                login: '',
                password: '',
                password_repeat: '',
            },

            errors: [],
            cart: [],
            orders: [
                {id: 1, name: 'Пианино 3000', image: 'images/eef58e896eb2b75fa6526e15a30c74f4.png', price: 20000, release_date: 2020, country: 'Россия', model: '6723576', status: 'Новый'},
                {id: 2, name: 'Скрипка Strunal', image: 'images/2d5d0cc68ffe42f62dddcda05bf80304.jpeg', price: 15000, release_date: 2019, category:'Смычковые', country: 'Германия', model: '68453576'},
                
            ]
        }
    },
    created() {
        let slides = this.products.slice(0, 5)
    },
    computed: {
        isAuth()
        {
            return !!this.user.token
        },
        isAdmin(){
            if(this.isAuth)
                return !!this.user.data.isAdmin ? true : false
        }
    },
    methods: {
        // кнопка вперед на слайдере показывает следующий слайд
        next(){
            if(this.slidesVisible >= 4) {
                this.slidesVisible = 0
            }
            else 
                this.slidesVisible++
        },
        // кнопка назад на слайдере показывает предыдущий слайд
        prev(){
            if(this.slidesVisible <= 0) {
                this.slidesVisible = 4
            }
            else 
                this.slidesVisible--
        },
        register() {
            return this.currentPage = 'login'
        },
        login() {
            this.user.token = '123'
            this.user.data.login = this.formLogin.login
            this.user.data.password = this.formLogin.password
            return this.currentPage = 'catalog'
        },
        logout(){
            this.user = {
                data: null,
                token: null
            }
            return this.currentPage = 'home'
        },
        showProduct(product) {
            this.goodIndex = product.id
            this.currentPage = 'good'
        },
        addProduct(product) {
            this.cart.push(product)
        }
    }
}

Vue.createApp(app).mount('#app')