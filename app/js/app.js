import './easy-toggler.min.js'
import Swiper from 'swiper/bundle'
import { Fancybox } from "@fancyapps/ui";

document.addEventListener('DOMContentLoaded', () => {
	"use strict";

	let partners = document.querySelector("#partners");
	if (window.innerWidth > 986) {
		Fancybox.bind("[data-fancyboxx]", {
			infinite: false,
		});
	}
})
