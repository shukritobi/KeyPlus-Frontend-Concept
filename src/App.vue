<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import QuoteFlow from './components/QuoteFlow.vue'
import OpsDashboard from './components/OpsDashboard.vue'

const { locale } = useI18n()
const mode = ref('customer')
const langs = ['en','bm','zh']
const nextLang = () => locale.value = langs[(langs.indexOf(locale.value)+1)%langs.length]
</script>

<template>
  <div class="app-shell">
    <header>
      <a class="brand" href="#top"><span class="brandmark">K</span><b>KEY<span>PLUS</span></b><small>frontend concept</small></a>
      <nav>
        <button :class="{active: mode==='customer'}" @click="mode='customer'">Customer journey</button>
        <button :class="{active: mode==='ops'}" @click="mode='ops'">Ops dashboard</button>
      </nav>
      <button class="lang" @click="nextLang">{{ locale.toUpperCase() }}</button>
    </header>

    <main id="top">
      <template v-if="mode==='customer'">
        <QuoteFlow />
        <section class="benefits section-pad">
          <div class="section-head"><div><div class="eyebrow">Designed around conversion</div><h2>Fewer steps. <span>More confidence.</span></h2></div></div>
          <div class="benefit-grid">
            <article><i>01</i><h3>Quote-first hierarchy</h3><p>The critical action stays obvious while secondary content gets out of the way.</p></article>
            <article><i>02</i><h3>Mobile-first inputs</h3><p>Large targets, progressive disclosure and clear validation for fast completion on phones.</p></article>
            <article><i>03</i><h3>Trust in context</h3><p>Coverage, instalment and assistance signals appear where users actually make decisions.</p></article>
            <article><i>04</i><h3>i18n-ready</h3><p>English, Bahasa Malaysia and Chinese are treated as product architecture, not an afterthought.</p></article>
          </div>
        </section>
      </template>
      <OpsDashboard v-else />
    </main>

    <footer>
      <div><strong>Independent application concept</strong><p>Created to demonstrate a possible frontend direction based on publicly available KEY PLUS information. Not an official Key Auto / KEY PLUS product.</p></div>
      <a href="https://www.keyplus.my" target="_blank" rel="noreferrer">Current KEY PLUS site ↗</a>
    </footer>
  </div>
</template>
