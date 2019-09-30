<template>
  <section class="container">
    <h1>{{title}}</h1>
    <p>{{msg}}</p>
    <p>{{ $store.state.msg }}</p>
    <hr>
    <pre>{{now}}</pre>
     <router-link to="/study/">study</router-link>
  </section>
</template>

<script>

export default {
  data: function(){
    return {
      title:"hello",
      msg:"msgdesu!",
      now:"wait..."
    };
  },
  created: function(){
    setInterval(()=>{
      var date = new Date();
      this.now=date.getHours() + ':' + date.getMinutes() + ":" + date.getSeconds();
    }, 100);
  },
};
</script>
