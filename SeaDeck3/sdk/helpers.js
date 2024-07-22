// import DownloadNotice from "./DownloadNotice.js";

const md5 = window['md5'];
const axios = window['axios'];

// const downloadNotice = new DownloadNotice();

const GaMaps = {
	ss: "G-NK21CX9CG0",
	ss_pk: "G-NK21CX9CG0",
	koa: "G-SRMNZTXWFQ",
	st: "G-SRMNZTXWFQ",
	entropy: "G-MZTZZ0GX0N",
	mc: "G-RKZ5FCNRMD",
	mo: "G-5P5SJJKY77",
};
const appId = {
	ss: "627a1da83e6d9717222693d5",
	ss_pk: "627a1da83e6d9717222693d5",
	koa: "62fef5d838fd9e09520e7c34",
	st: "56b21e4c-0c54-4f10-bc45-537b728af411",
	entropy: "6391da126cec4e09951a3344",
	mc: "c7e96053-2a18-4587-95cf-2aadc8524cb7",
	mo: "f95e76b2-c0f2-4a9d-8675-f34b28e473f5",
};
const custom_api = "https://upload-s3.funplus.com/api/upload_s3/event";
const tag = "funplus.global.prod.pc_core";
const key = "2905ac8d9fbae0020c541675edb34941";
const api = "https://ss-logagent-cdn.kingsgroupgames.com/log";

// Detect Browser
export const getBrowserName = () => {
	const agent = window.navigator.userAgent.toLowerCase();
	switch (true) {
		case agent.indexOf("edge") > -1:
			return "MS Edge";
		case agent.indexOf("edg/") > -1:
			return "Edge ( chromium based)";
		case agent.indexOf("yabrowser") > -1:
			return "YaBrowser";
		case agent.indexOf("opr") > -1 && !!window.opr:
			return "Opera";
		case agent.indexOf("chrome") > -1 && !!window.chrome:
			return "Chrome";
		case agent.indexOf("trident") > -1:
			return "MS IE";
		case agent.indexOf("firefox") > -1:
			return "Mozilla Firefox";
		case agent.indexOf("safari") > -1:
			return "Safari";
		default:
			return "other";
	}
};

// Detect OS
export const getOs = () => {
	var OSName = "Not Known";
	if (window.navigator.userAgent.indexOf("Win") != -1) OSName = "Windows";
	if (window.navigator.userAgent.indexOf("Mac") != -1) OSName = "Mac OS";
	if (window.navigator.userAgent.indexOf("CrOS") != -1) OSName = "Chrome OS";
	if (window.navigator.userAgent.indexOf("MSIE") > -1) OSName = "IE";
	if (window.navigator.userAgent.indexOf("rv:11.0") > -1) OSName = "IE";
	return OSName;
};

// Detect OS Version
export const getOsVersion = () => {
	var agent = navigator.userAgent.toLowerCase();
	if (agent.indexOf("win32") >= 0 || agent.indexOf("wow32") >= 0) {
		return "win32";
	} else if (agent.indexOf("win64") >= 0 || agent.indexOf("wow64") >= 0) {
		return "win64";
	}
	return "not win";
};

// Detect Windows Version

export const getWindowsVersion = () => {
	var OSName = "Not Windows";
	if (window.navigator.userAgent.indexOf("Win") != -1) {
		OSName = "Windows 11";
		if (window.navigator.userAgent.indexOf("Windows NT 10.0") != -1)
			OSName = "Windows 10";
		if (window.navigator.userAgent.indexOf("Windows NT 6.3") != -1)
			OSName = "Windows 8.1";
		if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1)
			OSName = "Windows 8";
		if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1)
			OSName = "Windows 7";
		if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1)
			OSName = "Windows Vista";
		if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1)
			OSName = "Windows XP";
		if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1)
			OSName = "Windows 2000";
	}
	return OSName;
};

export const getUrlParam = (key) => {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const value = urlParams.get(key);
	if (!value) return;
	return decodeURIComponent(value);
};

// Manipulate Cookies
export const setCookie = (name, value, days) => {
	var expires = "";
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		expires = "; expires=" + date.toUTCString();
	}
	document.cookie = name + "=" + (value || "") + expires + "; path=/";
};

