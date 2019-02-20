<template>
    <b-container>
        <b-row>
            <b-col md="6" sm="12">
                <form action="/contact/success" name="contact" method="POST" data-netlify="true">
                    <div class="form-group">
                        <label for="nameInput">Name</label>
                        <input type="text" class="form-control" id="nameInput">
                    </div>
                    <div class="form-group">
                        <label for="mailInput">Email</label>
                        <input type="email" class="form-control" id="mailInput" placeholder="name@example.com">
                    </div>
                    <div class="form-group">
                        <label for="messageInput">Nachricht</label>
                        <textarea class="form-control" id="messageInput" rows="3"></textarea>
                    </div>


                    <b-button type="submit">Senden</b-button>
                </form>
            </b-col>
            <b-col md="6" sm="12">
                <strong>effect IT GmbH</strong>
                <p></p>
                <p><span class="extra-bold">Mobil:</span> +43 (0) 650 555 2580<br>
                    <span class="extra-bold">Fax:</span> Fax: +43 (0) 676 302 8191<br>
                    <span class="extra-bold">E-mail:</span>&nbsp; <a href="mailto:service@effectit.at">service@effectit.at</a>
                </p>
                <p><span class="extra-bold">Anschrift:</span> Birknergasse 3, A-2372 Giesshübl (Austria)</p>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: 'contact'
    }
</script>
