import UILoading from './UILoading';

export default {
  title: 'Ui-Kit/UILoading',
  component: UILoading
}

const Template = (args) => <UILoading {...args} />;

const props = {
  theme: 'white'
}

export const Black = Template.bind({})
Black.args = {
  ...props,
  theme: 'black'
};

export const Wite = Template.bind({})
Wite.args = {
  ...props,
  theme: 'white'
};

export const Grey = Template.bind({})
Grey.args = {
  ...props,
  theme: 'Grey'
};



