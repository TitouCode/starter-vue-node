<template>
    <div>
        <div class="title-container">
            <h2 class="title-content">List of Todos</h2>
            <button
                @click="clickToFetch"
                class="title-button"
            >
                <span class="title-button-title">F</span>
            </button>
        </div>
        <div
            class="loader-container"
            v-if="isLoading"
        >
            ...loading
        </div>
        <div
            class="todos-container"
            v-else
        >
            <div
                class="todo-block"
                v-for="row in rows"
                :key="row.id"
                :class="{ 'checked': row.completed }"
            >
                <div class="todo-check" />
                <div class="todo-title">{{ row.title }}</div>
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
    @import 'styles/main.scss';

    .title-container {
        display: flex;
        justify-content: flex-start;
        align-items: center; 
        margin: 15px 0 15px;
        padding-left: 10px; 
        .title-content {
            font-size: 30px;
        }
        .title-button {
            background: none;
            border: solid 2px $green;
            border-radius: 50%; 
            height: 25px;
            margin-left: 15px;
            width: 25px;
            text-align: center;
            @include circle-after-hover($green, 50px);
            .title-button-title {
                color: $black;
                transform: color .15s ease-in;    
            }
            &:hover {
                .title-button-title {
                    color: $white;
                    transform: color .15s ease-out;
                }
            }
        }
    }
    .todos-container {
        height: 100%;
        padding: 10px;
        width: 100%;
        .todo-block {
            display: flex;
            flex-wrap: wrap;
            margin: 5px 0;
        }
        .checked {
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
        .todo-check {
            border: solid 2px $green;
            height: 20px;
            margin-right: 5px; 
            overflow: hidden;
            position: relative;
            width: 20px;
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