import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import App from '../App/App';

import { Button } from '@storybook/react/demo';

storiesOf('Button', module)
  .add('window modal popup', () => <App />)
