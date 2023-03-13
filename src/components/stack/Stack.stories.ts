import { Meta, Story } from '@storybook/angular';
import { StackComponent } from './stack.component';

export default {
  title: 'Example/Stack',
  component: StackComponent,
  argTypes: {
    numberOfChildren: { type: 'number', defaultValue: 4 },
  },
} as Meta;

const Template: Story<StackComponent> = (args: StackComponent) => ({
  component: StackComponent,
  props: args,
});

export const Horizontal = Template.bind({});
Horizontal.args = {
  direction: 'row',
  spacing: 2,
  wrap: false,
};

export const Vertical = Template.bind({});
Vertical.args = {
  direction: 'column',
  spacing: 2,
  wrap: false,
};

export const NoSpacing = Template.bind({});
NoSpacing.args = {
  direction: 'row',
  spacing: 0,
  wrap: false,
};

export const WrapOverflow = Template.bind({});
WrapOverflow.args = {
  numberOfChildren: 40,
  direction: 'row',
  spacing: 2,
  wrap: true,
};

export const Empty = Template.bind({});
Empty.args = {
  numberOfChildren: 0,
  direction: 'row',
  spacing: 2,
  wrap: false,
};
