import x from './x.js'
import jpg from './assets/1.jpg'
console.log(x);console.log(x);
console.log(jpg);

const div = document.getElementById('app')
console.log(div);

div.innerHTML = ` <img src = "${jpg}"/> `

const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick=()=>{
    const promise = import('./lazy')
    promise.then((module)=>{
        const fn = module.default
        fn()//懒加载就是触发之后再加载js
    },()=>{

    })
}
div.appendChild(button)