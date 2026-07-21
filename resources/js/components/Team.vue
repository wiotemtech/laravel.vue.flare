<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
    isDarkMode: {
        type: Boolean,
        default: false,
    },
});

const teamMembers = ref([
    {
        id: 1,
        name: "Rafael M. Kelly",
        position: "Founder & Executive Director",
        photo: "/assets/images/jes.jpeg",
        socialMedia: [
            { icon: "fab fa-linkedin-in", url: "#" },
            { icon: "fab fa-x-twitter", url: "#" },
            { icon: "fab fa-facebook-f", url: "#" },
            { icon: "fab fa-instagram", url: "#" },
        ],
        bio: "A preeminent businessman and ICT authority, I founded Flare International Foundation in 2019, inspired by a lifelong commitment to global empowerment. With visionary leadership, I orchestrate transformative initiatives in technology, education, and environmental sustainability, advancing equity for children, women, youth, and individuals with disabilities worldwide. Unite with us to forge an epoch of transformative impact.",
    },
    {
        id: 2,
        name: "Christine Atim",
        position: "Co-Founder",
        photo: "/assets/images/atim.jpeg",
        socialMedia: [
            { icon: "fab fa-linkedin-in", url: "#" },
            { icon: "fab fa-x-twitter", url: "#" },
            { icon: "fab fa-facebook-f", url: "#" },
            { icon: "fab fa-instagram", url: "#" },
        ],
        bio: "An eminent public administrator and distinguished banker, I co-founded Flare International Foundation in 2019, propelled by an enduring vision for global transformation. With unparalleled strategic acumen, I advance pioneering initiatives in technology, education, and sustainable development, empowering children, women, youth, and individuals with disabilities worldwide. Unite with us to sculpt a legacy of global progress.",
    },
    {
        id: 3,
        name: "Akello Norbert Marry",
        position: "Co-Founder & Program Manager",
        photo: "/assets/images/marry.jpeg",
        socialMedia: [
            { icon: "fab fa-linkedin-in", url: "#" },
            { icon: "fab fa-x-twitter", url: "#" },
            { icon: "fab fa-facebook-f", url: "#" },
            { icon: "fab fa-instagram", url: "#" },
        ],
        bio: "A consummate public administrator, I co-founded Flare International Foundation in 2019, driven by an unwavering dedication to global empowerment. With exemplary leadership, I direct transformative initiatives in sustainable development, education, and social equity, uplifting children, women, youth, and individuals with disabilities worldwide. Join our mission to forge enduring progress.",
    },
    {
        id: 4,
        name: "Team Member Four",
        position: "Executive Partner",
        photo: "/assets/images/placeholder.jpeg",
        socialMedia: [
            { icon: "fab fa-linkedin-in", url: "#" },
            { icon: "fab fa-x-twitter", url: "#" },
            { icon: "fab fa-facebook-f", url: "#" },
            { icon: "fab fa-instagram", url: "#" },
        ],
        bio: "Add the biography description here. This space acts as an elegant summary when viewing individual board members.",
    },
]);

const cardRefs = ref([]);
let cardObservers = [];

const showModal = ref(false);
const selectedTeamMember = ref(null);

const openModal = (member) => {
    selectedTeamMember.value = member;
    showModal.value = true;
    document.body.style.overflow = "hidden";
};

const closeModal = () => {
    showModal.value = false;
    selectedTeamMember.value = null;
    document.body.style.overflow = "";
};

const handleEscape = (event) => {
    if (event.key === "Escape" && showModal.value) {
        closeModal();
    }
};

onMounted(() => {
    document.addEventListener("keydown", handleEscape);

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
    };

    cardRefs.value.forEach((cardElement) => {
        if (!cardElement) return;
        cardElement.classList.add("team-card-animate-hidden");
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("team-card-animate-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        observer.observe(cardElement);
        cardObservers.push(observer);
    });
});

