(function(){

    const sliders = [...document.querySelectorAll('.proyectos_body3')];
    
    const buttonNext = document.querySelector('#next3');

    const buttonBefore = document.querySelector('#before3');

    let value;

        buttonNext.addEventListener('click', ()=>{
        changePosition(1);
        });

         buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
        });

        const changePosition = (add)=>{
        const currentProyectos = document.querySelector('.proyectos_body--show3').dataset.id;
        value = Number(currentProyectos);
        value+= add;
        
        sliders[Number(currentProyectos)-1].classList.remove('proyectos_body--show3');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length : 1;

        }

        sliders[value-1].classList.add('proyectos_body--show3');

        }

    
})();