<template>
  <div>
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
    import { mapState } from 'vuex'

    export default {
        name: 'Todo',
        data: () => {
            return {}   
        },
        computed: {
            ...mapState({
                rows: s => s.todos.rows,
                isLoading: s => s.todos.isLoading
            })
        },
        created: async function() {
            await this.fetchTodos();
        },
        methods: {
            fetchTodos: async function() {
                return await this.$store.dispatch('todos/findAll');
            },
            clickToFetch: async function() {
                return await this.fetchTodos();
            }
        }
    }
</script>

<style lang="scss">
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