<template>
  <main>
    <img src="@/assets/logo.png" alt="logo" class="logo" />
    <SearchError v-if="showError"/>
    <div v-else>
      <h1>{{ cocktail.strDrink }}</h1>
      <h2>({{ cocktail.strCategory }})</h2>
      <img :src="cocktail.strDrinkThumb" alt="Cocktail thumbnail" class="thumbnail" />
      <h3>INGREDIENTS:</h3>
      <ul>
        <li v-for="i in ingredients" :key="i.ingredient">
          {{i.ingredient}} : {{i.measure}}
        </li>
      </ul>
      <h3>INSTRUCTIONS:</h3>
      <p>{{ cocktail.strInstructions }}</p>
    </div>
    <div class="btn-container">
      <button @click="goBack" class="go-back-btn"><i class="fa-solid fa-caret-left"></i>Go Back</button>
    </div>
  </main>
</template>

<script>
  import axios from 'axios';
  import SearchError from './SearchError.vue';
  export default {
    name: 'CocktailDetails',

    components: {
      SearchError
    },

    data() {
      return {
        cocktail: {},
        ingredients: [],
        showError: false
      };
    },

    mounted() {
      this.getDrinkById(this.$route.params.id);
    },

    methods: {
      getDrinkById(id) {
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id)
        .then(response => {
          const cocktail = response.data.drinks[0];
          this.cocktail = cocktail;
          this.ingredients = [
            { ingredient: cocktail.strIngredient1, measure: cocktail.strMeasure1 },
            { ingredient: cocktail.strIngredient2, measure: cocktail.strMeasure2 },
            { ingredient: cocktail.strIngredient3, measure: cocktail.strMeasure3 },
            { ingredient: cocktail.strIngredient4, measure: cocktail.strMeasure4 },
            { ingredient: cocktail.strIngredient5, measure: cocktail.strMeasure5 },
            { ingredient: cocktail.strIngredient6, measure: cocktail.strMeasure6 },
            { ingredient: cocktail.strIngredient7, measure: cocktail.strMeasure7 },
            { ingredient: cocktail.strIngredient8, measure: cocktail.strMeasure8 },
            { ingredient: cocktail.strIngredient9, measure: cocktail.strMeasure9 },
            { ingredient: cocktail.strIngredient10, measure: cocktail.strMeasure10 },
            { ingredient: cocktail.strIngredient11, measure: cocktail.strMeasure11 },
            { ingredient: cocktail.strIngredient12, measure: cocktail.strMeasure12 },
            { ingredient: cocktail.strIngredient13, measure: cocktail.strMeasure13 },
            { ingredient: cocktail.strIngredient14, measure: cocktail.strMeasure14 },
            { ingredient: cocktail.strIngredient15, measure: cocktail.strMeasure15 },
          ].filter((ing) => ing.ingredient);
          this.showError = false;
        })
        .catch(error => {
          console.log(error);
          this.showError = true;
        });
      },

      goBack() {
        this.$router.back();
      }
    }
  }
</script>

<style scoped>
  main {
    padding-top: 15px;
  }

  h1 {
    font-size: 1.625em;
    font-weight: 400;
    color: #e4e8e7;
    letter-spacing: 1px;
    line-height: 1.2em;
    margin-top: 20px;
  }

  h2 {
    font-size: 1.375em;
    font-weight: 300;
    color: #d5ac5a;
    letter-spacing: 1px;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 1.125em;
    font-weight: 400;
    color: #b3c772;
    letter-spacing: 1px;
  }

  .thumbnail {
    width: 130px;
    height: auto;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.3) 2px 3px 2px;
    margin-bottom: 20px;
  }

  ul {
    text-align: center;
    list-style: none;
    color: #e4e8e7;
    font-weight: 200;
    margin-bottom: 20px;
  }

  p {
    color: #e4e8e7;
    font-weight: 200;
    margin-bottom: 20px;
  }
</style>