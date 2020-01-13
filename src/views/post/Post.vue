<template>
  <div>
    <div class="title-container">
        <h2 class="title-content">Some Posts</h2>
        <button
            v-if="!isLoading"
            @click="clickToFetch"
            class="title-button"
        >
            <span class="title-button-title">F</span>
        </button>
        <CircleLoader
            v-else
            class="loader-container"
        />
    </div>
    <div
        class="rows-container"
        v-if="!isLoading"
    >
        <div
            class="row-block"
            v-for="row in rows"
            :key="row.id"  
        >   
            <figure class="row-img-container">
                <img
                    :src="`${imgHolder}250x150/${getRdmColor()}`"
                    :alt="row.title"
                    class="row-img"
                >
            </figure>
            <div class="row-title-container" :title="row.title">
                {{ row.title | truncate(20) }}
            </div>
        </div>
    </div>
  </div>
</template>

<script>
    import { mapState } from 'vuex'
    import CircleLoader from 'components/loaders/CircleLoader.vue'

    export default {
        name: 'Post',
        components: {
            CircleLoader
        },
        data: () => {
            return {
                imgHolder: 'https://via.placeholder.com/'
            }   
        },
        computed: {
            ...mapState({
                rows: s => s.posts.rows,
                isLoading: s => s.posts.isLoading
            })
        },
        created: async function() {
            await this.fetchPosts();
        },
        methods: {
            /**
             * Fetch Posts via Store
             */
            fetchPosts: async function() {
                return await this.$store.dispatch('posts/findAll');
            },
            /**
             * User click to fetch Posts
             */
            clickToFetch: async function() {
                return await this.fetchPosts();
            },
            getRdmColor: function() {
                const letters = '0123456789ABCDEF';
                let color = '';
                for (let i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            }
        }
    }
</script>

<style lang="scss">
    @import 'styles/main.scss';

    .rows-container {
        display: flex;
        flex-wrap: wrap;
        height: 100%;
        justify-content: space-evenly;
        padding: 0 10px;
        width: 100%;
        .row-block {
            box-shadow: 2px 5px 10px -1px #cfcfcf;
            border-radius: 3px; 
            margin: 15px 0;
            overflow: hidden;
            width: 250px;
        }
        .row-img-container{
            align-items: center;
            display: flex;
            height: 150px;
            justify-content: center;
            overflow: hidden;
            width: 100%;
        }
        .row-img {
            width: 100%;
            height: 100%;
        }
        .row-title-container {
            border-top: solid 2px $green;
            padding: 3px;
        }
    }
</style>