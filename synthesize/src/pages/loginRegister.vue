<template>
     <div class="container">
         <Memutop :goback="true"/>
        <div class="content back">
            <ul class="logAndred-list">
                <li class="common login" @click="goLogin">登录</li>
                <li class="register" @click="goRegister">注册</li>
            </ul>
            <!-- 登录 -->
             <div class="import" v-show="isShow">
                <div class="import-box">
                    <Icon class="icon" type="ios-phone-portrait" />
                    <input class="phone-ipt" type="number" placeholder="请输入您的手机号" v-model="usernameLog">
                </div>
                <div class="import-box">
                   <Icon class="icon" type="ios-unlock-outline" />
                    <input class="password-ipt" type="password" placeholder="请输入您的密码" v-model="passwordLog">
                </div>
                 <button @click="loginBtn" type="button">登录</button>
            </div>

            <!-- 注册 -->
            <div class="import"  v-show="!isShow">
                <div class="import-box">
                    <Icon class="icon" type="ios-phone-portrait" />
                    <input class="user" type="tel" @blur="loseIpt" placeholder="请输入您的手机号" v-model="usernameReg" >
                     <p class="error hidden">(手机号不合法)</p>
                </div>
                <div class="import-box">
                    <Icon class="icon" type="md-person" />
                    <input  class="pet-ipt" @blur="loseIpt" type="text" placeholder="请输入您的昵称" v-model="petReg">
                    <p class="error hidden">用户名不合法</p>
                </div>
                <div class="import-box">
                   <Icon class="icon" type="ios-unlock-outline" />
                    <input class="pass" type="password" @blur="loseIpt" placeholder="请输入您的密码" v-model="passwordReg">
                    <p class="error hidden">密码不合法，6到16位（字母，数字，下划线，减号）</p>
                </div>
                <div class="import-box">
                   <Icon class="icon" type="ios-unlock" />
                    <input class="respass" type="password" @blur="loseIpt" placeholder="请输入确认您的密码" v-model="resPassword">
                     <p class="error hidden">两次输入的密码不一致</p>
                </div>
                <button @click="registerBtn" type="button">立即注册</button>
            </div>
        </div>
          <Memulist/>
    </div>
</template>
<script>
import Memulist from '../components/menulist'
import Memutop from '../components/menutop'
import $ from 'jquery'
import '../assets/js/key'
    export default{
        name:'LoginRegister',
        components:{
            Memulist,
            Memutop
        },
        methods:{
            //正则验证
            loseIpt(e){
                var $strget = $(e.target);
                console.log($strget.val());
                var res = null;
                switch ($strget.prop("className")) {
                    case "user":{
                        res = /^[0-9]{11}$/.test($strget.val());
                    }break;
                    case "pet-ipt":{
                        res = /^[A-Za-z0-9]{6,16}$/.test($strget.val());
                    }break;
                    case "pass":{
                        res = /^[A-Za-z0-9_-]{6,16}$/.test($strget.val());
                    }break;
                    case "respass":{
                        if($strget.val() === $(".pass").val()){
                           res = $strget.val()
                        }
                    }break;
                }
                if(!res){
                    $strget.next().removeClass("hidden")
                }else{
                    $strget.next().addClass("hidden")
                }
                
            },
            goLogin(){
                $(".login").addClass("common");
                $(".register").removeClass("common");
                this.isShow = true;
               
            },
            goRegister(){
                $(".login").removeClass("common");
                 $(".register").addClass("common");
                 this.isShow = false
            },
            //登录
            loginBtn(){
                if(!this.usernameLog || !this.passwordLog){
                   this.$Modal.info({
                       title:'温馨提示',
                        content:'请完善您的信息'
                   })
                     
                              console.log(username);
                }else{
                    Bmob.User.logIn(this.usernameLog,this.passwordLog,{
                        success:(user) => {
                             this.$Modal.success({
                             title:'温馨提示',
                             content:'登录成功'
                         });
                           
                              this.$router.push({
                                name:'mine'
                            })
                           
                        },
                        error:(user,error) => {
                             this.$Modal.error({
                              title:'温馨提示',
                              content:'用户名不存在或密码错误'
                          })
                            
                        }
                    })
                }
            },
            //注册
            registerBtn(){
                let isWrong = false;
                $(".error").each((idx,e) =>{
                    if($(e).hasClass("hidden")){
                        isWrong = true;
                    }
                })
                if(!this.usernameReg || !this.petReg || !this.passwordReg || !this.resPassword){
                   this.$Modal.info({
                       title:'温馨提示',
                        content:'请完善您的信息'
                   })

                }else if(!isWrong){
                    this.$Modal.warning({
                         title:'温馨提示',
                        content:'输入格式不正确'
                    })
                }else{
                  let user = new Bmob.User();
                  user.set("username",this.usernameReg);
                  user.set("password",this.passwordReg);
                  user.set("phone",this.petReg);

                  user.signUp(null,{
                      success:(user) => {
                         this.$Modal.success({
                             title:'温馨提示',
                             content:'注册成功'
                         });
                         
                           let username = $(".pet-ipt").val();
                     sessionStorage.str = JSON.stringify(username);
                        console.log(username);
                          this.$router.push({
                                name:'mine'
                            });
                      },
                      error:(user,error) => {
                          this.$Modal.error({
                              title:'温馨提示',
                              content:'用户已经存在'
                          })
                      }
                  })
                }
            }

        },
        data(){
            return{
                isLogin:true,
                isShow:true,
                usernameLog:'',
                passwordLog:'',
                usernameReg:'',
                petReg:'',
                passwordReg:'',
                resPassword:'',
                isWrong:true
            }
        }
    }
</script>
<style scoped>
.logAndred-list{
    padding: 0 10px;
    width: 100%;
    height: 70px;
    border-bottom: 1px solid rgb(126, 125, 125);
}
.logAndred-list li{
    display: inline-block;
    margin-left: 36px;
    text-align: center;
    width: 35%;
    line-height: 50px;
    font-size: 20px;
    box-sizing: border-box;
    letter-spacing: 10px;
}
.logAndred-list li a{
    color: black;
}
.common{
    color: rgb(63, 196, 63);
    border-width: 30px;
    padding-bottom: 10px;
    border-bottom: 2px solid rgb(63, 196, 63);
}
.back{
    background: white;
    padding: 0 14px;
}
input{
    width: 60%;
    height: 50px;
    font-size: 15px;
    border: none;
    outline: none;
}
button{
    margin: 30px auto;
    width: 100%;
    height: 50px;
    background: rgb(71, 179, 71);
    color: white;
    outline: none;
    border: 1px solid rgb(71, 179, 71);
    transition: all .25s linear;
}
button:hover{
    background: rgb(53, 139, 53);
}
.import{
    margin-top: 30px;
}
.import-box{
    margin-bottom: 20px;
    width: 100%;
    height: 60px;
    border-bottom: 1px solid rgb(126, 125, 125);
}

.icon{
    font-size: 26px;
    padding: 0 6px 0 15px;
}
.hidden{
    display: none;
}
.error{
    padding-left: 20px;
    text-align: left;
    margin-top: 16px;
    font-size: 12px;
    color: red;
}
</style>
