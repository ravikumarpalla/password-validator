const input = document.querySelector("input");
const eyeImg = document.querySelector("#eyeImg");

// icons
const icons = {
    correct: "https://cdn-icons-png.flaticon.com/512/845/845646.png",
    default: "https://cdn-icons-png.flaticon.com/512/1828/1828970.png"
};


eyeImg.addEventListener("click", () => {
    const isPassword = input.type === "password";

    input.type = isPassword ? "text" : "password";

    eyeImg.src = isPassword ?
        "https://cdn-icons-png.flaticon.com/512/709/709612.png" :
        "https://cdn-icons-png.flaticon.com/512/2767/2767146.png";
});


const conditionsElements = [
    document.querySelector("#condition1"),
    document.querySelector("#condition2"),
    document.querySelector("#condition3"),
    document.querySelector("#condition4"),
    document.querySelector("#condition5")
];


function checkAllConditions(value) {
    const conditions = [
        value.length >= 8,
        /[0-9]/.test(value),
        /[a-z]/.test(value),
        /[A-Z]/.test(value),
        /[@$!&#/?]/.test(value)
    ];

    conditions.forEach((condition, index) => {
        conditionsElements[index].src =
            condition ? icons.correct : icons.default;
    });
}


input.addEventListener("input", (e) => {
    checkAllConditions(e.target.value);
});