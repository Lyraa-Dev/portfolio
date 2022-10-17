const tabs = document.querySelectorAll(".tab");
tabs.forEach(tab => {
    tab.addEventListener("click", function() {
        if(tab.classList.contains("selected")){
            return;
        }
        selectTab(tab)
        selectInfo(tab)
    });
});
function selectTab(tab) {
    const tabSelected = document.querySelector(".tab.selected");
    tabSelected.classList.remove("selected");
    tab.classList.add("selected");
}
function selectInfo(tab) {
    const infoSelected = document.querySelector(".info.selected");
        infoSelected.classList.remove("selected");
        const idDoElementoInfoTabs = `info-${tab.id}`
        const infoASerMostrada = document.getElementById(idDoElementoInfoTabs)
        infoASerMostrada.classList.add("selected")
}