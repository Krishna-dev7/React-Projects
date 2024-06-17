import conf from "../conf/conf";
import { Client, Storage, Databases, Id } from "appwrite";

export class Service {
    client = new Client();
    storage;
    databases;

    constructor() {
        this.client
            .setEndPoint(conf.appwriteUrl)
            .setProjectId(conf.appwriteProjectId);

        databases = new Databases(this.client);
        storage = new Storage(this.client);
    }

    // method for databases services

    async createPost() {
        try {
            await this.databases.create()
        } catch (error) {
            
        }
    }
}

const service = new Service();

export default Service;