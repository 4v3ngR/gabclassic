// Clear service workers and network cache on startup/install
console.log("[Interceptor] Clearing Service Workers...");
browser.browsingData.remove({
    hostnames: ["gab.com", "www.gab.com"]
}, {
    serviceWorkers: true,
    cache: false
});

browser.runtime.onInstalled.addListener(() => {
  console.log("[Interceptor] Clearing Cache...");
  browser.browsingData.remove({
    hostnames: ["gab.com", "www.gab.com"]
  }, {
    serviceWorkers: false,
    cache: true
  });
});

browser.webRequest.filterResponseData
const encoder = new TextEncoder();
const home=encoder.encode(`
<!DOCTYPE html>
<html lang='en'>
<head>
<meta charset='utf-8'>
<meta content='width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover' name='viewport'>
<link href='https://media.gab.com/system' rel='dns-prefetch'>
<link href='/favicon.ico' rel='icon' type='image/x-icon'>
<link href='/apple-touch-icon.png' rel='apple-touch-icon' sizes='180x180'>
<link color='#21cf7a' href='/mask-icon.svg' rel='mask-icon'>
<link href='/splash/light/iphone5_splash.png' media='(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)' rel='apple-touch-startup-image'>
<link href='/splash/light/iphone6_splash.png' media='(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)' rel='apple-touch-startup-image'>
<link href='/splash/light/iphoneplus_splash.png' media='(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)' rel='apple-touch-startup-image'>
<link href='/splash/light/iphonex_splash.png' media='(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)' rel='apple-touch-startup-image'>
<link href='/splash/light/iphonexr_splash.png' media='(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)' rel='apple-touch-startup-image'>
<link href='/splash/light/iphonexsmax_splash.png' media='(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)' rel='apple-touch-startup-image'>
<link href='/splash/light/ipad_splash.png' media='(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)' rel='apple-touch-startup-image'>
<link href='/splash/light/ipadpro1_splash.png' media='(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)' rel='apple-touch-startup-image'>
<link href='/splash/light/ipadpro3_splash.png' media='(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)' rel='apple-touch-startup-image'>
<link href='/splash/light/ipadpro2_splash.png' media='(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)' rel='apple-touch-startup-image'>
<link href='/manifest.json' rel='manifest'>
<meta content='/browserconfig.xml' name='msapplication-config'>
<meta content='#21cf7a' name='theme-color'>
<meta content='yes' name='mobile-web-app-capable'>
<meta content='black-translucent' name='apple-mobile-web-app-status-bar-style'>
<meta content='Gab is a social network that champions free speech, individual liberty and the free flow of information online. All are welcome.' name='description'>
<title>
[Classic Gab is loading]</title>
<link rel="stylesheet" media="all" href="/packs/css/common-5592b43c.css" />
<meta name="csrf-param" content="authenticity_token" />
<meta name="csrf-token" content="Axv4tlPnlemIvLDHg8ri5TLp1GqCBlrUZLB63i5I+PvNBlrcP21kVwfvjvGFRaw/eds2ERh6DakGOPO6+oP6yw==" />
<meta content='BO_CXXKZ4X6nRHs3rjx1ld-mejF4i080a_IWbvPN_-CwsREbsqB6QjXNvtHaQXe05-LhYd9s_dsJuU2fry0AjOw=' name='applicationServerKey'>
<script id='initial-state' type='application/json'></script>
<script>
    let getme = async () => {
        // TODO: handle logged out state
        let resp = await fetch("https://gab.com/api/v3/me", {
            "credentials": "include",
            "headers": {
                "Accept": "*/*",
                "Accept-Language": "en-US,en;q=0.9",
                "Content-Type": "application/json",
                "Sec-GPC": "1",
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "same-origin",
                "Alt-Used": "gab.com",
                "Priority": "u=4",
                "Pragma": "no-cache",
                "Cache-Control": "no-cache"
            },
            "referrer": "https://gab.com/",
            "method": "GET",
            "mode": "cors"
        });
        let state = await resp.text();
        let obj = JSON.parse(state);

        let node = document.getElementById('initial-state');
        node.innerText = state;

        node = document.querySelector('meta[name="csrf-token"]');
        if (!node) {
            node = document.createElement("meta");
            node.setAttribute("name", "csrf-token");
        }
        node.setAttribute("content", obj.meta.csrf.csrf_token);

        node = document.createElement('script');
        node.setAttribute('src', '/packs/js/common-d6df2ea8f045c39318d4.js');
        node.setAttribute('crossorigin', 'anonymous');
        document.head.appendChild(node);

        node = document.createElement('script');
        node.setAttribute('src', '/packs/js/application-ef42a1f549756bf715f3.chunk.js');
        node.setAttribute('crossorigin', 'anonymous');
        document.head.appendChild(node);
    }
    getme();
</script>
</head>
<body class=''>
<div data-props='{&quot;locale&quot;:&quot;en&quot;}' id='gabsocial'>
<noscript>
<div style='padding: 60px; max-width: 560px;'>
<img alt="Gab Social" width="100px" src="/packs/media/images/logo-967cf32f5e1a6d10524ceeea220142a9.svg" />
<div style='margin-top: 20px; line-height: 2rem; font-family: system-ui, -apple-system, BlinkMacSystemFont, Roboto, sans-serif;'>
To use the Gab Social web application, please enable JavaScript. Alternatively, try one of the <a href="https://apps.gab.com">
native apps</a>
for Gab Social for your platform.  </div>
</div>
</noscript>
</div>
</body>
</html>
`);

