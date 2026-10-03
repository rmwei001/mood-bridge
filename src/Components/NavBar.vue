<script setup>

</script>

<template>
    <v-app-bar color="primary">
        <router-link to="/" class="d-flex align-center flex-grow-0">
            <v-img src="/logo1.png" alt="Mood Bridge" width="120" height="50" contain></v-img>
        </router-link>
        <v-spacer></v-spacer>
        <div class="d-flex align-center">
            <v-btn to="/about" color="white">About</v-btn>
            <v-btn to="/features" color="white">Features</v-btn>
            <v-btn to="/faq" color="white">FAQs</v-btn>
            <v-btn to="/contact" color="white">Contact</v-btn>
        </div>
        <v-spacer></v-spacer>
        <v-btn to="/profile" color="white">Profile</v-btn>
    </v-app-bar>
</template>