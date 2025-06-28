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
            { icon: "fab fa-linkedin", url: "#" },
            { icon: "fab fa-twitter", url: "#" },
            { icon: "fab fa-facebook", url: "#" },
        ],
        bio: "A preeminent businessman and ICT authority, I founded Flare International Foundation in 2019, inspired by a lifelong commitment to global empowerment. With visionary leadership, I orchestrate transformative initiatives in technology, education, and environmental sustainability, advancing equity for children, women, youth, and individuals with disabilities worldwide.Unite with us to forge an epoch of transformative impact.",
    },
    {
        id: 2,
        name: "Christine Atim",
        position: " co-founder",
        photo: "/assets/images/atim.jpeg",
        socialMedia: [
            { icon: "fab fa-linkedin", url: "#" },
            { icon: "fab fa-instagram", url: "#" },
        ],
        bio: "An eminent public administrator and distinguished banker, I co-founded Flare International Foundation in 2019, propelled by an enduring vision for global transformation. With unparalleled strategic acumen, I advance pioneering initiatives in technology, education, and sustainable development, empowering children, women, youth, and individuals with disabilities worldwide.Unite with us to sculpt a legacy of global progress.",
    },
    {
        id: 3,
        name: "Akello Norbert Marry",
        position: "co-founder and Program Manager",
        photo: "/assets/images/marry.jpeg",
        socialMedia: [
            { icon: "fab fa-facebook", url: "#" },
            { icon: "fab fa-twitter", url: "#" },
        ],
        bio: "A consummate public administrator, I co-founded Flare International Foundation in 2019, driven by an unwavering dedication to global empowerment. With exemplary leadership, I direct transformative initiatives in sustainable development, education, and social equity, uplifting children, women, youth, and individuals with disabilities worldwide.Join our mission to forge enduring progress.",
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
        <h2 class="section-title">Meet Our Dedicated Team</h2>
        <div class="team-cards-container">
            <div
                v-for="(member, index) in teamMembers"
                :key="member.id"
                class="team-member-card"
                :ref="
                    (el) => {
                        if (el) cardRefs[index] = el;
                    }
                "
                :style="{ 'animation-delay': `${index * 0.15}s` }"
            >
                <div class="member-photo-wrapper">
                    <img
                        :src="member.photo"
                        :alt="member.name"
                        class="member-photo"
                    />
                </div>
                <div class="member-info">
                    <h3 class="member-name">{{ member.name }}</h3>
                    <p class="member-position">{{ member.position }}</p>
                    <div class="social-links">
                        <a
                            v-for="(social, sIndex) in member.socialMedia"
                            :key="sIndex"
                            :href="social.url"
                            target="_blank"
                            rel="noopener noreferrer"
                            :aria-label="
                                member.name + ' ' + social.icon.split(' ')[1]
                            "
                        >
                            <i :class="social.icon"></i>
                        </a>
                    </div>
                    <button class="read-more-btn" @click="openModal(member)">
                        Read More
                    </button>
                </div>
            </div>
        </div>

        <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
            <div
                class="modal-content"
                :class="{ 'dark-theme-modal': props.isDarkMode }"
            >
                <button
                    class="close-modal-btn"
                    @click="closeModal"
                    aria-label="Close modal"
                >
                    &times;
                </button>
                <div class="modal-body">
                    <img
                        :src="selectedTeamMember.photo"
                        :alt="selectedTeamMember.name"
                        class="modal-member-photo"
                    />
                    <h3 class="modal-member-name">
                        {{ selectedTeamMember.name }}
                    </h3>
                    <p class="modal-member-position">
                        {{ selectedTeamMember.position }}
                    </p>
                    <p class="modal-member-bio">{{ selectedTeamMember.bio }}</p>
                    <div class="modal-social-links">
                        <a
                            v-for="(
                                social, sIndex
                            ) in selectedTeamMember.socialMedia"
                            :key="sIndex"
                            :href="social.url"
                            target="_blank"
                            rel="noopener noreferrer"
                            :aria-label="
                                selectedTeamMember.name +
                                ' ' +
                                social.icon.split(' ')[1]
                            "
                        >
                            <i :class="social.icon"></i>
                        </a>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="modal-cancel-btn" @click="closeModal">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.team-section {
    padding: 50px 8%;
    background-color: #f8f8f8;
    color: #333;
    transition: background-color 0.4s ease, color 0.4s ease;
    text-align: center;
    overflow: hidden;
}

