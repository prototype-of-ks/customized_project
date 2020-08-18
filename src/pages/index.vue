<template>
    <div class="app">
        <login></login>
    </div>
</template>

<script>
import login from '@/pages/login.vue';
export default {
    components: { login },
    name: 'index',
    data () {
        return {}
    }
}
</script>

<style scoped>
    .app {
        flex: 1;
    }
</style>