// // for burger menu
// let burger = document.querySelector("#burger-menu");
// let closes = document.querySelectorAll(".close");
// let submenus = document.querySelectorAll(".submenus");
// let submenuCloses = document.querySelectorAll(".submenu-close");
// let groupSubs = document.querySelectorAll(".is-submenu");
// let navbar = document.querySelector("#navbar"); 

// burger.addEventListener("click", () => {
//   navbar.classList.toggle("active");  
// }); 

// if (closes.length > 0) {
//   closes.forEach(close => {
//     close.addEventListener("click", () => {
//       groupSubs.forEach(groupSub => { 
//         groupSub.classList.remove("active");  
//       });
//       navbar.classList.remove("active");
//     });
    
//   });
// }
  
// if(submenus.length > 0){
//   submenus.forEach(submenu => {
//     submenu.addEventListener("click", () => {
//        submenu.parentElement.classList.add('active');
//       });
//   }); 
// }
// if(submenuCloses.length > 0){
//   submenuCloses.forEach(submenuClose => {
//     submenuClose.addEventListener("click", () => {
//       submenuClose.parentElement.parentElement.classList.remove('active');
//       });
//   }); 
// } 
 
  

// let flag = document.querySelector('.flag');

// flag.addEventListener("click", () => {
//   flag.parentElement.classList.toggle('active');
// });
// document.addEventListener("click", function(event) {  
//   var isClickInsideMenu = flag.contains(event.target); 
//   if (!isClickInsideMenu) {
//     flag.parentElement.classList.remove('active');
//   }
// });