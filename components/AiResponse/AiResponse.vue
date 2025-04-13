<script setup lang="ts">
import type { AiResponseType } from './AiResponse';

defineProps<{
  response: AiResponseType;
}>();
</script>
<template>
  <div class="ai-response">
    <!-- Feedback Evaluation Section -->
    <section class="mb-8">
      <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h3 class="text-xl font-semibold text-gray-800 mb-4">Feedback Evaluation</h3>
        <p class="text-gray-700 leading-relaxed">{{ response.feedbackEvaluation }}</p>
      </div>
    </section>

    <!-- Five Whys Evaluation Section -->
    <section class="mb-8">
      <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h3 class="text-xl font-semibold text-gray-800 mb-4">Five Whys Analysis</h3>
        <p class="text-gray-700 leading-relaxed">{{ response.fiveWhysEvaluation }}</p>
      </div>
    </section>

    <!-- Feedback Objectives Evaluation Section -->
    <section class="mb-8">
      <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h3 class="text-xl font-semibold text-gray-800 mb-4">Objectives Evaluation</h3>
        <p class="text-gray-700 leading-relaxed">{{ response.feedbackObjectivesEvaluation }}</p>
      </div>
    </section>

    <!-- Feedback Actions Evaluation Section -->
    <section class="mb-8">
      <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h3 class="text-xl font-semibold text-gray-800 mb-4">Actions Evaluation</h3>
        <p class="text-gray-700 leading-relaxed">{{ response.feedbackActionsEvaluation }}</p>
      </div>
    </section>

    <!-- Feedforward Suggestions Section -->
    <section class="mb-8">
      <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h3 class="text-xl font-semibold text-gray-800 mb-4">Feedforward Suggestions</h3>
        <p class="text-gray-700 leading-relaxed">{{ response.feedforwardSuggestions }}</p>
      </div>
    </section>
  </div>
</template>
