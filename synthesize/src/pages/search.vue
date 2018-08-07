<template>
    <div class="container">
        <Memutop/>
        <div class="content">
           <div class="search-box">
               <Input class="input" search placeholder="Enter something..." v-model="keySearch"  />
           </div>
           <div class="hot" >
               <h3>热门搜索</h3>
               <div class="hot-search">
                   <p class="hot-box one" @click="searchClick">桃</p>
                   <p class="hot-box two" @click="searchClick">哈密瓜</p>
                   <p class="hot-box three" @click="searchClick">猕猴桃</p>
                   <p class="hot-box four" @click="searchClick">凯特芒果</p>
               </div>
           </div>
           <div class="search-content">
               <ul class="furits-menu">
                <li class="item" v-for="(menu,index) in filterArr()" :key="index" :data-pages="index" @click="goData">
                   <p class="furite-img">
                        <img :src="menu.img" alt="">
                   </p>
                   <p class="price">￥ {{menu.price}}
                       <span class="meail">包邮</span>
                   </p>
                     <p class="title">{{menu.name}}</p>
                    
                </li>
            </ul>
           </div>
        </div>
          <Memulist/>
    </div>
</template>
<script>
import Memulist from '../components/menulist'
import Memutop from '../components/menutop'
import '../../static/css/search.css'
import '../../static/css/menu.css'
import $ from 'jquery'
import store from '@/store'
    export default{
        name:'Search',
        components:{
            Memulist,
            Memutop
        },
        created(){
            this.$axios.get('../../static/json/goos.json')
            .then(res => {
               this.searchlist = res["data"]["goodlist"]
            })
            .catch(error => {
                console.log(error);
            })
        },
        data(){
            return{
                searchlist:[],
                keySearch:'请输入水果',
            }
        },
        methods:{
            searchClick(e){
                 this.keySearch = e.target.textContent;
            },
            goData(e){
                let number = e.currentTarget.dataset.pages
               store.commit('changePage',number);

               this.$router.push({
                    name:'details'
                })
            },
            filterArr(){
                
                    return this.searchlist.filter((name) => {
                    let reg = new RegExp(this.keySearch);
                    return reg.test(name.name);
                })
            }
        },
        
    }
</script>
<style scoped>
.input{
    width: 100%;
    margin: 0 auto;    
}
.ivu-input{
    outline: none;
}
</style>
