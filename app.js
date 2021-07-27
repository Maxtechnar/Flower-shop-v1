const tabsBtn = document.querySelectorAll(".tabs-nav-btn");
const tabsContent = document.querySelectorAll(".tabs_block")

tabsBtn.forEach(function (btn) {
    btn.addEventListener("click", function () {
        let currentBtn = btn;
        let tabId = currentBtn.getAttribute("data-tab")
        let currentTab = document.querySelector(tabId);


        tabsBtn.forEach(function (btn) {
            btn.classList.remove("active")
        });
        tabsContent.forEach(function (btn) {
            btn.classList.remove("active")
        });

        currentBtn.classList.add("active");
        currentTab.classList.add("active");
    });
});


