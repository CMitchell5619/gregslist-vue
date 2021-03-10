<template>
  <div class="home container">
    <div class="row mt-5">
      <div class="col text-center">
        <h1>Welcome</h1>
        <h2>to</h2>
        <h1>Gregslist</h1>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col d-flex justify-content-around">
        <button class='btn btn-primary'>Cars</button>
        <button class='btn btn-primary'>Houses</button>
        <button class='btn btn-primary'>Jobs</button>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'Home',
  setup() {
    const state = reactive({})
    return {
      methodName() {

      }
    }
  },
  components: {
  }
}
</script>
