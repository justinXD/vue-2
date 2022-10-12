Vue.component('modal', {
    props: ['modal'],

    data() {
        return {
            
        }
    },
    methods: {
        close(){
            this.$emit('change-value')
        },
        
    },
    template: `
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-container">
                <h3>{{ modal.title }}</h3>
                <div>
                    <slot name="body"></slot>
                </div>
                <div>
                    <img :src="modal.img" :alt="modal.alt"/>
                </div>
                <footer>
                    <button @click="close">Cerrar</button>
                </footer>
            </div>
        </div>
    </div>
    `,
})

new Vue({
    el: '#app',
    data() {
        return {
            modalData: {
                title: 'Nuestro propio modal!',
                img: 'https://images.pexels.com/photos/6230961/pexels-photo-6230961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                alt: 'worry less, live more'
            },
            showModal: false
        }
    },
    methods: {
        toggleModal() {
            this.showModal = !this.showModal
        }
    },
})