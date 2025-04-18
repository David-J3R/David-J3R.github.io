// footer.js - Reusable footer implementation
document.addEventListener('DOMContentLoaded', function() {
    // Create the footer HTML structure
    const footerHTML = `
    <footer>
        <div class="footer-content">
            <div class="footer-section contact-info">
                <h3>Contact</h3>
                <p><i class="fas fa-envelope"></i> david.glezh@outlook.com</p>
                <p><i class="fas fa-map-marker-alt"></i> Hamburg, Germany</p>
            </div>
            
            <div class="footer-section social-links">
                <h3>Connect</h3>
                <div class="social-icons">
                    <a href="https://www.linkedin.com/in/david-gonzalez-huerta-385b6629a/" target="_blank"><i class="fab fa-linkedin"></i></a>
                    <a href="https://github.com/David-J3R" target="_blank"><i class="fab fa-github"></i></a>
                    <a href="https://www.instagram.com/david.gl3z/?hl=en" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a href="https://www.youtube.com/@Dirick_j3r" target="_blank"><i class="fab fa-youtube"></i></a>
                </div>
            </div>
            
            <div class="footer-section quick-links">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="index.html">HOME</a></li>
                    <li><a href="work.html">WORK</a></li>
                    <li><a href="lab.html">SANDBOX</a></li>
                    <li><a href="certificates.html">CERTIFICATES</a></li>
                    <li><a href="contact.html">CONTACT</a></li>
                </ul>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p>&copy; ${new Date().getFullYear()} David Gonzalez. All rights reserved.</p>
        </div>
    </footer>
    `;

    // Function to insert the footer
    function insertFooter() {
        // Find the main container element
        const mainContainer = document.querySelector('main.container');
        
        // If main container exists, insert the footer before the closing tag
        if (mainContainer) {
            // Check if footer already exists to avoid duplicates
            if (!mainContainer.querySelector('footer')) {
                // Insert the footer HTML before the closing main tag
                mainContainer.insertAdjacentHTML('beforeend', footerHTML);
            }
        } else {
            console.error('Main container not found. Footer could not be inserted.');
        }
    }

    // Insert the footer
    insertFooter();
});