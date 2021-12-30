<template>
  <div class="home">
    <Layouts><router-view/></Layouts>
  </div>
</template>

<script>
// @ is an alias to /src
import Layouts from "@/components/Layouts.vue";

export default {
  name: "home",
  components: {
    Layouts
  },
};
</script>
