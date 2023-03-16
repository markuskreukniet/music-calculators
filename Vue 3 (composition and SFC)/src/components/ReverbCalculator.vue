<script setup>

const preDelay = addParentheses(reverb.preDelay);
const decay = addParentheses(reverb.decay);
const totalReverb = addParentheses(reverb.totalReverb);

function addParentheses(string) {
  return `(${string})`;
}
</script>

<template></template>
