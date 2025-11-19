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

	// Modern Parallax Effect - Uses separate background layers with transform (best practice)
	function initMobileParallax() {
		// Check if user prefers reduced motion
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (prefersReducedMotion) return;

		const parallaxElements = document.querySelectorAll('.parallax-hero, .parallax-section');
		if (parallaxElements.length === 0) return;

		// Detect mobile devices
		function isMobileDevice() {
			const width = window.innerWidth;
			const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
			const noHover = window.matchMedia('(hover: none)').matches;
			
			if (width <= 768) return true;
			if (hasTouch && width <= 1024) return true;
			if (noHover) return true;
			return false;
		}

		// Only run on mobile devices (where background-attachment: fixed doesn't work)
		if (!isMobileDevice()) return;

		// Set up background layers for each parallax element
		const parallaxData = [];
		
		// Map of element IDs to their background images (ALWAYS use this - most reliable)
		const backgroundMap = {
			'hero': 'url("https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1920&q=80")',
			'containers': 'url("/assets/container.webp")',
			'ocean': 'url("https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=80")',
			'ship': 'url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80")'
		};
		
		parallaxElements.forEach((element) => {
			const bgLayer = element.querySelector('.parallax-bg');
			if (!bgLayer) return;

			const elementId = element.id;
			
			// ALWAYS use background map - don't rely on computed styles
			let bgImage = null;
			
			if (elementId && backgroundMap[elementId]) {
				bgImage = backgroundMap[elementId];
			} else {
				return; // Skip if no background found
			}
			
			// Set the background
			bgLayer.style.backgroundImage = bgImage;
			bgLayer.style.backgroundSize = 'cover';
			bgLayer.style.backgroundPosition = 'center';
			bgLayer.style.backgroundRepeat = 'no-repeat';
			
			// Make sure bg layer is visible
			bgLayer.style.display = 'block';
			bgLayer.style.opacity = '1';
			
			// Remove background from parent element (bg layer handles it now)
			element.style.backgroundImage = 'none';
			
			// Store element and bg layer
			parallaxData.push({
				element: element,
				bgLayer: bgLayer
			});
		});

		if (parallaxData.length === 0) return;

		let ticking = false;

		function updateParallax() {
			const scrollY = window.pageYOffset || window.scrollY;
			const windowHeight = window.innerHeight;
			
			parallaxData.forEach(({ element, bgLayer }) => {
				const rect = element.getBoundingClientRect();
				const elementId = element.id;
				
				// Slower parallax speed (20% instead of 30%) for more subtle effect
				const parallaxSpeed = 0.2;
				
				// Calculate parallax offset
				const parallaxOffset = rect.top * parallaxSpeed;
				
				// For bottom 3 sections (containers, ocean, ship), adjust initial position
				// Move them up slightly to prevent negative space at top
				let initialOffset = 0;
				if (elementId === 'containers' || elementId === 'ocean' || elementId === 'ship') {
					// Move background up by 15% of element height to start higher
					const elementHeight = rect.height;
					initialOffset = elementHeight * -0.15;
				}
				
				// Apply transform to background layer
				// Combine initial offset with parallax movement
				const totalOffset = initialOffset + parallaxOffset;
				bgLayer.style.transform = `translate3d(0, ${totalOffset}px, 0)`;
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
		window.addEventListener('resize', function() {
			// Recalculate initial positions on resize
			parallaxData.forEach(data => {
				data.initialTop = data.element.getBoundingClientRect().top + window.pageYOffset;
			});
			requestTick();
		}, { passive: true });
		
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

