export function initFunction() {
    document.querySelectorAll(".solution").forEach((value, index) => {
        value?.addEventListener("click", listenerFunction);
    })
}

function listenerFunction(this: HTMLElement, ev: Event) {
    ev.preventDefault();
    collapse(this.parentElement, this.dataset.solution)
}

function collapse(element: Element, solution: string) {
    element.innerHTML = solution
    element.className = 'box-collapsed'
    algorithm()
    initFunction()
}

function algorithm() {
    const box_list = document.querySelectorAll('.box-collapsed, .inside')
    const collapsed = document.querySelectorAll('.box-collapsed')

    collapsed.forEach((value: HTMLElement, index) => {
        let validate: HTMLElement[] = []
        let valid_collapsed: string[] = []

        box_list.forEach((box: HTMLElement) => {
            box.style.backgroundColor = "blue"

            if (box.dataset.indexrow === value.dataset.indexrow ||
                box.dataset.indexcol === value.dataset.indexcol ||
                box.dataset.group === value.dataset.group) {
                validate.push(box)
                if (box.className == "box-collapsed") {
                    valid_collapsed.push(box.innerText)
                }
            }
        })
        box_list.forEach((element) => {
            let answers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

            let html = ''
            answers.forEach((value) => {
                if (!valid_collapsed.includes(value)) {
                    html = html + `<div class="solution" data-solution="${value}">${value}</div>`
                }
            })
            if (element.className !== 'box-collapsed') {
                element.innerHTML = html
            }
        })
    })
}