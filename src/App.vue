<template>
  <div>
      <NavBar class="nav-bar-home" />
    <div class="app-view-container">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
    import NavBar from 'components/navigation/NavBar.vue'

    export default {
        name: 'App',
        components: {
            NavBar
        },
        data: () => {
            return {}   
        },
        computed: {},
        methods: {}
    }
</script>

<style lang="scss">
    @import 'styles/main.scss';
    
    .nav-bar-home {
        position: fixed;
        top: 0;
        z-index: 100;
    }
    .app-view-container {
        padding-top: 50px;
    }
</style>