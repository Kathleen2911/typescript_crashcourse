<template>
  <div class="app">
    <JobListings />
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import JobListings from "@/pages/JobListPage.vue";

export default defineComponent({
  name: 'App',
  components: {JobListings}
});
</script>

<style lang="scss" scoped>
@use 'variables'
header {
  text-align: center;
}
header .order {
  margin-top: 20px;
}
button {
  margin: 0 10px;
  color: #1195c9;
  border: 3px solid #1195c9;
  background: #d5f0ff;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}
header .title{
  display: flex;
  justify-content: center;
}
header img {
  width: 60px;
  margin-right: 20px;
}
header h1 {
  font-size: 3em;
}
</style>
