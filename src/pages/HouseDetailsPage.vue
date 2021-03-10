<template>
  <div class="house-details container">

    <div class="row text-center justify-content-between">
      <div class="col-6">
        <h1>This is a house!</h1>
      </div>
      <div class="col-2">
        <button type="button" class="btn btn-danger" @click="deleteHouse">
        Delete House
        </button>
      </div>
    </div>

    <div class="row">
      <div class="col-6">
        <p><strong>Bedrooms: </strong> {{state.house.bedrooms}}</p>
        <p><strong>Bathrooms: </strong>{{state.house.bathrooms}}</p>
        <p><strong>Price: $</strong>{{state.house.price}}</p>
        <p><strong>Year: </strong>{{state.house.year}}</p>
      </div>
      <div class="col-6">
        <img class="img-fluid" :src="state.house.imgUrl" alt="house"/>
      </div>
    </div>

    <div class="row">
      <div class="col-6">{{state.house.description}}</div>
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import { housesService } from '../services/HousesService'
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../Appstate'
export default {
  name: 'HousesDetailPage',

  setup() {
    const router = useRouter()
    const route = useRoute()
    const state = reactive({
      house: computed(() => AppState.activeHouse)
    })

    onMounted(() => {
      housesService.getHouse(route.params.id)
    })

    return {
      route,
      state,
      async deleteHouse() {
        await housesService.deleteHouse(state.house._id)
        router.push({ name: 'Houses' })
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
