const all = document.querySelectorAll('.details');
// console.log(all)
all.forEach(label => {
    label.innerHTML = label.innerText.split('').map((letter,index)=>`<span style="transition-delay:${index*50}ms">${letter}</span>`).join('')
    // console.log(label.innerHTML)
})