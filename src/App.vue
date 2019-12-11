<template>
  <div>
    <div class="clickMe" @click="clickMe">Click Me</div>
    <div v-if="displayOrange">
        <h1 class="title" >{{ orange }}</h1>
        <img src="public/assets/cute_img/cute.jpg" width=50 height=50>
        <div class="orange" />
    </div>
    <button @click="clickToFetch">Fetch</button>
    <div
        class="rows-container"
        v-if="displayData"
    >
        <div
            class="row-block"
            v-for="row in rows"
            :key="row.id"  
        >{{ row.title }}</div>
    </div>
  </div>
</template>

<script>
    import { HTTPRequest } from 'services/http-common'

    export default {
        name: 'App',
        data: () => {
            return {
                orange: 'Coucou c\'est  orange !!!',
                displayOrange: false,
                displayData: false,
                rows: []
            }   
        },
        methods: {
            clickMe: function() {
                return (this.displayOrange = !this.displayOrange);
            },
            clickToFetch: async function() {
                // TODO: create STORE for VUEX
                const res = await HTTPRequest('todos');
                if (res && (res.data && res.data.length)) {
                    this.rows = res.data;
                    this.displayData = true;
                }
                return true;
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
        /*TODO: change path to img*/
        // background: url('assets/cute.jpg') center no-repeat;
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
            width: 100px;
        }
    }
</style>