<template>
    <div :class="{ 'dark-theme': isDarkMode }" class="blog-canvas-wrapper">
        <!-- EDITORIAL HERO HEADER -->
        <section class="hero-section">
            <div class="hero-bg-media"></div>
            <div class="grid-pattern"></div>
            <div class="glow-overlay"></div>

            <div class="hero-content">
                <span class="badge">Blogs/News</span>
                <h1>Let's build something <span class="gradient-text">meaningful</span> together</h1>
                <p>Connecting Environments, Health,Education, and Community Engagement.</p>
            </div>
        </section>

        <!-- MAIN BLOG HUB -->
        <section class="blog-section">
            <!-- Dynamic Category Filter Bar -->
            <div class="filter-bar">
                <button 
                    v-for="category in categories" 
                    :key="category" 
                    :class="{ active: activeCategory === category }"
                    @click="activeCategory = category"
                    class="filter-tab"
                >
                    {{ category }}
                </button>
            </div>

            <!-- Redesigned Grid Layout (Exactly 3 Columns) -->
            <div v-if="filteredBlogs.length > 0" class="blog-grid">
                <article 
                    v-for="post in filteredBlogs" 
                    :key="post.id" 
                    class="blog-post-card"
                >
                    <div class="card-image-wrap" @click="openModal(post)">
                        <img
                            v-if="post.imageUrl"
                            :src="post.imageUrl"
                            :alt="post.title"
                            class="blog-post-image"
                        />
                        <div class="category-tag-badge" :class="getBadgeClass(post.category)">
                            {{ post.category }}
                        </div>
                    </div>
                    
                    <div class="blog-post-content">
                        <!-- Date and Reading Time -->
                        <div class="post-header-meta">
                            <span class="meta-date">
                                {{ formatDate(post.date) }}
                            </span>
                            <span class="meta-divider">•</span>
                            <span class="meta-read-time">3 min read</span>
                        </div>

                        <h3 class="blog-post-title" @click="openModal(post)">{{ post.title }}</h3>
                        <p class="blog-post-excerpt">{{ post.excerpt }}</p>
                        
                        <div class="blog-post-footer">
                            <div class="author-profile">
                                <div class="author-avatar">
                                    {{ post.author.charAt(0) }}
                                </div>
                                <div class="author-details">
                                    <span class="author-label">WRITTEN BY</span>
                                    <span class="blog-post-author">{{ post.author }}</span>
                                </div>
                            </div>

                            <button @click="openModal(post)" class="read-more-button" aria-label="Read full article">
                                <span>Read</span>
                                <svg class="arrow-icon" viewBox="0 0 24 24" width="16" height="16">
                                    <path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </article>
            </div>

            <!-- Empty State Canvas -->
            <div v-else class="no-blogs-message">
                <div class="empty-icon-box">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                        <line x1="16" y1="8" x2="2" y2="22"></line>
                        <line x1="17.5" y1="15" x2="9" y2="15"></line>
                    </svg>
                </div>
                <h3>No articles found</h3>
                <p>Check back shortly as we continuously document our journeys and community projects.</p>
            </div>

            <!-- PREMIUM EDITORIAL MODAL -->
            <Transition name="premium-modal">
                <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
                    <div class="modal-window">
                        <!-- Top Navigation Bar (Fixed) -->
                        <header class="modal-header">
                            <span class="modal-eyebrow-tag">{{ selectedPost.category }}</span>
                            <button class="modal-close-circle" @click="closeModal" aria-label="Close modal">
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </header>

                        <!-- Scrollable Core View -->
                        <div class="modal-body-scrollable">
                            <div class="modal-hero">
                                <h2 class="modal-title">{{ selectedPost.title }}</h2>
                                
                                <div class="modal-meta-bar">
                                    <div class="author-badge-large">
                                        <div class="author-avatar large">
                                            {{ selectedPost.author.charAt(0) }}
                                        </div>
                                        <div>
                                            <span class="author-label">AUTHOR</span>
                                            <p class="meta-val">{{ selectedPost.author }}</p>
                                        </div>
                                    </div>

                                    <div class="meta-vertical-divider"></div>

                                    <div>
                                        <span class="author-label">PUBLISHED ON</span>
                                        <p class="meta-val">{{ formatDate(selectedPost.date) }}</p>
                                    </div>
                                    
                                    <div class="meta-vertical-divider"></div>

                                    <div>
                                        <span class="author-label">ESTIMATED READ</span>
                                        <p class="meta-val">3 Minute Read</p>
                                    </div>
                                </div>
                            </div>

                            <div class="modal-image-wrapper">
                                <img
                                    v-if="selectedPost.imageUrl"
                                    :src="selectedPost.imageUrl"
                                    :alt="selectedPost.title"
                                    class="modal-hero-image"
                                />
                            </div>

                            <!-- Magazine-style layout for text reading -->
                            <div class="modal-editorial-body">
                                <p class="modal-full-text">{{ selectedPost.fullText }}</p>
                            </div>
                        </div>

                        <!-- Footer Actions -->
                        <footer class="modal-footer">
                            <button @click="closeModal" class="cancel-button">
                                Return to Hub
                            </button>
                        </footer>
                    </div>
                </div>
            </Transition>
        </section>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";

