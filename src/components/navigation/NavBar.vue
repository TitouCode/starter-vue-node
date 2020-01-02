<template>
  <div class="nav-bar-container">
    <div class="nav-bar-items-container">
        <router-link to="/post" tag="div" class="nav-bar-item">
            <div class="nav-bar-item-title">Posts</div>
        </router-link>
        <router-link to="/todo" tag="div" class="nav-bar-item">
            <div class="nav-bar-item-title">Todos</div>
        </router-link>
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
    @import 'styles/main.scss';

    .nav-bar-container {
        background: $white;
        border-bottom: solid 2px $green;
        height: 50px;
        width: 100%;
        .nav-bar-items-container {
            display: flex;
            justify-content: flex-end;
            height: 100%; 
        }
        .nav-bar-item {
            height: 100%;
            width: 150px;
            @include circle-after-hover($green, 200px);
            .nav-bar-item-title {
                color: $black;
                transform: color .15s ease-in;    
            }
            &:hover {
                .nav-bar-item-title {
                    color: $white;
                    transform: color .15s ease-out;
                }
            }
        }
    }
</style>