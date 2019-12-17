import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// import todo from './todos/Todo'
import todos from './todos/Todos'

import posts from './posts/Posts'

export default new Vuex.Store({
    modules: {
        // todo
        todos,
        posts
    }
})