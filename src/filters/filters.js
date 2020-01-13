import Vue from 'vue'

Vue.filter('truncate', (txt, limit) => {
    if (txt.length > limit) {
        txt = txt.substring(0, (limit - 3)) + '...';
    }
    return txt
})