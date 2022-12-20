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