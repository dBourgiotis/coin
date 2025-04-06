import type { FeedbackFormData } from "~/components/FeedbackForm/FeedbackForm.vue";

export const mockFeedback: FeedbackFormData = {
  summary: "Jackson's performance is declining the last 3 months",
  whys: [
    'He fails to delivery on time',
    'he fails to estimate his work on time',
    'he fails to communicate on time',
    'He seems to have lost interest',
    'He was not happy about not getting a salary increase',
  ],
  rootCause: "He is not motivate to do the work",
  objectives: "My plan is to speak to him, ask him first of all his opinion on the delays, if displays understanding I will try to revise a plan with weekly check ups.",
  discPersonality: "Jackson is a D personality",
  previousFeedbackReaction: "Jackson is not motivated",
};
