<template>
    <div class="follow-wrapper">
        <div class="spacer-wrapper"></div>
        
        <div class="item" v-for="(s, index) in intro.social" :key="index">
            <a :href="s.social_link" target="_blank" rel="noopener noreferrer">
                <span class="social-icons">
                    <font-awesome-icon :icon="['fab', s.social_icon]" size="lg" />
                </span>
            </a>
        </div>

    </div>
</template>

<script>
import { introduction } from "@/portfolio";

export default {
    name: 'Followme',
    data: () => ({
        intro: introduction
    })
}
</script>
