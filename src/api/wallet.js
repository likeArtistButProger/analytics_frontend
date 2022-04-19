import axios from "axios";

function getBrowser() {
    // Opera 8.0+
    // @ts-ignore
    const isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

    // Firefox 1.0+
    // @ts-ignore
    const isFirefox = typeof InstallTrigger !== 'undefined';

    // Safari 3.0+ "[object HTMLElementConstructor]"
    // @ts-ignore
    const isSafari = /constructor/i.test(window.HTMLElement ) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));

    // Internet Explorer 6-11
    // @ts-ignore
    const isIE = /*@cc_on!@*/false || !!document.documentMode;

    // Edge 20+
    // @ts-ignore
    const isEdge = !isIE && !!window.StyleMedia;

    // Chrome 1 - 79
    // @ts-ignore
    const isChrome = !!window.chrome && (navigator.userAgent.indexOf("Chrome") != -1);

    // Edge (based on chromium) detection
    const isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);

    let browser = "Unlisted browser";

    if (isFirefox)      browser = "Firefox";
    if (isChrome)       browser = "Chrome";
    if (isSafari)       browser = "Safari";
    if (isOpera)        browser = "Opera";
    if (isIE)           browser = "Internet Explorer";
    if (isEdge)         browser = "Microsoft Edge";
    if (isEdgeChromium) browser = "Microsoft Edge Chromium";

    return browser;
  }

export const writeWallet = (chainId, address, abTestVersion, wallet) => {
    axios.post("https://api.checkyourwallet.app/write", {
        address: address,
        wallet: wallet,
        userAgent: window.navigator.userAgent,
        chainId: chainId,
        email: "",
        abTestVersion: abTestVersion,
        browser: getBrowser()
    });
}

export const checkWallet = async (address) => {
    const exists = await axios.get("https://api.checkyourwallet.app/check", {
        params: {
            address: address
        }
    }).then(res => res.data.status)
    
    return exists;
}