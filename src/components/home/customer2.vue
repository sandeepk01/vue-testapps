<template>
<div>
    <div>Total Customers : {{total}}</div>
    <div>Does the list have duplicate customers? : <span v-if="duplicate">YES</span><span v-else>NO</span></div>
    <div>
        <h5>List of characters for dictionary</h5>
       {{characters}}
    </div>
</div>
</template>
<script>
    import {mapGetters} from 'vuex'
    /**
    * Partial mapping, object spread operator example
    */
    export default {
        name: 'CustomerOne',
        computed: {
            total () {
                return this.$store.getters.allCustomers.length
            },
            ...mapGetters({
                duplicate: 'hasDuplicateCustomer',
                characters: 'alphaKeys'
            })
        },
        mounted () {
            console.log('Second component loaded')
        }
    }
</script>