const dialogflow = require('@google-cloud/dialogflow');
const uuid = require('uuid');

const sessionId = uuid.v4();
/**
 * Send a query to the dialogflow agent, and return the query result.
 * @param {string} projectId The project to be used
 */
async function runIntent(projectId, requestText) {
// A unique identifier for the given session
const sessionClient = new dialogflow.SessionsClient();

const sessionPath = sessionClient.projectAgentSessionPath(
    projectId,
    sessionId
);
const intentRequest = {
    session: sessionPath,
    queryInput: {
    text: {
        // The query to send to the dialogflow agent
        text: requestText,
        // The language used by the client (en-US)
        languageCode: 'en-US',
    },
    },
};

// The text query request.
// Send request and log result
const responses = await sessionClient.detectIntent(intentRequest);
const result = responses[0].queryResult;

return await {
        "Query": result.queryText,
        "Response": result.fulfillmentText,
        "Intent": result.intent.displayName
    };
}
  
module.exports.runIntent = runIntent;