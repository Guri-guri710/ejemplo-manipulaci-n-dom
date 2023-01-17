// const h1 = document.querySelector("h1");
// const p = document.querySelector("p");
// const parrafito = document.querySelector(".parrafito");
// const pid = document.querySelector("#parrafito");
const input = document.querySelector("input");
const form = document.querySelector("#form");
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const inputButton = document.querySelector('#btnCalcular')
const result = document.querySelector('#result')

btn.addEventListener('submit', sumarImputValues)


function sumarImputValues(event){
    event.preventDefault();
    const sumaImputs = Number(input1.value) + Number(input2.value);
    result.innerText = "resultado" + sumaImputs

}

// console.log(h1);
// console.log(p);
// console.log(parrafito);
// console.log(pid);
// console.log(input);

// h1.innerHTML = "patito <br> patito"
// h1.innerText = "patito <br> patito"
// console.log(h1.getAttribute('class'))
// h1.getAttribute("pantalla");
// h1.setAttribute("class","rojo");
// h1.classList.add("rojo");
// h1.classList.remove("verde");
// //h1.classList.toggle("verde");

// const img = document.createElement('img')
// img.setAttribute('src', 'https://images.pexels.com/photos/15030875/pexels-photo-15030875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')

// // pid.append(img)

// pid.innerHTML = "";
// pid.appendChild(img)




