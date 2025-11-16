const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function main() {
  await client.connect();
  console.log("Connected!");

  const db = client.db("shop");
  const products = db.collection("products");

  // Insert
  await products.insertOne({ name: "Pen", price: 10 });
  console.log("Inserted");

  // Find
  const items = await products.find().toArray();
  console.log("All items:", items);

  // Update
  await products.updateOne({ name: "Pen" }, { $set: { price: 15 } });
  console.log("Updated");

  // Delete
  await products.deleteOne({ name: "Pen" });
  console.log("Deleted");

  await client.close();
}

main();
