<template>
    <div class="menutop">
        <Icon class="goback-btn" type="ios-arrow-back" @click="gobackClick" v-if="goback"/>
         <h3 class="title" >{{this.$store.state.title}}</h3>
    </div>
</template>
<script>
    export default{
        name:'Menutop',
         methods:{
            //返回上一页
            gobackClick(){
                this.$router.go(-1);
              
            }
        },
        props:{
            goback:{
                type:Boolean,
                default:false
            }
        },
        data(){
            return{
                
            }
        }
    }
</script>
<style scoped>
.menutop{
  height: 60px;
  background: rgb(41, 41, 41);
  color: white;
  text-align: center;
  line-height: 60px;
  position: relative;
}
.goback-btn{
    font-size: 26px;
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
}
.title{
    font-size: 20px;
    font-weight: normal;
    letter-spacing: 4px;
}
</style>
