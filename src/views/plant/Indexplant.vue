<template>
  <div>
    <Myprofile />
    <hr />
    <Plantfeed />
  </div>
</template>
<script>
import Myprofile from "../../components/plant/Myprofile.vue";
import Plantfeed from "../../components/plant/Plantfeed.vue";

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