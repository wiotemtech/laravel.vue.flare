<script setup>
const scrollToTop = (event) => {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
</script>

<template>
    <footer class="editorial-footer">
        <!-- Background Overlay -->
        <div class="footer-overlay"></div>

        <div class="footer-wrapper">
            <!-- Top Segment: Brand & Navigation -->
            <div class="footer-grid">
                
                <!-- Editorial Brand Column -->
                <div class="brand-column">
                    <div class="logo-group">
                        <img
                            src="/public/assets/images/logo1.JPG"
                            alt="Flare Logo"
                            class="brand-logo"
                        />
                        <span class="brand-name">FLARE</span>
                    </div>
                    <p class="brand-essence">
                        Fostering sustainable community development, healthcare access,Education,Advocacy and environmental preservation.
                    </p>
                    
                    <!-- Shiny Action Buttons Cluster (Partner, Donate, Volunteer) -->
                    <div class="action-cluster">
                        <router-link to="/contact-us" class="editorial-cta main-cta">
                            Partner with us <span class="arrow">→</span>
                        </router-link>
                        
                        <div class="shiny-buttons">
                            <a href="https://www.gofundme.com/f/hope-in-education-help-vulnerable-ugandan-children/wa/s?utm_campaign=fp_sharesheet&utm_content=amp20_t1&utm_medium=customer&utm_source=whatsapp&lang=en_US" class="shiny-btn donate-btn">
                                <span class="shiny-shine"></span>
                                <i class="fas fa-heart btn-icon"></i>
                                <span>Donate</span>
                            </a>
                            <a href="/contact-us" class="shiny-btn volunteer-btn">
                                <span class="shiny-shine"></span>
                                <i class="fas fa-hands-helping btn-icon"></i>
                                <span>Volunteer</span>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Navigation Columns -->
                <div class="links-column">
                    <p class="column-meta">Navigation</p>
                    <ul class="nav-list">
                        <li><a href="/">Home</a></li>
                        <li><a href="/About-us">About Us</a></li>
                        <li><a href="/projects">Programs</a></li>
                        <li><a href="/blogs">Blogs</a></li>
                        <li><a href="/our-gallery">Gallery</a></li>
                        <li><a href="/contact-us">Contact Us</a></li>
                    </ul>
                </div>

                <div class="links-column">
                    <p class="column-meta">Initiatives</p>
                    <ul class="nav-list">
                        <li><a href="#">Education and Training</a></li>
                        <li><a href="#">Health,Nutrition and Clean Water</a></li>
                        <li><a href="#">Climate Action</a></li>
                        <li><a href="#">Economic Empowerment</a></li>
                        <li><a href="#">Advocacy and Social Inclusion</a></li>
                        <li><a href="#">Support and Relief</a></li>
                    </ul>
                </div>

                <!-- Contact & Social Column -->
                <div class="contact-column">
                    <p class="column-meta">Address</p>
                    <div class="contact-item">
                        <i class="fas fa-map-marker-alt contact-icon"></i>
                        <span class="address-text">
                            Junior Quarters, Lira City West Division, Lira City, Uganda
                        </span>
                    </div>
                    
                    <p class="column-meta mt-4">Inquiries</p>
                    <div class="contact-item">
                        <i class="fas fa-envelope contact-icon"></i>
                        <a href="mailto:flareinternationalfoundation@gmail.com" class="contact-link">
                            flareinternationalfoundation@gmail.com
                        </a>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-phone contact-icon"></i>
                        <a href="tel:+256392995534" class="contact-link phone">
                            +256 392 995 534
                        </a>
                    </div>
                    <div class="contact-item">
                         <i class="fas fa-clock contact-icon"></i>
                         <span class="contact-text">Working Hours: 8:00 AM - 5:00 PM</span>
                     </div>

                    <div class="social-links">
                        <a href="https://www.youtube.com/@FlareinternationalFoundati-i4y" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                        <a href="https://www.linkedin.com/in/flare-international-foundation-4b0386424/" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                        <a href="https://x.com/FlareUG" aria-label="X"><i class="fab fa-x-twitter"></i></a>
                    </div>
                </div>

            </div>

            <!-- Bottom Segment: Legal -->
            <div class="footer-base">
                <p class="copyright">
                    &copy; 2026 Flare International Foundation.
                </p>
            </div>
        </div>

        <!-- Float Actions Dock -->
        <div class="dock-container">
            <a
                class="dock-trigger x-theme"
                href="https://x.com/FlareUG"
                target="_blank"
                rel="noopener noreferrer"
                title="X"
            >
                <i class="fab fa-x-twitter"></i>
            </a>

            <a
                class="dock-trigger wa-theme"
                href="https://wa.me/256392995534"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
            >
                <i class="fab fa-whatsapp"></i>
            </a>

            <a
                class="dock-trigger top-theme"
                href="#"
                @click="scrollToTop"
                title="Back to Top"
            >
                <i class="fas fa-arrow-up"></i>
            </a>
        </div>
    </footer>
</template>

<style scoped>
/* Core Typography and Brand Design Variables */
.editorial-footer {
    --bg-color: #020235;
    --text-main: #ffffff;
    --text-muted: #94a3b8;
    --border-thin: rgba(255, 255, 255, 0.08);
    --accent-glow: #38bdf8;
    --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    
    --overlay-blend: rgba(2, 2, 53, 0.94); 
    --shiny-btn-bg: rgba(56, 189, 248, 0.08);
    --shiny-btn-border: rgba(56, 189, 248, 0.25);

    position: relative;
    background-color: var(--bg-color);
    background-image: url('/public/assets/images/wash1.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: var(--text-muted);
    font-family: var(--font-sans);
    padding: 100px 0 40px 0;
    border-top: 1px solid var(--border-thin);
}

.footer-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--overlay-blend);
    z-index: 1;
}

