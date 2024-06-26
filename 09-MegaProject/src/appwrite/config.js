import conf from "../conf/conf";
import { Storage, Databases, ID, Client, Query } from "appwrite";

export class Service {
  client = new Client();
  storage;
  database;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.database = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  // * post related services
  async createPost({ slug, title, content, featuredImage, status, userId }) {
    try {
      return await this.database.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("CreatePost error" + error.message);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.database.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("update post error :: " + error.message);
    }
  }

  async deletePost(slug) {
    try {
      await this.database.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );

      return true;
    } catch (error) {
      console.log("delete post error :: " + error.message);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.database.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("error at getPost :: " + error.message);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.database.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("error at getPosts :: " + error.message);
      return false;
    }
  }

  // * file upload related services

  async uploadFile(file) {
    try {
      return await this.storage.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file,
      )
    } catch (error) {
      console.log("error while creating file :: " + error.message);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.storage.deleteFile(
        conf.appwriteBucketId,
        fileId,
      );
      return false;
    } catch (error) {
      console.log("error while deleting file :: " + error.message);
      return false;
    }
  }

  getFilePreview(fileId) {
    return this.storage.getFilePreview(
      conf.appwriteBucketId,
      fileId
    )
  }
}

const service = new Service();
export default service;
