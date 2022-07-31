export default {
    methods: {
        fullValidationReset() {
            let params = Object.keys(this.$v.$params);

            for (let i = 0; i < params.length; i++) {
                this.$v[params[i]].$$dirty = false;
                this.$v[params[i]].$$hasDirtyBlur = false;
            }

            this.$v.$reset();
        }
    }
}
