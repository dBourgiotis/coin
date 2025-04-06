import OpenAI from "openai";

const client = new OpenAI({
  // TODO: move to env
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

function generateResponse(input: string) {
  return client.responses.create({
    model: "gpt-4o-mini",
    input: input,
  });
}

export const openAiFacade = {
  generateResponse,
};
