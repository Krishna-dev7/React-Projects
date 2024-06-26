import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }


  // sign up feature
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // then log in the user
        return await this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  // login feature
  async login({ email, password }) {
    try {
      return await this.account
        .createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  // isLogin feature
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      throw error;
    }
    return null;
  }

  // logout feature
  async logout() {
    try {
      if (this.getCurrentUser) {
        await this.account.deleteSessions();
      }
    } catch (error) {
      throw error;
    }
  }

}

const authService = new AuthService();

export default authService;