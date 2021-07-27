import { LitElement,html, property } from "lit-element";
export class ComponentePagina3 extends LitElement{
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
                <p>Componente Página <b>3</b></p>
                <p>Contenido de la página <b>3</b></p>
            </div>
        `
    }
}
customElements.define('componente-pagina3', ComponentePagina3);