import { LitElement,html, property } from "lit-element";
export class ComponentePagina2 extends LitElement{
    static get property(){
        return {

        }
    }
    constructor(){
        super();
    }
    render(){
        return html `
            <link rel="stylesheet" href="./css/componentePagina.css">
            <div id="componentePagina">
                <p>Componente Página <b>2</b></p>
                <p>Contenido de la página <b>2</b></p>
            </div>
        `
    }
}
customElements.define('componente-pagina2', ComponentePagina2);