<template>
    <div>
        <img
            src="@/assets/logo-hor.svg"
            alt="logo"
            :class="`logo d-none d-${variant}-block`"/>
        <img
            src="@/assets/logo-square.svg"
            alt="logo"
            :class="`logo d-${variant}-none`"/>
    </div>
</template>

<script>
    export default {
        name: "AdaptiveLogo",
        props: {
            variant: {
                type: String,
                default: "md",
                validator: (value) => {
                    return ['sm', 'md', 'lg', 'xl'].indexOf(value) !== -1
                }

            }
        }
    }
</script>

<style scoped>
    .logo {
        height: 45px;
    }
</style>
