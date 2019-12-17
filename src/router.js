import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Todo from 'views/todo/Todo.vue'
import Post from 'views/post/Post.vue'

export const router = new VueRouter({
    // routes // short for `routes: routes`
    routes: [
        { path: '/todo', component: Todo },
        { path: '/post', component: Post }
    ]
})