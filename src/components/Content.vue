<template>
  <div>
      id:{{$route.params.id}}
  </div>
</template>

<script>
export default {
 mounted(){
    console.log(this.$route)
  }
}
</script>

<style>

</style>