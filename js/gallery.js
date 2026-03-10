// Gallery Lightbox Functionality
let currentIndex = 0;
let allGalleryItems = [];

// Generate preview path from full image path
function getPreviewPath(fullPath) {
    // Extract directory and filename
    const lastSlash = fullPath.lastIndexOf('/');
    const dir = fullPath.substring(0, lastSlash);
    const filename = fullPath.substring(lastSlash + 1);

    // Get file extension
    const lastDot = filename.lastIndexOf('.');
    const name = filename.substring(0, lastDot);
    const ext = filename.substring(lastDot);

    // Insert preview folder and add _compressed suffix
    return `${dir}/preview/${name}_compressed${ext}`;
}

// Initialize gallery with lazy loading for preview images
document.addEventListener('DOMContentLoaded', function() {
    // Collect all gallery items from all sections
    allGalleryItems = Array.from(document.querySelectorAll('.gallery-item'));

    // Use Intersection Observer for lazy loading preview images
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const fullSrc = img.dataset.full;

                if (fullSrc) {
                    // Load preview image for thumbnail display
                    const previewSrc = getPreviewPath(fullSrc);
                    img.src = previewSrc;
                    img.onload = () => {
                        img.classList.add('loaded');
                    };
                    img.onerror = () => {
                        // Fallback to full image if preview not found
                        img.src = fullSrc;
                        img.classList.add('loaded');
                    };
                    observer.unobserve(img);
                }
            }
        }, {
            rootMargin: '100px 0px',
            threshold: 0.01
        });
    });

    // Observe all gallery images
    document.querySelectorAll('.gallery-item img[data-full]').forEach(img => {
        imageObserver.observe(img);
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        const lightbox = document.getElementById('lightbox');
        if (!lightbox.classList.contains('active')) return;
        
        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                changeImage(-1);
                break;
            case 'ArrowRight':
                changeImage(1);
                break;
        }
    });

    // Smooth scroll for category navigation
    document.querySelectorAll('.category-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight - 20;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Open lightbox - load full image on demand
function openLightbox(element) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const img = element.querySelector('img');

    // Find current index across all items
    currentIndex = allGalleryItems.indexOf(element);

    // Load full resolution image for lightbox
    const fullSrc = img.dataset.full || img.src;
    lightboxImg.src = fullSrc;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close lightbox
function closeLightbox(event) {
    if (event && event.target !== event.currentTarget) return;
    
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// Change image - load full image on demand
function changeImage(direction, event) {
    if (event) {
        event.stopPropagation();
    }

    const totalImages = allGalleryItems.length;

    currentIndex += direction;

    if (currentIndex >= totalImages) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    }

    const newImg = allGalleryItems[currentIndex].querySelector('img');
    const lightboxImg = document.getElementById('lightbox-img');

    // Load full resolution image
    const fullSrc = newImg.dataset.full || newImg.src;

    // Add fade effect
    lightboxImg.style.opacity = '0';
    setTimeout(() => {
        lightboxImg.src = fullSrc;
        lightboxImg.alt = newImg.alt;
        lightboxImg.style.opacity = '1';
    }, 150);
}