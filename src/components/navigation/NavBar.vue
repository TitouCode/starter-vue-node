<template>
  <div class="nav-bar-container">
    <div class="nav-bar-items-container">
        <router-link to="/post" tag="div" class="nav-bar-item">Go see Posts</router-link>
        <router-link to="/todo" tag="div" class="nav-bar-item">Go to Todos</router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'NavBar',
        data: () => {
            return {}   
        },
        computed: {},
        methods: {}
    }
</script>

<style lang="scss">
    .nav-bar-container {
        border-bottom: solid 2px rgb(73, 222, 201);
        height: 50px;
        width: 100%;
        .nav-bar-items-container {
            display: flex;
            height: 100%;;
        }
        .nav-bar-item {
            background-color: initial;
            transition: background-color .2s ease-in;
            height: 100%;
            width: 100%;
            &:hover {
                cursor: pointer;
                background-color: rgba(73, 222, 201, .5);
                // GREEN rgb(73, 222, 201)
                transition: background-color .2s ease-out;
            }
        }
    }
</style>