body.dark-theme-body .team-section {
    background-color: #111;
}
.team-section.dark-theme {
    background-color: #1c2331;
    color: #eee;
}

.section-title {
    font-size: 30px;
    font-weight: bold;
    color: #1e88e5;
    margin-bottom: 50px;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
}

.team-cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
}

.team-member-card {
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 270px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 20px;
    transition: all 0.4s ease-in-out;
    opacity: 0;
    transform: translateY(40px) scale(0.98);
    text-align: center;
    position: relative;
    overflow: hidden;
    height: 350px; /* Reduced from 420px */
    justify-content: space-between;
}

body.dark-theme-body .team-member-card {
    background-color: #222;
}

.team-member-card:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.team-member-card:hover .member-photo {
    transform: scale(1.05);
}

.member-photo-wrapper {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 12px;
    border: 2px solid red;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease-in-out;
}

.team-section.dark-theme .member-photo-wrapper {
    border-color: #81c784;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.member-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
}

.member-info {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
}

.member-name {
    font-size: 20px;
    font-weight: bold;
    color: #1e88e5;
    margin-bottom: 6px;
}

.team-section.dark-theme .member-name {
    color: #9fa8da;
}

.member-position {
    font-size: 0.9em;
    color: #666;
    margin-bottom: 12px;
}

.team-section.dark-theme .member-position {
    color: #ccc;
}

.social-links {
    margin-bottom: 15px;
}

.social-links a {
    color: #777;
    font-size: 1.2em;
    margin: 0 7px;
    transition: color 0.3s ease;
}

.team-section.dark-theme .social-links a {
    color: #bbb;
}

.social-links a:hover {
    color: #007bff;
}

.team-section.dark-theme .social-links a:hover {
    color: #82caff;
}

.read-more-btn {
    background-color: #007bff;
    color: #fff;
    border: none;

    padding: 7px 18px;
    border-radius: 30px;
    font-size: 0.85em;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 123, 255, 0.2);
}

.team-section.dark-theme .read-more-btn {
    background-color: #82caff;
    color: #1c2331;
    box-shadow: 0 4px 10px rgba(130, 202, 255, 0.3);
}

.read-more-btn:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 123, 255, 0.3);
}

.team-section.dark-theme .read-more-btn:hover {
    background-color: #5ea8e8;
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(130, 202, 255, 0.4);
}

/* Scroll Animation */
.team-card-animate-hidden {
    opacity: 0;
    transform: translateY(40px) scale(0.95);
}

.team-card-animate-visible {
    opacity: 1;
    transform: translateY(0) scale(1);
    transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94),
        transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Modal */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    animation: modal-fade-in 0.3s ease-out;
}

.modal-content {
    background-color: #fff;
    padding: 30px 30px 20px;
    border-radius: 15px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
    max-width: 580px;
    width: 90%;
    max-height: 75vh; /* Reduced max height */
    overflow-y: auto;
    position: relative;
    color: #333;
    display: flex;
    flex-direction: column;
}

.dark-theme-modal {
    background-color: #2b3a4a;
    color: #eee;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
}

/* Bigger clickable close button area */
.close-modal-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 2.5em;
    color: #888;
    cursor: pointer;
    transition: color 0.3s ease;
    line-height: 1;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.dark-theme-modal .close-modal-btn {
    color: #ccc;
}

.close-modal-btn:hover {
    color: #333;
}

.dark-theme-modal .close-modal-btn:hover {
    color: #fff;
}

.modal-body {
    text-align: center;
    flex-grow: 1;
    margin-top: 15px;
}

.modal-member-photo {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 20px;
    border: 5px solid #4caf50;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.dark-theme-modal .modal-member-photo {
    border-color: #81c784;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
}

.modal-member-name {
    font-size: 2em;
    font-weight: bold;
    color: #3f51b5;
    margin-bottom: 8px;
}

.dark-theme-modal .modal-member-name {
    color: #9fa8da;
}

