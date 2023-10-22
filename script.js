//your JS code here. If required.
let text = document.getElementById("status");
        let btn = document.getElementById("enterBtn");
        btn.addEventListener('click',()=>{
        let finText = document.createElement("h1");
        finText.innerHTML = "Enetered Metaverse";
        text.remove();
        let parent = document.getElementById("body");
        parent.insertBefore(finText,btn)
        // console.log(parent.children)
        })