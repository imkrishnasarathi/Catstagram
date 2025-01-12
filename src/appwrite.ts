import { Client, Account, Databases, Storage } from 'appwrite';

const client = new Client();
const account = new Account(client);

client
.setEndpoint('https://cloud.appwrite.io/v1') 
.setProject('6774db4f0019e0f9e984')

const databases = new Databases(client);
const storage = new Storage(client);

export { client, account, databases, storage };