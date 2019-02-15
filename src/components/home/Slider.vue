<template>
    <div>
        <vue-flux
                :options="fluxOptions"
                :images="fluxImages"
                :transitions="fluxTransitions"
                ref="slider">
        </vue-flux>
    </div>
</template>

<script>

    import {VueFlux, Transitions} from 'vue-flux';

    export default {
        name: 'Slider',
        components: {
            VueFlux
        },
        data: () => ({
            fluxOptions: {
                autoplay: true
            },
            fluxImages: [
                'http://www.effectit.at/wp-content/uploads/2017/06/effectit_slider_security.png',
                'http://www.effectit.at/wp-content/uploads/2017/06/effectit_slider_it_wartung.png',
                'http://www.effectit.at/wp-content/uploads/2017/01/RadarServices-Meteor.png'
            ],
            fluxTransitions: {
                transitionTurn3d: Transitions.transitionTurn3d
            }
        })
    }
</script>
