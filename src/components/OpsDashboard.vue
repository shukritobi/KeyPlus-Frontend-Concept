<script setup>
import { computed } from 'vue'

const leads = [
  {plate:'VBA 2188', stage:'Quoted', value:1280, source:'Organic', age:'4m'},
  {plate:'WXY 9011', stage:'Follow-up', value:1095, source:'Referral', age:'18m'},
  {plate:'JRU 6612', stage:'Paid', value:1432, source:'Campaign', age:'32m'},
  {plate:'VCT 8080', stage:'Quoted', value:980, source:'Paid Search', age:'1h'}
]
const conversion = computed(() => 18.4)
</script>

<template>
  <section class="dashboard section-pad" id="dashboard">
    <div class="section-head">
      <div><div class="eyebrow">Internal SPA concept</div><h2>Leads move. <span>The team sees why.</span></h2></div>
      <div class="live-dot"><i></i> Live pipeline</div>
    </div>
    <div class="dash-grid">
      <div class="metric glass"><span>Quote conversion</span><strong>{{ conversion }}%</strong><small>↑ 3.2% vs last 7 days</small></div>
      <div class="metric glass"><span>Quotes today</span><strong>184</strong><small>62 need follow-up</small></div>
      <div class="metric glass"><span>Avg. premium</span><strong>RM 1,246</strong><small>Across active quotes</small></div>
      <div class="metric glass"><span>Payment success</span><strong>96.8%</strong><small>Gateway health normal</small></div>
    </div>
    <div class="dashboard-main">
      <div class="funnel glass">
        <div class="card-title"><strong>Conversion funnel</strong><span>Last 7 days</span></div>
        <div class="bars">
          <div style="--w:100%"><label>Visits <b>4,820</b></label><span></span></div>
          <div style="--w:68%"><label>Quote starts <b>3,278</b></label><span></span></div>
          <div style="--w:43%"><label>Quotes returned <b>2,072</b></label><span></span></div>
          <div style="--w:18.4%"><label>Paid <b>887</b></label><span></span></div>
        </div>
      </div>
      <div class="activity glass">
        <div class="card-title"><strong>Recent leads</strong><span>Realtime-ready UI</span></div>
        <div class="lead" v-for="lead in leads" :key="lead.plate">
          <div class="avatar">{{ lead.plate.slice(0,1) }}</div><div><strong>{{ lead.plate }}</strong><span>{{ lead.source }} · {{ lead.age }}</span></div>
          <em :class="lead.stage.toLowerCase().replace('-','')">{{ lead.stage }}</em><b>RM {{ lead.value }}</b>
        </div>
      </div>
    </div>
  </section>
</template>
