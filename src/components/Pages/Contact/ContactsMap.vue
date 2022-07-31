<template>
    <GmapMap
        :center="{lat:34.126507, lng:-118.055795}"
        :zoom="40"
        map-type-id="terrain"
        style="width: 100%; min-height: 550px"
    >
    </GmapMap>
</template>

<script>
    export default {
        name: "ContactsMap"
    }
</script>

<style scoped>

</style>