const localFiles = new Set([
  "107-2f20f1b5c351886d6a3f.chunk.js",
  "109-47609c60a1f108372ce3.chunk.js",
  "112-578e984677414c652db6.chunk.js",
  "114-2c132e62ff211b616242.chunk.js",
  "14-47b78779d8cd14165a32.chunk.js",
  "15-9d2d4e1e99ef90d5f151.chunk.js",
  "162-eb326846b6581613d017.chunk.js",
  "21-aa73b7097e29d10629af.chunk.js",
  "23-c9182b729cd2c60edfcf.chunk.js",
  "88-a65e368e4953f5cf7c91.chunk.js",
  "89-c31c769558b76d639433.chunk.js",
  "97-2afa9ae52eaa8c6de8b0.chunk.js",
  "application-ef42a1f549756bf715f3.chunk.js",
  "common-5592b43c.css",
  "common-d6df2ea8f045c39318d4.js"
]);

console.log('[Interceptor] loaded');
browser.webRequest.onHeadersReceived.addListener(
  (details) => {
    const responseHeaders = details.responseHeaders || [];

    // Define the headers that strictly disable caching
    const noCacheHeaders = [
      { name: "Cache-Control", value: "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0" },
      { name: "Pragma", value: "no-cache" },
      { name: "Expires", value: "0" }
    ];

    // Filter out existing cache-related headers to prevent conflicts
    const filteredHeaders = responseHeaders.filter(
      (header) => !["cache-control", "pragma", "expires"].includes(header.name.toLowerCase())
    );

    return { responseHeaders: [...filteredHeaders, ...noCacheHeaders] };
  },
  { urls: ["*://*.gab.com/*"], types: ["main_frame", "script", "stylesheet"] },
  ["blocking", "responseHeaders"]
);

browser.webRequest.onBeforeRequest.addListener(
  (details) => {
    const url = new URL(details.url);
    const filename = url.pathname.split('/').pop();

    let targetFile = null;
    if (details.type === "main_frame" && filename != "sign_in" && url.pathname.indexOf('/api/v') == -1) {
      targetFile = "assets/home.html";
    } else if (localFiles.has(filename)) {
      targetFile = `assets/${filename}`;
    } else if (details.type === "javascript") {
      console.warn("[Interceptor] unhandled script", details.url);
    }

    if (targetFile) {
      console.log(`[Interceptor] START: ${targetFile}`);

      const filter = browser.webRequest.filterResponseData(details.requestId);
      const localUrl = browser.runtime.getURL(targetFile);

      // Eager loading: don't wait for onstop
      filter.onstart = async () => {
        try {
          if (targetFile == "assets/home.html") {
            console.log('[Interceptor] shortcut');
            filter.write(home);
            filter.close();
            return {};
          }

          console.log(`[Interceptor] EAGER onstart: ${targetFile}`);
          const response = await fetch(localUrl);
          const buffer = await response.arrayBuffer();

          filter.write(buffer);
          console.log(`[Interceptor] EAGER WRITE DONE: ${targetFile}`);
        } catch (err) {
          console.error(`[Interceptor] ERROR: ${targetFile}`, err);
        } finally {
          filter.close();
        }
      };

      // Dummy handler to ensure ondata doesn't pass through original chunks
      filter.ondata = () => {}; 

      return {}; 
    }
  },
  { urls: ["*://*.gab.com/*"], types: ["main_frame", "script", "stylesheet"] },
  ["blocking"]
);

// Listen for tab updates to detect the "Speak Freely" title
browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // We only care about title updates on gab.com
  if (changeInfo.title && tab.url && tab.url.includes("gab.com")) {
    const title = changeInfo.title.toLowerCase();

    // Check for the "speak freely" string used by the original site
    if (title.toLowerCase().includes("speak freely")) {
      console.warn(`[Interceptor] Original page detected! Title: "${changeInfo.title}". Forcing reload...`);

      // Reload and bypass cache to give webRequest another chance to intercept
      browser.tabs.reload(tabId, { bypassCache: true });
    }
  }
}, { properties: ["title"] });
