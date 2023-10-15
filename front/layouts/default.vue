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
            },
        ],
    });
</script>

