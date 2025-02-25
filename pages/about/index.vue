<script setup>
import { onMounted } from 'vue';


// Way 1 for manual metadata setup per page
useHead({
    title: "About n-dojo",
    meta: [
        {
          name: "description", content: "Some good Stuff in Vue and Nuxt"
        }
      ]
})


const uri = `/api/agents/ashish?key=${import.meta.env.VITE_ACCESS_TOKEN}`;

const { data: agentData } = await $fetch(uri)

const { data } = await useFetch("/api/test?name=Ash", {
  method: 'post',
  body: {
    age: 20
  }
})

</script>

<template>
    <div>
        <h1>About Page {{ data }}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ex accusantium sint error laudantium quos?
            Doloribus velit consequuntur vitae ipsam.</p>
        <p>{{ agentData }}</p>
    </div>
</template>

<style></style>