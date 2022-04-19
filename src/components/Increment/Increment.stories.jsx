import { Increment } from "./Increment";

export default {
  title: "Increment",
  component: Increment,
  parameters: {
    actions: {
      handles: ["click"],
    },
  },
};

// const Template = (args) => <Increment {...args} />;

export const Default = () => <Increment />;

// const Template = (args) => <Increment {...args} />;

// export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   primary: true,
//   label: "Increment",
// };

// Increment.defaultProps = {
//   onClick: undefined,
// };
