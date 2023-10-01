<template>
  <div>
    <nav>
        <ul>
            <li>
                <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/admin">Login</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/protected">Protected</nuxt-link>
            </li>
        </ul>
    </nav>
    <NuxtPage />
  </div>
</template>