.footer-wrapper {
    position: relative;
    z-index: 2;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 30px;
}

.footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1.5fr;
    gap: 60px;
    padding-bottom: 60px;
}

@media (max-width: 991px) {
    .footer-grid {
        grid-template-columns: 1fr 1fr;
        gap: 40px;
    }
}

@media (max-width: 575px) {
    .footer-grid {
        grid-template-columns: 1fr;
        gap: 40px;
    }
}

.brand-column {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.logo-group {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
}

.brand-logo {
    height: 42px;
    width: auto;
    object-fit: contain;
}

.brand-name {
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 3px;
    color: var(--text-main);
}

.brand-essence {
    font-size: 16.5px;
    line-height: 1.6;
    margin-bottom: 25px;
    max-width: 340px;
}

.action-cluster {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
}

.editorial-cta {
    font-size: 15px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--text-main);
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    transition: opacity 0.2s ease;
}

.main-cta {
    gap: 8px;
}

.main-cta .arrow {
    transition: transform 0.25s cubic-bezier(0.25, 1, 0.5, 1);
}

.main-cta:hover .arrow {
    transform: translateX(5px);
}

.shiny-buttons {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
}

.shiny-btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    text-decoration: none;
    color: var(--text-main);
    background-color: var(--shiny-btn-bg);
    border: 1px solid var(--shiny-btn-border);
    border-radius: 30px;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
}

.btn-icon {
    font-size: 15px;
    color: var(--accent-glow);
    transition: transform 0.3s ease;
}

.shiny-shine {
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    height: 100%;
    background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.2) 50%,
        rgba(255, 255, 255, 0) 100%
    );
    transform: skewX(-25deg);
    transition: none;
}

.shiny-btn:hover {
    color: #ffffff !important;
    background-color: var(--accent-glow);
    border-color: var(--accent-glow);
    box-shadow: 0 6px 20px rgba(56, 189, 248, 0.35);
    transform: translateY(-2px);
}

.shiny-btn:hover .btn-icon {
    color: #ffffff;
    transform: scale(1.1);
}

.shiny-btn:hover .shiny-shine {
    left: 150%;
    transition: left 0.6s ease-in-out;
}

.column-meta {
    font-size: 13.5px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 700;
    color: var(--text-main);
    margin-bottom: 20px;
}

.mt-4 {
    margin-top: 24px;
}

.nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.nav-list li {
    margin-bottom: 12px;
}

.nav-list a {
    font-size: 16.5px;
    color: var(--text-muted);
    text-decoration: none;
    transition: color 0.25s ease;
}

.nav-list a:hover {
    color: var(--text-main);
}

.contact-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 16px;
    transition: transform 0.25s ease;
}

.contact-icon {
    font-size: 16px;
    color: var(--text-muted);
    margin-top: 5px;
    transition: color 0.25s ease, transform 0.25s ease;
    width: 18px;
    text-align: center;
}

.address-text {
    font-size: 16px;
    line-height: 1.6;
    color: var(--text-muted);
    transition: color 0.25s ease;
}

.contact-link {
    display: inline-block;
    font-size: 16px;
    color: var(--text-muted);
    text-decoration: none;
    transition: color 0.25s ease;
}

.contact-link.phone {
    font-weight: 600;
    color: var(--text-main);
}

.contact-item:hover {
    transform: translateX(3px);
}

.contact-item:hover .contact-icon {
    color: var(--accent-glow);
    transform: scale(1.15);
}

.contact-item:hover .address-text,
.contact-item:hover .contact-link {
    color: var(--text-main);
}

.social-links {
    display: flex;
    gap: 16px;
    margin-top: 25px;
}

.social-links a {
    color: var(--text-muted);
    font-size: 18px;
    transition: color 0.2s ease, transform 0.2s ease;
}

.social-links a:hover {
    color: var(--text-main);
    transform: translateY(-2px);
}

.footer-base {
    border-top: 1px solid var(--border-thin);
    padding-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.copyright {
    font-size: 15px;
    margin: 0;
}

.dock-container {
    position: fixed;
    bottom: 35px;
    right: 35px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    z-index: 1000;
}

.dock-trigger {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    cursor: pointer;
    background-color: var(--bg-color);
    color: var(--text-main);
    border: 1px solid var(--border-thin);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
    text-decoration: none;
}

.dock-trigger:hover {
    transform: translateY(-3px);
    border-color: var(--text-main);
}

.dock-trigger.wa-theme:hover {
    background-color: #25d366;
    color: #ffffff;
    border-color: #25d366;
}

.dock-trigger.x-theme:hover {
    background-color: var(--text-main);
    color: var(--bg-color);
    border-color: var(--text-main);
}
</style>