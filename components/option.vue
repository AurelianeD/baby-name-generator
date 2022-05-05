<script setup lang="ts">
import {gender, popularity, length} from "@/data";

interface optionProps{
  option: {
    title: string;
    category: string;
    buttons: gender[] | popularity[] | length[];
  };
  options: {
    gender: gender;
    popularity: popularity;
    length: length;
  };
}
const props = defineProps<optionProps>();

</script>

<template>
  <div class="option-container">
    <h4>{{ option.title }}</h4>
    <div class="option-buttons">
      <button class="option option-left"
              :class="options.gender === gender.BOY && 'option-active'"
              @click="options.gender = gender.BOY"
      >Boy</button>
      <button class="option"
              :class="options.gender === gender.UNISEX && 'option-active'"
              @click="options.gender = gender.UNISEX"
      >Unisex</button>
      <button class="option option-right"
              :class="options.gender === gender.GIRL && 'option-active'"
              @click="options.gender = gender.GIRL"
      >Girl</button>
    </div>
  </div>
</template>