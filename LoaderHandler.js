import { DeviceEventEmitter } from "react-native";

const loaderHandler = {
	hideLoader() {
		DeviceEventEmitter.emit("changeLoadingEffect", { isVisible: false });
	},
	showLoader(title, timeout = 0) {
		DeviceEventEmitter.emit("changeLoadingEffect", { title, isVisible: true });
		if (timeout > 0)
			setTimeout(() => {
				this.hideLoader();
			}, timeout);
	}
};

module.exports = loaderHandler;
