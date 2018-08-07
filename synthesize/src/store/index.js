import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        title:'主页',
        left:'0',
        number:'0'
    },
    mutations:{
        changeTitle(state,title){
            state.title = title
        },
        changeLeft(state,left){
            state.left = left;
        },
        changePage(state,number){
            state.number = number
        },
        changeName(state,name){
            state.name = name
        }
    }
})