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


menu.onclick = function click() {
    let call = document.getElementById("top-nav")
    if (call.className === "navbar") {
        call.className += " local";
    } else {
        call.className = "navbar";
    }
}

menu1.onclick = function click1() {
    let call = document.getElementById("outgoing")
    if (call.className === "call") {
        call.className += " local_nav";
    } else {
        call.className = "call";
    }
}