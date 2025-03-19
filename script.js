//your JS code here. If required.
let container = document.querySelector(".container")

for(let i=0; i<800; i++){
	container.innerHTML += `
		<div class="square" ></div>
	`
}

document.querySelectorAll(".square").forEach(square => {
	square.addEventListener("mouseover", () => {
		square.style.backgroundColor = getRandomColor();
		setTimeout(()=>{
			square.style.backgroundColor = "rgb(29, 29, 29)"
		}, 1000)
	})
})

function getRandomColor() {
        return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    }