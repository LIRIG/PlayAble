import {
	BILog,
	getOs,
	log_realtime,
	log_error
} from "./helpers.js";

window.curFF = false;

window.addEventListener("load", function () {
	BILog("pc_page_view");
	if (getOs() != "IE") {
		log_realtime("pc_page_view");
	}
});

// 页面错误处理
window.onerror = function (message) {
	log_error("pc_page_view", 1001, message);
};