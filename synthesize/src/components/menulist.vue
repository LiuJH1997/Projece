<template>
    <div class="menu">
        <div class="cursor" :style="{'left':this.$store.state.left}"></div>
        <ul class="menu-list">
            <li v-for="(link,index) in links" :key="index">
                <Icon class="icon" :type="types[index]" size="25" color="black" ></Icon>
                <router-link :to="link.href">{{link.title}}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        name:'Memulist',
        data(){
            return{
                types:[
                    'ios-menu',
                    'ios-search',
                    'ios-cart-outline',
                    'ios-person'
                ],
               links:[
                    {
                        title:'首页',
                        href:'/'
                    },
                    {
                        title:'搜索',
                        href:'/search'
                    },
                    {
                        title:'购物车',
                        href:'/shopping'
                    },
                    {
                        title:'我',
                        href:'/mine'
                    }

               ]
            }
        }
    }
</script>
<style>
.menu{
    position: relative;
}
.cursor{
    width: 25%;
    height: 50px;
    transition: all .25s linear;
    position: absolute;
    top: 0;
    background: rgb(145, 36, 36);
}
.menu-list{
    height: 50px;
}
.menu-list li{
    width: 25%;
    height: 100%;
    text-align: center;
    background: white;
    display: inline-block;
    cursor: pointer;
    position: relative;
}
.menu-list li a{
    padding-bottom: 6px;
    width: 100%;
    height: 100%;
    color: black;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: relative;
    z-index: 1;  
}

.menu-list li .icon{
    position: absolute;
    top: 4px;
    left: 50%;
    transform: translateX(-50%);
}
</style>
