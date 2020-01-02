import { HTTPRequest } from 'services/http-common'

import * as Constants from './constants.js'

export default {
    namespaced: true,
    state: {
        rows: [],
        isLoading: false,
        error: false
    },
    getters: {},
    actions: {
        /**
         * Find all todo and assign found rows to state.
         */
        async findAll ({ commit }, { where = {}, limit = 10, offset = 1 } = {}) {
            commit(Constants.FIND_ALL_TODOS_START);
            const res = await HTTPRequest('todos');
            if (res.status === 200) {
                commit(Constants.FIND_ALL_TODOS_END, res.data);
            }
        },
        /**
         * Find all todo and assign found rows to state.
         */
        async toggleTodo ({ commit, state }, { id = 0 } = {}) {
            commit(Constants.TOGGLE_TODO_START);
            const i = state.rows.findIndex(t => t.id === id);
            let todo = {};
            if (i > -1) {
                todo = state.rows[i];
                todo.completed = !todo.completed;
            }
            commit(Constants.TOGGLE_TODO_END, {i, row: todo });

            // const res = await HTTPRequest('todos', 'PUT' , null, {
            //     id,
            //     completed: !todo.completed
            // });
            // if (res.status === 200) {
            //    commit(Constants.TOGGLE_TODO_END, {i, row: res.data });
            // }
        }
    },
    mutations: {
        [Constants.FIND_ALL_TODOS_START] (state, rows = []) {
            state.isLoading = true;
            state.error = false;
        },
        [Constants.FIND_ALL_TODOS_END] (state, rows = []) {
            state.isLoading = false;
            state.rows = rows;
            state.error = false;
        },
        [Constants.TOGGLE_TODO_START] (state) {
            state.error = false;
        },
        [Constants.TOGGLE_TODO_END] (state, { i = null, row = {} }) {
            if (i && state.rows[i].id === row.id) {
                state.rows[i] = row;
            }
        }
    }
}