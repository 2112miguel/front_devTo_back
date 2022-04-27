export default class Token {
  tokens = [];
  constructor() {
    this.cargarToken();
    this.guardarToken();
  }
  set tokens(tokens) {
    this.tokens = tokens;
  }

  get tokens() {
    return this.tokens;
  }

  guardarToken(usuario) {
    const tokenJson = JSON.stringify(this.tokens);
    localStorage.setItem(usuario, tokenJson);
  }

  cargarToken(usuario) {
    const tokenLocal = localStorage.getItem(usuario);
    if (tokenLocal) {
      this.tokens = JSON.parse(tokenLocal);
    }
  }
}
