<template>
  <div>
    <div class="clickMe" @click="clickMe">Click Me</div>
    <div v-if="displayOrange">
        <h1 class="title" >{{ cha }}</h1>
        <img src="public/assets/cute_img/cute.jpg" width=50 height=50>
        <div class="orange" />
    </div>
  </div>
</template>

<script>
    export default {
        name: 'App',
        data: () => {
            return {
                cha: 'Coucou c\'est  orange !!!',
                displayOrange: false
            }   
        },
        methods: {
            clickMe: function() {
                return (this.displayOrange = !this.displayOrange);
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
</style>