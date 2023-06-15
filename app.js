const App = {
    data() {
        return {
            appPlaceholder: 'Введите название заметки',
            title: 'Заметки',
            appInputValue: '',
            appNotes: ['Заметка 1', 'Заметка 2']
        }
    },
    methods: {
        appInputChanger(e) {
            this.appInputValue = e.target.value
        },
        addNewAppNote() {
            if (this.appInputValue !== '') {
                this.appNotes.push(this.appInputValue)
                this.appInputValue = ''
            }
        },
        removeAppNote(index) {
            this.appNotes.splice(index, 1)
        }
    },
}

Vue.createApp(App).mount('#app')