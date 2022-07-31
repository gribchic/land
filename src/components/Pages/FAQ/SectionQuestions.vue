<template>
    <section class="page-section container">
        <div class="accordion" role="tablist">
            <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-1 class="rounded border-left text-left" >
                        After completing the IDValidation Registration Form, how long before approval to use the
                        IDValidation platform?
                    </b-button>
                </b-card-header>
                <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        <b-card-text class="p-4">
                            The IDV Registration Form will be reviewed and your company vetted in one business day.
                        </b-card-text>
                    </b-card-body>
                </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-2  class="rounded border-left text-left">
                        What are the permissible purposes for CBSV and ITRV searches?
                    </b-button>
                </b-card-header>
                <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        <b-card-text class="p-4">
                            Both services require the signed consent of the applicant and both services can be used for
                            any business purpose.
                        </b-card-text>
                    </b-card-body>
                </b-collapse>
            </b-card>
        </div>
    </section>
</template>

<script>
    export default {
        name: "SectionQuestions",
        data() {
            return {
                text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `
            }
        }
    }
</script>

<style scoped>

</style>
