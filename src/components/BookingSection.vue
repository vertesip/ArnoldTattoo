<template>
  <div>
    <date-picker v-model="time1" value-type="format" />
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'

export default {
  name: 'BookingSection',
  components: { DatePicker },
  data () {
    return {
      time1: null
    }
  }
}
</script>
