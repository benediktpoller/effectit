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
            <b-carousel-slide caption="First slide" img-src="https://picsum.photos/1024/480/?image=10"/>
            <b-carousel-slide caption="Second Slide" img-src="https://picsum.photos/1024/480/?image=12"/>
            <b-carousel-slide caption="Third Slide" img-src="https://picsum.photos/1024/480/?image=22"/>
        </b-carousel>

        <b-jumbotron class="text-center" header="we help you to stay competitive"
                     lead="Gemeinsam mit unseren Partnern sorgen wir für eine Reduktion Ihrer IT Ausgaben">
        </b-jumbotron>

        <b-container class="bv-example-row">
            <b-row>
                <b-col>
                    <b-card
                            title="Novarion"
                            img-src="http://www.effectit.at/wp-content/uploads/2016/12/shutterstock_145207213-768x576.jpg"
                            img-alt="Image"
                            img-top
                            tag="article"
                            style="max-width: 20rem;"
                            class="mb-2"
                    >
                        <b-card-text>
                            NOVARION High End Storage made in Austria<br>
                            Full SSD Storage ab € 670,— pro TB
                        </b-card-text>

                        <b-button href="#" variant="primary">Full SSD Storage</b-button>
                    </b-card>
                </b-col>
                <b-col>
                    <b-card
                            title="IBM SaaS"
                            img-src="http://www.effectit.at/wp-content/uploads/2016/12/ibm.png"
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
                            img-src="https://picsum.photos/600/300/?image=25"
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

                        <b-button href="#" variant="primary">Go somewhere</b-button>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>

        <b-container>

        </b-container>

        <footer class="bd-footer text-muted">
            <div class="container-fluid p-3 p-md-5">
                <ul class="bd-footer-links">
                    <li><a to="/tos">{{ $t("tos") }}</a></li>
                    <li><a to="imprint">{{ $t("imprint") }}</a></li>
                    <li><a to="gdpr">{{ $t("gdpr") }}</a></li>
                    <li><a to="contact">{{ $t("contact") }}</a></li>
                </ul>
                <p>Copyright 2019 effectIT GmbH. All rights reserved.</p>
            </div>
        </footer>

    </div>
</template>

<script>
    export default {
        name: 'Home'
    }
</script>
