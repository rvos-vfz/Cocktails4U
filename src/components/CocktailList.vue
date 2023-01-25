<template>
  <AppHeader />
  <main>
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
    <button @click="getNewDrinks" class="refresh-btn"><i class="fa-solid fa-arrows-rotate"></i>Show New Drinks!</button>
  </main>
</template>

<script>
  import axios from 'axios';
  import AppHeader from './AppHeader.vue';
  import SearchError from './SearchError.vue';

  export default {
    name: 'CocktailList',

    components: { 
      AppHeader,
      SearchError
    },

    data() {
      return {
        cocktails: [],
        count: 0,
        showError: false
      };
    },

    mounted() {
      this.getNewDrinks();
    },
    
    methods: {
      getNewDrinks() {
        this.cocktails = [];
        this.count = 0;
        for (let i = 0; i < 5; i++) {
          axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
          .then(response => {
            this.cocktails.push(response.data.drinks[0]);
            this.count++;
          })
          .catch(error => {
            console.log(error);
            this.showError = true;
          });
        }
      },

      showDetails(id) {
        this.$router.push({ name: 'CocktailDetails', params: { id: id } })
      }
    }
  }
</script>

<style scoped>
  main {
    padding-top: 10px;
  }

  .list-container {
    min-height: 540px;
  }
</style>