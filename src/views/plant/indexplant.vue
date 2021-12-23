<template>
  <div>
    <Myprofile />
    <hr />
    <Plantfeed />
  </div>
</template>
<script>
import Myprofile from "../../components/plant/myprofile.vue";
import Plantfeed from "../../components/plant/plantfeed.vue";
export default {
  name: "plant",
  components: {
    Myprofile,
    Plantfeed,
  },
};
</script>
<style>
</style>