<template>
  <div>
    <img src="@/assets/sorry.png" class="error-img" alt="Error image">
    <p class="error-msg" >No cocktails were found :/</p>
  </div>
</template>

<script>
  export default {
    name: 'SearchError'
  }
</script>

<style>
  .error-msg {
    font-size: 1.625em;
    color: crimson;
  }

  .error-img {
    width: 180px;
  }
</style>