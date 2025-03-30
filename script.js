function toggleMenu() {
    const menu = document.getElementById('menu');    
    const iconeBurguer = document.getElementById('burguer');
    const iconeFechar = document.getElementById('fechar');

    if(menu.classList.toggle('active')){
        iconeBurguer.style.display = "none";
        iconeFechar.style.display = "block";
    }else {
        iconeBurguer.style.display = "block";
        iconeFechar.style.display = "none";
    }
  
}

const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        menuItems.forEach(link => link.classList.remove('selecionado'));
        this.classList.add('selecionado');
    });
});