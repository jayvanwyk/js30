const inputs = document.querySelectorAll('.controls input');
let isMouseDown = false;

function handleChage(){
    const suffix = this.dataset.sizing || '';
    console.log(this.name, this.value);
    document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`);
}

inputs.forEach(input=>{

    input.addEventListener('change', handleChage);
    input.addEventListener('mousemove', handleChage);
})