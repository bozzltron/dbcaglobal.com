// Minimal JavaScript for Navigation Only
// Parallax is handled by pure CSS (background-attachment: fixed)

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

	// Initialize when DOM is ready
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', function() {
			initMobileNav();
			initNavbarScroll();
			initSmoothScroll();
		});
	} else {
		initMobileNav();
		initNavbarScroll();
		initSmoothScroll();
	}

})();

