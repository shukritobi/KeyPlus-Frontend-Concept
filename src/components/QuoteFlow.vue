<script setup>
import { computed } from 'vue'
import { useQuoteStore } from '../stores/quote'
import { getQuotes } from '../services/quotes'

const store = useQuoteStore()
const savings = computed(() => store.quotes.length ? Math.max(...store.quotes.map(q => q.annual)) - Math.min(...store.quotes.map(q => q.annual)) : 0)

async function submitQuote() {
  if (!store.canSubmit) return
  store.loading = true
  store.quotes = await getQuotes()
  store.loading = false
  requestAnimationFrame(() => document.querySelector('#results')?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
}
</script>

<template>
  <section class="quote-shell" id="quote">
    <div class="quote-copy">
      <div class="eyebrow">Motor insurance, without the maze</div>
      <h1>Compare. Choose. <span>Drive covered.</span></h1>
      <p>One cleaner journey from plate number to protection. Built as a frontend concept around KEY PLUS's real customer flow.</p>
      <div class="trust-row">
        <div><strong>3</strong><span>languages</span></div>
        <div><strong>1</strong><span>fast quote flow</span></div>
        <div><strong>24/7</strong><span>breakdown support</span></div>
      </div>
    </div>

    <div class="quote-card glass">
      <div class="segment">
        <button :class="{active: store.vehicleType==='Car'}" @click="store.vehicleType='Car'">🚗 Car</button>
        <button :class="{active: store.vehicleType==='Motorbike'}" @click="store.vehicleType='Motorbike'">🏍 Motorbike</button>
      </div>
      <label>Plate number<input v-model.trim="store.plate" placeholder="KEY1234" /></label>
      <div class="two-col">
        <label>Contact number<input v-model.trim="store.phone" placeholder="01160604666" /></label>
        <label>Email<input v-model.trim="store.email" type="email" placeholder="you@email.com" /></label>
      </div>
      <label>Promo code <span class="optional">optional</span><input v-model.trim="store.promo" placeholder="KEYPLUS100" /></label>
      <div class="toggle-row">
        <div><strong>E-hailing?</strong><small>Grab, inDrive, AirAsia Ride and more</small></div>
        <button class="switch" :class="{on: store.eHailing}" @click="store.eHailing=!store.eHailing"><span></span></button>
      </div>
      <button class="primary" :disabled="!store.canSubmit || store.loading" @click="submitQuote">
        <span v-if="!store.loading">Get my quote <b>→</b></span><span v-else>Comparing plans…</span>
      </button>
      <div class="secure">🔒 Prototype only. No personal data is submitted.</div>
    </div>
  </section>

  <section v-if="store.quotes.length" id="results" class="results section-pad">
    <div class="section-head">
      <div><div class="eyebrow">Smart comparison</div><h2>Three options. <span>Zero guesswork.</span></h2></div>
      <div class="save-pill">Potential difference <strong>RM {{ savings }}/yr</strong></div>
    </div>
    <div class="plan-grid">
      <article v-for="plan in store.quotes" :key="plan.id" class="plan glass" :class="{recommended: plan.recommended}">
        <div class="badge" v-if="plan.recommended">Best match</div>
        <div class="provider">{{ plan.provider }}</div>
        <h3>{{ plan.name }}</h3>
        <div class="price"><span>RM</span>{{ plan.monthly }}<small>/mo</small></div>
        <div class="annual">RM {{ plan.annual }} annually</div>
        <ul><li v-for="tag in plan.tags" :key="tag">✓ {{ tag }}</li></ul>
        <div class="rating">★ {{ plan.score }} <span>plan score</span></div>
        <button>View coverage <b>→</b></button>
      </article>
    </div>
  </section>
</template>
