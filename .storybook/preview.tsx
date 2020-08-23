import { addDecorator } from "@storybook/react"
import * as React from "react"
import { withPerformance } from "storybook-addon-performance"
import { withA11y } from "@storybook/addon-a11y"
import { withKnobs } from '@storybook/addon-knobs';

import Layout from './Layout';

addDecorator(storyFn =>  <Layout>{storyFn()}</Layout>);
addDecorator(withPerformance)
addDecorator(withA11y)
addDecorator(withKnobs);
