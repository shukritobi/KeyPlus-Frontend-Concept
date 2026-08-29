import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useQuoteStore = defineStore('quote', () => {
  const vehicleType = ref('Car')
  const plate = ref('KEY1234')
  const phone = ref('01160604666')
  const email = ref('hello@example.com')
  const eHailing = ref(false)
  const promo = ref('')
  const loading = ref(false)
  const quotes = ref([])
  const canSubmit = computed(() => plate.value.length >= 3 && phone.value.length >= 9 && email.value.includes('@'))
  return { vehicleType, plate, phone, email, eHailing, promo, loading, quotes, canSubmit }
})
