<template>
  <router-view />
</template>

<script>
  export default {
    name: 'app',
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-image: linear-gradient(120deg, #29323c 30%, #485563 70%);
    background-attachment: fixed;
    font-family: 'Kanit', sans-serif;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0px 12px;
  }

  h1 {
    font-size: 1.8em;
    font-weight: 400;
    color: #e4e8e7;
    letter-spacing: 1px;
  }

  p {
    color: #e4e8e7;
  }

  .list-container {
    width: 100%;  
  }

  .cocktail-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 5px;
    min-height: 100px;
    gap: 20px;
    border-top: 2px solid #262626;
  }

  .cocktail-container:last-of-type {
    border-bottom: 2px solid #262626;
  }

  .thumbnail {
    width: 65px;
    height: auto;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.3) 2px 3px 2px;
  }

  .cocktail-container h1 {
    font-size: 1.2em;
    font-weight: 300;
    color: #e4e8e7;
    letter-spacing: 0px;
  }

  .cocktail-container h2 {
    font-size: 0.9em;
    font-weight: 400;
    color: #d5ac5a;
  }

  button {
    height: 40px;
    border: none;
    outline: none;
    border-radius: 8px;
    background: #262626;
    font-weight: bold;
    cursor: pointer; 
    transition: all 0.3s ease;
  }

  button.details-btn {
    color: #e4e8e7;
    min-width: 80px;
  }

  button.details-btn:hover {
    color: #262626;
    background: #d5ac5a;
  }

  button.refresh-btn,
  button.go-back-btn {
    color: #d5ac5a;
    padding: 0px 15px;
  }

  .logo {
    width: 280px;
  }

  .fa-arrows-rotate,
  .fa-caret-left  {
    margin-right: 5px;
  }

  @media (min-width: 768px) {
    body {
      width: 90%;
      margin: auto;
    }
  }

  @media (min-width: 1024px) {
    body {
      width: 80%;
    }
  }

  @media (min-width: 1440px) {
    body {
      width: 60%;
    }
  }

  @media (min-width: 1720px) {
    body {
      width: 50%;
    }
  }
</style>