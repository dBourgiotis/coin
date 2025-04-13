<script setup lang="ts">
import type { AiResponseType } from "~/components/AiResponse/AiResponse";
import AiResponse from "~/components/AiResponse/AiResponse.vue";
import type { FeedbackFormData } from "~/components/FeedbackForm/FeedbackForm.vue";

const response: Ref<AiResponseType | undefined> = ref();

const onFeedbackSubmit = async (feedback: FeedbackFormData) => {
  const rawRes = await $fetch('/api/feedbackEvaluation', {
    method: 'POST',
    body: { feedback }
  })
  console.log(JSON.parse(rawRes.response.output_text))
  response.value = JSON.parse(rawRes.response.output_text)
}
</script>
<template>
  <div class="flex flex-col gap-4 p-12 relative w-full">
    <section class="flex flex-col relative">
      <FeedbackForm :on-submit="onFeedbackSubmit" />
    </section>
    <section class="flex flex-col gap-4 relative w-full">
      <div class="text-sm text-gray-500" >
        <AiResponse v-if="response" :response="response" />
      </div>
    </section>
  </div>
</template>