onUnmounted(() => {
    document.removeEventListener("keydown", handleEscape);

    cardObservers.forEach((observer, i) => {
        if (cardRefs.value[i]) {
            observer.unobserve(cardRefs.value[i]);
        }
        observer.disconnect();
    });
});
</script>

<template>
    <section class="team-section" :class="{ 'dark-theme': props.isDarkMode }">
        <div class="team-container">
            <!-- Centered Header Section -->
            <div class="team-header">
                <span class="section-tagline">Leadership</span>
                <h2 class="section-title">The Hearts Behind Our Mission</h2>
                <p class="section-subtitle">Driving global transformation, equity, and sustainable progress.</p>
            </div>

            <!-- Team Grid Layout (4-Columns) -->
            <div class="team-cards-container">
                <div
                    v-for="(member, index) in teamMembers"
                    :key="member.id"
                    class="team-member-card"
                    :ref="(el) => { if (el) cardRefs[index] = el; }"
                    :style="{ 'transition-delay': `${index * 0.08}s` }"
                >
                    <div class="card-bg-mesh"></div>
                    <div class="card-corner-accent"></div>

                    <!-- Shortened Image Frame -->
                    <div class="member-photo-area" @click="openModal(member)">
                        <div class="image-overlay-reveal">
                            <span class="reveal-text">View Bio</span>
                        </div>
                        <img
                            :src="member.photo"
                            :alt="member.name"
                            class="member-photo"
                        />
                    </div>
                    
                    <!-- Tight Content Frame -->
                    <div class="member-info">
                        <span class="member-position">{{ member.position }}</span>
                        <h3 class="member-name" @click="openModal(member)">{{ member.name }}</h3>
                        
                        <div class="card-footer-action">
                            <div class="social-links">
                                <a
                                    v-for="(social, sIndex) in member.socialMedia"
                                    :key="sIndex"
                                    :href="social.url"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    :aria-label="member.name + ' ' + social.icon.split(' ')[1]"
                                >
                                    <i :class="social.icon"></i>
                                </a>
                            </div>

                            <button class="read-more-btn" @click="openModal(member)" aria-label="View biography">
                                <i class="fas fa-arrow-right btn-icon"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Compact Modal Framework -->
        <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
            <div class="modal-content" :class="{ 'dark-theme-modal': props.isDarkMode }">
                <button class="close-modal-btn" @click="closeModal" aria-label="Close modal">
                    <i class="fas fa-times"></i>
                </button>
                
                <div class="modal-grid">
                    <div class="modal-left">
                        <div class="modal-photo-container">
                            <img
                                :src="selectedTeamMember.photo"
                                :alt="selectedTeamMember.name"
                                class="modal-member-photo"
                            />
                        </div>
                        <div class="modal-social-links">
                            <a
                                v-for="(social, sIndex) in selectedTeamMember.socialMedia"
                                :key="sIndex"
                                :href="social.url"
                                target="_blank"
                                rel="noopener noreferrer"
                                :aria-label="selectedTeamMember.name + ' ' + social.icon.split(' ')[1]"
                            >
                                <i :class="social.icon"></i>
                            </a>
                        </div>
                    </div>
                    
                    <div class="modal-right">
                        <span class="modal-member-position">{{ selectedTeamMember.position }}</span>
                        <h3 class="modal-member-name">{{ selectedTeamMember.name }}</h3>
                        <div class="modal-divider"></div>
                        <p class="modal-member-bio">{{ selectedTeamMember.bio }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.team-section {
    --primary: #1e88e5;       
    --primary-rgb: 30, 136, 229;
    --accent: #0f172a;        
    --text-main: #1e293b;
    --text-muted: #64748b;
    --section-bg: #f8fafc;
    --card-surface: #ffffff;
    --border-color: #e2e8f0;
    
    padding: 60px 0;
    background-color: var(--section-bg);
    color: var(--text-main);
    transition: background-color 0.4s ease, color 0.4s ease;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    position: relative;
}

.team-section.dark-theme {
    --primary: #38bdf8;
    --primary-rgb: 56, 189, 248;
    --accent: #ffffff;
    --text-main: #f8fafc;
    --text-muted: #94a3b8;
    --section-bg: #0f1013;
    --card-surface: #141519;
    --border-color: rgba(255, 255, 255, 0.06);
}

.team-container {
    width: 100%;
    max-width: 1200px; 
    margin: 0 auto;
    padding: 0 24px;
    box-sizing: border-box;
}

/* Centered Header Styles */
.team-header {
    text-align: center;      /* Completely centers heading elements */
    margin-bottom: 40px;
    max-width: 700px;
    margin-left: auto;       /* Centers the container boundaries */
    margin-right: auto;
}

.section-tagline {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--primary);
    margin-bottom: 6px;
}

