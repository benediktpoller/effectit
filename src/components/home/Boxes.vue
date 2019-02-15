<template>
    <div class="container">
        <div class="card-deck mb-3 text-center">
            <div class="card mb-4 shadow-sm">
                <div class="card-header">
                    <h4 class="my-0 font-weight-normal">Novarion</h4>
                </div>
                <div class="card-body">
                    <img src="http://www.effectit.at/wp-content/uploads/2016/12/shutterstock_145207213-768x576.jpg">
                    <ul class="list-unstyled mt-3 mb-4">
                        <li>Novarion High End Storage</li>
                        <li>Made in Austria</li>
                        <li>Full SSD Storage ab € 670,— pro TB</li>
                    </ul>
                    <button type="button" class="btn btn-lg btn-block btn-outline-primary">Weiter</button>
                </div>
            </div>
            <div class="card mb-4 shadow-sm">
                <div class="card-header">
                    <h4 class="my-0 font-weight-normal">IBM SaaS</h4>
                </div>
                <div class="card-body">
                    <img src="assets/partners/ibm-business-partner.jpg">
                    <ul class="list-unstyled mt-3 mb-4">
                        <li>IBM SaaS Ihre Kaufkraft durch kostengünstige monatliche Zahlungen steigern</li>
                    </ul>
                    <button type="button" class="btn btn-lg btn-block btn-outline-primary">Weiter</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Boxes',
        props: {
            msg: String
        }
    }
</script>
