import { NavbarHeaderBasico } from '../.nuxt/components';
<template>
  <div>
    <headerr />
    <main>
        <slot />
    </main>
    <footerr />
    </div>
</template>

<script setup>

        useHead({
    link:[
        {
            rel:"stylesheet",
            href:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
            integrity:"sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN",
            crossorigin:"anonymous",
        },      
    ],
        script:[
            {
                src:"	https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",
            },{
                src:"https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.9.2/umd/popper.min.js",
                integrity:"sha512-2rNj2KJ+D8s1ceNasTIex6z4HWyOnEYLVC3FigGOmyQCZc2eBXKgOxQmo3oKLHyfcj53uz4QMsRCWNbLd32Q1g==",
                crossorigin:"anonymous",
                referrerpolicy:"no-referrer"
            }
        ],
    });
</script>