const isDarkMode = ref(false); 
const isModalOpen = ref(false);
const selectedPost = ref(null);
const activeCategory = ref("All Stories");

const categories = ["All Stories", "Environment", "Vocational Training", "Youth Empowerment"];

const blogs = ref([
    {
        id: "2",
        title: "Greening Futures Through Tree Nursery Training",
        category: "Environment",
        excerpt: "Our tree nursery bed planting program is sowing seeds of hope and sustainability, “The change for a better tomorrow...”",
        fullText: "Our tree nursery bed planting program is sowing seeds of hope and sustainability. Opio Andrew, a participant, beams with pride: “The skills I’ve gained will combat climate change for a better tomorrow.” \n\nAwio Ambrose, now a skilled landscaper, transforms hotels and homes with vibrant flower designs, uplifting his life from starvation and homelessness to stability. Walter, another success story, earns a living by planting trees for customers, supporting his siblings with newfound income. \n\nThis initiative empowers youth with practical skills, fostering environmental stewardship and economic independence. Their stories inspire us to continue nurturing greener communities and brighter futures.",
        author: "Rafael M. Kelly",
        date: "2025-02-18",
        imageUrl: "/assets/images/tree2.jpg",
    },
    {
        id: "1",
        title: "Transforming Lives Through Carpentry Training",
        category: "Vocational Training",
        excerpt: "Our carpentry training program has empowered  600+ young men with skills that have reshaped their futures...",
        fullText: "Our carpentry training program has empowered  600+ young men with skills that have reshaped their futures. Ronald, one of our shining stars, shared, “I can now afford clothes, food, rent, and I’m proudly employed.” \n\nThis initiative is more than skill-building; it’s a beacon of hope, fostering independence and confidence. Each participant crafts not just furniture but a path to stability and purpose. By meeting local market needs, the program opens doors to employment and entrepreneurship. \n\nThese young artisans are building brighter tomorrows, inspiring their communities. We’re honored to support their journey and committed to empowering more lives.",
        author: "Rafael M. Kelly",
        date: "2024-11-25",
        imageUrl: "/assets/images/cap2.jpg",
    },
    {
        id: "3",
        title: "Empowering Youth Through Washing Bays",
        category: "Youth Empowerment",
        excerpt: "FLARE International Foundation’s washing bay program has transformed the lives of 70+ young men by providing...",
        fullText: "FLARE International Foundation’s washing bay program has transformed the lives of 70+ young men by providing them with car washing machines to spark employment and economic empowerment. Joshua, a proud participant, shares, “I can now feed myself, buy clothes, and live well—unlike my past struggles.” \n\nThis initiative equips youth with tools and skills to generate sustainable income, fostering independence and dignity. By meeting local demand for car washing services, these young entrepreneurs are building brighter futures and uplifting their communities. FLARE’s commitment to empowering youth continues to shine, creating lasting impact through practical, life-changing opportunities.",
        author: "Christine Atim",
        date: "2023-02-07",
        imageUrl: "/assets/images/wash4.jpg",
    },
]);

const filteredBlogs = computed(() => {
    if (activeCategory.value === "All Stories") return blogs.value;
    return blogs.value.filter(post => post.category === activeCategory.value);
});

