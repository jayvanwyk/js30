const panels = document.querySelectorAll('.panel');

function toggleOpen(event) {
    panels.forEach(p=> {
        if(p === event.currentTarget){
            p.classList.add('open');
        }else{
            p.classList.remove('open');
        }
    })
}

function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach((panel) => panel.addEventListener('click', toggleOpen));
panels.forEach((panel) =>
  panel.addEventListener('transitionend', toggleActive)
);
