import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

function generateResponse(input: string) {
  return client.responses.create({
    model: "gpt-4o-mini",
    input: input,
    text: {
      format: {
        type: "json_schema",
        name: "feedback_evaluation",
        schema: {
          type: "object",
          properties: {
            feedbackEvaluation: {
              type: "string"
            },
            fiveWhysEvaluation: {
              type: "string"
            },
            feedbackObjectivesEvaluation: {
              type: "string"
            },
            feedbackActionsEvaluation: {
              type: "string"
            },
            feedforwardSuggestions: {
              type: "string"
            },
          },
          required: ["feedbackEvaluation", "fiveWhysEvaluation", "feedbackObjectivesEvaluation", "feedbackActionsEvaluation", "feedforwardSuggestions"],
          additionalProperties: false,
        },
      }
    }
  });
}

export const openAiFacade = {
  generateResponse,
};