export const getCookie = (name) => {
	var nameEQ = name + "=";
	var ca = document.cookie.split(";");
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == " ") c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
};

// Get Channel Name
export const getChannelName = () => {
	let channel = getUrlParam("ms");
	switch (channel) {
		case "gg":
			return "google";
		case "fb":
			return "facebook";
		case "yt":
			return "youtubekol";
		case "tw":
			return "twitter";
		case "xs":
			return "Xsolla Partner Network";
		case "mt":
			return "mytarget";
		case "mtz":
			return "mytarget_z";
		case "rd":
			return "reddit";
		case "ppl":
			return "PropellerAds";
		default:
			return channel;
	}
};

// Detect Chrome Version
export const getChromeVersion = () => {
	var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
	return raw ? parseInt(raw[2], 10) : "Not Chrome";
};

// Encrypt
const HMAC = async (key, message) => {
	try {
		const g = (str) =>
			new Uint8Array(
				[...unescape(encodeURIComponent(str))].map((c) =>
					c.charCodeAt(0)
				)
			),
			k = g(key),
			m = g(message),
			c = await crypto.subtle.importKey(
				"raw",
				k, {
					name: "HMAC",
					hash: "SHA-256"
				},
				true,
				["sign"]
			),
			s = await crypto.subtle.sign("HMAC", c, m);
		[...new Uint8Array(s)]
		.map((b) => b.toString(16).padStart(2, "0"))
			.join("");
		return btoa(String.fromCharCode(...new Uint8Array(s)));
	} catch {}
};

let clickid =
	getUrlParam("gclid") ||
	getUrlParam("fbclid") ||
	getUrlParam("twclid") ||
	getUrlParam("tracking_id") ||
	getUrlParam("click-id") ||
	getUrlParam("transaction_id") ||
	getUrlParam("dclid") ||
	getUrlParam("rb_clickid") ||
	getUrlParam("suid");
// 通用渠道
if (!clickid) {
	if (getUrlParam("auto") == 1 && getUrlParam("ms")) {
		if (getCookie("clickid")) {
			clickid = getCookie("clickid");
		} else {
			clickid = getUrlParam("ms") + Date.now();
			setCookie("clickid", clickid, 1);
		}
	}
}
const clickcode = clickid ? md5(clickid).slice(0, 10) : "";

// Handle Downloads
// const showDownloadNotice = () => {
// 	if (getBrowserName() == "Chrome") {
// 		if (getChromeVersion() < "115") {
// 			downloadNotice.noticeOlderChrome();
// 		} else {
// 			downloadNotice.notice();
// 		}
// 	}

// 	if (
// 		getBrowserName() == "Opera" ||
// 		getBrowserName() == "YaBrowser" ||
// 		getBrowserName() == "MS Edge" ||
// 		getBrowserName() == "Edge ( chromium based)"
// 	) {
// 		downloadNotice.notice();
// 	}
// };

export const defaultDownload = () => {
	const PcDownloadSrc = {
		ss: "https://userplatform-download.akamaized.net/official-website/pc-launcher-setup/State.of.Survival.PC.V1.0.exe",
		ss_pk: "https://userplatform-download.akamaized.net/official-website/pc-launcher-setup/State.of.Survival.Parkour.PC.V1.0.exe",
		koa: "https://userplatform-download.akamaized.net/official-website/pc-launcher-setup/King.of.Avalon.PC.V1.0.exe",
		st: "https://userplatform-download.akamaized.net/official-website/pc-launcher-setup/Stormshot.PC.V1.0.exe",
		entropy: "https://userplatform-download.akamaized.net/official-website/pc-launcher-setup/Entropy.PC.V1.0.exe",
		mc: "https://userplatform-download.akamaized.net/official-website/pc-launcher-setup/MistyContinent.PC.V1.0.exe",
		mo: "https://userplatform-download.akamaized.net/official-website/pc-launcher-setup/Sea.of.Conquest.PC.V1.0.exe",
	};
	const MacDownloadSrc = {
		st: "https://userplatform-download.akamaized.net/official-website/pc-launcher-setup-mac/Stormshot.V1.0.pkg",
		ss: "https://userplatform-download.akamaized.net/official-website/pc-launcher-setup-mac/State.of.Survival.V1.0.pkg",
	};
	var link = document.createElement("a");
	var body = document.querySelector("body");

	let downloadSrc = PcDownloadSrc;
	if (
		getOs() === "Mac OS" &&
		window.project in MacDownloadSrc &&
		document.querySelector("#download-btn").getAttribute("data-mac") ===
		"enable"
	) {
		downloadSrc = MacDownloadSrc;
	}
	link.href = clickcode ?
		downloadSrc[window.project] + "?clickcode=" + clickcode :
		downloadSrc[window.project];

	// fix Firefox
	link.style.display = "none";
	body.appendChild(link);
	link.click();
	body.removeChild(link);
	window.URL.revokeObjectURL(link.href);

	// showDownloadNotice();
};

