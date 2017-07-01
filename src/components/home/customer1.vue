<template>
<ul>
<li v-for="c in list">{{c.customerName}}</li>    
</ul>
</template>
<style>
    li { display: inline; padding: 2px 5px; }
</style>
<script>
    import {mapGetters} from 'vuex'
    /**
    * Direct mapping example
    */
    export default {
        name: 'CustomerOne',
        computed: mapGetters({
            list: 'allCustomers'
        }),
        mounted () {
            console.log('First component loaded')
        }
    }
</script>