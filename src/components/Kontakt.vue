<template>
    <div class="pricing-header px-3 py-3 pt-md-8 pb-md-4 mx-auto">
        <h1>Kontakt</h1>

        <div class="entry-content">
            <div class="inner">
                <div>
                    <div role="form" class="wpcf7" id="wpcf7-f410-p9-o1" lang="de-CH" dir="ltr">
                        <div class="screen-reader-response"></div>
                        <form action="/de/kontakt/#wpcf7-f410-p9-o1" method="post" class="wpcf7-form"
                              novalidate="novalidate">
                            <p><label>Ihr Name<br>
                                <span class="wpcf7-form-control-wrap your-name">
                                    <input type="text"
                                           name="your-name" value=""
                                           size="40"
                                           class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                           aria-required="true"
                                           aria-invalid="false"
                                           data-com.onepassword.iv=""></span>
                            </label>
                            </p>
                            <p><label> Ihre E-Mailadresse<br>
                                <span class="wpcf7-form-control-wrap your-email">
                                    <input type="email"
                                           name="your-email"
                                           value="" size="40"
                                           class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                           aria-required="true"
                                           aria-invalid="false"
                                           data-com.onepassword.iv=""></span>
                            </label></p>
                            <p><label> Nachricht<br>
                                <span class="wpcf7-form-control-wrap your-message">
                                    <textarea name="your-message"
                                              cols="40" rows="10"
                                              class="wpcf7-form-control wpcf7-textarea"
                                              aria-invalid="false"></textarea></span>
                            </label></p>
                            <p><input type="submit" value="Absenden" class="wpcf7-form-control wpcf7-submit">
                            </p>
                            <div class="wpcf7-response-output wpcf7-display-none"></div>
                        </form>
                    </div>
                </div>
                <div class="text-right">
                    <strong>effect IT GmbH</strong>
                    <p></p>
                    <p><span class="extra-bold">Mobil:</span> +43 (0) 650 555 2580<br>
                        <span class="extra-bold">Fax:</span> Fax: +43 (0) 676 302 8191<br>
                        <span class="extra-bold">E-mail:</span> <a
                                href="mailto:service@effectit.at">service@effectit.at</a>
                    </p>
                    <p><span class="extra-bold">Anschrift:</span> Birknergasse 3, A-2372 Giesshübl (Austria)</p>
                </div>
                <div class="clearer"></div>
            </div>
        </div><!-- .entry-content -->


    </div>
</template>

<script>
    export default {
        name: 'Kontakt'
    }
</script>
