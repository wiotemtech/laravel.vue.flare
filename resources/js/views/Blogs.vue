<template>

   <section
            :class="{ 'dark-theme-events': isDarkMode }"
            style="background-image: url('/assets/images/fight.jpg')"
            class="landing-section"
        >
            <div class="overlay"></div>
            <div class="landing-content">
                <h1>Welcome to our blogs</h1>
            </div>
        </section>

    <section class="blog-section">

      
        <h2 class="section-title">Our Latest Blogs</h2>

        <div class="blog-grid">
            <div v-for="post in blogs" :key="post.id" class="blog-post-card">
                <img
                    v-if="post.imageUrl"
                    :src="post.imageUrl"
                    :alt="post.title"
                    class="blog-post-image"
                />
                <div class="blog-post-content">
                    <h3 class="blog-post-title">{{ post.title }}</h3>
                    <p class="blog-post-excerpt">{{ post.excerpt }}</p>
                    <div class="blog-post-meta">
                        <span class="blog-post-author"
                            >By {{ post.author }}</span
                        >
                        <span class="blog-post-date">{{
                            new Date(post.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })
                        }}</span>
                    </div>
                    <button @click="openModal(post)" class="read-more-button">
                        Read More
                    </button>
                </div>
            </div>
        </div>

        <div v-if="blogs.length === 0" class="no-blogs-message">
            No blog posts found yet. Check back soon!
        </div>

        <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
            <div class="modal-content">
                <button class="modal-close-button" @click="closeModal">
                    &times;
                </button>
                <h2 class="modal-title">{{ selectedPost.title }}</h2>
                <div class="modal-meta">
                    <span>By {{ selectedPost.author }}</span> |
                    <span>{{
                        new Date(selectedPost.date).toLocaleDateString(
                            "en-US",
                            { year: "numeric", month: "long", day: "numeric" }
                        )
                    }}</span>
                </div>
                <img
                    v-if="selectedPost.imageUrl"
                    :src="selectedPost.imageUrl"
                    :alt="selectedPost.title"
                    class="modal-image"
                />

                <div class="modal-body-scrollable">
                    <p class="modal-full-text">{{ selectedPost.fullText }}</p>
                </div>

                <div class="modal-actions">
                    <button @click="closeModal" class="cancel-button">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";

const isModalOpen = ref(false);
const selectedPost = ref(null);

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

const blogs = ref([
    {
        id: "2",
        title: "Greening Futures Through Tree Nursery Training",
        excerpt:
            "Our tree nursery bed planting program is sowing seeds of hope and sustainability, “The change for a better tomorrow.........”",
        fullText: `Our tree nursery bed planting program is sowing seeds of hope and sustainability. Opio Andrew, a participant, beams with pride: “The skills I’ve gained will combat climate change for a better tomorrow.” Awio Ambrose, now a skilled landscaper, transforms hotels and homes with vibrant flower designs, uplifting his life from starvation and homelessness to stability. Walter, another success story, earns a living by planting trees for customers, supporting his siblings with newfound income. This initiative empowers youth with practical skills, fostering environmental stewardship and economic independence. Their stories inspire us to continue nurturing greener communities and brighter futures.`, // Expanded content for scrolling
        author: "Rafael M. Kelly",
        date: "2025-02-18",
        imageUrl: "/assets/images/tree2.jpg",
    },

    {
        id: "1",
        title: "Transforming Lives Through Carpentry",
        excerpt:
            "Our carpentry training program has empowered over 15 young men with skills that have reshaped their....",
        fullText: `
Our carpentry training program has empowered over 15 young men with skills that have reshaped their futures. Ronald, one of our shining stars, shared, “I can now afford clothes, food, rent, and I’m proudly employed.” This initiative is more than skill-building; it’s a beacon of hope, fostering independence and confidence. Each participant crafts not just furniture but a path to stability and purpose. By meeting local market needs, the program opens doors to employment and entrepreneurship. These young artisans are building brighter tomorrows, inspiring their communities. We’re honored to support their journey and committed to empowering more lives.`, // Expanded content for scrolling
        author: "Rafael M. Kelly",
        date: "2024-11-25",
        imageUrl: "/assets/images/cap2.jpg",
    },

    {
        id: "3",
        title: "Empowering Youth Through Washing Bay Initiative",
        excerpt:
            "FLARE International Foundation’s washing bay program has transformed the lives of 11 young men by providing them with.......",
        fullText: `FLARE International Foundation’s washing bay program has transformed the lives of 11 young men by providing them with car washing machines to spark employment and economic empowerment. Joshua, a proud participant, shares, “I can now feed myself, buy clothes, and live well—unlike my past struggles.” This initiative equips youth with tools and skills to generate sustainable income, fostering independence and dignity. By meeting local demand for car washing services, these young entrepreneurs are building brighter futures and uplifting their communities. FLARE’s commitment to empowering youth continues to shine, creating lasting impact through practical, life-changing opportunities.`, // Expanded content for scrolling
        author: "Christine Atim",
        date: "2023-02-07",
        imageUrl: "/assets/images/wash4.jpg",
    },
]);
</script>

