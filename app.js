Vue.component('CoinDetail',{
    props: ['coin'],  //aqui van las propiedades que el componente padre le envia al componente hijo
    
    data() {
        return {
            showPrices: false,
            value: 0,
        }
    },
    created() { //metodo created que nos da como resultado el evento created, 
        //primero se ejecuta el created del componente padre y despues el created y mounted del componente hijo,
        //por ultimo se ejecuta el mounted del componente padre
        console.log('Created coinDetail...')   //nos ayuda a obtener informacion de una API REST
    },

    mounted() { //metodo mounted que nos da como resultado el evento mounted
        console.log('Mounted coinDetail...')   //aqui ya esta disponible el DOM y puedo acceder a informacion del DOM
    },
    methods: {
        toggleShowPrices(){
            this.showPrices = !this.showPrices
            this.$emit('change-color', 
                this.showPrices ? 'F4F4F4' : 'FF96C8')  //la comunicacion de componente hijo a padre es a traves de eventos
        },
        
    },
    computed:{
        title() {
            return `${this.coin.name} - ${this.coin.symbol}`
        },
        convertedValue(){
            if (!this.value) {
                return 0
            }
            return this.value / this.coin.price
        }
    },

    template: `
    <div>
        <img @mouseover="toggleShowPrices"
            @mouseout="toggleShowPrices"
            :src="coin.img" :alt="coin.name" 
            width="100px" height="100px">
        <h1 v-bind:class="coin.changePercent > 0? 'green' : 'red' ">
            {{ title }}
            <span v-if="coin.changePercent > 0">👍</span>
            <span v-else-if="coin.changePercent < 0">😢</span>
            <span v-else>🤞</span>
            <span @click="toggleShowPrices">{{ showPrices ? '😎' : '😢' }}</span>   <!--@click="toggleShowPrices" es la abreviacion de la directiva v-on:click="toggleShowPrices"-->
        </h1>
        <input type="number" v-model="value">
        <span>{{ convertedValue }}</span>
        <slot name="text"></slot>   <!-- slot nos permite inyectar html en el componente hijo desde el componente padre -->
        <slot name="link"></slot>
        <ul v-show="showPrices">
            <li :class="{orange: p.value == coin.price, red: p.value < coin.price, green: p.value > coin.price}"
                v-for="(p, i) in coin.pricesWithDays" 
                :key="p.day">
                {{ i }} - {{ p.day }} - {{ p.value }}
            </li>
        </ul>
    </div>`
})

new Vue({
    el: '#app',

    data() {
        return {
            btc: {
                name: 'Bitcoin',
                symbol: 'BTC',
                img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
                changePercent: 10,
                price: 8400,
                pricesWithDays: [
                    { day: 'Lunes', value: 8400 },
                    { day: 'Martes', value: 7900 },
                    { day: 'Miercoles', value: 8200 },
                    { day: 'Jueves', value: 9000 },
                    { day: 'Viernes', value: 9400 },
                    { day: 'Sabado', value: 10000 },
                    { day: 'Domingo', value: 10200 },
                ],
            },
            color: 'f4f4f4',
        }
    },

    created() { //metodo created que nos da como resultado el evento created
        console.log('Created...')   //nos ayuda a obtener informacion de una API REST
    },

    mounted() { //metodo mounted que nos da como resultado el evento mounted
        console.log('Mounted...')   //aqui ya esta disponible el DOM y puedo acceder a informacion del DOM
    },

    /*created y mounted son nuevas configuraciones para el componente en sus 
    metodos data, computed, methods o la pripiedad el del compunente vue*/

    methods: {
        updateColor(color){
            this.color = color || this.color.split('').reverse().join('')
        }
    },
})