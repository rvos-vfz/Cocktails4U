# Cocktail4U App

This app is built using Vue 3 and the CocktailDB API. It allows users to view a list of random cocktails and view detailed information about each one, including the name, category, ingredients, and instructions on how to make it. The app also includes a search function, allowing users to search for a specific cocktail by name.

## Architectural Decisions

I chose to build this app with Vue.js because this is currently the framework that I have the most experience with. As a starting frontend developer Vue.js is a good framework to start with and I like the clear syntax.

The CocktailDB API does not allow to fetch a list of random cocktails, just 1 per request using https://www.thecocktaildb.com/api/json/v1/1/random.php. There is an option to fetch a list of 10 random cocktails however, but this would require Patreon support. I want to display 5 cocktails and provide a button to refesh this list. That is why I chose to use a for-loop that runs 5 times to make a list, using the url above. With each run an array is populated with the data fetched per cocktail. A div (cocktail-container) per item in the array is filled with the data, using the v-for directive. The downside of this solutution is the (very small) risk the same cocktail is listed more than once in the list.

The Details button triggers a function in which I use the $router.push() method, pushing the id of the selected cocktail as a parameter to the CocktailDetails component. There it uses the id to fetch the data of that cocktail and display the name, category, image, ingredients + mearurements and instructions. Initially I had an issue displaying the ingredients because the json object always returns 15 ingredients but most (if not all) cocktails don't have that many ingredients. The rest of the ingredients are null. To filter those out, I created an arry which lists all 15 ingredient (and measure) key/value pairs in an object and filter the "null ingredients" out, using .filter() method.

The search button triggers a function in which I use the $router.push() method, pushing the input value to the SearchResults component. There it uses the search query to lookup cocktails that have the search query in their name. The found cocktails are displayed the same way as the home page. When no results were found, an error message is displayed. To make sure a new search query is processed correctly, the component watches the $route to run the showResults() function again upon change.

## Installation

1. Clone the repository to your local machine.
2. Run `npm install` to install all dependencies.
3. Run `npm run serve` to start the development server.
4. The app will be available at `http://localhost:8080/`.

## Usage

The homepage of the app displays a list of random cocktails. You can click on the Details button for any of the cocktails to view more detailed information about it. You can also use the search bar at the top of the page to search for a specific cocktail by name.

## API

This app uses the [Cocktail API](https://www.thecocktaildb.com/) to retrieve cocktail information.

## Note

If you have any questions or issues with the app, please open an issue in the GitHub repository.

## Author

Richard Vos

## License

This project is licensed under the MIT License.