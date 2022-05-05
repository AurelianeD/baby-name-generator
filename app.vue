<script setup lang="ts">

  import { gender, popularity, length, names} from "@/data";

  interface OptionsState {
    gender: gender;
    popularity: popularity;
    length: length;
  }

  const options = reactive<OptionsState>({
    gender: gender.GIRL,
    popularity: popularity.TRENDY,
    length: length.LONG,
  })
  const computeSelectedNames = () => {
    const filterNames = names
        .filter((name) => name.gender === options.gender)
        .filter((name) => name.popularity === options.popularity)
        .filter((name) => {
          if(options.length === length.ALL) return true
          else return name.length === options.length
        })
        selectedNames.value = filterNames.map((name) => name.name)
  }
  const selectedNames = ref<string[]>([]);

  const optionsArray = [
    {
      title: "1) Choose a gender",
      category: "gender",
      button: [gender.BOY, gender.GIRL, gender.UNISEX],
    },
    {
      title: "2) Choose the name's popularity",
      category: "popularity",
      button: [popularity.UNIQUE, popularity.TRENDY],
    },
    {
      title: "3) Choose the name's length",
      category: "length",
      button: [length.SHORT, length.ALL, length.LONG],
    }
  ]

</script>

<template>
  <div class="container">
    <h1>Baby Name Generator </h1>
    <p>Choose your options and click the "Find name" button below</p>

    <div class="options-container">
      <option v-for="option in optionsArray"
              :key="option.title"
              :option="option"
              :options="options"/>
      <button class="primary" @click="computeSelectedNames">Find names</button>
    </div>
    <div class="card-container">
      <div v-for="name in selectedNames" :key="name" class="card">
        <h4>{{ name }}</h4>
        <p>x</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

.container {
  font-family: arial, Helvetica, sans-serif;
  color: rgb(27, 60, 138);
  max-width: 50rem;
  margin: 0 auto;
  text-align: center;
}

.container h1{
  font-size: 3em;
}

.options-container{
  background-color: rgb(255, 238, 236);
  border-radius: 2rem;
  padding: 1rem;
  width: 95%;
  margin: 0 auto;
  margin-top: 2rem;
  position: relative;
}

.option-container{
  margin-bottom: 2rem;
}

.option{
  background-color: white;
  outline: 0.15rem solid rgb(249, 87, 89);
  border: none;
  padding: 0.75rem;
  width: 12rem;
  font-size: 1rem;
  color: rgb(27, 60, 138);
  cursor: pointer;
  font-weight: 200;
}

.option-left {
  border-radius: 1rem 0 0 1rem;
}

.option-right{
  border-radius: 0 1rem 1rem 0;
}

.option-active{
  background-color: rgb(249, 87, 89) ;
  color: white ;
}

.primary{
  background-color: rgb(249, 87, 89);
  color: white;
  border-radius: 6.5rem;
  border: none;
  padding: 0.75rem 4rem;
  font-size: 1rem;
  margin-top: 1rem;
  cursor: pointer;
}

.card-container{
  display: flex;
  margin-top: 3rem;
  flex-wrap: wrap;
}

.card{
  background-color: rgb(27,61,138);
  width: 28%;
  color: white;
  border-radius: 1rem;
  padding: 0.1rem;
  margin-right:  0.5rem;
  margin-bottom: 1rem;
  position: relative;

}

.card p{
  position: absolute;
  top: -30%;
  left:92.5%;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.178 );
}
</style>