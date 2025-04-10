<script setup lang="ts">
import { ref } from "vue";
import { tooltips } from "./tooltips.config";
const props = defineProps<{
  onSubmit: (feedback: FeedbackFormData) => Promise<void>;
}>();
export interface FeedbackFormData {
  whatIsTheIssue: string;
  whoIsInvolved: string;
  whatIsTheImpact: string;
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
  whatIsTheIssue: "",
  whoIsInvolved: "",
  whatIsTheImpact: "",
  whys: ["", "", "", "", ""],
  rootCause: "",
  discPersonality: "",
  previousFeedbackReaction: "",
  objectives: "",
});

const isLoading = ref(false);

const handleSubmit = async () => {
  isLoading.value = true;
  await props.onSubmit(formData.value);
  isLoading.value = false;
};

const toast = useToast();

function showToast(title: string, description: string) {
  toast.add({
    title,
    description,
    class: "overflow-scroll max-h-[80vh]",

  });
}
</script>

<template>
  <form class="space-y-8" @submit.prevent="handleSubmit">
    <!-- Summary Section -->
    <div class="space-y-6">
      <div>
        <h3 class="text-base font-semibold leading-6 text-gray-900">Summary</h3>
        <p class="mt-1 text-sm text-gray-500">
          Define the issue/problem, who is involved and what is the impact.
        </p>
      </div>

      <div>
        <label
          for="whatIsTheIssue"
          class="block text-sm font-medium leading-6 text-gray-900"
          >What is the issue</label
        >
        <div class="mt-2">
          <input
            id="whatIsTheIssue"
            v-model="formData.whatIsTheIssue"
            type="text"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          >
        </div>
      </div>
      <div>
        <label
          for="whoIsInvolved"
          class="block text-sm font-medium leading-6 text-gray-900"
          >Who is involved</label
        >
        <div class="mt-2">
          <input
            id="whoIsInvolved"
            v-model="formData.whoIsInvolved"
            type="text"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          >
        </div>
      </div>
      <div>
        <label
          for="whatIsTheImpact"
          class="block text-sm font-medium leading-6 text-gray-900"
          >What is the impact</label
        >
        <div class="mt-2">
          <input
            id="whatIsTheImpact"
            v-model="formData.whatIsTheImpact"
            type="text"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          >
        </div>
      </div>
    </div>

    <!-- 5 Why's Analysis Section -->
    <div>
      <div>
        <h3 class="text-base font-semibold leading-6 text-gray-900">
          5 Why's Analysis
        </h3>
        <p
          class="mt-1 text-sm text-gray-500 flex items-center-safe gap-1 cursor-pointer transition-colors ease-in hover:text-gray-950"
          @click="showToast(tooltips.fiveWhys)"
        >
          Below there are a series of 5 whys questions that will guide you to
          identify the root of the problem you want work on.
          <Icon
            name="ri:information-2-line"
          />
        </p>
      </div>
      <div class="mt-6 space-y-6">
        <template v-for="(why, index) in 5" :key="index">
          <div>
            <label
              :for="'why' + (index + 1)"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
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
        <h3 class="text-base font-semibold leading-6 text-gray-900">
          Analysis Results
        </h3>
        <p class="mt-1 text-sm text-gray-500">
          Summarize your findings and personality assessment.
        </p>
      </div>
      <div class="mt-6 space-y-6">
        <div>
          <label
            for="rootCause"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Root Cause
          </label>
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
          <label
            for="discPersonality"
            class="text-sm font-medium leading-6 text-gray-900 flex items-center-safe gap-1 cursor-pointer"
            @click="showToast(tooltips.disk)"
          >
            DISC Personality
            <Icon name="ri:information-2-line" />
          </label>
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
          <label
            for="previousFeedbackReaction"
            class="block text-sm font-medium leading-6 text-gray-900"
          >
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
          <label
            for="objectives"
            class="flex items-center-safe gap-1 cursor-pointer text-sm font-medium leading-6 text-gray-900"
            @click="showToast(tooltips.coin)"
            >Objectives/Action Points (use COIN)
            <Icon name="ri:information-2-line" />
          </label>
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
        class="inline-flex gap-1 justify-center items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        :disabled="isLoading"
      >
        <Icon v-if="isLoading" name="line-md:loading-twotone-loop" size="18" />
        <span>Submit Feedback</span>
      </button>
    </div>
  </form>
</template>
