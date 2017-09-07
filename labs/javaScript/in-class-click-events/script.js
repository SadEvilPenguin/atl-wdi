window.onload = function() {
    const button = document.querySelectorAll("button");
    const text = "A click event is essentially tying a function (as a callback) to an element and specifying what action needs to happen to trigger or call/invoke that function (callback).";
    const p = document.createElement("p");
    const info = document.createElement("div");
    info.id = "information";
    document.body.appendChild(info);


    function createAlert() {
        alert("you have clicked button one");
    }

    function addText() {
        p.innerText = text;
        document.getElementById("information").appendChild(p);
    }

    function removeText() {
        const removeP = document.querySelector("p");
        document.getElementById("information").removeChild(removeP);
    }

    //button[0].addEventListener("click", createAlert);
    //button[1].addEventListener("click", addText);
    //button[2].addEventListener("click", removeText);
    button.forEach((element) => {
        element.addEventListener("click", function() {
            if (element === button[0]) {
                createAlert();
            } else if (element === button[1]) {
                addText();
            } else if (element === button[2]) {
                removeText();
            }
        });
    });
}