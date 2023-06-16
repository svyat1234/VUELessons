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
        toUpperCase(item) {
            return item.toUpperCase()
        },
        removeAppNote(index) {
            this.appNotes.splice(index, 1)
        }
    },
    computed: {
        doubleCountComputed() {
            console.log(this.appNotes);
            return this.appNotes.length * 2
        },
    },
    watch: {
        appInputValue(value) {
            console.log(value); 
        }
    }
}

Vue.createApp(App).mount('#app')
