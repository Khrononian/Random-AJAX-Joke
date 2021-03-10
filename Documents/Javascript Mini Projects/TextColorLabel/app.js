const colors = ["A", "B", "C", "D", "E", "F", 
0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let onClick = () => {
    let text = "#";
    for(let i=0; i<6; i++) {
        text += colors[Math.floor(Math.random() * colors.length)]
    }
    document.body.style.background = text;
    document.getElementById("color").innerHTML = text;

}


