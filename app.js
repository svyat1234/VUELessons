const App = {
    data() {
        return {
            appPlaceholder: 'Введите название заметки',
            title: 'Заметки',
            appInputValue: ''
        }
    },
    methods: {
        appInputChanger(e) {
            this.appInputValue = e.target.value
        }
    },
}

Vue.createApp(App).mount('#app')