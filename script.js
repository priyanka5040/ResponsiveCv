function openSide() {
    sidebar.style.display = 'block';
    let btn = document.querySelector('.open');
    btn.style.display = 'none';

}

function closeSide() {
    sidebar.style.display = 'none';
    let btn = document.querySelector('.open');
    btn.style.display = 'block';
    
}


let sidebar = document.querySelector('.sideBar');
sidebar.addEventListener('click', (e)=>{
    console.log(e.target);
    if(e.target.getAttribute('sideNavClick')){
        sidebar.style.display = 'none';
        let btn = document.querySelector('.open');
        btn.style.display = 'block';
    }
    
});


