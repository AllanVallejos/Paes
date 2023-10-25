import { NavbarHeaderBasico } from '../.nuxt/components';
<template>
    <div>
        <v-app>
            <headerr />

            <div style="min-height: 50vh; position: relative; margin-bottom: 50px;">

                <slot />
            </div>
            <footerr />
        </v-app>

    </div>
</template>

<script setup>

useHead({
    link: [
        {
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
            integrity: "sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN",
            crossorigin: "anonymous",
        },
    ],
    script: [
        {
            src: "	https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",
        }, {
            src: "https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js", integrity: "sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49", crossorigin: "anonymous"
        }
    ],
});

</script>

<style>
body {

    font-family: 'roboto', sans-serif;
}
</style>