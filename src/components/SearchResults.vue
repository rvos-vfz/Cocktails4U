<template>
  <AppHeader />
  <main>
    <h1>Search Results ({{ searchItems }}):</h1>
    <p>You searched for: <span class="search-param">"{{ this.$route.params.query }}"</span></p>
    <div class="list-container" ref="listContainer">
      <SearchError v-if="showError"/>
      <div v-else class="cocktail-container" v-for="cocktail in cocktails" :key="cocktail.id">
        <img :src="cocktail.strDrinkThumb" alt="Cocktail thumbnail" class="thumbnail" />
        <div>
          <h1>{{ cocktail.strDrink }}</h1>
          <h2>{{ cocktail.strCategory }}</h2>
        </div>
        <button @click="this.showDetails(cocktail.idDrink)" class="details-btn">Details »</button>
      </div>
    </div>
    <button @click="goBack" class="go-back-btn"><i class="fa-solid fa-caret-left"></i>Go Back</button>
  </main>
</template>

<script>
  import axios from 'axios';
  import AppHeader from './AppHeader.vue';
  import SearchError from './SearchError.vue';
  
  export default {
    name: 'SearchResults',

    components: { 
      AppHeader,
      SearchError
    },

    watch: {
    '$route': {
      immediate: true,
      handler: 'showResults'
      }
    },
    
    data() {
      return {
        cocktails: [],
        searchItems: 0,
        showError: false
      };
    },

    methods: {
      showResults() {
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + this.$route.params.query)
        .then(response => {
          this.cocktails = response.data.drinks;
          this.showError = false;
          this.searchItems = this.cocktails.length;
        })
        .catch(error => {
          console.log(error);
          this.searchItems = 0;
          this.showError = true;
        });
      },

      showDetails(drinkId) {
        this.$router.push({ name: 'CocktailDetails', params: { id: drinkId } })
      },

      goBack() {
        this.$router.push({ name: 'CocktailList' })
      }
    }
  }
</script>

<style scoped>
  main {
    padding-bottom: 30px;
  }

  .list-container {
    margin: 20px 0px;
  }
  
  .search-param {
    color: #b3c772;
  }
</style>