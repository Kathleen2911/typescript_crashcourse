<template>
  <p>ordered by: {{order}}</p>
  <ul class="job-list">
    <li v-for="job in orderedJobs" :key="job.id">
      <h2>{{job.title}} in {{job.location}}</h2>
      <div class="salary">
        <p> {{job.salary}}</p>
      </div>
      <div class="description">
        <p> Description</p>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import {computed, defineComponent, PropType } from "vue";
import Job from "@/types/Job"
import OrderTerm from "@/types/OrderTerm";

export default defineComponent({
  name: "JobList",
  props: {
    jobs: {
      required: true,
      type: Array as PropType<Job[]>
    },
    orderCriteria: {
      required: true,
      type: String as PropType<OrderTerm>
    }
  },
  setup(props) {
    const orderedJobs = computed(() => {
      let newJobs: Job[] = props.jobs
      return newJobs.sort((job1: Job, job2: Job) => {
        return job1[props.order] > job2[props.order] ? 1: -1
      })
    })

    return {
      orderedJobs
    }
  }
})

</script>

<style scoped>
.job-list {
  max-width: 960px;
  margin: 40px auto;
}
.job-list ul {
  padding: 0
}
.job-list li {
  list-style-type: none;
  background: white;
  padding: 16px;
  margin: 16px 0;
  border-radius: 4px;
}
.job-list h2 {
  margin: 0 0 10px;
  text-transform: capitalize;
}
.salary {
  display: flex;
}
.salary img {
  width: 30px;
}
.salary p {
  color: #17bf66;
  font-weight: bold;
  margin: 10px 4px;
}
.list-move {
  transition: all 1s;
}

</style>