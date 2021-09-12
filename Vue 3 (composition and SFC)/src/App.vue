<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import style from "./style.js";

import ReverbCalculatorApp from './components/ReverbCalculatorApp.vue'

// If there is a shadow dom, the style element gets appended outside of it.
var element = document.createElement("style");
element.innerHTML = style;
document.body.appendChild(element);
</script>

<template>
  <!-- <header> -->
  <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->

  <!-- <div class="wrapper"> -->
  <!-- <HelloWorld msg="You did it!" /> -->
  <!-- </div> -->
  <!-- </header> -->

  <main>
    <!-- <TheWelcome /> -->
    <ReverbCalculatorApp />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
