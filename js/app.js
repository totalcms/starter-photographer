/*
	The one piece of custom JavaScript on this site. As a photograph crosses the
	middle of the screen, the band takes on that photograph's color.

	Any element with data-photo="#hex" takes part. Twig writes the color from the
	image's palette, and css/theme.css turns it into a dark band color that keeps
	white text readable. Without this script the page simply stays one color.

	The rootMargin shrinks the area being watched to a line across the middle of
	the screen, so only one element counts at a time.
*/
const watcher = new IntersectionObserver((entries) => {
	for (const entry of entries) {
		if (entry.isIntersecting) {
			document.documentElement.style.setProperty('--photo', entry.target.dataset.photo);
		}
	}
}, { rootMargin: '-50% 0px -50% 0px' });

document.querySelectorAll('[data-photo]').forEach((element) => watcher.observe(element));

/*
	The title band is short, so it never reaches the middle of the screen. A second
	watcher brings back the page's own color whenever the band comes into view.
*/
const pageColor = document.documentElement.style.getPropertyValue('--photo');
const titleBand = document.querySelector('header.band');

if (titleBand) {
	new IntersectionObserver(([entry]) => {
		if (entry.isIntersecting) {
			document.documentElement.style.setProperty('--photo', pageColor);
		}
	}).observe(titleBand);
}
