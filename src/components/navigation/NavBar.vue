<template>
  <div class="nav-bar-container">
    <div class="nav-bar-items-container">
        <router-link
            v-for="r in routes"
            :key="r.name"
            :to="r.url"
            tag="div"
            class="nav-bar-item"
            :class="currentPage.includes(r.url) ? activeLinkClass : ''"
        >
            <div class="nav-bar-item-title">{{r.name}}</div>
        </router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'NavBar',
        data: () => {
            return {
                activeLinkClass: 'active',
                routes: [
                    {
                        name: 'Post',
                        url: '/post'
                    }, {
                        name: 'Todo',
                        url: '/todo'
                    }
                ]
            }   
        },
        computed: {
            currentPage() {
                return this.$route.path;
            }
        },
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
            &:hover, &.active {
                .nav-bar-item-title {
                    color: $white;
                    transform: color .15s ease-out;
                }
            }
        }
    }
</style>