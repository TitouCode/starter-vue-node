<template>
  <div>
      <NavBar />
    <div>
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
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 0;
    }
</style>