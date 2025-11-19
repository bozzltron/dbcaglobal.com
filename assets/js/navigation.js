// Minimal JavaScript for Navigation and Mobile Parallax
// Desktop parallax uses pure CSS (background-attachment: fixed)
// Mobile parallax uses JavaScript (iOS Safari disables background-attachment: fixed)

(function() {
	'use strict';

	// Mobile Navigation Toggle
	function initMobileNav() {
		const navToggle = document.querySelector('.nav-toggle');
		const navMenu = document.querySelector('.nav-menu');

		if (!navToggle || !navMenu) return;

		navToggle.addEventListener('click', function() {
			navMenu.classList.toggle('active');
			this.classList.toggle('active');
		});

		// Close menu when clicking on a link
		const navLinks = navMenu.querySelectorAll('a');
		navLinks.forEach(link => {
			link.addEventListener('click', () => {
				navMenu.classList.remove('active');
				navToggle.classList.remove('active');
			});
		});

		// Close menu when clicking outside
		document.addEventListener('click', function(event) {
			const isClickInsideNav = navMenu.contains(event.target) || navToggle.contains(event.target);
			if (!isClickInsideNav && navMenu.classList.contains('active')) {
				navMenu.classList.remove('active');
				navToggle.classList.remove('active');
			}
		});
	}

	// Navbar scroll effect (pure CSS could work but this is simpler)
	function initNavbarScroll() {
		const navbar = document.querySelector('.main-nav');
		if (!navbar) return;

		const scrollThreshold = 50;

		window.addEventListener('scroll', function() {
			const currentScroll = window.pageYOffset;

			if (currentScroll > scrollThreshold) {
				navbar.classList.add('scrolled');
			} else {
				navbar.classList.remove('scrolled');
			}
		}, { passive: true });
	}

	// Smooth scroll for anchor links (CSS scroll-behavior works but needs offset)
	function initSmoothScroll() {
		document.querySelectorAll('a[href^="#"]').forEach(anchor => {
			anchor.addEventListener('click', function(e) {
				const href = this.getAttribute('href');
				if (href === '#') return;
				
				const target = document.querySelector(href);
				if (target) {
					e.preventDefault();
					const offsetTop = target.offsetTop - 80; // Account for fixed navbar
					window.scrollTo({
						top: offsetTop,
						behavior: 'smooth'
					});
				}
			});
		});
	}

	// Mobile Parallax Effect (only on mobile, respects reduced motion)
	function initMobileParallax() {
		// Check if user prefers reduced motion
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (prefersReducedMotion) return;

		// Only run on mobile devices (where background-attachment: fixed doesn't work)
		const isMobile = window.matchMedia('(max-width: 768px)').matches || 
		                 window.matchMedia('(hover: none)').matches;
		if (!isMobile) return;

		const parallaxElements = document.querySelectorAll('.parallax-hero, .parallax-section');
		if (parallaxElements.length === 0) return;

		let ticking = false;

		function updateParallax() {
			const scrollY = window.pageYOffset;
			
			parallaxElements.forEach(element => {
				const rect = element.getBoundingClientRect();
				const elementTop = rect.top + scrollY;
				const windowHeight = window.innerHeight;
				
				// Only apply parallax when element is in viewport
				if (rect.bottom >= 0 && rect.top <= windowHeight) {
					// Calculate how much the element has scrolled into view
					const scrolled = scrollY - elementTop + windowHeight;
					// Parallax effect: background moves slower than content
					const parallaxOffset = scrolled * 0.3; // 30% scroll speed for subtle effect
					
					// Apply background-position for parallax effect
					element.style.backgroundPosition = `center ${parallaxOffset}px`;
				}
			});
			
			ticking = false;
		}

		function requestTick() {
			if (!ticking) {
				window.requestAnimationFrame(updateParallax);
				ticking = true;
			}
		}

		// Use passive listener for better performance
		window.addEventListener('scroll', requestTick, { passive: true });
		window.addEventListener('resize', requestTick, { passive: true });
		
		// Initial update
		updateParallax();
	}

	// Initialize when DOM is ready
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', function() {
			initMobileNav();
			initNavbarScroll();
			initSmoothScroll();
			initMobileParallax();
		});
	} else {
		initMobileNav();
		initNavbarScroll();
		initSmoothScroll();
		initMobileParallax();
	}

})();

