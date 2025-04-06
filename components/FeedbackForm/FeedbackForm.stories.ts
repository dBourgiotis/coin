import type { Meta, StoryObj } from "@storybook/vue3";
import FeedbackForm from "./FeedbackForm.vue";

const meta = {
  title: "Forms/FeedbackForm",
  component: FeedbackForm,
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (story) => ({
      components: { story },
      template: `
          <story />
      `,
    }),
  ],
} satisfies Meta<typeof FeedbackForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FeedbackForm },
    setup() {
      return { args };
    },
    template: '<FeedbackForm v-bind="args" />',
  }),
};
