<template>
     <div class="container">
         <Memutop/>
        <div class="content">
            <div class="myImg_box">
                <div class="opation"></div>
                <div class="profile">
                </div>
                <p class="denlu" v-if="!isLogin" @click="loginBtn">未登录,点击登陆</p>
                <p class="state" v-if="isLogin">{{name}}</p>
            </div>

              <Collapse  accordion>
              <!--设置个人资料  -->
            <Panel class="set" name="1">
                设置个人资料
                <div slot="content">
                    <p class="msg-box">
                        <span class="msg-style">昵称</span>
                        <input type="text" placeholder="默认名称" v-model="nickname">
                    </p>
                    <p class="msg-box">
                        <span class="msg-style">Email</span>
                        <input type="text" placeholder="请填写安全的邮箱" v-model="email">
                    </p>
                    <p class="msg-box">
                        <span class="msg-style">性别</span>
                        <RadioGroup class="gred" v-model="animal">
                        <Radio label="男"></Radio>
                        <Radio label="女"></Radio>
                        <Radio label="保密"></Radio>
                    </RadioGroup>      
                    </p>
                     <p class="msg-box">
                        <span class="msg-style">生日</span>
                        <DatePicker type="date" multiple placeholder="Select date" style="width: 260px"></DatePicker>
                    </p>
                    <p class="msg-box">
                        <span class="msg-style">身份证号</span>
                        <input type="text" placeholder="请输入你的18位身份证号" v-model="carId">
                    </p>
                    <button type="button">确认修改</button>
                </div>
            </Panel>
            <!-- 收货地址管理 -->
            <Panel class="set" name="2">
               收货地址管理
                <div slot="content">
                    <p class="msg-box">
                        <span class="msg-style">姓名</span>
                        <input type="text" placeholder="请输入你的真实姓名">
                    </p>
                    <p class="msg-box">
                        <span class="msg-style">联系电话</span>
                        <input type="tel" placeholder="请填写我们联系您的电话号码">
                    </p>
                    <p class="msg-box">
                        <span class="msg-style">邮政编码</span>
                        <input type="number" placeholder="请填写您所在地区的邮政编码">
                    </p>
                    <p class="msg-box">
                        <Select v-model="model1" size="small" style="width:100px">
                         <Option v-for="item in province" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                        <Select v-model="model2" size="small" style="width:100px">
                         <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                        <Select v-model="model3" size="small" style="width:100px">
                         <Option v-for="item in district" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </p>

                    <p class="msg-box">
                        <span class="msg-style">详细地址</span>
                        <input type="number" placeholder="请填写您详细的街道、楼栋、门牌号">
                    </p>
                    <button type="button">确认地址</button>
                </div>
            </Panel>
            <Panel class="set" name="3">
               我的订单
                <p slot="content"></p>
            </Panel>
            <Panel class="set" name="4">
               我的评价
                <p slot="content"></p>
            </Panel>
            <Panel class="set" name="5">
                商品收藏
                <p slot="content"></p>
            </Panel>
            <Panel class="set" name="6">
               店铺收藏
                <p slot="content"></p>
            </Panel>
            <Panel class="set" name="7">
               浏览记录
                <p slot="content"></p>
            </Panel>
           
         </Collapse>

          
        <button class="exitbtn" @click="goExit">退出登录</button>
        </div>
          <Memulist/>
    </div>
</template>
<script>
import Memulist from '../components/menulist'
import Memutop from '../components/menutop'
import '../../static/css/mine.css'
import $ from 'jquery'
    export default{
        name:'Mine',
        components:{
            Memulist,
            Memutop
        },
        created(){
            this.getStr();
        },
        methods:{
            //登录
            loginBtn(){
                this.$router.push({
                    name:'loginRegister'
                })
            },

            //退出登录
            goExit(){
                
                sessionStorage.removeItem('name');
                this.isLogin = false;
            },
            getStr(){
                this.name = JSON.parse(sessionStorage.str);
            }
        },
        data(){
            return{
                province:[
                    {
                        value: '四川省',
                        label: '四川省'
                    },
                    {
                        value: '广州省',
                        label: '广州省'
                    },
                    {
                        value: '广西省',
                        label: '广西省'
                    },
                ],
                cityList:[
                    {
                        value: '成都市',
                        label: '成都市'
                    },
                    {
                        value: '绵阳市',
                        label: '绵阳市'
                    },
                ],
                district:[
                    {
                        value: '武侯区',
                        label: '华阳区'
                    },
                ],

                name: '',
                animal: '男',
                model1: '',
                model2: '',
                model3: '',
                nickname:'',
                email:'',
                carId:'',
                isLogin:true
            }
        }
    }
</script>
<style scoped>
.icon{
    font-size: 18px;
}
button{
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    letter-spacing: 8px;
    border-radius: 6px;
    font-size: 22px;
    background: rgb(73, 192, 73);
    color: white;
    outline: none;
    border: 1px solid rgb(73, 192, 73);
}
.hidden{
    display: none;
}
input{
    width: 250px;
    text-align: left;
    outline: none;
    border: none;
}
button{
    margin: 20px 0;
    width: 100%;
    height: 50px;
    background: rgb(91, 196, 91);
    outline: none;
    border: 1px solid rgb(91, 196, 91);
    text-align: center;
    line-height: 50px;
}
</style>
