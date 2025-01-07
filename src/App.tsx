
import './App.css'

function App() {
  const onClick = async ()=>{
    let [tab] = await chrome.tabs.query({active: true});
    chrome.scripting.executeScript({
      target: {tabId: tab.id!},
      func: () => {
        console.log('Cambio de tema');
        alert('Tema Hornet Black');
        // (document.querySelector('.xjbqb8w ') as HTMLElement)!.style.backgroundColor = 'red';
        (document.body as HTMLElement)!.style.backgroundColor = '#000';

        (document.body as HTMLElement)!.style.backgroundImage = 'url(https://wallpapercave.com/wp/wp4377294.png)';
        (document.body as HTMLElement)!.style.backgroundRepeat = 'no-repeat';
        (document.body as HTMLElement)!.style.backgroundPosition = 'right';
        (document.body as HTMLElement)!.style.backgroundSize = '90%';
        (document.body as HTMLElement)!.style.overflow = 'hidden';


        (document.querySelector('.esquina-usuario') as HTMLElement)!.style.background = '#000';
        // (document.querySelector('.esquina-usuario') as HTMLElement)!.style.outline = '#fff';
        (document.querySelector('.esquina-usuario') as HTMLElement)!.style.color = '#fff';

        (document.querySelector('.barra-menu') as HTMLElement)!.style.background = '#000';
        (document.querySelectorAll('.barra-menu button') as NodeListOf<HTMLElement>).forEach(button => {
          button.style.color = '#fff';
        });
        (document.querySelector('.tabla') as HTMLElement)!.style.top = '25px';

        // if((document.querySelector('.barra-menu') as HTMLElement)?.style.display !== 'hidden'){
        //   (document.querySelector('.esquina-usuario') as HTMLElement)!.style.borderRight = '#fff';
        //   (document.querySelector('.barra-menu') as HTMLElement)!.style.borderRight = '#fff';
        // }
      }
    });


  }

  return (

    <>
      <button onClick={onClick}>Tema Hornet Black</button>
      <button onClick={onClick}>Otro boton</button>
      <button onClick={onClick}>Misma funcion</button>

    </>
  )
  }

export default App
