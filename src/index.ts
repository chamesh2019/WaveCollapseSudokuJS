import './scss/index.scss'
import './functions'
import { initFunction } from './functions';

let box_list = document.querySelectorAll('.box')

box_list.forEach((value: Element, index: number) => {
    let x = Math.floor(index/ 9)
    let y = index % 9
    let group = Math.floor(y / 3) * 3 + Math.floor(x / 3)
    value.innerHTML = `
    <div class="inside" data-indexrow="${x}" data-indexcol="${y}" data-group="${group}">
        <div class="solution" data-solution="1">1</div>
        <div class="solution" data-solution="2">2</div>
        <div class="solution" data-solution="3">3</div>
        <div class="solution" data-solution="4">4</div>
        <div class="solution" data-solution="5">5</div>
        <div class="solution" data-solution="6">6</div>
        <div class="solution" data-solution="7">7</div>
        <div class="solution" data-solution="8">8</div>
        <div class="solution" data-solution="9">9</div>
    </div>`
});

initFunction()