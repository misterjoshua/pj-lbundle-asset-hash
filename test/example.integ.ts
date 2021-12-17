import { App, Stack } from 'aws-cdk-lib';
import { ExampleFunction } from '../src/example-function';

const app = new App();
const stack = new Stack(app, 'integ-example');

new ExampleFunction(stack, 'ExampleFunction');

app.synth();