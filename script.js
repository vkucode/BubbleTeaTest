// Dark Thème


const switchThemeBtn = document.querySelector('#day')
let toggleTheme = 0;

switchThemeBtn.addEventListener('click' , () => {
    if(toggleTheme === 0){
        document.documentElement.style.setProperty('--ecriture','#262626');
        document.documentElement.style.setProperty('--background', '#EADFD7');
        toggleTheme++;
    }
    else {
        document.documentElement.style.setProperty('--ecriture','#EADFD7' );
        document.documentElement.style.setProperty('--background','#262626');
        toggleTheme--;
    }
})


// Navbar ( Menu burger ) REPONSIVE 





// TEST JAVASCRIPT , Agrandir et faire tourner le png ON CLICK

// function Mafonction() {
//     var boissonm = document.querySelector(".boisson-2");
//     boissonm.style.width="300px";
//     boissonm.style.top="-100px";
//     boissonm.style.left="-150px";
//     boissonm.style.rotate="-40deg";
    

// }

// document.querySelector(".boisson-2").addEventListener("click",Mafonction) ;