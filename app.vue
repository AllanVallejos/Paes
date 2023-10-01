<script setup>
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://dtwternontlvmanfkges.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0d3Rlcm5vbnRsdm1hbmZrZ2VzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYxMjQ2MTgsImV4cCI6MjAxMTcwMDYxOH0.zwfrotgKRisKCON_PfTyJ8ZmDq6wwjtDQSLEpyLfRcI')
const countries = ref([])

async function getCountries() {
  const { data } = await supabase.from('countries').select()
  countries.value = data
}

onMounted(() => {
  getCountries()
})
</script>

<template>
  <ul>
    <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
  </ul>
</template>