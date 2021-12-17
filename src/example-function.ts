// ~~ Generated by projen. To modify, edit .projenrc.js and run "npx projen".
import * as path from 'path';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

/**
 * Props for ExampleFunction
 */
export interface ExampleFunctionProps extends lambda.FunctionOptions {
}

/**
 * An AWS Lambda function which executes src/example.
 */
export class ExampleFunction extends lambda.Function {
  constructor(scope: Construct, id: string, props?: ExampleFunctionProps) {
    super(scope, id, {
      description: 'src/example.lambda.ts',
      ...props,
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../assets/example.lambda')),
    });
  }
}