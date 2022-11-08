<template>
  <article class="job-card" v-for="job in jobs" :key="job.slug">
    <div class="job-card__header">
      <h2 class="title">{{job.title}}</h2>
      <div class="meta">
        <div class="badge badge__level"> {{job.job_types[0]}}</div>
        <div class="badge badge__contract-type"> {{job.job_types[1]}}</div>
        <div class="badge badge__contract-duration"> {{job.job_types[2]}}</div>
      </div>
    </div>
    <div class="job-card__content">
      <p class="description" v-html="job.description"></p>
      <button class="btn btn__primary btn__read-more">Mehr erfahren</button>
    </div>

  </article>
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
  }
})

</script>

<style lang="scss" scoped>
  @import "src/assets/variables";
  @import "src/assets/buttons";

  .job {
    &-card {
      width: 40%;
      margin: 40px auto;
      background: white;
      padding: 40px;
      border-radius: $border-radius-lg;
      box-shadow: 0 0 50px $blue-15;

      &__header {
        .title {
          color: $primary-color;
        }
        .meta {
          display: flex;
          gap: 15px;
          margin: $spacer-20 0 40px;

          .badge {
            font-size: 10px;
            border-radius: 40px;
            padding: 5px 10px;
            text-transform: uppercase;

            &__level {
              background-color: #dbf0ff;
              color: #2181db;
            }

            &__contract-type {
              background-color: #ebe5ff;
              color: #774ed5;
            }

            &__contract-duration {
              background-color: #ffe7ca;
              color: #bf8200;
            }
          }
        }
      }

      &__content {
        .description {
          max-height: calc(1.6rem * 8);
          position: relative;
          overflow: hidden;

          &::before {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 50px;
            background: linear-gradient(180deg, transparent, white);
          }
        }
        .btn__read-more {
          margin-top: $spacer-20;
        }
      }
    }


  }

</style>