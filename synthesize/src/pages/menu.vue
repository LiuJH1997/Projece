<template>
     <div class="container">
         <Memutop/>
        <div class="content">
            <div class="lunbo">
              <Carousel autoplay loop>
                <CarouselItem >
                <div class="demo-carousel">
                    <img src="../assets/1.png" alt="">
                </div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel">
                        <img src="../assets/002.jpg" alt="">
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel">
                        <img src="../assets/006.jpg" alt="">
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel">
                        <img src="../assets/2.png" alt="">
                    </div>
                </CarouselItem>
            </Carousel>
            </div>
            <h1 class="recommend">本周推荐</h1>
            
            <ul class="furits-menu">
                <li class="item" v-for="(menu,index) in menulist" :key="index" :data-page="index" @click="goDetails">
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
          <Memulist/>
    </div>
</template>
<script>
import Memulist from '../components/menulist'
import Memutop from '../components/menutop'
import $ from 'jquery'
import '../../static/css/menu.css'
import store from '@/store'
    export default{
        name:'Menu',
        components:{
            Memulist,
            Memutop
        },
        methods:{
            goDetails(e){
                let number = e.currentTarget.dataset.page;
                 store.commit('changePage',number);
                // let name = e.currentTarget.lastElementChild.textContent;
                // store.commit('changeName',name);
                // console.log(name);
               
                this.$router.push({
                    name:'details'
                })
            }
        },
        data(){
            return{
                menulist:[],
                value2: 0
            }
        },
        created(){
            this.$axios.get('../../static/json/goos.json')
            .then(res => {
            this.menulist = res["data"]["goodlist"];
               
            })
            .catch(error => {
                console.log(error);
            })
            
        }
    }
</script>
<style scoped>

</style>
