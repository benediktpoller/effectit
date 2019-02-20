<template>
    <div>
        <b-carousel
                id="carousel-fade"
                style="text-shadow: 0px 0px 2px #000"
                fade
                indicators
                img-width="1024"
                img-height="480"
        >
            <b-carousel-slide caption="Defend your business"
                              img-src="https://hammerheaddomains.com/wp-content/uploads/2015/12/pbn-hosting-data-center.jpg"/>
            <b-carousel-slide caption="Optimale IT Wartung"
                              img-src="https://www.akita.co.uk/wp-content/uploads/2017/03/Server.jpg"/>
            <b-carousel-slide caption="Früh wissen, was passiert" img-src="https://picsum.photos/1024/480/?image=22"/>
        </b-carousel>

        <b-jumbotron class="text-center" header="we help you to stay competitive"
                     lead="Gemeinsam mit unseren Partnern sorgen wir für eine Reduktion Ihrer IT Ausgaben">
        </b-jumbotron>

        <b-container>
            <b-row>
                <b-col>
                    <b-card
                            title="Radar Smart Solutions"
                            img-src="https://blog.notebooksbilliger.de/wp-content/uploads/2018/02/samsung-pm1643-31tb-ssd-title-pixabay-1024x538.jpg"
                            img-alt="Image"
                            img-top
                            tag="article"
                            style="max-width: 20rem;"
                            class="mb-2"
                    >
                        <b-card-text>
                            Kontinuierliches IT Security Monitoring für Unternehmen
                            mit bis zu 500 Mitarbeitern
                        </b-card-text>

                        <b-button to="/radar-smart-solution" variant="primary">Weitere Information</b-button>
                    </b-card>
                </b-col>
                <b-col>
                    <b-card
                            title="IBM Verse - SaaSjhjh"
                            img-src="https://pbs.twimg.com/media/B8-FZ-yIUAEPgOZ.jpg"
                            img-alt="Image"
                            img-top
                            tag="article"
                            style="max-width: 20rem;"
                            class="mb-2"
                    >
                        <b-card-text>
                            IBM SaaS Ihre Kaufkraft durch kostengünstige monatliche Zahlungen steigern
                        </b-card-text>

                        <b-button href="#" variant="primary">Info zu SaaS</b-button>
                    </b-card>
                </b-col>
                <b-col>
                    <b-card
                            title="Radar Services"
                            img-src="https://www.phocuswire.com/uploadedimages/uploads/2017/07/bigstock-Birth-Of-Artificial-Intelligen-5717618.jpg?width=800&height=400&scale=both&mode=crop"
                            img-alt="Image"
                            img-top
                            tag="article"
                            style="max-width: 20rem;"
                            class="mb-2"
                    >
                        <b-card-text>
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </b-card-text>

                        <b-button href="#" variant="primary">Information</b-button>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>

        <b-container class="partner">
            <b-link to="/contact?link=arrow"><img src="@/assets/img/partner/12552_arrow.jpg" class="img-thumbnail"></b-link>
            <b-link to="/contact?am"><img src="@/assets/img/partner/am.png" class="img-thumbnail"></b-link>
            <b-link to="/contact?grenke"><img src="@/assets/img/partner/grenke.jpg" class="img-thumbnail"></b-link>
            <b-link to="/contact?arrow"><img src="@/assets/img/partner/ibm-business-partner.jpg" class="img-thumbnail">
            </b-link>
            <b-link to="/contact?arrow"><img src="@/assets/img/partner/Logo_TechData.svg_.png" class="img-thumbnail">
            </b-link>
            <b-link to="/contact?arrow"><img src="@/assets/img/partner/RadarServices-Logo_web.png"
                                             class="img-thumbnail"></b-link>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: 'Home'
    }
</script>

<style scoped>

    .partner img {
        max-width: 3em;
        height: auto;
    }
</style>
