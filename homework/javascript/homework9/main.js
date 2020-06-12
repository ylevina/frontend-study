const ul = document.querySelector(".tabs");
ul.addEventListener("click", changeClass);

function changeClass(event) {
    const className = "active";
    const li = event.target.closest("li");
    const tabs = Array.from(ul.children);
    const tabsContentItems = Array.from(document.querySelector(".tabs-content").children);
       
    const removeIndex = tabs.findIndex(element => element.classList.contains(className));
    tabs[removeIndex].classList.remove(className);
    tabsContentItems[removeIndex].classList.remove(className);

    li.classList.add(className);
    const activeIndex = tabs.findIndex(element => element.classList.contains(className));
    tabsContentItems[activeIndex].classList.add(className);   

    event.preventDefault();
}