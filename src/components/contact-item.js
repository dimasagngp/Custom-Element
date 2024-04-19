class ContactItem extends HTMLElement {
    constructor() {
        super();
    }
    set name(value) {
        this.setAttribute('name', value);
    }
    set username(value) {
        this.setAttribute('username', value);
    }
    // Dipanggil ketika elemen terhubung ke DOM
    connectedCallback() {
        this.render(); // Memanggil fungsi render saat elemen terhubung
    }

  // Fungsi untuk merender tampilan elemen
    render() {
        const name = this.getAttribute('name') || 'user';
        const username = this.getAttribute('username') || 'defaultusername';
    
    // Mengatur konten Shadow DOM
        this.innerHTML = `
            <div class="contact-item">
                <h3 class="contact-item_title">${name}</h3>
                <p class="contact-item_username">@${username}</p>
            </div>
        `;
  }
}
customElements.define('contact-item', ContactItem);