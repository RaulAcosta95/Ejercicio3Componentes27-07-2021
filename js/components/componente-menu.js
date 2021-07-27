import { LitElement,html, property } from "lit-element";
import {ComponentePagina1} from './componente-pagina1';
import {ComponentePagina2} from './componente-pagina2';
import {ComponentePagina3} from './componente-pagina3';

export class ComponenteMenu extends LitElement{
    static get property(){
        return {
        }
    }
    constructor(){
        super();
    }
    render(){
        return html `
            <link rel="stylesheet" href="./css/componenteMenu.css">
            <div id="componenteMenu">
                <a @click=${this.cambiarAPagina1}>Pagina 1</a>
                <a @click=${this.cambiarAPagina2}>Pagina 2</a>
                <a @click=${this.cambiarAPagina3}>Pagina 3</a>
            </div>
            <div id="pagina">
                <componente-pagina1></componente-pagina1>
            </div>
        `
    }
    cambiarAPagina1(){
        let pagina = this.shadowRoot.getElementById('pagina');
        
        let pagina1 = this.shadowRoot.querySelector('componente-pagina1');
        let pagina2 = this.shadowRoot.querySelector('componente-pagina2');
        let pagina3 = this.shadowRoot.querySelector('componente-pagina3');
        if(pagina1){
            pagina.removeChild(pagina1);
        }
        if(pagina2){
            pagina.removeChild(pagina2);
        }
        if(pagina3){
            pagina.removeChild(pagina3);
        }
        pagina.innerHTML="<componente-pagina1></componente-pagina1>";
    }
    cambiarAPagina2(){
        let pagina = this.shadowRoot.getElementById('pagina');
        
        let pagina1 = this.shadowRoot.querySelector('componente-pagina1');
        let pagina2 = this.shadowRoot.querySelector('componente-pagina2');
        let pagina3 = this.shadowRoot.querySelector('componente-pagina3');

        if(pagina1){
            pagina.removeChild(pagina1);
        }
        if(pagina2){
            pagina.removeChild(pagina2);
        }
        if(pagina3){
            pagina.removeChild(pagina3);
        }
        pagina.innerHTML="<componente-pagina2></componente-pagina2>";
    }
    cambiarAPagina3(){
        let pagina = this.shadowRoot.getElementById('pagina');
        
        let pagina1 = this.shadowRoot.querySelector('componente-pagina1');
        let pagina2 = this.shadowRoot.querySelector('componente-pagina2');
        let pagina3 = this.shadowRoot.querySelector('componente-pagina3');

        if(pagina1){
            pagina.removeChild(pagina1);
        }
        if(pagina2){
            pagina.removeChild(pagina2);
        }
        if(pagina3){
            pagina.removeChild(pagina3);
        }
        pagina.innerHTML="<componente-pagina3></componente-pagina3>";
    }
}
customElements.define('componente-menu', ComponenteMenu);