chrome.webRequest.onBeforeRequest.addListener(
    (details) => {
      const url = details.url;
      
      if (shouldBlock(url)) {
        return { cancel: true };
      }
    },
    { urls: ["<all_urls>"] },
    ["blocking"]
  );
  