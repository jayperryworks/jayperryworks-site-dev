// Adapted from https://piccalil.li/blog/a-modern-css-reset/
module.exports = {
	name: 'Reset',
	base: `
		/* Box sizing rules */
		*,
		*::before,
		*::after {
		  box-sizing: border-box;
		}

		/* Remove default margin */
		body,
		h1,
		h2,
		h3,
		h4,
		p,
		figure,
		blockquote,
		dl,
		dd {
		  margin: 0;
		}

		/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
		ul[role='list'],
		ol[role='list'] {
		  list-style: none;
		}

		/* Set core root defaults */
		html:focus-within {
		  scroll-behavior: smooth;
		}

		/* Set core body defaults */
		html {
	    min-height: 100vh;
	  }

		body {
		  line-height: 1.5;
		  margin: 0;
		  min-height: 100vh;
		  text-rendering: optimizeSpeed;
		}

		/* Elements that don't have a class get default styles */
		a:not([class]) {
		  text-decoration-skip-ink: auto;
		}

		/* Make images easier to work with */
		img,
		picture,
		video {
		  max-width: 100%;
		}

		svg {
			height: 100%;
			width: 100%;
		}

		/* Inherit fonts for inputs and buttons */
		input,
		button,
		textarea,
		select {
		  font: inherit;
		}

		/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
		@media (prefers-reduced-motion: reduce) {
		  html:focus-within {
		   scroll-behavior: auto;
		  }
		  
		  *,
		  *::before,
		  *::after {
		    animation-duration: 0.01ms !important;
		    animation-iteration-count: 1 !important;
		    transition-duration: 0.01ms !important;
		    scroll-behavior: auto !important;
		  }
		}
	`
}