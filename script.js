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