console.log('HOLA MUNDO');

const colores = [ 'hsl(15, 100%, 70%)', 'hsl(195, 74%, 62%)' , 'hsl(348, 100%, 68%)','hsl(145, 58%, 55%)','hsl(264, 64%, 52%)', 'hsl(43, 84%, 65%)'];
const imagenes = ['./images/icon-work.svg','./images/icon-play.svg','./images/icon-study.svg','./images/icon-exercise.svg','./images/icon-social.svg','./images/icon-self-care.svg']
let index = 0
const timePerson = document.querySelector('.timePerson')
const time = 'daily'
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
let str = ''

try {

    fetch('./data.json')
        .then( data => data.json())
        .then( resp => {
            resp.forEach(element => {
                   str+= card(element.title, element.timeframes.weekly.current, colores[index], imagenes[index],element.timeframes.weekly.previous);
                   index++;
            });
            
                 let node = document.createRange()
                 let frag = node.createContextualFragment(str)
                 timePerson.appendChild(frag)
        })
    
} catch (error) {
    
}


