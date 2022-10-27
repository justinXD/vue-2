<template>
    <div>
        <bounce-loader :loading="isLoading" :color="'#84C9D9'" :size="100" />
        <px-assets-table v-if="!isLoading" :assets="assets" />
    </div>
</template>

<script>
import PxAssetsTable from '@/components/PxAssetsTable'
import { getAssets } from '@/api.js'

export default {
    name: 'HomeHome',
    components: { PxAssetsTable },

    data() {
        return {
            isLoading: false,
            assets: [],
        }
    },
    created() {
        this.isLoading = true
        this.getData()
        this.getData().finally(() => (this.isLoading = false))
    },
    methods: {
        async getData() {
            this.assets = await getAssets()
        },
    },
}
</script>