// Handle Log

export const log_realtime = (event) => {
	let clickcode_temp = !clickcode ? "null" : clickcode;
	var secret = "e03b0da71d31f4c9e55b6f547f782097";
	HMAC(secret, clickcode_temp).then(function (sign) {
		fetch(custom_api, {
			method: "post",
			body: "",
			credentials: "include",
			mode: "cors",
			headers: new Headers({
				"Content-Type": "application/json",
				"X-Content-Secret": sign,
				platform: getOs(),
				event: event,
				appVersion: getChannelName(),
				deviceId: clickcode_temp,
				content: window.page_id,
				osVersion: getOsVersion(),
				appId: appId[window.project],
				env: window.location.href,
			}),
		}).then((response) => response.json());
	});
};

export const log_error = (event, errCode, errMessage) => {
	// 1001 页面加载错误, 1002 页面page_view打点错误， 1003 页面download错误
	var secret = "e03b0da71d31f4c9e55b6f547f782097";
	HMAC(secret, errCode).then(function (sign) {
		fetch(custom_api, {
			method: "post",
			body: "",
			credentials: "include",
			mode: "cors",
			headers: new Headers({
				"Content-Type": "application/json",
				"X-Content-Secret": sign,
				platform: getOs(),
				event: event,
				appVersion: getChannelName(),
				deviceId: errCode,
				content: errMessage,
				osVersion: getOsVersion(),
				appId: appId[window.project],
				env: window.location.href,
			}),
		}).then((response) => response.json());
	});
};

