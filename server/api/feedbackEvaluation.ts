import type { FeedbackFormData } from "~/components/FeedbackForm/FeedbackForm.vue"
import { openAiFacade } from "../services/openAiFacade"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  if (!body?.feedback) return Promise.reject(new Error('No feedback provided'))
  const instructions = composeInstructions(body.feedback)
  const response = await openAiFacade.generateResponse(instructions)
  console.log('SERVER', response)
  return {
    response
  }
})

function composeInstructions(feedback: FeedbackFormData): string {
  const instructions = [
    'I would like you to evaluate the following feedback:',
    `this is the summary: ${feedback.summary}`,
    `this is the whys: ${feedback.whys.join('\n')}`,
    `this is the root cause: ${feedback.rootCause}`,
    `this is the objectives: ${feedback.objectives}`,
    `this is the direct report's DISC profile: ${feedback.discPersonality}`,
    `this is the direct report's previous feedback: ${feedback.previousFeedbackReaction}`,
    `I would like you to evaluate if I have correctly utilised the 5 Whys technique and if I have correctly utilised the DISC profile to evaluate the direct report's personality.`,
    'Plus to evaluate if the objectives/actions are gonna be actionable'
  ].join('\n')
  return instructions
}