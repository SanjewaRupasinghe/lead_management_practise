import type { User } from "../../types/user.types";

export class AuthService {
  private readonly storageKey = "auth-storage";

  public async login(user: User, token: string) {
    localStorage.setItem(this.storageKey, JSON.stringify({ user, token }));
  }

  public async logout() {
    localStorage.removeItem(this.storageKey);
  }

  public async refreshToken(token: string) {
    const stored = localStorage.getItem(this.storageKey);
    if (stored) {
      const { user } = JSON.parse(stored);
      localStorage.setItem(this.storageKey, JSON.stringify({ user, token }));
    }
  }
}
