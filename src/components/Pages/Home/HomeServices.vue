<template>
    <section>
        <home-services-block
            v-for="(service, index) in services" :key="index"
            :model="service"
            :direction="service.direction || index % 2 ? 'right':'left'"/>
    </section>
</template>

<script>
    //TODO: find other parallax
    import ROUTER_NAMES from "@/constants/RouterConstants";
    import HomeServicesBlockModel from "@/components/Pages/Home/models/home-services-block.model";
    import HomeServicesBlock from "@/components/Pages/Home/elements/HomeServicesBlock";

    export default {
        name: "HomeServices",
        components: {
            HomeServicesBlock,
        },
        data() {
            return {
                img: {
                    img1: require('@/assets/parallax-1.jpg'),
                    img2: require('@/assets/parallax-2.jpg'),
                    img3: require('@/assets/parallax-3.jpg'),
                    img4: require('@/assets/slide-finance-1.jpg')
                },
                services: [],
            }
        },
        RouterNames: ROUTER_NAMES,
        created() {

            this.services
                .push(
                    new HomeServicesBlockModel({
                        imageURL: `${require('@/assets/parallax-1.jpg')}`,
                        title: 'SSNT',
                        description: 'Social Security Number Trace',
                        message: 'Match name, social security number, and more! We provide superior data to check applicant information including customized reports',
                        routerName: this.$options.RouterNames.SERVICE_SSNT
                    }),
                    new HomeServicesBlockModel({
                        imageURL: `${require('@/assets/parallax-2.jpg')}`,
                        title: 'CBSV',
                        description: 'Consent Based SSN Verification',
                        message: 'Whether it\'s an unintentional skip or a case of ID theft, we have the expertise to successfully resolve your delinquency',
                        routerName: this.$options.RouterNames.SERVICE_CBSV
                    }),
                    new HomeServicesBlockModel({
                        imageURL: `${require('@/assets/parallax-3.jpg')}`,
                        title: 'Form I-9 / E-Verify',
                        description: 'Employment Verification',
                        message: 'We help employers attain legal compliance with our comprehensive suite of Employment Eligibility Verification solutions',
                        routerName: this.$options.RouterNames.SERVICE_EVERIFY
                    }),
                    new HomeServicesBlockModel({
                        imageURL: `${require('@/assets/parallax-1.jpg')}`,
                        title: 'ITRV',
                        description: 'Income & Employer Verification',
                        message: 'Gain access to the IRS database to verify Income & Employer history with IRS Form 4506T',
                        routerName: this.$options.RouterNames.SERVICE_ITRV
                    }),
                    new HomeServicesBlockModel({
                        imageURL: `${require('@/assets/parallax-2.jpg')}`,
                        title: 'eCBSV',
                        description: 'TODO: text to description',
                        message: 'eCBSV is a service that will help to reduce synthetic identity fraud. The service will be marketed to the financial services industry and other "permitted entities" as defined by the law.',
                        routerName: this.$options.RouterNames.SERVICE_ECBSV
                    })
                )
        }
    }
</script>