const openModal = (post) => {
    selectedPost.value = post;
    isModalOpen.value = true;
    document.body.style.overflow = "hidden";
};

const closeModal = () => {
    isModalOpen.value = false;
    selectedPost.value = null;
    document.body.style.overflow = "";
};

const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
};

const getBadgeClass = (category) => {
    switch(category) {
        case 'Environment': return 'badge-green';
        case 'Vocational Training': return 'badge-blue';
        case 'Youth Empowerment': return 'badge-red';
        default: return 'badge-neutral';
    }
};
</script>

<style scoped>
/* BASE THEME & SYSTEM SYSTEM */
.blog-canvas-wrapper {
    background: #f8fafc;
    min-height: 100vh;
    transition: background 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

.blog-canvas-wrapper.dark-theme {
    background: #020617;
}

/* HIGH-IMPACT EDITORIAL HERO */
.hero-section {
    position: relative;
    height: 50vh;
    min-height: 400px;
    display: flex;
    flex-direction: column; 
    align-items: center;    
    justify-content: center; 
    text-align: center;      
    padding: 0 24px;
    background-color: #020617; 
    overflow: hidden;
    z-index: 1;
}

.hero-bg-media {
    position: absolute;
    inset: 0;
    background-image: url('/assets/images/fight.jpg');
    background-size: cover;
    background-position: center;
    opacity: 0.25; 
    z-index: -3;
}

.grid-pattern {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.08) 1px, transparent 0);
    background-size: 32px 32px;
    z-index: -2;
}

.glow-overlay {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, rgba(15, 23, 42, 0) 0%, #020617 90%);
    z-index: -1;
    pointer-events: none;
}

.hero-content {
    position: relative;
    max-width: 840px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center; 
}

.badge {
    display: inline-block;
    background: rgba(96, 165, 250, 0.1);
    color: #60a5fa;
    font-weight: 600;
    font-size: 0.75rem;
    padding: 6px 16px;
    border-radius: 100px;
    margin-bottom: 24px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    border: 1px solid rgba(96, 165, 250, 0.2);
}

.hero-content h1 {
    font-size: clamp(2.2rem, 5vw, 3.5rem);
    font-weight: 800;
    line-height: 1.2;
    letter-spacing: -0.03em;
    margin-bottom: 20px;
    color: #ffffff;
}

