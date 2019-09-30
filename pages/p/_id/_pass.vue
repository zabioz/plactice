<template>
  <section class="container">
    <h1>{{title}}</h1>
    <p v-html="msg">no message.</p>
    <hr>

    <div>
      <router-link to="/">top index</router-link>
    </div>
    
  </section>
</template>

<script>

export default {
  validate ({params}){
    if(params.id == undefined || params.pass == undefined) {
      return false;
    } else{
      return true;
    }
  },
  data: function(){
    return {
      title:"login",
    };
  },
  computed: {
    msg : function(){
      let id = this.$route.params.id != undefined
      ? this.$route.params.id : "no id!!"
      let pass = this.$route.params.pass != undefined
      ? this.$route.params.pass : "no password!!"
      return "ID :" + id + "<br> PASS:" + pass;
    },
  },
  
};
</script>
