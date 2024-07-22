import {
	getCookie,
	BILog,
	consentAllGranted,
	setCookie,
	ifUseCookieConsent,
	bannerCountriesList

} from "./helpers.js";


// Cookie Notice
const showCookieNotice = () => {
	const notice = document.querySelector("#cookie-notice");
	notice.style.display = "flex";
	setTimeout(() => {
		notice.style.display = "none";
	}, 2000);
};

// Cookie Footer Initialization
const domCookieFooter = document.querySelector("#cookie-footer");
const cookieOpt = getCookie("fp_opt");

const cookieBannerInitial = () => {
	// Show Cookie Footer
	domCookieFooter.style.display = "block";
	BILog("privacy_protocol_lp", {
		privacy_action: "window_pop_up",
		privacy_pop_style: 1,
		privacy_lang: window.lang,
	});

	// Accept all cookies
	if (cookieOpt === "all") {
		consentAllGranted();
	}

	// Cookie Footer
	const btnConfig = document.querySelector("#cookie-config");
	const btnClose = document.querySelector("#modal-close");
	const domModalConfig = document.querySelector("#cookie-modal");
	btnConfig.addEventListener("click", () => {
		BILog("privacy_protocol_lp", {
			privacy_action: "custom_setting",
			privacy_pop_style: 1,
			privacy_lang: window.lang,
		});
		// Show Cookie Popup
		domModalConfig.style.display = "flex";
		// Close Cookie Footer
		domCookieFooter.style.display = "none";
	});
	btnClose.addEventListener("click", () => {
		// Close Cookie Popup
		domModalConfig.style.display = "none";
	});

	// Accept All, in footer & in config modal
	const btnAcceptAll = document.querySelectorAll(".accept-all");
	btnAcceptAll.forEach((btn) => {
		btn.addEventListener("click", () => {
			document
				.querySelectorAll('.cookie-item input[type="checkbox"]')
				.forEach((el) => {
					el.checked = true;
				});
			consentAllGranted();
			// Set Cookie
			setCookie("fp_opt", "all", 365);
			// Close Cookie Footer
			domCookieFooter.style.display = "none";
			domModalConfig.style.display = "none";
			showCookieNotice();
		});
	});

	document
		.querySelector("#cookie-footer .accept-all")
		.addEventListener("click", () => {
			BILog("privacy_protocol_lp", {
				privacy_action: "accept_all_cookies",
				privacy_pop_style: 1,
				privacy_lang: window.lang,
			});
		});
	document
		.querySelector("#cookie-modal .accept-all")
		.addEventListener("click", () => {
			BILog("privacy_protocol_lp", {
				privacy_action: "custom_accept_all_cookies",
				privacy_pop_style: 1,
				privacy_lang: window.lang,
			});
		});

	// Confirm selections
	const btnConfirm = document.querySelector(".cookie-confirm");
	btnConfirm.addEventListener("click", () => {
		if (
			document.querySelector('.analytics input[type="checkbox"]')
			.checked === true
		) {
			// marketing on
			setCookie("fp_opt", "all", 365);
			consentAllGranted();
			BILog("privacy_protocol_lp", {
				privacy_action: "custom_confirm_selection",
				privacy_marketing_cookie: "on",
				privacy_pop_style: 1,
				privacy_lang: window.lang,
			});
		} else {
			// marketing off
			setCookie("fp_opt", "necessary", 365);
			BILog("privacy_protocol_lp", {
				privacy_action: "custom_confirm_selection",
				privacy_marketing_cookie: "off",
				privacy_pop_style: 1,
				privacy_lang: window.lang,
			});
		}
		//Close Modal
		domModalConfig.style.display = "none";
		showCookieNotice();
	});

	// Cookie Details
	const domCookieTypeTitle = document.querySelectorAll(".cookie-title");
	domCookieTypeTitle.forEach((cookieTitle) => {
		cookieTitle.querySelector("img").addEventListener("click", () => {
			const cookieIntro = cookieTitle.nextElementSibling;
			cookieIntro.style.display = "block";
		});
	});
};
ifUseCookieConsent().then((data) => {
	const currentCountry = data.data.data.location.country;
	if (
		!bannerCountriesList.includes(currentCountry) ||
		getCookie("fp_opt")
	) {
		if (getCookie("fp_opt") === "all") {
			consentAllGranted();
		}
	} else {
		let copyright = document.querySelector("#copyright");
		copyright && (copyright.style.display = "none");
		cookieBannerInitial();
	}
});