<template>
     <div class="container">
         <Memutop/>
        <div class="content">
            <div class="shopping" v-if="isHave">
                <p class="tit-style">
                    <span class="cancel hidden" @click="cancelClilck">取消</span>
                    <span class="del hidden" @click="delClick">删除全部</span>
                    <span class="compile" @click="compileClick">编辑</span>
                </p>
                <div class="shopping-box"  v-for="(fruit,index) in obj" :key="index" :data-idxs="index">
                    <p class="common hidden" @click="radioClick"></p>
                    <div class="shopping-img">
                        <img :src="fruit.imgs" alt="">
                    </div>
                    <div class="shopping-right">
                        <p class="delete hidden" @click="deleteClick" @mouseup="delMous">删除</p>
                        <p class="headline">{{fruit.title}}</p>
                        <p class="meny">￥{{fruit.price}}</p>
                        <p class="add">
                           <el-input-number v-model="fruit.nums" @change="handleChange" ></el-input-number>
                        </p>
                    </div>
                </div>
                <button class="pay" type="button">前往支付</button>
            </div>
            <div class="thing" v-if="!isHave">
                <p >购物车内没有东西</p>
                <p class="go" @click="goBtn">去逛逛？</p>
            </div> 
        </div>
        <Memulist/>
    </div>
</template>
<script>
import Memulist from '../components/menulist'
import Memutop from '../components/menutop'
import '../../static/css/shopping.css'
import $ from 'jquery'
    export default{
        name:'Shopping',
        components:{
            Memulist,
            Memutop
        },
        created(){
            this.gainStr();
        },
        methods:{
            handleChange(value) {             
            },
            goBtn(){
                this.$router.push({
                    name:'menu'
                })
            },
           gainStr(){
               var storageStrObj = localStorage.getItem("userMsgInfo");
               this.obj = JSON.parse(storageStrObj);
               console.log(this.obj);
           } ,
           //编辑
           compileClick(){
               $(".pay").addClass("hidden");
               $('.cancel').removeClass("hidden");
               $(".compile").addClass('hidden');
               $(".del").removeClass('hidden');
               $(".common").addClass("radio");
               $(".common").removeClass("hidden");
               $(".delete").removeClass("hidden");
           },
           //取消
           cancelClilck(){
               $(".pay").removeClass("hidden");
               $(".cancel").addClass("hidden");
               $(".compile").removeClass("hidden");
               $(".del").addClass("hidden");
                $(".common").removeClass("radio");
                $(".common").addClass("hidden");
                $(".delete").addClass("hidden");
           },
           //点击圆点
           radioClick(e){
                let $target = $(e.target);
               if($target.hasClass("radio")){
                   $target.addClass("click");
                   $target.removeClass("radio");
               }else{
                   $target.removeClass("click");
                   $target.addClass("radio");
               }
           },
           //删除
           deleteClick(e){
                let $del = $(e.target); 
                console.log(e.target);
               let $delPrev = $del.parent().prev().prev();
               $(".shopping-box").each(function(index,val){
                   if($delPrev.hasClass("click")){
                    //     let Arr = JSON.parse(localStorage.getItem("userMsgInfo")); 
                    //     Arr.splilce(index,1);
                    //    let userObj = JSON.stringify(Arr);    
                    //     localStorage.setItem("userMsgInfo",userObj);
                         ($del.parent().parent()).remove();
                                  
                   }
               }) 
                
           },
           delMous(){
            //     var storageStrObj = localStorage.getItem("userMsgInfo");
            //    this.obj = JSON.parse(storageStrObj);
            //    console.log(this.obj);
           },
           //全部删除
           delClick(){
               $(".common").addClass("click");
               $(".common").removeClass("radio");
               localStorage.removeItem('userMsgInfo');
               var storageStr = localStorage.getItem("userMsgInfo");
               this.obj = JSON.parse(storageStr);
               $(".cancel").addClass("hidden");
               $(".del").addClass("hidden");
               this.isHave = false;
           }
        },
        data(){
            return{
                isHave:true,
                obj:[],
                value:'',
                
            }
        }
    }
</script>
<style scoped>
button{
    margin: 20px 0;
    width: 100%;
    height: 50px;
    font-size: 20px;
    color: white;
    background: rgb(91, 196, 91);
    outline: none;
    border: 1px solid rgb(91, 196, 91);
    text-align: center;
    line-height: 50px;
}
.common{
    margin-left: 6px;
    width: 14px;
    height: 14px; 
    border-radius: 50%;
}
</style>
