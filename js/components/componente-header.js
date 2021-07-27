import { LitElement,html, property } from "lit-element";
export class ComponenteHeader extends LitElement{
    static get property(){
        return {

        }
    }
    constructor(){
        super();
    }
    render(){
        return html `
            <link rel="stylesheet" href="./css/componenteHeader.css">
            <div id="componenteHeader">
                <h1>Componente Header</h1>
            </div>
        `
    }
}
customElements.define('componente-header', ComponenteHeader);