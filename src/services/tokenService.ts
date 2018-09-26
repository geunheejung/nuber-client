interface ITokenService {
  setToken(token: string): boolean;
  getToken(): string;
  removeToken(): boolean;
}

let tokenService;

class TokenService implements ITokenService {
  static create(): ITokenService {
    if (tokenService instanceof TokenService) {
      return tokenService;
    }

    tokenService = new TokenService();

    return tokenService;
  }

  private TOKEN_KEY: string = 'jwt';

  public setToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token);
    const isSavedToken: boolean = !!this.getToken();
    return isSavedToken;
  }

  public getToken() {
    const token: string = localStorage.getItem(this.TOKEN_KEY) || '';
    return token;
  }

  public removeToken() {
    localStorage.removeItem(this.TOKEN_KEY);
    const isRemovedToken: boolean = !!this.getToken();
    return isRemovedToken;
  }
}

export default TokenService.create();
