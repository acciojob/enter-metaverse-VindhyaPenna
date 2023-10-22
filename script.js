//your JS code here. If required.
let text = document.querySelector("#status");
        let btn = document.getElementById("enterBtn");


        btn.addEventListener('click',()=>{
        let finText = document.createElement("h1");
			finText.setAttribute("id","status")
        finText.innerHTML = "Entered Metaverse";
        text.remove();
        let parent = document.getElementById("body");
        parent.insertBefore(finText,btn)
        // console.log(parent.children)
        })