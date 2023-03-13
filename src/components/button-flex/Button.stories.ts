import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { ButtonFlexComponent } from './button-flex.component';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1

export default {
  title: 'Example/Button Flex component',
  component: ButtonFlexComponent,
  argTypes: { handleClick: { action: 'handleClick' } },
} as Meta;

const Template: Story<ButtonFlexComponent> = (args: ButtonFlexComponent) => ({
  component: ButtonFlexComponent,
  props: args,
});

export const Red = Template.bind({});
Red.args = {
  backgroundColor: 'red',
  label: 'Press Me',
  size: 'md',
};

export const Green = Template.bind({});
Green.args = {
  backgroundColor: 'green',
  label: 'Press Me',
  size: 'md',
};

export const Small = Template.bind({});
Small.args = {
  backgroundColor: 'red',
  label: 'Press Me',
  size: 'sm',
};

export const Large = Template.bind({});
Large.args = {
  backgroundColor: 'red',
  label: 'Press Me',
  size: 'lg',
};

export const LongLabel = Template.bind({});
LongLabel.args = {
  backgroundColor: 'red',
  label: 'Press Me adsf asdf asdf asdfasdfasd fasd fasd fasd',
  size: 'md',
};
