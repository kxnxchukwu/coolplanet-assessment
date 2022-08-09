import { Handler } from "@netlify/functions";
import initialData from "../src/static/user.json"

const handler: Handler = async function (event, context) {
  // Do stuff and return a response...
  const { queryStringParameters } = event;
  const userQuery = parseInt(queryStringParameters.user)
  const filteredUser = initialData.filter(user => {
    return user.id === userQuery
    });

  return {
    statusCode: 200,
    body: JSON.stringify(filteredUser)
  }
};

export { handler };