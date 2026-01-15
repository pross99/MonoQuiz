<script lang="ts">
    export default {

        data: () => ({
            displayDays: "0",
            displayHours: "0",
            displayMinutes: "0",
            displaySeconds: "0"
        }),
        computed: {
            _seconds: () => 1000,
            _minutes()  {
                return this._seconds * 60
            },
            _hours()  {
                return this._minutes * 60
            },
            _days()  {
                return this._hours * 24
            },
        },
        mounted() {
            this.showRemaining()
        },

        methods: {

            formatNum: (num: number): string => (num < 10 ? '0' + num : num.toString()),
            showRemaining() {
                const timer = setInterval(() => {
                    const now = new Date();
                    const end = new Date(2026, 0, 30, 16,0,0,0)
                    const distance = end.getTime() - now.getTime();

                    if(distance < 0) {
                        clearInterval(timer);
                        return 
                    }

                    const days = Math.floor((distance / this._days));
                    const hours = Math.floor((distance % this._days) / this._hours)
                    const minutes = Math.floor((distance % this._hours) / this._minutes)
                    const seconds = Math.floor((distance % this._minutes) / this._seconds)
                    this.displaySeconds = this.formatNum(seconds)
                    this.displayMinutes = this.formatNum(minutes)
                    this.displayHours = this.formatNum(hours)
                    this.displayDays = this.formatNum(days)
                })
            }
        }
    };
</script>




<template>
  
<div class="form-wrapper">
      <h2>
        When? 
    </h2>
    <div class="clock" id="clock1">
        <div data-value="days"> {{ displayDays }}</div>
        <div data-value="hours"> {{ displayHours }}</div>
        <div data-value="minutes"> {{ displayMinutes }}</div>
        <div data-value="seconds"> {{ displaySeconds }}</div>
    </div>
    </div>
</template>

<style lang="scss" src="../assets/countdown.scss"></style>