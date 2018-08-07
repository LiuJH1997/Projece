<template>
    <div class="container">
        <Memutop :goback="true"/>
        <div class="contents">
             <Carousel autoplay loop>
                <CarouselItem class="carouse" v-for="(img,index) in group" :key="index">
                    <img :src="img.url" alt="">
                </CarouselItem>
            </Carousel>
            <ul class="details-list" >
                <li>
                    <p class="pri">￥{{detailsList.price}}
                        <span class="rob">抢购价</span>
                    </p>
                    <p class="d-title">{{detailsList.name}}</p>
                    <p class="express">
                        <span >快递{{detailsList.express}}</span>
                        <span>月销{{detailsList.pin}}笔</span>
                        <span>{{detailsList.address}}</span>
                        </p>
                    <p class="common">促销&nbsp;&nbsp;
                        <span class="common-text">{{detailsList.integral}}</span>
                    </p>
                    <p class="common">服务&nbsp;&nbsp;
                        <span class="common-text">{{detailsList.serve}}</span>
                    </p>
                    <p class="common">规格&nbsp;&nbsp;
                        <span class="common-text">{{detailsList.speci}}</span>
                    </p>
                    <p class="bay">购买数量&nbsp;&nbsp;
                        <span class="con" @click="reduce">-</span>
                        <input class="number-ipt" type="number" min="1" v-model.number="value">
                        <span class="con" @click="increase">+</span>
                    </p>

                </li>
            </ul>


            <div class="fixation">
                    <div class="fixat-left" @click="addCartBtn">
                        加入购物车
                    </div>
                    <div class="fixat-right">
                        立即购买
                    </div>
               
                
            </div>
        </div>
    </div>
</template>
<script>
import Memutop from '../components/menutop'
import '../../static/css/details.css'
import $ from 'jquery'

    export default{
        name:'Details',
        components:{
            Memutop
        },
        created(){
            this.$axios.get('../../static/json/goos.json')
            .then(res => {
                let number = this.$store.state.number;
                this.detailsList = res["data"]["goodlist"][number];
                 this.group = res["data"]["goodlist"][number]["imgGroup"]         
            })
            .catch(error => {
                console.log(error)
            });

        },
        data(){
            return{
                detailsList:{},
                group:{},
                value:1,
                title:'',
                price:'',
                nums:'',
                imgName:'',
                name:''
            
            }
        },
        methods:{
            //减法
            reduce(){
                if(this.value > 1){
                    this.value--
                }
            },
            //加法
            increase(){
                if(this.value < 50){
                    this.value++;
                }
            },
            addCartBtn(index){
                var order = {
                        title:this.detailsList.name,
                        price:this.detailsList.price,
                        nums:$(".number-ipt").val(),
                        imgs:this.detailsList.img,
                };
                var username = [];
                var stroge = localStorage.getItem('userMsgInfo');
                    console.log(stroge)
               if(stroge){
                   username = JSON.parse(stroge);
               }

                let flag = false;
                for(let i = 0,len = username.length; i < len; i++){
                    if(username[i].title == order.title){
                        flag = true;
                        console.log(username);
                        break;
                    }
                }
                if(flag){
                    this.$Modal.success({
                    title:'温馨提示',
                    content:'该商品以及存在'
                    });
                    return;
                }
               username.push(order);
                if(order.nums == 0){
                    this.$Modal.info({
                       title:'温馨提示',
                        content:'请完善您的购物信息'
                   })
                }else{
                     this.$Modal.success({
                    title:'温馨提示',
                    content:'加入购物车成功'
                    });
                    let userObj = JSON.stringify(username);
                    localStorage.setItem('userMsgInfo',userObj)
                }

               
                
            }
        }
    }
</script>
<style scoped>

.ivu-carousel-item{
    width: 100%;
    height: 200px;
}
.ivu-carousel-item img{
    width: 100%;
    height: 100%;
}

.number-ipt{
    display: inline-block;
    width: 20%;
    height: 35px;
    text-align: center;
    background: white;
    line-height: 35px;
    cursor: pointer;


}
.con{
    text-align: center;
    width: 40%;
    height: 35px;

}
</style>
