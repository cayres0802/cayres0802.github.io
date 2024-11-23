window.onload = function (){
    const menu_btn = document.querySelector('.hamburg');
    const mobile_menu = document.querySelector('.mobile-nav');
    
    menu_btn.addEventListener('click',function(){
        console.log('Menu clicado!');
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');

    });
    
}
