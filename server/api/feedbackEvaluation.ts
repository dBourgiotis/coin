import type { FeedbackFormData } from "~/components/FeedbackForm/FeedbackForm.vue"
import { openAiFacade } from "../services/openAiFacade"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  if (!body?.feedback) return Promise.reject(new Error('No feedback provided'))
  const instructions = composeInstructions(body.feedback)
  const response = await openAiFacade.generateResponse(instructions)
  console.log('SERVER')
  return {
    response
  }
})

function composeInstructions(feedback: FeedbackFormData): string {
  const instructions = [
    'I would like you to evaluate the following feedback:',
    `this is the what is the issue: ${feedback.whatIsTheIssue}`,
    `this is the who is involved: ${feedback.whoIsInvolved}`,
    `this is the what is the impact: ${feedback.whatIsTheImpact}`,
    `this is the whys: ${feedback.whys.join('\n')}`,
    `this is the root cause: ${feedback.rootCause}`,
    `this is the objectives: ${feedback.objectives}`,
    `this is the direct report's DISC profile: ${feedback.discPersonality}`,
    `this is the direct report's previous feedback: ${feedback.previousFeedbackReaction}`,
    `I would like your response to be in the following format:`,
    `- Evaluation of the feedback`,
    `- Evaluation of the 5 Whys technique`,
    `- Evaluation of the feedback/objectives based on the DISC profile`,
    `- Evaluation of the objectives/actions based on the COIN model & the previous feedback`,
    `- Feedforward suggestions`,
  ].join('\n')
  return instructions
}
