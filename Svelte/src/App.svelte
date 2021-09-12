<script>
  import style from "./lib/style.js";

  import ReverbCalculatorApp from "./lib/components/ReverbCalculatorApp.svelte";

  // If there is a shadow dom, the style element gets appended outside of it.
  var element = document.createElement("style");
  element.innerHTML = style;
  document.body.appendChild(element);
</script>

<main>
  <!-- Faking the HTML <body> tag. -->
  <div id="body">
    <ReverbCalculatorApp />
  </div>
</main>
