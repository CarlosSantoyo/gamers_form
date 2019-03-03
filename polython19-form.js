import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-form/iron-form.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
/**
 * `polython19-form`
 * form to get data from the users
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class Polython19Form extends PolymerElement {
  static get template() {
    return html`   
<iron-form id="form3">
<form action="/foo" method="post">
  <paper-input name="gamerName" label="Nombre del torneo" value="" required></paper-input>
  <paper-input name="gameTitle" label="Número de jugadores" value="" required></paper-input>
  <br><br>
  <paper-button raised on-click="form3.submit()">Listo!</paper-button>
  <paper-button raised on-click="form3.reset()">Borrar</paper-button>
</form>
<div class="output"></div>
</iron-form>  

<script>
form3.addEventListener('iron-form-submit', function(event) {
  this.querySelector('.output').innerHTML = JSON.stringify(event.detail);
  this.console.log(event.detail);
});
</script>
`;
}
    
}

window.customElements.define('polython19-form', Polython19Form);