<style scoped>


.landing-section {
    position: relative;
    background-size: cover;
    background-position: center;
    height: 25vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    margin-top: -113px;

    animation: fadeIn 1.5s ease-in;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.55);
    z-index: 1;
}

.landing-content {
    position: relative;
    z-index: 2;
    color: #fff;
    padding-top: 10px;
    text-align: center;
}

.landing-content h1 {
    font-size: 40px;
    font-weight: bold;
    animation: slideDown 1s ease;
}

.tagline {
    font-weight: bold;
    font-size: 20px;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.blog-section {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f8f9fa;
    border-radius: 8px;
    margin-bottom: 40px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

body.dark-theme-body .blog-section {
    background-color: #222;
}

.section-title {
    text-align: center;
    font-size: 30px;
    color: black;
    margin-bottom: 2.5rem;
    position: relative;
    font-weight: bold;
}

body.dark-theme-body .section-title {
    color: #1e88e5;
}

.section-title::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -15px;
    transform: translateX(-50%);
    width: 80px;
    height: 5px;

    border-radius: 3px;
}

.blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    justify-content: center;
}

.blog-post-card {
    border: 1px solid #e9ecef;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    background-color: white;
}

body.dark-theme-body .blog-post-card {
    background-color: #222;

    color: white;
}

.blog-post-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.blog-post-image {
    width: 100%;
    height: 220px;
    object-fit: cover;
    display: block;
}

.blog-post-content {
    padding: 1.2rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.blog-post-title {
    font-size: 1.6rem;
    margin-bottom: 0.6rem;
    color: #343a40;
    line-height: 1.3;
}

body.dark-theme-body .blog-post-title {
    color: #1e88e5;
}

.blog-post-excerpt {
    font-size: 0.95rem;
    color: #6c757d;
    line-height: 1.6;
    flex-grow: 1;
    margin-bottom: 1rem;
}

body.dark-theme-body .blog-post-excerpt {
    color: white;
}

.blog-post-meta {
    font-size: 0.8rem;
    color: red;
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
    border-top: 1px solid #eee;
}

.read-more-button {
    display: inline-block;
    margin-top: 1.2rem;
    padding: 0.7rem 1.2rem;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border: none;
    border-radius: 6px;
    align-self: flex-start;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
    font-weight: 500;
    font-size: 1rem;
}

.read-more-button:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
}

.no-blogs-message {
    text-align: center;
    font-size: 1.2rem;
    color: #6c757d;
    margin-top: 2rem;
    padding: 1.5rem;
    background-color: #e9ecef;
    border-radius: 8px;
}

/* --- New Modal Styles --- */
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
    padding: 1rem;
}

.modal-content {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    width: 90%;
    max-width: 800px;

    display: flex;
    flex-direction: column;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    animation: fadeIn 0.3s ease-out;
    position: relative;

    max-height: 90vh;
}

body.dark-theme-body .modal-content {
    background-color: #222;
    color: white;
}

.modal-body-scrollable {
    flex-grow: 1;
    overflow-y: auto;
    padding-right: 15px;
    margin-right: -15px;
    -webkit-overflow-scrolling: touch;
}

.modal-body-scrollable::-webkit-scrollbar {
    width: 8px;
}

.modal-body-scrollable::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
}

.modal-body-scrollable::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
}

.modal-body-scrollable::-webkit-scrollbar-thumb:hover {
    background: #555;
}

.modal-close-button {
    position: absolute;
    top: 15px;
    right: 15px;
    background: none;
    border: none;
    font-size: 2rem;
    color: #333;
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 50%;
    transition: background-color 0.2s ease;
    z-index: 10;
}

.modal-close-button:hover {
    background-color: #eee;
}

.modal-title {
    font-size: 2.2rem;
    color: #343a40;
    margin-bottom: 1rem;
    line-height: 1.2;
}

body.dark-theme-body .modal-title {
    color: white;
}

.modal-meta {
    font-size: 0.9rem;
    color: red;
    margin-bottom: 1.5rem;
}

body.dark-theme-body .modal-meta {
    color: red;
}

.modal-image {
    width: 100%;
    max-height: 350px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 1.5rem;
}

.modal-full-text {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #495057;
    white-space: pre-wrap;
    padding-bottom: 1rem;
}

body.dark-theme-body .modal-full-text {
    color: white;
}

.modal-actions {
    margin-top: 1.5rem;
    text-align: right;
    border-top: 1px solid #eee;
    padding-top: 1rem;
}

.cancel-button {
    padding: 0.7rem 1.5rem;
    background-color: #6c757d;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
}

.cancel-button:hover {
    background-color: #5a6268;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 600px) {
    .modal-content {
        width: 95%;
        padding: 1.5rem;
    }
    .modal-title {
        font-size: 1.8rem;
    }
    .modal-full-text {
        font-size: 1rem;
    }
}
</style>
