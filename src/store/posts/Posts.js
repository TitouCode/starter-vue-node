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
            commit(Constants.FIND_ALL_POSTS_START);
            const res = await HTTPRequest('posts');
            if (res.status === 200) {
                commit(Constants.FIND_ALL_POSTS_END, res.data);
            }
        }
    },
    mutations: {
        [Constants.FIND_ALL_POSTS_START] (state, rows = []) {
            state.isLoading = true;
            state.error = false;
        },
        [Constants.FIND_ALL_POSTS_END] (state, rows = []) {
            state.isLoading = false;
            state.rows = rows;
            state.error = false;
        }
    }
}