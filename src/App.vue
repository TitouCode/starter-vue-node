<template>
  <div>
    <div class="clickMe" @click="clickMe">Click Me</div>
    <div v-if="displayOrange">
        <h1 class="title" >{{ orange }}</h1>
        <img src="public/assets/cute_img/cute.jpg" width=50 height=50>
        <div class="orange" />
    </div>
    <div>
        <button @click="clickToFetch">Fetch</button>
        <div
            class="rows-container"
            v-if="isLoading"
        >
            ...loading
        </div>
        <div
            class="rows-container"
            v-else
        >
            <div
                class="row-block"
                v-for="row in rows"
                :key="row.id"  
            >{{ row.title }}</div>
        </div>
    </div>
  </div>
</template>

<script>
    import { HTTPRequest } from 'services/http-common'
    import { mapState } from 'vuex'

    export default {
        name: 'App',
        data: () => {
            return {
                orange: 'Coucou c\'est  orange !!!',
                displayOrange: false
            }   
        },
        computed: {
            ...mapState({
                rows: s => s.todos.rows,
                isLoading: s => s.todos.isLoading
            })
        },
        methods: {
            clickMe: function() {
                return (this.displayOrange = !this.displayOrange);
            },
            clickToFetch: async function() {
                return await this.$store.dispatch('todos/findAll');
            }
        }
    }
</script>

<style lang="scss">
    .title {
        color: orange;
        font: 24px/24px 'Arial', sans-serif;
    }
    .clickMe {
        &:hover {
            color: orange;
            cursor: pointer;
        }
    }
    .orange {
        background: url('~assets/cute_img/cute.jpg') center no-repeat;
        background-size: contain;
        height: 50px;
        width: 50px;
    }

    .rows-container {
        display: flex;
        flex-wrap: wrap;
        height: 100%;
        width: 100%;
        .row-block {
            border: solid 1px grey;
            // margin-right: 3px; 
            margin: 0 3px 3px 0;
            padding: 3px 5px;
            width: 100px;
        }
    }
</style>