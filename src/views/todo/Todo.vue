<template>
    <div>
        <div class="title-container">
            <h2 class="title-content">List of Todos</h2>
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
            class="todos-container"
            v-if="!isLoading"
        >
            <div
                class="todo-block"
                v-for="row in rows"
                :key="row.id"
                :class="{ 'checked': row.completed }"
                @click="toggleTodo(row.id)"
            >
                <div class="todo-check" />
                <div class="todo-title">{{ row.title }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import CircleLoader from 'components/loaders/CircleLoader.vue'

    export default {
        name: 'Todo',
        components: {
            CircleLoader
        },
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
            /**
             * Fetch Todos via Store
             */
            fetchTodos: async function() {
                return await this.$store.dispatch('todos/findAll');
            },
            /**
             * User click to fetch todos
             */
            clickToFetch: async function() {
                return await this.fetchTodos();
            },
            /**
             * Toggle todo and update db
             * @param {int} id Id of the desired todo
             */
            toggleTodo: async function(id) {
                if (!id || id < 0) return false;
                return await this.$store.dispatch('todos/toggleTodo', { id });
            }
        }
    }
</script>

<style lang="scss">
    @import 'styles/main.scss';

    .todos-container {
        height: 100%;
        padding: 10px;
        width: 100%;
        .todo-block {
            display: flex;
            flex-wrap: wrap;
            margin: 5px 0;
            cursor: pointer;
            &.checked, &:hover {
                .todo-check {
                    background: $green;
                    &::after, &::before {
                        visibility: visible;
                    } 
                }  
                .todo-title {
                    text-decoration: line-through; 
                    font-style: italic;
                    opacity: .6;
                }  
            }
        }
        .todo-check {
            border: solid 2px $green;
            height: 20px;
            margin-right: 5px; 
            overflow: hidden;
            position: relative;
            width: 20px;
            &:hover {
                cursor: pointer;
                background: $green;
                opacity: .5;
                &::after, &::before {
                    visibility: visible;
                }
            }
            &::after, &::before {
                visibility: hidden; 
                content: '';
                background-color: $white; 
                height:2px;
                position: absolute;
                transform-origin: left;
                width: 25px;
            }
            &::before {
                top: -1px;
                transform: rotate(45deg);
            }
            &::after {
                bottom: -2px;
                left: -1px;
                transform: rotate(-45deg);
            }
        }
    }
</style>