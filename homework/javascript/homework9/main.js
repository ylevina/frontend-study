const ul = document.querySelector(".tabs");
ul.addEventListener("click", changeClass);

function changeClass(event) {
    const className = "active";
    const li = event.target.closest("li");
    const tabs = Array.from(ul.children);
    const tabsContentItems = Array.from(document.querySelector(".tabs-content").children);
    
    tabs.forEach((tab, i) => {
        tab.classList.remove(className);
        tabsContentItems[i].classList.remove(className);
    });

    li.classList.add(className);

    tabs.forEach((tab, i) => {
        if (tab.classList.contains(className)) { 
            tabsContentItems[i].classList.add(className); 
        }
    });

    event.preventDefault();
}