<template>
  <JobList :jobs="jobs" :orderCriteria="orderCriteria"></JobList>
</template>

<script lang="ts">
import Job from "../types/Job";
import OrderTerm from "../types/OrderTerm";
import JobList from "@/components/JobList.vue";
import {defineComponent, reactive, ref, toRefs} from 'vue';
import axios from "axios";

export default defineComponent({
  name: "JobListPage",
  components: {JobList},
  setup() {
    let jobs = reactive<Job[]>([])

    fetchJobs()
    const orderCriteria = ref<OrderTerm>('title')
    const orderBy = (term: OrderTerm) => {
      orderCriteria.value = term
    }

    async function fetchJobs(): Promise<void>{
      try {
        const response = await axios.get('http://localhost:3000/data');
        if (response.status === 200) {
          Object.assign(jobs, response.data)
        } else {
          console.log(`Could not receive Jobs: ${response}`)
        }
      } catch (error) {
        console.error(error);
        console.log(`Could not receive Jobs: ${error}`)
      }
    }

    return {
      jobs,
      orderCriteria,
      orderBy
    }
  }
})
</script>

<style scoped>

</style>