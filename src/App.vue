<template>
  <div class="app">
    <header>
      <div class="order">
        <button @click="orderBy('title')">Order By Title</button>
        <button @click="orderBy('salary')">Order By Salary</button>
        <button @click="orderBy('location')">Order By Location</button>
      </div>
    </header>

    <JobList :jobs="jobs" :orderCriteria="orderCriteria"></JobList>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, ref, toRefs} from 'vue';
import Job from './types/Job'
import JobList from "@/components/JobList.vue";
import OrderTerm from "@/types/OrderTerm";

export default defineComponent({
  name: 'App',
  components: {JobList},
  setup() {
    // const state = reactive({
    //   name: 'Link',
    //   age: 30 as number | string
    // })

    // const name = ref('Link')
    // const age = ref<number | string>(30)

    const jobs = ref<Job[]>([
      {
        title: 'farm worker',
        location: 'London',
        salary: 30000,
        id: '1'
      },
      {
        title: 'fisherman',
        location: 'Scotland',
        salary: 35600,
        id: '2'
      },
      {
        title: 'barkeeper',
        location: 'Iceland',
        salary: 45200,
        id: '3'
      },
    ])

    const orderCriteria = ref<OrderTerm>('title')

    const orderBy = (term: OrderTerm) => {
        orderCriteria.value = term
    }

    return {
      jobs,
      orderCriteria,
      orderBy
    }
  }
});
</script>

<style scoped>
header {
  text-align: center;
}
header .order {
  margin-top: 20px;
}
button {
  margin: 0 10px;
  color: #1195c9;
  border: 3px solid #1195c9;
  background: #d5f0ff;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}
header .title{
  display: flex;
  justify-content: center;
}
header img {
  width: 60px;
  margin-right: 20px;
}
header h1 {
  font-size: 3em;
}
</style>
