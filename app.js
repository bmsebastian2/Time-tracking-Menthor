console.log('HOLA MUNDO');

const colores = [ 'hsl(15, 100%, 70%)', 'hsl(195, 74%, 62%)' , 'hsl(348, 100%, 68%)','hsl(145, 58%, 55%)','hsl(264, 64%, 52%)', 'hsl(43, 84%, 65%)'];
const imagenes = ['./images/icon-work.svg','./images/icon-play.svg','./images/icon-study.svg','./images/icon-exercise.svg','./images/icon-social.svg','./images/icon-self-care.svg']
const timePerson = document.querySelector('.timePerson')
const time = 'daily'
const daily = document.querySelector('.daily')
const weekly = document.querySelector('.weekly')
const monthly = document.querySelector('.monthly')
const opcion = ''
const card = (title, tim, color, imagen, tim2) => {return`  <div class="cards">

                        
<div class="color" style='background: ${color}'>
    <img src=${imagen} alt="">
</div>

<div class="dataTime">
    <div class="header">
        <h4>${title}</h4>
        <a href="">
            <img src="./images/icon-ellipsis.svg" alt="">
        </a>
    </div>
    <div class="body">
        <h4>${tim}hrs</h4>
        <p>Last Week - ${tim2}hrs</p>
    </div>
    
</div>

</div>
`};

const cargar = (string) => {     
    
    if(timePerson.innerHTML){
        timePerson.innerHTML=''
        muestraCards(string)
    }else{
        timePerson.innerHTML=''
        muestraCards('weekly')
    }

}



const muestraCards = (variable) => {
    let index = 0;
    let str = '';

    try {
    
        fetch('./data.json')
            .then( data => data.json())
            .then( resp => {
                resp.forEach(element => {
                       str+= card(element.title, element.timeframes[variable].current, colores[index], imagenes[index],element.timeframes[variable].previous);
                       index++;
                });
                
                     let node = document.createRange()
                     let frag = node.createContextualFragment(str)
                     timePerson.appendChild(frag)
            })
        
    } catch (error) {
        
    }
}

daily.addEventListener('click', () => {        
    if(daily.style.color!=='red'){
        daily.style.color='red' 
        cargar('daily')
        weekly.style.color='white' 
        monthly.style.color='white' 
    }       
});
weekly.addEventListener('click',()=>{
    if(weekly.style.color!='red'){
       weekly.style.color='red' 
       cargar('weekly')
       daily.style.color='white' 
       monthly.style.color='white' 
    }
})
monthly.addEventListener('click',()=> {
    
    if(monthly.style.color!='red'){
        monthly.style.color='red' 
        cargar('monthly')
        daily.style.color='white' 
        weekly.style.color='white' 
     }
});


cargar('weekly');
