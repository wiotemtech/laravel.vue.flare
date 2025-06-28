<script>
export default {
    name: "SickleCellGallery",
    data() {
        return {
            isDarkMode: false,
            images: [
                { src: "/assets/images/wash1.jpg", alt: "Gallery Image 1" },
                { src: "/assets/images/cap2.jpg", alt: "Gallery Image 2" },
                { src: "/assets/images/cap1.jpg", alt: "Gallery Image 3" },
                { src: "/assets/images/wash5.jpg", alt: "Gallery Image 4" },
                { src: "/assets/images/tree1.jpg", alt: "Gallery Image 5" },
                { src: "/assets/images/tree3.jpg", alt: "Gallery Image 6" },
                { src: "/assets/images/tree2.jpg", alt: "Gallery Image 7" },
                { src: "/assets/images/wash2.jpg", alt: "Gallery Image 8" },
                { src: "/assets/images/wash3.jpg", alt: "Gallery Image 9" },
                { src: "/assets/images/cap3.jpg", alt: "Gallery Image 10" },
                { src: "/assets/images/cap4.jpg", alt: "Gallery Image 9" },
                { src: "/assets/images/wash4.jpg", alt: "Gallery Image 10" },
            ],
            showPopup: false,
            shownOnce: false,
            hideTimeout: null,
            reappearTimeout: null,
        };
    },
    methods: {
        openModal(imageSrc) {
            console.log("Opening modal with image:", imageSrc);
        },
        showTweet() {
            if (!this.shownOnce) {
                this.showPopup = true;
                this.shownOnce = true;

                this.hideTimeout = setTimeout(() => {
                    this.showPopup = false;

                    this.reappearTimeout = setTimeout(() => {
                        this.showPopup = true;
                    }, 10000);
                }, 10000);
            }
        },
        dismissPopup() {
            this.showPopup = false;
            clearTimeout(this.hideTimeout);
            clearTimeout(this.reappearTimeout);
        },
    },
    mounted() {
        setTimeout(this.showTweet, 5000);

        if (!window.twttr) {
            const twitterScript = document.createElement("script");
            twitterScript.setAttribute(
                "src",
                "https://platform.twitter.com/widgets.js"
            );
            twitterScript.setAttribute("async", "");
            twitterScript.setAttribute("charset", "utf-8");
            document.head.appendChild(twitterScript);
        } else if (
            window.twttr &&
            typeof window.twttr.widgets !== "undefined" &&
            typeof window.twttr.widgets.load === "function"
        ) {
            window.twttr.widgets.load();
        }
    },
    beforeUnmount() {
        clearTimeout(this.hideTimeout);
        clearTimeout(this.reappearTimeout);
    },
};
</script>

<template>
    <div class="main-content" :class="{ 'dark-theme-body': isDarkMode }">
        <div class="blog-container"></div>

        <section
            :class="{ 'dark-theme-events': isDarkMode }"
            style="background-image: url('/assets/images/fight.jpg')"
            class="landing-section"
        >
            <div class="overlay"></div>
            <div class="landing-content">
                <h1>Our Gallery Page</h1>
                <!-- <p style="font-weight: bold; color: red">
                    "Leave No One Behind"
                </p>-->
            </div>
        </section>

        <section
            class="main-content2"
            :class="{ 'dark-theme-events': isDarkMode }"
        >
            <div class="container">
                <div class="row g-4">
                    <div
                        v-for="(image, index) in images"
                        :key="index"
                        class="col-12 col-sm-6 col-md-4 col-lg-3 fade-in"
                    >
                        <div
                            class="gallery-item"
                            data-bs-toggle="modal"
                            data-bs-target="#lightboxModal"
                            @click="openModal(image.src)"
                        >
                            <img :src="image.src" :alt="image.alt" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.container {
    margin-bottom: 20px;
}

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

body.dark-theme-body .main-content2 {
    background-color: #222;
}

.gallery h2 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 30px;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.gallery-item {
    position: relative;
    overflow: hidden;
    border-radius: 12px;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    cursor: pointer;
}

.gallery-item img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

.gallery-item:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
}

.gallery-item:hover img {
    transform: scale(1.1);
    opacity: 0.8;
}

.fade-in {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeIn 1s ease-in-out forwards;
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

.follow {
    font-size: 22px;
    text-align: center;
    color: black;
    margin-bottom: 10px;
}
.tweet-container {
    position: fixed;
    top: 15%;
    right: -100%;
    width: 320px;
    max-width: 90%;
    background-color: white;
    padding: 12px;
    border-radius: 12px 0 0 12px;
    z-index: 1000;
    transition: right 0.6s ease-in-out;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
}

.tweet-container.show {
    right: 0;
}

.close-btn {
    position: absolute;
    top: 10px;
    right: 10px;

    border: none;
    color: white;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    padding: 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;
}

.close-btn:hover {
    background-color: white;
    transform: scale(1.1);
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
}

.close-btn:active {
    transform: scale(0.9);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

@media (max-width: 600px) {
    .tweet-container {
        width: 90%;
        right: -100%;
        top: auto;
        bottom: 20px;
        padding-right: 30px;
        border-radius: 10px;
    }

    .tweet-container.show {
        right: 5%;
    }
}

.blog-content {
    padding: 20px;
}

.blog-content h1 {
    color: #007bff;
}

.blog-content p {
    line-height: 1.6;
}
</style>
