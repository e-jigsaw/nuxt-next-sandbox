<template>
  <div>
    <h1>yo Top page</h1>
    <App></App>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import App from '../components/App.vue';

export default Vue.extend({
  name: 'root',
  components: {
    App,
  },
});
</script>