.section-title {
    font-size: 2rem;
    font-weight: 800;
    line-height: 1.2;
    color: var(--text-main);
    margin: 0 0 8px 0;
    letter-spacing: -0.02em;
}

.section-subtitle {
    font-size: 0.9rem;
    line-height: 1.4;
    color: var(--text-muted);
    margin: 0;
}

/* 4-Column Grid Structure */
.team-cards-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr); 
    gap: 18px; 
}

.team-member-card {
    background-color: var(--card-surface);
    border: 1px solid var(--border-color);
    border-radius: 0px;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), 
                box-shadow 0.4s cubic-bezier(0.25, 1, 0.5, 1), 
                border-color 0.4s ease;
}

.card-bg-mesh {
    position: absolute;
    inset: 0;
    opacity: 0;
    background-image: linear-gradient(var(--border-color) 1px, transparent 1px),
                      linear-gradient(90deg, var(--border-color) 1px, transparent 1px);
    background-size: 15px 15px;
    transition: opacity 0.4s ease;
    pointer-events: none;
}

.card-corner-accent {
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 0 0;
    border-color: transparent transparent transparent var(--primary);
    transition: border-width 0.25s ease;
    z-index: 5;
}

.team-member-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.08);
    border-color: rgba(var(--primary-rgb), 0.35);
}

.team-section.dark-theme .team-member-card:hover {
    box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.4);
}

.team-member-card:hover .card-bg-mesh {
    opacity: 0.15;
}

.team-member-card:hover .card-corner-accent {
    border-width: 0 10px 10px 0;
    border-color: transparent var(--primary) transparent transparent;
}

/* Reduced Height Aspect Ratio Box */
.member-photo-area {
    width: 100%;
    aspect-ratio: 4 / 4.3; 
    position: relative;
    overflow: hidden;
    background-color: var(--section-bg);
    cursor: pointer;
}

.member-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%);
    transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), filter 0.4s ease;
}

