<template>
  <section class="container">
    <h1>{{title}}</h1>
    <p>{{msg}}</p>
    <hr>
    <p>study index desu!</p>
    <pre>{{now}}</pre>
    <router-link to="/">index</router-link>
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
