let img;
const observer = new MutationObserver(() => {

    img = document.getElementById("pepe");
    img.addEventListener("click", () => {
        console.log("Click");
        const source1 =  "/assets/close.png"
        const source2 =  "/assets/menu.png"
        const source = img.getAttribute("src");
        if (source == source1) {
            img.setAttribute("src", source2);
            document.getElementById("navbar").classList.add("hide");
        }else{
            img.setAttribute("src", source1);
            document.getElementById("navbar").classList.remove("hide");

        }
        
        stopObserver();
    })
    

})

observer.observe(document.getElementById("mobile-header"), { childList: true, subtree: true })

const stopObserver = ()=> observer.disconnect()