.image-overlay-reveal {
    position: absolute;
    inset: 0;
    background-color: rgba(var(--primary-rgb), 0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    z-index: 3;
    transition: opacity 0.3s ease;
}

.reveal-text {
    color: #ffffff;
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    transform: translateY(8px);
    transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
}

.team-member-card:hover .member-photo {
    transform: scale(1.03);
    filter: grayscale(0%);
}

.team-member-card:hover .image-overlay-reveal {
    opacity: 1;
}

.team-member-card:hover .reveal-text {
    transform: translateY(0);
}

/* Tighter Text Body Content block */
.member-info {
    padding: 14px 16px; 
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    z-index: 2;
    text-align: left;
}

.member-position {
    font-size: 0.65rem;
    font-weight: 700;
    color: var(--primary);
    text-transform: uppercase;
    letter-spacing: 0.8px;
    margin-bottom: 4px;
}

.member-name {
    font-size: 1.05rem; 
    font-weight: 800;
    color: var(--text-main);
    margin: 0 0 12px 0;
    letter-spacing: -0.01em;
    line-height: 1.25;
    cursor: pointer;
    display: inline-block;
    transition: color 0.2s ease;
}

.member-name:hover {
    color: var(--primary);
}

.card-footer-action {
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 10px;
    border-top: 1px solid var(--border-color);
}

.social-links {
    display: flex;
    gap: 8px; /* Tighter spacing to bundle 4 icons elegantly side-by-side */
}

.social-links a {
    font-size: 0.8rem;
    color: var(--text-muted);
    transition: color 0.2s ease, transform 0.2s ease;
}

.social-links a:hover {
    color: var(--primary);
    transform: translateY(-1px);
}

.read-more-btn {
    background: none;
    border: none;
    padding: 0;
    color: var(--text-main);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.read-more-btn .btn-icon {
    font-size: 0.8rem;
    transition: transform 0.25s cubic-bezier(0.25, 1, 0.5, 1);
}

.team-member-card:hover .read-more-btn .btn-icon {
    transform: translateX(3px);
    color: var(--primary);
}

/* Animation Hidden states */
.team-card-animate-hidden {
    opacity: 0;
    transform: translateY(15px);
}

.team-card-animate-visible {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.5s cubic-bezier(0.25, 1, 0.5, 1),
                transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
}

/* Downsized Modal Box Framework */
.modal-overlay {
    position: fixed;
    inset: 0;
    background-color: rgba(15, 16, 19, 0.3);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2000;
    padding: 16px;
}

.modal-content {
    background-color: #ffffff;
    border-radius: 0px;
    max-width: 720px;
    width: 100%;
    overflow: hidden;
    position: relative;
    border: 1px solid #e2e8f0;
    animation: modal-appear 0.35s cubic-bezier(0.25, 1, 0.5, 1);
}

.dark-theme-modal {
    background-color: #141519;
    border-color: rgba(255, 255, 255, 0.08);
}

.close-modal-btn {
    position: absolute;
    top: 16px;
    right: 16px;
    background: none;
    border: none;
    font-size: 1rem;
    color: var(--text-muted);
    cursor: pointer;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: color 0.2s ease, transform 0.2s ease;
    z-index: 10;
}

.close-modal-btn:hover {
    color: var(--text-main);
    transform: scale(1.05);
}

.modal-grid {
    display: grid;
    grid-template-columns: 240px 1fr;
}

.modal-left {
    background-color: var(--section-bg);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 24px;
}

.dark-theme-modal .modal-left {
    background-color: rgba(0, 0, 0, 0.15);
}

.modal-photo-container {
    width: 100%;
    aspect-ratio: 1;
    overflow: hidden;
    box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
}

.modal-member-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.modal-social-links {
    display: flex;
    gap: 14px;
}

.modal-social-links a {
    font-size: 0.95rem;
    color: var(--text-muted);
    transition: color 0.2s ease;
}

.modal-social-links a:hover {
    color: var(--primary);
}

.modal-right {
    padding: 40px 36px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
}

.modal-member-position {
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--primary);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 6px;
}

.modal-member-name {
    font-size: 1.65rem;
    font-weight: 800;
    color: var(--text-main);
    margin: 0 0 14px 0;
    letter-spacing: -0.02em;
    line-height: 1.2;
}

.modal-divider {
    width: 30px;
    height: 2px;
    background-color: var(--primary);
    margin-bottom: 16px;
}

.modal-member-bio {
    font-size: 0.9rem;
    line-height: 1.6;
    color: var(--text-muted);
    margin: 0;
}

@keyframes modal-appear {
    from {
        opacity: 0;
        transform: scale(0.98) translateY(10px);
    }
    to {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
}

/* Responsiveness break points layout */
@media (max-width: 1024px) {
    .team-cards-container {
        grid-template-columns: repeat(3, 1fr); 
        gap: 16px;
    }
}

@media (max-width: 768px) {
    .team-cards-container {
        grid-template-columns: repeat(2, 1fr); 
    }
    .modal-grid {
        grid-template-columns: 1fr;
    }
    .modal-left {
        padding: 40px 24px 20px;
    }
    .modal-right {
        padding: 20px 24px 40px;
    }
}

@media (max-width: 480px) {
    .team-cards-container {
        grid-template-columns: 1fr; 
        gap: 24px;
    }
}
</style>