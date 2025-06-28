<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import mission from '../components/mission.vue';
import Team from '../components/Team.vue';// Correct way to import your component in <script setup>
import Volunteer from '../components/Volunteer.vue';

// Define props to receive dark mode state from parent
const props = defineProps({
    isDarkMode: {
        type: Boolean,
        default: false
    }
});

// Refs to target elements for Intersection Observer
const imageElement = ref(null);
const contentElement = ref(null);

// Intersection Observer instances
let imageObserver;
let contentObserver;

onMounted(() => {
    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    // Observer for the image (slides in from left)
    imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add class to trigger animation
                entry.target.classList.add('animate-visible-left');
                // Stop observing once animated
                imageObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observer for the content (slides in from right)
    contentObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add class to trigger animation
                entry.target.classList.add('animate-visible-right');
                // Stop observing once animated
                contentObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Attach observers to elements
    if (imageElement.value) {
        // Add initial hidden class
        imageElement.value.classList.add('animate-hidden-left');
        imageObserver.observe(imageElement.value);
    }
    if (contentElement.value) {
        // Add initial hidden class
        contentElement.value.classList.add('animate-hidden-right');
        contentObserver.observe(contentElement.value);
    }
});

onUnmounted(() => {
    // Disconnect observers when the component is unmounted to prevent memory leaks
    if (imageObserver && imageElement.value) {
        imageObserver.unobserve(imageElement.value);
    }
    if (contentObserver && contentElement.value) {
        contentObserver.unobserve(contentElement.value);
    }
});
</script>

<template>
    <section
            :class="{ 'dark-theme-events': isDarkMode }"
            style="background-image: url('/assets/images/flare.png')"
            class="landing-section"
        >
            <div class="overlay"></div>
            <div class="landing-content">
                <h1>About Us</h1>
                <!-- <p style="font-weight: bold; color: red">
                    "Leave No One Behind"
                </p>-->
            </div>
        </section>

    <section class="about-section" :class="{ 'dark-theme': props.isDarkMode }">
        
        <div class="about-image-container" ref="imageElement">
            <!-- Corrected image path: /public is usually implied at the root -->
            <img src="/public/assets/images/alfred.jpg" alt="Flare International Foundation Team" />
        </div>
        <div class="about-content-container" ref="contentElement">
            <h2 class="section-title">ABOUT FLARE INTERNATIONAL FOUNDATION</h2>
            <p>
                At Flare International Foundation, we are a Non-Governmental Organization working to transform lives across borders.
                While our roots and current operations are anchored in Uganda, where we work closely with the Lira City NGO Monitoring Committee,
                our vision extends far beyond these boundaries!
            </p>
            <p>
                We believe in creating lasting change that knows no geographical limits. At the heart of our mission is the empowerment of women and girls,
                alongside our dedication to transforming the lives of street-connected children and vulnerable communities. We champion gender equality,
                fight against gender-based violence (GBV), and create safe spaces where women and girls can thrive.
            </p>
            <h3 class="subsection-title">What drives us every day:</h3>
            <ul>
                <li>Empowering girls and women through education, skills training, and leadership programs</li>
                <li>Combating gender-based violence through prevention, response, and survivor support</li>
                <li>Breaking down barriers to gender equality in communities</li>
                <li>Rescuing and rehabilitating street-connected children, giving them hope and a path to a better future</li>
                <li>Supporting vulnerable children to access quality education through our sponsorship program</li>
                <li>Equipping out-of-school youth with hands-on skills in trades like tailoring, carpentry, and agriculture</li>
                <li>Strengthening women's economic independence through Village Savings and Loan Associations (VSLA)</li>
            </ul>
            <p>
                We believe in the power of humanity coming together for positive change. Through our gender-responsive approach and collaboration with local leaders,
                schools, families, and youth groups, we're not just building stronger communities - we're creating a model for transformative change.
            </p>

            <!-- Removed "Our Vision" and "Our Mission" sections as requested -->
        </div>
    </section>

    <!-- 'mission' component is now correctly used here -->
    <mission/>
    <Team/>
    <Volunteer/>
    
</template>

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

/* Main section styling */
.about-section {
    margin-top: -28px;
    display: flex;
    flex-direction: row; /* Default: image on left, text on right */
    align-items: stretch; /* Stretch items to match height */
    padding: 80px 10%; /* Generous padding for spacing */
    gap: 60px; /* Space between image and content */
    background-color: #f8f8f8;
    color: #333;
    transition: background-color 0.3s ease, color 0.3s ease;
    flex-wrap: wrap; /* Allow wrapping on smaller screens */
}

.about-section.dark-theme {
    background-color: #1a1a1a; /* Dark background */
    color: #eee; /* Light text */
}

/* Image container */
.about-image-container {
    flex: 1.2; /* UPDATED: Give image container more flexible space */
    min-width: 300px;
    max-width: 50%; /* UPDATED: Allow image container to be wider, up to 50% */
    display: flex;
    justify-content: center;
    align-items: center;
    /* REMOVED: min-height: 400px; - Rely on align-items: stretch for height */
}

