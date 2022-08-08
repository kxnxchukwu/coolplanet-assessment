import { Handler } from "@netlify/functions";
import initialData from "../src/static/user.json"

const handler: Handler = async function (event, context) {
  // Do stuff and return a response...
  return {
    statusCode: 200,
    body: JSON.stringify(initialData)
  }
};

export { handler };