<script setup lang="ts">
import type { FeedbackFormData } from "~/components/FeedbackForm/FeedbackForm.vue";
const response = ref<string>('');

const onFeedbackSubmit = async (feedback: FeedbackFormData) => {
  const rawRes = await $fetch('/api/feedbackEvaluation', {
    method: 'POST',
    body: { feedback }
  })
  response.value = rawRes.response?.output_text
  console.log('CLIENT', response.value)
}
</script>
<template>
  <div class="flex flex-col gap-4 p-12 relative w-full">
    <section class="flex flex-col relative">
      <FeedbackForm :on-submit="onFeedbackSubmit" />
    </section>
    <section class="flex flex-col gap-4 px-6 relative w-full">
      <div class="text-sm text-gray-500">
        {{ response }}
      </div>
    </section>
  </div>
</template>