.about-image-container img {
    width: 100%;
    height: 100%; /* Make image fill the container's height */
    border-radius: 15px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    object-fit: cover; /* Ensure image covers the area without distortion */
}

.about-section.dark-theme .about-image-container img {
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
}

/* Content container */
.about-content-container {
    flex: 1; /* UPDATED: Give content container less flexible space, relatively */
    min-width: 400px; /* Minimum width for content on desktop (for readability) */
}

.section-title {
    font-size: 30px;
    color: #007bff; /* Primary blue for title */
    margin-bottom: 25px;
    text-align: left;
    font-weight: bold;
    line-height: 1.2;
}

.about-section.dark-theme .section-title {
    color: #66b3ff; /* Lighter blue for dark theme title */
}

.about-content-container p {
    font-size: 1.15em;
    line-height: 1.4;
    margin-bottom: 18px;
    text-align: justify; /* Justify text for clean block appearance */
}

.subsection-title {
    font-size: 30px;
    color: #1e88e5; /* Green for sub-titles */
    margin-top: 3px;
    margin-bottom: 5px;
    text-align: left;
    font-weight: bold;
}

.about-section.dark-theme .subsection-title {
    color: #79f291; /* Lighter green for dark theme sub-titles */
}

.about-content-container ul {
    list-style: none; /* Remove default list bullets */
    padding-left: 0;
    margin-bottom: 25px;
}

.about-content-container ul li {
    font-size: 1.05em;
    line-height: 1.4;
    margin-bottom: 8px;
    position: relative;
    padding-left: 25px; /* Space for custom bullet */
}

.about-content-container ul li::before {
    content: '\2022'; /* Unicode for a solid bullet */
    color: #007bff; /* Blue bullet */
    font-weight: bold;
    display: inline-block;
    width: 1em; /* Space for the bullet */
    margin-left: -1em; /* Pull bullet into padding */
    position: absolute;
    left: 0;
}

.about-section.dark-theme .about-content-container ul li::before {
    color: #66b3ff; /* Lighter blue bullet for dark theme */
}

/* Animation initial states (hidden) */
.animate-hidden-left {
    opacity: 0;
    transform: translateX(-80px); /* Start off-screen to the left */
    transition: opacity 1s ease-out, transform 1s ease-out; /* Smooth transition */
}
.animate-visible-left {
    opacity: 1;
    transform: translateX(0); /* End at original position */
}

.animate-hidden-right {
    opacity: 0;
    transform: translateX(80px); /* Start off-screen to the right */
    transition: opacity 1s ease-out, transform 1s ease-out; /* Smooth transition */
}
.animate-visible-right {
    opacity: 1;
    transform: translateX(0); /* End at original position */
}


/* Responsive adjustments */
@media (max-width: 992px) {
    .about-section {
        flex-direction: column; /* Stack image and content vertically */
        padding: 60px 8%; /* Adjust padding for tablets */
        gap: 40px; /* Space between stacked items */
        align-items: center; /* Center items when stacked */
    }

    .about-image-container,
    .about-content-container {
        max-width: 100%; /* Allow them to take full width */
        min-width: unset; /* Remove min-width constraints */
        flex: none; /* Remove flex grow/shrink properties */
        min-height: auto; /* Allow height to adjust naturally on smaller screens */
    }

    .about-image-container img {
        max-width: 70%; /* Scale down image on tablets */
        height: auto; /* Allow height to adjust naturally */
        margin: 0 auto; /* Center image within its container */
        display: block; /* Ensure margin auto works */
    }

    .section-title,
    .subsection-title,
    .about-content-container p,
    .about-content-container ul {
        text-align: center; /* Center text content on tablets */
    }
    
    .about-content-container ul {
        padding-left: 20px; /* Adjust padding for list on center aligned text */
    }
    .about-content-container ul li {
        text-align: left; /* Keep list items left-aligned within their container */
    }
}

@media (max-width: 576px) {
    .about-section {
        padding: 40px 5%; /* Further reduce padding for mobile phones */
        gap: 30px; /* Smaller gap */
    }

    .about-image-container img {
        max-width: 90%; /* Make image slightly larger on small mobile */
    }

    .section-title {
        font-size: 2em; /* Smaller font for mobile title */
        margin-bottom: 15px;
    }

    .about-content-container p {
        font-size: 1em; /* Smaller font for mobile paragraphs */
        line-height: 1.7;
        margin-bottom: 10px;
    }

    .subsection-title {
        font-size: 1.6em; /* Smaller font for mobile sub-titles */
        margin-top: 25px;
        margin-bottom: 10px;
    }

    .about-content-container ul li {
        font-size: 0.95em; /* Smaller font for list items */
        margin-bottom: 5px;
    }
}
</style>
