class ContactApp extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
        <div class="contact-app">
            <contact-image></contact-image>
            <contact-item name="Dimas Agung" username="dimasagung"></contact-item>
        </div>
        `;
    }
}
customElements.define('contact-app', ContactApp);
