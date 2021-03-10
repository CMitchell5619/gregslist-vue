import { AppState } from '../Appstate'
import { sandboxApi } from './AxiosService'

class HousesService {
  async getHouses() {
    try {
      const res = await sandboxApi.get('houses')
      console.log(res)
      AppState.houses = res.data
    } catch (error) {
      console.log(error)
    }
  }

  async getHouse(id) {
    try {
      const res = await sandboxApi.get('houses/' + id)
      AppState.activeHouse = res.data
    } catch (error) {
      console.log(error)
    }
  }

  async createHouse(newHouse) {
    try {
      const res = await sandboxApi.post('houses', newHouse)
      AppState.houses.push(res.data)
      return res.data._id
    } catch (error) {
      console.log(error)
    }
  }

  async deleteHouse(id) {
    try {
      await sandboxApi.delete(`houses/${id}`)
      this.getHouses()
    } catch (error) {
      console.error(error)
    }
  }
}

export const housesService = new HousesService()
