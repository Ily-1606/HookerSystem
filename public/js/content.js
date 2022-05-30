(() => {
  const handlerDarkMode = (state) => {
    if (state) {
      document.querySelector("html").setAttribute("data-theme-mode", "dark");
    } else {
      document.querySelector("html").removeAttribute("data-theme-mode");
    }
  };
  chrome.storage.sync.get("isZaloDarkMode", (item) => {
    if (item.isZaloDarkMode) {
      handlerDarkMode(true);
    }
  });
  chrome.storage.onChanged.addListener(function (changes, namespace) {
    console.log(changes.isZaloDarkMode);
    if (namespace === "sync" && changes.isZaloDarkMode) {
      handlerDarkMode(changes.isZaloDarkMode.newValue);
    }
  });
})();