.modal-member-position {
    font-size: 1.1em;
    color: #666;
    margin-bottom: 20px;
}

.dark-theme-modal .modal-member-position {
    color: #bbb;
}

.modal-member-bio {
    font-size: 1em;
    line-height: 1.6;
    color: #555;
    margin-bottom: 25px;
    text-align: left;
}

.dark-theme-modal .modal-member-bio {
    color: #ccc;
}

.modal-social-links {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 15px;
}

.modal-social-links a {
    font-size: 1.6em;
    color: #777;
    transition: color 0.3s ease;
}

.dark-theme-modal .modal-social-links a {
    color: #bbb;
}

.modal-social-links a:hover {
    color: #007bff;
}

.dark-theme-modal .modal-social-links a:hover {
    color: #82caff;
}

.modal-footer {
    border-top: 1px solid #eee;
    padding-top: 15px;
    margin-top: 15px;
    text-align: right;
}

.dark-theme-modal .modal-footer {
    border-top: 1px solid #444;
}

.modal-cancel-btn {
    background-color: #f0f0f0;
    color: #333;
    border: 1px solid #ddd;
    padding: 8px 18px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.9em;
    transition: all 0.3s ease;
}

.modal-cancel-btn:hover {
    background-color: #e0e0e0;
    border-color: #ccc;
}

.dark-theme-modal .modal-cancel-btn {
    background-color: #3a4a5a;
    color: #eee;
    border-color: #555;
}

.dark-theme-modal .modal-cancel-btn:hover {
    background-color: #4a5a6a;
    border-color: #666;
}

/* Modal fade-in animation */
@keyframes modal-fade-in {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Responsive */
@media (max-width: 992px) {
    .team-section {
        padding: 60px 5%;
    }
    .section-title {
        font-size: 2.6em;
        margin-bottom: 45px;
    }
    .team-member-card {
        max-width: 45%;
        height: auto;
    }
}

@media (max-width: 768px) {
    .team-section {
        padding: 50px 4%;
    }
    .section-title {
        font-size: 2em;
        margin-bottom: 35px;
    }
    .team-member-card {
        max-width: 90%;
        padding: 20px;
        height: auto;
    }
    .member-photo-wrapper {
        width: 100px;
        height: 100px;
        margin-bottom: 18px;
    }
    .member-name {
        font-size: 1.4em;
    }
    .member-position {
        font-size: 0.95em;
    }
    .social-links a {
        font-size: 1.1em;
        margin: 0 7px;
    }
    .read-more-btn {
        padding: 7px 18px;
        font-size: 0.85em;
    }
    .modal-content {
        padding: 25px 25px 15px;
        max-height: 80vh;
    }
    .modal-member-photo {
        width: 140px;
        height: 140px;
    }
    .modal-member-name {
        font-size: 1.8em;
    }
    .modal-member-position {
        font-size: 1em;
    }
    .modal-member-bio {
        font-size: 0.95em;
    }
    .modal-social-links a {
        font-size: 1.4em;
    }
}

@media (max-width: 480px) {
    .team-section {
        padding: 30px 3%;
    }
    .section-title {
        font-size: 1.6em;
        margin-bottom: 25px;
    }
    .team-member-card {
        padding: 15px 15px;
        height: auto;
    }
    .member-photo-wrapper {
        width: 90px;
        height: 90px;
    }
    .member-name {
        font-size: 1.2em;
    }
    .modal-content {
        padding: 20px 20px 15px;
        width: 95%;
        max-height: 85vh;
    }
    .modal-member-photo {
        width: 110px;
        height: 110px;
    }
    .modal-member-name {
        font-size: 1.6em;
    }
    .modal-member-position {
        font-size: 0.9em;
    }
    .modal-member-bio {
        font-size: 0.9em;
    }
    .modal-social-links a {
        font-size: 1.2em;
    }
    .modal-footer {
        padding-top: 10px;
        margin-top: 10px;
    }
    .modal-cancel-btn {
        padding: 7px 15px;
        font-size: 0.8em;
    }
    .close-modal-btn {
        top: 5px;
        right: 5px;
        font-size: 2em;
        width: 35px;
        height: 35px;
    }
}
</style>
