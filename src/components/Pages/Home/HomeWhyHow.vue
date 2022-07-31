<template>
    <section class="page-section">
        <div class="container">
            <div class="row text-center" ref="container">
                <div class="col-md-5 mb-4 mb-md-0">
                    <font-awesome-icon
                        class="text-dark mb-3"
                        icon="cogs"
                        size="3x"/>
                    <h4 class="mb-4">How it Works?</h4>
                    <p class="custom-text-color-1 mb-0">Our service is linked to the United States Social Security
                        Administration (SSA) Master Files and Death Indexes to supply official validation of Social
                        Security Number, Name, Date of Birth, Gender and Death Indicator.</p>
                </div>
                <div class="col-md-5 offset-md-2">
                    <font-awesome-icon
                        class="text-dark mb-3"
                        icon="handshake"
                        size="3x"/>
                    <h4 class="mb-4">Why Choose Us?</h4>
                    <p class="custom-text-color-1 mb-0">IDV™ is designed to handle large volume requests and offers
                        leading edge compliance with state and federal regulations involving Customer Identification
                        Programs as well as Red Flag Rules.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {TimelineMax, Power2} from "gsap";

    export default {
        name: "HomeWhyHow",
        mounted() {
            this.setAnimation();
        },
        methods: {
            setAnimation(){
                const container = this.$refs.container;
                const children = container.children;
                const tl = new TimelineMax({
                    scrollTrigger: {
                        trigger: container,
                        start: "50px 90%",
                        //markers: true,
                    }
                });

                children.forEach((el, i) => {
                    tl.from(el, 2, {
                        autoAlpha: 0,
                        x: i % 2  ? -50 : 50,
                        ease: Power2.easeOut
                    }, '<');
                })
            }
        }
    }
</script>
