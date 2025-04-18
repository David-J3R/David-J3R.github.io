// EmailJS configuration
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with your public key
    emailjs.init('rhp_WIlDhrw72roVK');

    // Get the contact form element
    const contactForm = document.getElementById('contactForm');
    
    // Create notification elements
    const notificationContainer = document.createElement('div');
    notificationContainer.className = 'notification-container';
    notificationContainer.style.display = 'none';
    notificationContainer.style.position = 'fixed';
    notificationContainer.style.top = '20px';
    notificationContainer.style.right = '20px';
    notificationContainer.style.padding = '15px 20px';
    notificationContainer.style.borderRadius = '5px';
    notificationContainer.style.color = '#fff';
    notificationContainer.style.fontWeight = '500';
    notificationContainer.style.zIndex = '1000';
    notificationContainer.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    notificationContainer.style.transition = 'all 0.3s ease';
    document.body.appendChild(notificationContainer);

    // Form submission event listener
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Validate form
        if (validateForm()) {
            // Show loading state
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Get form data
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // SOLUTION: We'll modify the subject and message to include the sender's information
            // This way you can easily see who sent the message and reply to them
            const enhancedSubject = `${subject} [from: ${name}]`;
            const enhancedMessage = `From: ${name} (${email})\n\n${message}\n\n---\nReply directly to: ${email}`;
            
            // Prepare template parameters - Work with the template's constraints
            const templateParams = {
                from_name: `${name} via Contact Form`, // Clear indication it's from the contact form
                email: email,                         // Keep for reply-to functionality 
                subject: enhancedSubject,             // Enhanced subject with sender's name
                message: enhancedMessage              // Enhanced message with sender's details
            };
            
            // Send email using EmailJS
            emailjs.send('service_deggis6', 'template_mjdq41a', templateParams)
                .then(function(response) {
                    // Success
                    showNotification('Your message has been sent successfully!', 'success');
                    contactForm.reset();
                })
                .catch(function(error) {
                    // Error
                    showNotification('Failed to send message. Please try again later.', 'error');
                    console.error('EmailJS error:', error);
                })
                .finally(function() {
                    // Reset button state
                    submitBtn.textContent = originalBtnText;
                    submitBtn.disabled = false;
                });
        }
    });
    
    // Form validation function
    function validateForm() {
        let isValid = true;
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Clear previous error messages
        const errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach(function(element) {
            element.remove();
        });
        
        // Validate name
        if (name === '') {
            showFieldError('name', 'Please enter your name');
            isValid = false;
        }
        
        // Validate email
        if (email === '') {
            showFieldError('email', 'Please enter your email address');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showFieldError('email', 'Please enter a valid email address');
            isValid = false;
        }
        
        // Validate subject
        if (subject === '') {
            showFieldError('subject', 'Please enter a subject');
            isValid = false;
        }
        
        // Validate message
        if (message === '') {
            showFieldError('message', 'Please enter your message');
            isValid = false;
        }
        
        return isValid;
    }
    
    // Helper function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Helper function to show field error
    function showFieldError(fieldId, errorMessage) {
        const field = document.getElementById(fieldId);
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = errorMessage;
        errorElement.style.color = '#ff3333';
        errorElement.style.fontSize = '0.85rem';
        errorElement.style.marginTop = '5px';
        errorElement.style.textAlign = 'left';
        
        field.parentNode.appendChild(errorElement);
        field.style.borderColor = '#ff3333';
        
        // Remove error when field is focused
        field.addEventListener('focus', function() {
            field.style.borderColor = '';
            const errorMsg = field.parentNode.querySelector('.error-message');
            if (errorMsg) {
                errorMsg.remove();
            }
        }, { once: true });
    }
    
    // Function to show notification
    function showNotification(message, type) {
        notificationContainer.textContent = message;
        
        if (type === 'success') {
            notificationContainer.style.backgroundColor = '#4CAF50';
        } else if (type === 'error') {
            notificationContainer.style.backgroundColor = '#f44336';
        }
        
        notificationContainer.style.display = 'block';
        
        // Hide notification after 5 seconds
        setTimeout(function() {
            notificationContainer.style.opacity = '0';
            setTimeout(function() {
                notificationContainer.style.display = 'none';
                notificationContainer.style.opacity = '1';
            }, 300);
        }, 5000);
    }
});