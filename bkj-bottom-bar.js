import {html, css, LitElement} from 'https://cdn.skypack.dev/lit-element';


export class BkjBottomBar extends LitElement {
  static get styles() {
    return css`
      
    `
  }

  render() {
    return html`
      <div id="bottombar">
        <div id="fab">
          <bkj-icon name="plus" size="30px"></bkj-icon>
        </div>
        <nav>
          <section id="items">
            <bkj-icon name="menu"></bkj-icon>
            <bkj-icon name="magnify"></bkj-icon>
            <bkj-icon name="dots-vertical"></bkj-icon>
          </section>
        </nav>
      </div>
    `
  }
}
customElements.define("bkj-bottom-bar", BkjBottomBar)