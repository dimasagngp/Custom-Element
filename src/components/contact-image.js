class ContactImage extends HTMLElement {
    constructor() {
        super();
        this.myImage();
    }
    myImage() {
        this.innerHTML = `
        <div class="contact-image">
            <img src="src/img/default.jpg" alt="contact avatar"/>
        </div>
        `;
    }
}
customElements.define('contact-image', ContactImage);
