import { Story, Meta } from '@storybook/react';
import WordPriceCounter, { WordPriceCounterProps } from '../components/WordPriceCounter/WordPriceCounter';

export default {
  title: 'Example/WordPriceCounter',
  component: WordPriceCounter,
} as Meta;

const Template: Story<WordPriceCounterProps> = (args) => <WordPriceCounter {...args} />;

export const Default = Template.bind({})
Default.args = {
    pricePerWord: 0.25,
    wordsCount: 20
}