export const BILog = async (event, additionalDetail) => {
	/**
	 * Post data to log agent when download button clicked
	 * gclid, click_code
	 */

	// Handle PWN exceptions
	let pwn_adgroup_name, pwn_ad_name;
	if (getChannelName() == "pwn" && getUrlParam("source")) {
		pwn_adgroup_name = getUrlParam("source").split("_")[0];
		pwn_ad_name = getUrlParam("source").split("_")[1];
	}

	const dataLog = {
		log_source: "wp",
		data_version: "1.0",
		properties: {
			click_id: clickid,
			click_code: clickcode,
			os: getOs(),
			os_version: getWindowsVersion(),
			browser: getBrowserName(),
			chrome_version: getChromeVersion(),
			user_agent: navigator.userAgent,
		},
		detail: {
			media_source: getChannelName(),
			campaign_id: getUrlParam("utm_campaign") ||
				getUrlParam("campaign_id") ||
				getUrlParam("cp_id"),
			adgroup_id: getUrlParam("utm_medium") ||
				getUrlParam("adgroup_id") ||
				getUrlParam("ag_id"),
			page_id: window.page_id,
			ad_id: getUrlParam("utm_source") || getUrlParam("ad_id"),
			dt: "",
			network: getUrlParam("network"),
			campaign_name: getUrlParam("cp") || getUrlParam("campaign"),
			adgroup_name: getUrlParam("ag") || pwn_adgroup_name,
			ad_name: getUrlParam("ad") || pwn_ad_name,
			cost_value: getUrlParam("cost_value"),
			referrer: document.referrer,
			url: window.location.href,
			...additionalDetail,
		},
	};

	// Handle FB repeated params key problem

	if (getChannelName() === "facebook") {
		dataLog["detail"]["ad_id"] = getUrlParam("ad_id");
		dataLog["detail"]["adgroup_id"] = getUrlParam("adgroup_id");
		dataLog["detail"]["campaign_id"] = getUrlParam("campaign_id");
	}

	//handle error code

	const errCode = event === "pc_page_view" ? 1002 : 1003;
	var timeNow = Date.now();
	var signature = md5(tag + ":" + timeNow + ":" + key);
	var new_api =
		api +
		"?tag=" +
		tag +
		"&timestamp=" +
		timeNow +
		"&signature=" +
		signature +
		"&num=1";

	dataLog["event_ts"] = timeNow;
	dataLog["event"] = event;
	dataLog["app_id"] = `${window.project}.global.prod`;

	// Modify Log Data for SS Parkour
	if (window.project === "ss_pk") {
		dataLog["app_id"] = "ss.global.prod";
		dataLog["properties"]["pkg_channel"] = "ss_funplus_pc_parkour";
	}

	var request = new XMLHttpRequest();
	request.open("POST", new_api, true);
	request.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

	try {
		if (getChannelName() == "google") {
			gtag("get", GaMaps[window.project], "client_id", (clientID) => {
				dataLog["detail"]["ga_client_id"] = clientID;
				request.send(JSON.stringify(dataLog));
			});
		} else if (getChannelName() == "facebook") {
			dataLog["detail"]["fbp"] = getCookie("_fbp");
			dataLog["detail"]["fbc"] = getCookie("_fbc");

			setTimeout(() => {
				request.send(JSON.stringify(dataLog));
			}, 100);
		} else {
			setTimeout(() => {
				request.send(JSON.stringify(dataLog));
			}, 100);
		}
	} catch (err) {
		log_error("pc_page_view", errCode, err);
	}
};

// Cookie Consent
export const consentAllGranted = () => {
	gtag("consent", "update", {
		ad_storage: "granted",
		ad_user_data: "granted",
		ad_personalization: "granted",
		analytics_storage: "granted",
	});
};

export const bannerCountriesList = [
	"BE",
	"EL",
	"LT",
	"PT",
	"BG",
	"ES",
	"LU",
	"RO",
	"CZ",
	"FR",
	"HU",
	"SI",
	"DK",
	"HR",
	"MT",
	"SK",
	"DE",
	"IT",
	"NL",
	"FI",
	"EE",
	"CY",
	"AT",
	"SE",
	"IE",
	"LV",
	"PL",
	"NO",
	"IS",
	"LI",
];

export const ifUseCookieConsent = () => {
	const sign = "GwcRLrF8NBOvk4/N4Bna6aDkM28Vm1XjBLv6NdTH7a0=";
	const params = {
		app_id: "web",
		device_id: "web",
		from: "web",
		lang: "en",
	};
	const apiDomains = {
		koa: "https://koa-pc.kingsgroupgames.com",
		ss: "https://sos-pc.kingsgroupgames.com",
		ss_pk: "https://sos-pc.kingsgroupgames.com",
		st: "https://st-pc.kingsgroupgames.com",
		mo: "https://soc.seaofconquest.com",
		mc: "https://mc-pc.kingsgroupgames.com",
		entropy: "https://entropy-pc.kingsgroupgames.com",
	};
	const post = () => {
		var xhr = new XMLHttpRequest();
		xhr.open("POST", "your-endpoint-url", true);
		xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4 && xhr.status === 200) {
				var jsonResponse = JSON.parse(xhr.responseText);
			}
		};
		var data = JSON.stringify({
			"key": "value"
		});
		xhr.send(data);
	}
	if (window.location.hostname === "localhost") {
		return Promise.resolve({
			data: {
				data: {
					location: {
						country: "FR"
					}
				}
			},
		});
	} else {
		const res = axios.post(
			apiDomains[window.project] + "/api/get_ip_location/",
			params, {
				headers: {
					"Content-Type": "application/json",
					auth: sign,
				},
			}
		);
		return res;
	}
};

window.helper = {
	getOs,
	defaultDownload,
	BILog,
	log_realtime,
	log_error
}