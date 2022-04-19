import { Increment } from "./Increment";
import { Provider } from "react-redux";

import { configureStore, createSlice } from "@reduxjs/toolkit";

const TaskBoxData = {
  tasks: [],
  status: "idle",
  error: null,
};

const TasksSlice = createSlice({
  name: "taskbox",
  initialState: TaskBoxData,
  reducers: {
    updateTaskState: (state, action) => {
      const { id, newTaskState } = action.payload;
      const task = state.tasks.findIndex((task) => task.id === id);
      if (task >= 0) {
        state.tasks[task].state = newTaskState;
      }
    },
  },
});

const store = configureStore({
  reducer: {
    taskbox: TasksSlice.reducer,
  },
});

// const Template = (args) => <Increment {...args} />;

export default {
  title: "Increment",
  component: Increment,
  parameters: {
    actions: {
      handles: ["click"],
    },
  },
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
};

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
