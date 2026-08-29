import axios from 'axios'

export async function getQuotes() {
  // Prototype service layer. Production would point to the real quote API.
  const { data } = await axios.get('./mock-quotes.json')
  await new Promise(resolve => setTimeout(resolve, 650))
  return data
}
