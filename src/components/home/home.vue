<template>
<div class="grids">
    <div class="row">
        <div class="cell">Vuex Mapping Method 1</div>
        <div class="cell">Vuex Mapping Method 2</div>
    </div>
    <div class="row">
        <div class="cell h3"><CustomerOne></CustomerOne></div>
        <div class="cell h3"><CustomerTwo></CustomerTwo></div>
    </div>
</div>
</template>

<style>
.grids {
	display: inline-table;
    width: 100%;
    padding: 10px;
}
.grids .row{
	display: table-row;
}
.grids .cell{
	display: table-cell;
    width: 50%;
}
.h3 {
    height: 300px;
    overflow-x: hidden;
    overflow-y: auto;
}
</style>

<script type="text/javascript" lang="babel">
    import CustomerOne from 'components/home/customer1'
    import CustomerTwo from 'components/home/customer2'
    /**
    * Home component for collation
    */
    export default {
        name: 'Home',
        /**
        * Is there any way to document what components have been injected?
        */
        components: {
            CustomerOne,
            CustomerTwo
        }
    }
</script>
