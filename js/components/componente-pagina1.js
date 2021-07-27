import { LitElement,html, property } from "lit-element";
export class ComponentePagina1 extends LitElement{
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
                <p>Componente Página <b>1</b></p>
                <p>Contenido de la página <b>1</b></p>
            </div>
        `
    }
}
customElements.define('componente-pagina1', ComponentePagina1);