<template>
    <footer class="bd-footer text-muted">
        <div class="container-fluid p-3 p-md-5">
            <ul class="bd-footer-links">
                <li><b-link to="/tos">{{ $t("tos") }}</b-link></li>
                <li><b-link to="/imprint">{{ $t("imprint") }}</b-link></li>
                <!--<li><b-link to="/gdpr">{{ $t("gdpr") }}</b-link></li>-->
                <li><b-link to="/contact">{{ $t("contact") }}</b-link></li>
            </ul>
            <p>Copyright 2019 effect IT GmbH. All rights reserved.</p>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>

<style>
    footer {
        background: #f7f7f7;
        font-size: .875rem;
    }

    footer ul {
        padding: 0;
        margin: 0;
    }

    footer li {
        margin-bottom: 1em;
        margin-right: 1em;
        font-weight: bold;
        display: inline-block;
    }
</style>
