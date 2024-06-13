const env = import.meta.env;

const conf = {
  appwriteUrl: env.VITE_APPWRITE_URL,
  appwriteProjectId: env.VITE_APPWRITE_PROJECT_ID,
  appwriteDatabaseId: env.VITE_APPWRITE_DATABASE_ID,
  appwriteCollectionId: env.VITE_APPWRITE_COLLECTION_ID,
  appwriteBucketId: env.VITE_APPWRITE_BUCKET_ID
}

export default conf;