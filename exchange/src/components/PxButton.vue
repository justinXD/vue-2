<template>
    <button
        @click="buttonClick"
        class="bg-transparent hover:bg-azul2 text-azul1 font-semibold hover:text-white py-2 px-2 border border-azul2 hover:border-transparent rounded"
    >
        <beat-loader :loading="isLoading" :color="'#55B3D9'" :size="8" />
        <p v-show="!isLoading">
            <slot></slot>
        </p>
    </button>
</template>

<script>
export default {
    name: 'PxButton',

    props: {
        isLoading: {
            type: Boolean,
            default: false,
        },
    },

    methods: {
        buttonClick() {
            this.$emit('custom-click')
        },
    },
}
</script>
