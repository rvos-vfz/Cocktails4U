<template>
  <header>
    <img src="@/assets/logo.png" alt="Logo" class="logo" />
    <div class="search-container">
      <input ref="searchBar" v-model="searchTerm" @keyup.enter="showSearchResults" type="text" placeholder="Search cocktail by name"/>
      <button @click="showSearchResults"><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'AppHeader',

    data() {
      return {
        searchTerm: ''
      }
    },

    methods: {
      showSearchResults() {
        this.$refs.searchBar.value = '';
        this.$router.push({ name: 'SearchResults', params: { query: this.searchTerm } });
      }
    }
  }
</script>

<style scoped>
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 15px 12px;
    gap: 15px;
  }

  .search-container {
    display: flex;
    width: 100%;
    height: 42px;
  }

  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    text-indent: 5px;
    border-radius: 8px 0px 0px 8px;
    box-shadow: rgba(0, 0, 0, 0.3) 2px 3px 2px;
  }

  button {
    width: 60px;
    height: 100%;
    border: none;
    outline: none;
    border-radius: 0px 8px 8px 0px;
    background: #6a7c03;
    color: #e4e8e7;
    font-size: 1em;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.3) 2px 3px 2px;
    transition: all 0.3s ease;
  }

  button:hover {
    background: #b3c772;
  }

  @media (min-width: 768px) {
    .search-container {
      width: 60%;
    }
  }

  @media (min-width: 1024px) {
    .search-container {
      width: 50%;
    }
  }

  @media (min-width: 1440px) {
    .search-container {
      width: 50%;
    }
  }
</style>