<script setup>
  import { CCard, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/vue';
  defineProps({
    title: String,
    text: String,
    button: String,
  })
</script>
<template>
  <CCard>
    <CCardBody>
      <CCardTitle>{{ title }}</CCardTitle>
      <CCardText>{{ text }}
      </CCardText>
      <CButton color="primary" href="#">{{ button }}</CButton>
    </CCardBody>
  </CCard>

</template>
