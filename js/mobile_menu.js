
 var nav = document.getElementById('menu_control'),
 nav_menu = document.getElementById('site-links');

 nav.addEventListener('click', function (e) {
     nav_menu.className = nav_menu.className ? '' : 'site-links_with_nav';
     e.preventDefault();
 });

var nav2 = document.getElementById('menu_control_2'),
 nav_auth_menu = document.getElementById('menu_control-auth');
 nav2.addEventListener('click', function (e) {
    nav_auth_menu.className = nav_auth_menu.className ? '' : 'auth-links_with_nav';
    e.preventDefault();
});


