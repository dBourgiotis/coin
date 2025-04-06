<script setup lang="ts">
import { ref } from "vue";
const props = defineProps<{
  onSubmit: (feedback: FeedbackFormData) => Promise<void>;
}>();
export interface FeedbackFormData {
  summary: string;
  whys: string[];
  rootCause: string;
  discPersonality: string;
  previousFeedbackReaction: string;
  objectives: string;
}

const feedbackReactions = [
  { value: "positive", label: "Positive and Receptive" },
  { value: "neutral", label: "Neutral" },
  { value: "defensive", label: "Defensive" },
  { value: "resistant", label: "Resistant to Change" },
  { value: "engaged", label: "Actively Engaged" },
];

const formData = ref<FeedbackFormData>({
  summary: "",
  whys: ["", "", "", "", ""],
  rootCause: "",
  discPersonality: "",
  previousFeedbackReaction: "",
  objectives: "",
});

const handleSubmit = async () => {
  console.log("Form submitted:", formData.value);
  props.onSubmit(formData.value);
};
</script>

<template>
  <form class="space-y-8" @submit.prevent="handleSubmit">
    <!-- Summary Section -->
    <div>
      <label for="summary" class="block text-sm font-medium leading-6 text-gray-900">Summary</label>
      <div class="mt-2">
        <input
          id="summary"
          v-model="formData.summary"
          type="text"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          required
        >
      </div>
    </div>

    <!-- 5 Why's Analysis Section -->
    <div>
      <div>
        <h3 class="text-base font-semibold leading-6 text-gray-900">5 Why's Analysis</h3>
        <p class="mt-1 text-sm text-gray-500">Dive deeper into the root cause through progressive questioning.</p>
      </div>
      <div class="mt-6 space-y-6">
        <template v-for="(why, index) in 5" :key="index">
          <div>
            <label :for="'why' + (index + 1)" class="block text-sm font-medium leading-6 text-gray-900">
              Why #{{ index + 1 }}
            </label>
            <div class="mt-2">
              <input
                :id="'why' + (index + 1)"
                v-model="formData.whys[index]"
                type="text"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              >
            </div>
          </div>
        </template>
      </div>
    </div>

    <!-- Analysis Results Section -->
    <div>
      <div>
        <h3 class="text-base font-semibold leading-6 text-gray-900">Analysis Results</h3>
        <p class="mt-1 text-sm text-gray-500">Summarize your findings and personality assessment.</p>
      </div>
      <div class="mt-6 space-y-6">
        <div>
          <label for="rootCause" class="block text-sm font-medium leading-6 text-gray-900">Root Cause</label>
          <div class="mt-2">
            <input
              id="rootCause"
              v-model="formData.rootCause"
              type="text"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
            >
          </div>
        </div>

        <div>
          <label for="discPersonality" class="block text-sm font-medium leading-6 text-gray-900">DISC Personality</label>
          <div class="mt-2">
            <select
              id="discPersonality"
              v-model="formData.discPersonality"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
            >
              <option value="">Select a personality type</option>
              <option value="D">Dominance (D)</option>
              <option value="I">Influence (I)</option>
              <option value="S">Steadiness (S)</option>
              <option value="C">Conscientiousness (C)</option>
            </select>
          </div>
        </div>

        <div>
          <label for="previousFeedbackReaction" class="block text-sm font-medium leading-6 text-gray-900">
            Previous Feedback Reaction
          </label>
          <div class="mt-2">
            <select
              id="previousFeedbackReaction"
              v-model="formData.previousFeedbackReaction"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option value="">Select a reaction</option>
              <option
                v-for="reaction in feedbackReactions"
                :key="reaction.value"
                :value="reaction.value"
              >
                {{ reaction.label }}
              </option>
            </select>
          </div>
        </div>

        <div>
          <label for="objectives" class="block text-sm font-medium leading-6 text-gray-900">Objectives/Action Points</label>
          <div class="mt-2">
            <textarea
              id="objectives"
              v-model="formData.objectives"
              rows="4"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
            />
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-end">
      <button
        type="submit"
        class="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Submit Feedback
      </button>
    </div>
  </form>
</template>
