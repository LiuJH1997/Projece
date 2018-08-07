<template>
  <div id="app">
    
    <router-view/>

  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app{
    width: 100%;
    height: 100%;
}
.container{
  width: 100%;
  height: 100%;
}
.content{
    height: calc(100% - 60px - 50px);
    overflow: scroll;
    font-size: 18px;
    background: #eee;
}

</style>
