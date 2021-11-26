const faker = require("faker")
const { createClient } = require("@astrajs/collections")
let id = faker.random.uuid()
const collection = "tktkposts"

exports.handler = async function (event, context, callback) {
  const astraClient = await createClient({
    astraDatabaseId: process.env.ASTRA_DB_ID,
    astraDatabaseRegion: process.env.ASTRA_DB_REGION,
    applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
  });

  const users = astraClient
    .namespace(process.env.ASTRA_DB_KEYSPACE)
    .collection(collection);

  try {
    const user = await users.create(id, event.body)

    return {
      statusCode: 200,
      body: JSON.stringify(user),
    };
  } catch (e) {
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    }
  }
}
