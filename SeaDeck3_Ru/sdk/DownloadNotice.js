export default class DownloadNotice {
	constructor() {
		const domDownloadNotice = document.querySelector(
			".download-notice-container"
		);

		this.backdrop = document.querySelector(".backdrop");
		this.downloadNotice = document.querySelector("#download-notice");
		this.downloadNoticeOther = document.querySelector(
			".download-notice-other"
		);
		this.domDownloadNotice = domDownloadNotice;
		domDownloadNotice &&
			domDownloadNotice.addEventListener("click", () => {
				domDownloadNotice.style.display = "none";
			});
	}

	noticeOlderChrome() {
		this.downloadNotice.classList.remove("hide");
		this.domDownloadNotice.style.display = "block";
	}
	notice() {
		setTimeout(() => {
			this.backdrop.classList.add("appear");
			this.downloadNoticeOther.classList.remove("hide");
			this.domDownloadNotice.style.display = "block";
		}, 1000);
		this.backdrop.addEventListener(
			"click",
			(e) => {
				e.stopPropagation;
				this.backdrop.classList.remove("appear");
				this.downloadNoticeOther.classList.add("hide");
				this.domDownloadNotice.style.display = "none";
			},
			true
		);
	}
}
