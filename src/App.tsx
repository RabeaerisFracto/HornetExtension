
import './App.css' //Estilo de opciones de extension (boton de navegador).

function App() {
  const onClick = async ()=>{  //funcion asincrona
    let [tab] = await chrome.tabs.query({active: true});
    //variable [destructurada, primera pestaña activa] = llamada de API de chrome que retorna pestañas activas de navegador.
    chrome.scripting.executeScript({ // Permite inyectar script de JS en pagina abierta de navegador.
      target: {tabId: tab.id!}, // targetea la pestaña activa.
      func: () => {
        console.log('Cambio de tema');
        alert('Tema Hornet Black');
        // (document.querySelector('.xjbqb8w ') as HTMLElement)!.style.backgroundColor = 'red';// querySelector busca clase de elemento en pagina abierta.
        (document.body as HTMLElement)!.style.backgroundColor = '#000';// Afecta todo el body.

        (document.body as HTMLElement)!.style.backgroundImage = 'url(https://wallpapercave.com/wp/wp4377294.png)';
        (document.documentElement as HTMLElement)!.style.backgroundColor = 'black'; (document.body as HTMLElement)!.style.backgroundRepeat = 'no-repeat';
        (document.body as HTMLElement)!.style.backgroundPosition = 'right';
        (document.body as HTMLElement)!.style.backgroundSize = '90%';
        (document.body as HTMLElement)!.style.overflow = 'hidden';

        // (document.querySelector('.label-menu h1') as HTMLElement)!.textContent = '#555';
        // Para cambiar contenido de texto seleccionado en pestaña abierta.

        (document.querySelector('.esquina-usuario') as HTMLElement)!.style.background = '#000';
        // (document.querySelector('.esquina-usuario') as HTMLElement)!.style.outline = '#fff';
        (document.querySelector('.esquina-usuario') as HTMLElement)!.style.color = '#fff';

        (document.querySelector('.barra-menu') as HTMLElement)!.style.background = '#000';
        (document.querySelectorAll('.barra-menu button') as NodeListOf<HTMLElement>).forEach(button => {
          button.style.color = '#fff';
        });//Para cambiar todos los botones.
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
