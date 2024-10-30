function alternarModal(modalId, abrir){
    const modal = document.querySelector(`#${modalId}`);

    if(abrir){
        modal.style.display = 'block';
    }else{
        modal.style.display = 'none';
    }

    document.body.style.overflow = abrir ? 'hidden' : 'auto';
}

//fechar o modal por esc
document.addEventListener('keydown', (event)=>{
    if(event.key === "Escape")
        alternarModal("ver-modal-inscrito", false)

    document.querySelectorAll(".cabecalho__lista-item").forEach((item) =>{
        alternarSubmenu(item, false)
    })
})


function alternarSubmenu(item, mostrar){
    const submenu = item.querySelector(".submenu");

    if(submenu){
        submenu.style.display = mostrar ? "block" : "none";

        const menuItem = item.querySelector(".cabecalho__lista-item a");
        menuItem.setAttribute("aria-expended", mostrar ? true : false);

        const DropdownExpandedIcon = item.querySelector(".material-symbols-outlined.icone");

        DropdownExpandedIcon.classList.toggle("active", mostrar);
    }
}
//selecionar todos os cabecalho__lista-item
document.querySelectorAll(".cabecalho__lista-item").forEach(item =>{
    //adicionar um ouvinte mouseover
    item.addEventListener("mouseover", () => alternarSubmenu(item, true));

    // adicionar um ouvinte mouseout
    item.addEventListener("mouseout", () => alternarSubmenu(item, false));

    item.addEventListener("click", ()=>{
        const submenu = item.querySelector('.submenu');

        const isDisplayed = submenu.style.display === "block";

        alternarSubmenu(item, !isDisplayed);
    })
});



//acordion

document.querySelectorAll(".botao-acordeao").forEach(button => {
    button.addEventListener("click", ()=> alternarAcordeao(button));
});

function alternarAcordeao(button){
    const isAlReadyOpen = button.getAttribute("aria-expanded") === true;

    document.querySelectorAll(".botao-acordeao").forEach((btn) =>{
        btn.setAttribute("aria-expanded", "false");

        const content =btn.nextElementSibling;
        content.classList.remove("expandido");
        content.setAttribute("aria-hidden", "true")
    })

    if(!isAlReadyOpen){
        button.setAttribute('aria-expanded', "true")

        const content = button.nextElementSibling;
        content.classList.add("expandido");

        content.setAttribute('aria-hidden', "false")
    }
    


}