.gradient-text {
    background: linear-gradient(135deg, #38bdf8, #818cf8); 
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.hero-content p {
    font-size: clamp(1rem, 1.5vw, 1.25rem);
    color: #94a3b8; 
    max-width: 580px;
    line-height: 1.6;
}

/* BLOG HUB GRID SYSTEM */
.blog-section {
    padding: 80px 4%;
    max-width: 1300px;
    margin: 0 auto;
}

/* FILTERS */
.filter-bar {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-bottom: 60px;
    flex-wrap: wrap;
}

.filter-tab {
    background: transparent;
    border: 1px solid #e2e8f0;
    color: #475569;
    padding: 10px 22px;
    border-radius: 100px;
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.dark-theme .filter-tab {
    color: #94a3b8;
    border-color: #334155;
}

.filter-tab:hover,
.filter-tab.active {
    background-color: #0f172a;
    color: #ffffff;
    border-color: #0f172a;
    transform: translateY(-1px);
}

.dark-theme .filter-tab:hover,
.dark-theme .filter-tab.active {
    background-color: #f8fafc;
    border-color: #f8fafc;
    color: #0f172a;
}

/* EXACT 3-COLUMN LAYOUT */
.blog-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 32px;
}

/* PREMIUM ARTICLES CARDS */
.blog-post-card {
    background: #ffffff;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    display: flex;
    flex-direction: column;
}

.dark-theme .blog-post-card {
    background-color: #0f172a;
    box-shadow: none;
    border: 1px solid #1e293b;
}

.blog-post-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
}

.card-image-wrap {
    position: relative;
    width: 100%;
    height: 240px;
    overflow: hidden;
    cursor: pointer;
}

.blog-post-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.blog-post-card:hover .blog-post-image {
    transform: scale(1.05);
}

/* Badges System */
.category-tag-badge {
    position: absolute;
    top: 20px;
    left: 20px;
    padding: 6px 14px;
    border-radius: 100px;
    font-size: 0.65rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    z-index: 2;
    backdrop-filter: blur(8px);
    color: #ffffff;
}

.badge-green { background: rgba(16, 185, 129, 0.9); }
.badge-blue { background: rgba(59, 130, 246, 0.9); }
.badge-red { background: rgba(239, 68, 68, 0.9); }
.badge-neutral { background: rgba(100, 116, 139, 0.9); }

/* Card Body Layout */
.blog-post-content {
    padding: 28px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.post-header-meta {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.75rem;
    font-weight: 600;
    color: #64748b;
    margin-bottom: 12px;
}

.dark-theme .post-header-meta {
    color: #94a3b8;
}

.blog-post-title {
    font-size: 1.35rem;
    font-weight: 700;
    line-height: 1.4;
    color: #0f172a;
    margin-bottom: 12px;
    cursor: pointer;
    transition: color 0.2s;
}

.dark-theme .blog-post-title {
    color: #f8fafc;
}

.blog-post-title:hover {
    color: #3b82f6;
}

.dark-theme .blog-post-title:hover {
    color: #60a5fa;
}

.blog-post-excerpt {
    font-size: 0.925rem;
    color: #475569;
    line-height: 1.6;
    flex-grow: 1;
    margin-bottom: 24px;
}

.dark-theme .blog-post-excerpt {
    color: #94a3b8;
}

/* Card Footer Layout */
.blog-post-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    border-top: 1px solid #f1f5f9;
}

.dark-theme .blog-post-footer {
    border-color: #1e293b;
}

.author-profile {
    display: flex;
    align-items: center;
    gap: 12px;
}

.author-avatar {
    width: 34px;
    height: 34px;
    border-radius: 100px;
    background-color: #f1f5f9;
    color: #475569;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 0.85rem;
}

.dark-theme .author-avatar {
    background-color: #1e293b;
    color: #f1f5f9;
}

.author-avatar.large {
    width: 40px;
    height: 40px;
}

.author-details {
    display: flex;
    flex-direction: column;
}

.author-label {
    font-size: 0.6rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    color: #94a3b8;
}

.blog-post-author {
    font-size: 0.825rem;
    font-weight: 600;
    color: #334155;
}

.dark-theme .blog-post-author {
    color: #cbd5e0;
}

/* Reading Action Triggers */
.read-more-button {
    background: #f8fafc;
    border: none;
    color: #0f172a;
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 16px;
    border-radius: 100px;
    transition: all 0.2s;
}

.dark-theme .read-more-button {
    color: #f8fafc;
    background: #1e293b;
}

.read-more-button:hover {
    background: #0f172a;
    color: #ffffff;
}

.dark-theme .read-more-button:hover {
    background: #f8fafc;
    color: #0f172a;
}

.arrow-icon {
    transition: transform 0.2s;
}

.read-more-button:hover .arrow-icon {
    transform: translateX(2px);
}

/* EMPTY CONTEXT DESIGN */
.no-blogs-message {
    text-align: center;
    max-width: 420px;
    margin: 80px auto;
    padding: 40px 24px;
    border-radius: 24px;
    border: 1px dashed #cbd5e0;
}

.dark-theme .no-blogs-message {
    border-color: #334155;
}

.empty-icon-box {
    width: 52px;
    height: 52px;
    background: #f1f5f9;
    border-radius: 100px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #64748b;
    margin-bottom: 16px;
}

.dark-theme .empty-icon-box {
    background: #1e293b;
    color: #94a3b8;
}

.no-blogs-message h3 {
    font-size: 1.15rem;
    font-weight: 600;
    color: #0f172a;
    margin-bottom: 8px;
}

.dark-theme .no-blogs-message h3 {
    color: #f8fafc;
}

.no-blogs-message p {
    font-size: 0.875rem;
    color: #64748b;
    line-height: 1.5;
}

/* MAGAZINE SYSTEM READER MODALS */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(2, 6, 23, 0.7);
    backdrop-filter: blur(12px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3000;
    padding: 24px;
}

.modal-window {
    background: #ffffff;
    border-radius: 28px;
    width: 100%;
    max-width: 880px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    position: relative;
    max-height: 85vh;
    overflow: hidden;
}

.dark-theme .modal-window {
    background-color: #0f172a;
    border: 1px solid #1e293b;
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 40px;
    background: #ffffff;
    border-bottom: 1px solid #f1f5f9;
    z-index: 10;
}

.dark-theme .modal-header {
    background: #0f172a;
    border-color: #1e293b;
}

.modal-eyebrow-tag {
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    color: #3b82f6;
    text-transform: uppercase;
}

.modal-close-circle {
    background: #f1f5f9;
    border: none;
    color: #475569;
    cursor: pointer;
    width: 36px;
    height: 36px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
}

.dark-theme .modal-close-circle {
    background: #1e293b;
    color: #94a3b8;
}

.modal-close-circle:hover {
    background-color: #0f172a;
    color: #ffffff;
}

.dark-theme .modal-close-circle:hover {
    background-color: #f8fafc;
    color: #0f172a;
}

.modal-body-scrollable {
    flex-grow: 1;
    overflow-y: auto;
    padding: 40px;
}

.modal-hero {
    margin-bottom: 32px;
}

.modal-title {
    font-size: 2rem;
    font-weight: 800;
    color: #0f172a;
    line-height: 1.3;
    letter-spacing: -0.02em;
    margin-bottom: 24px;
}

.dark-theme .modal-title {
    color: #f8fafc;
}

.modal-meta-bar {
    display: flex;
    align-items: center;
    gap: 20px;
}

.author-badge-large {
    display: flex;
    align-items: center;
    gap: 12px;
}

.meta-val {
    font-size: 0.85rem;
    font-weight: 600;
    color: #111827;
    margin: 2px 0 0;
}

.dark-theme .meta-val {
    color: #e2e8f0;
}

.meta-vertical-divider {
    width: 1px;
    height: 28px;
    background: #e2e8f0;
}

.dark-theme .meta-vertical-divider {
    background: #1e293b;
}

.modal-image-wrapper {
    width: 100%;
    border-radius: 16px;
    overflow: hidden;
    margin-bottom: 32px;
}

.modal-hero-image {
    width: 100%;
    max-height: 380px;
    object-fit: cover;
    display: block;
}

.modal-editorial-body {
    max-width: 720px;
    margin: 0 auto;
}

.modal-full-text {
    font-size: 1.05rem;
    line-height: 1.75;
    color: #334155;
    white-space: pre-wrap;
}

.dark-theme .modal-full-text {
    color: #cbd5e0;
}

.modal-footer {
    padding: 20px 40px;
    background: #ffffff;
    border-top: 1px solid #f1f5f9;
    text-align: right;
}

.dark-theme .modal-footer {
    background: #0f172a;
    border-color: #1e293b;
}

.cancel-button {
    padding: 10px 24px;
    background-color: #0f172a;
    color: #ffffff;
    border: none;
    border-radius: 100px;
    cursor: pointer;
    font-size: 0.75rem;
    font-weight: 600;
    transition: background 0.2s;
}

.dark-theme .cancel-button {
    background-color: #f8fafc;
    color: #0f172a;
}

/* SPRING MODALS LAYOUT ANIMATIONS */
.premium-modal-enter-active,
.premium-modal-leave-active {
    transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.premium-modal-enter-from,
.premium-modal-leave-to {
    opacity: 0;
}

.premium-modal-enter-active .modal-window {
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.premium-modal-leave-active .modal-window {
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.premium-modal-enter-from .modal-window {
    transform: scale(0.96) translateY(16px);
}

.premium-modal-leave-to .modal-window {
    transform: scale(0.98) translateY(8px);
}

/* RESPONSIVE LAYOUT RESPONSIVENESS */
@media (max-width: 1024px) {
    .blog-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 24px;
    }
}

@media (max-width: 640px) {
    .blog-section {
        padding: 48px 16px;
    }

    .blog-grid {
        grid-template-columns: 1fr;
    }

    .modal-window {
        max-height: 90vh;
        border-radius: 20px;
    }

    .modal-body-scrollable {
        padding: 24px;
    }

    .modal-title {
        font-size: 1.6rem;
    }

    .modal-meta-bar {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
    }

    .meta-vertical-divider {
        display: none;
    }
}
</style>