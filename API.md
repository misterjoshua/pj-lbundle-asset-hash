# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

### ExampleFunction <a name="pj-lbundle-asset.ExampleFunction" id="pjlbundleassetexamplefunction"></a>

An AWS Lambda function which executes src/example.

#### Initializers <a name="pj-lbundle-asset.ExampleFunction.Initializer" id="pjlbundleassetexamplefunctioninitializer"></a>

```typescript
import { ExampleFunction } from 'pj-lbundle-asset'

new ExampleFunction(scope: Construct, id: string, props?: ExampleFunctionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#pjlbundleassetexamplefunctionparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#pjlbundleassetexamplefunctionparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#pjlbundleassetexamplefunctionparameterprops) | [`pj-lbundle-asset.ExampleFunctionProps`](#pj-lbundle-asset.ExampleFunctionProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="pj-lbundle-asset.ExampleFunction.parameter.scope" id="pjlbundleassetexamplefunctionparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="pj-lbundle-asset.ExampleFunction.parameter.id" id="pjlbundleassetexamplefunctionparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Optional</sup> <a name="pj-lbundle-asset.ExampleFunction.parameter.props" id="pjlbundleassetexamplefunctionparameterprops"></a>

- *Type:* [`pj-lbundle-asset.ExampleFunctionProps`](#pj-lbundle-asset.ExampleFunctionProps)

---





## Structs <a name="Structs" id="structs"></a>

### ExampleFunctionProps <a name="pj-lbundle-asset.ExampleFunctionProps" id="pjlbundleassetexamplefunctionprops"></a>

Props for ExampleFunction.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { ExampleFunctionProps } from 'pj-lbundle-asset'

const exampleFunctionProps: ExampleFunctionProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`maxEventAge`](#pjlbundleassetexamplefunctionpropspropertymaxeventage) | [`aws-cdk-lib.Duration`](#aws-cdk-lib.Duration) | The maximum age of a request that Lambda sends to a function for processing. |
| [`onFailure`](#pjlbundleassetexamplefunctionpropspropertyonfailure) | [`aws-cdk-lib.aws_lambda.IDestination`](#aws-cdk-lib.aws_lambda.IDestination) | The destination for failed invocations. |
| [`onSuccess`](#pjlbundleassetexamplefunctionpropspropertyonsuccess) | [`aws-cdk-lib.aws_lambda.IDestination`](#aws-cdk-lib.aws_lambda.IDestination) | The destination for successful invocations. |
| [`retryAttempts`](#pjlbundleassetexamplefunctionpropspropertyretryattempts) | `number` | The maximum number of times to retry when the function returns an error. |
| [`allowAllOutbound`](#pjlbundleassetexamplefunctionpropspropertyallowalloutbound) | `boolean` | Whether to allow the Lambda to send all network traffic. |
| [`allowPublicSubnet`](#pjlbundleassetexamplefunctionpropspropertyallowpublicsubnet) | `boolean` | Lambda Functions in a public subnet can NOT access the internet. |
| [`architecture`](#pjlbundleassetexamplefunctionpropspropertyarchitecture) | [`aws-cdk-lib.aws_lambda.Architecture`](#aws-cdk-lib.aws_lambda.Architecture) | The system architectures compatible with this lambda function. |
| [`codeSigningConfig`](#pjlbundleassetexamplefunctionpropspropertycodesigningconfig) | [`aws-cdk-lib.aws_lambda.ICodeSigningConfig`](#aws-cdk-lib.aws_lambda.ICodeSigningConfig) | Code signing config associated with this function. |
| [`currentVersionOptions`](#pjlbundleassetexamplefunctionpropspropertycurrentversionoptions) | [`aws-cdk-lib.aws_lambda.VersionOptions`](#aws-cdk-lib.aws_lambda.VersionOptions) | Options for the `lambda.Version` resource automatically created by the `fn.currentVersion` method. |
| [`deadLetterQueue`](#pjlbundleassetexamplefunctionpropspropertydeadletterqueue) | [`aws-cdk-lib.aws_sqs.IQueue`](#aws-cdk-lib.aws_sqs.IQueue) | The SQS queue to use if DLQ is enabled. |
| [`deadLetterQueueEnabled`](#pjlbundleassetexamplefunctionpropspropertydeadletterqueueenabled) | `boolean` | Enabled DLQ. |
| [`description`](#pjlbundleassetexamplefunctionpropspropertydescription) | `string` | A description of the function. |
| [`environment`](#pjlbundleassetexamplefunctionpropspropertyenvironment) | {[ key: string ]: `string`} | Key-value pairs that Lambda caches and makes available for your Lambda functions. |
| [`environmentEncryption`](#pjlbundleassetexamplefunctionpropspropertyenvironmentencryption) | [`aws-cdk-lib.aws_kms.IKey`](#aws-cdk-lib.aws_kms.IKey) | The AWS KMS key that's used to encrypt your function's environment variables. |
| [`events`](#pjlbundleassetexamplefunctionpropspropertyevents) | [`aws-cdk-lib.aws_lambda.IEventSource`](#aws-cdk-lib.aws_lambda.IEventSource)[] | Event sources for this function. |
| [`filesystem`](#pjlbundleassetexamplefunctionpropspropertyfilesystem) | [`aws-cdk-lib.aws_lambda.FileSystem`](#aws-cdk-lib.aws_lambda.FileSystem) | The filesystem configuration for the lambda function. |
| [`functionName`](#pjlbundleassetexamplefunctionpropspropertyfunctionname) | `string` | A name for the function. |
| [`initialPolicy`](#pjlbundleassetexamplefunctionpropspropertyinitialpolicy) | [`aws-cdk-lib.aws_iam.PolicyStatement`](#aws-cdk-lib.aws_iam.PolicyStatement)[] | Initial policy statements to add to the created Lambda Role. |
| [`insightsVersion`](#pjlbundleassetexamplefunctionpropspropertyinsightsversion) | [`aws-cdk-lib.aws_lambda.LambdaInsightsVersion`](#aws-cdk-lib.aws_lambda.LambdaInsightsVersion) | Specify the version of CloudWatch Lambda insights to use for monitoring. |
| [`layers`](#pjlbundleassetexamplefunctionpropspropertylayers) | [`aws-cdk-lib.aws_lambda.ILayerVersion`](#aws-cdk-lib.aws_lambda.ILayerVersion)[] | A list of layers to add to the function's execution environment. |
| [`logRetention`](#pjlbundleassetexamplefunctionpropspropertylogretention) | [`aws-cdk-lib.aws_logs.RetentionDays`](#aws-cdk-lib.aws_logs.RetentionDays) | The number of days log events are kept in CloudWatch Logs. |
| [`logRetentionRetryOptions`](#pjlbundleassetexamplefunctionpropspropertylogretentionretryoptions) | [`aws-cdk-lib.aws_lambda.LogRetentionRetryOptions`](#aws-cdk-lib.aws_lambda.LogRetentionRetryOptions) | When log retention is specified, a custom resource attempts to create the CloudWatch log group. |
| [`logRetentionRole`](#pjlbundleassetexamplefunctionpropspropertylogretentionrole) | [`aws-cdk-lib.aws_iam.IRole`](#aws-cdk-lib.aws_iam.IRole) | The IAM role for the Lambda function associated with the custom resource that sets the retention policy. |
| [`memorySize`](#pjlbundleassetexamplefunctionpropspropertymemorysize) | `number` | The amount of memory, in MB, that is allocated to your Lambda function. |
| [`profiling`](#pjlbundleassetexamplefunctionpropspropertyprofiling) | `boolean` | Enable profiling. |
| [`profilingGroup`](#pjlbundleassetexamplefunctionpropspropertyprofilinggroup) | [`aws-cdk-lib.aws_codeguruprofiler.IProfilingGroup`](#aws-cdk-lib.aws_codeguruprofiler.IProfilingGroup) | Profiling Group. |
| [`reservedConcurrentExecutions`](#pjlbundleassetexamplefunctionpropspropertyreservedconcurrentexecutions) | `number` | The maximum of concurrent executions you want to reserve for the function. |
| [`role`](#pjlbundleassetexamplefunctionpropspropertyrole) | [`aws-cdk-lib.aws_iam.IRole`](#aws-cdk-lib.aws_iam.IRole) | Lambda execution role. |
| [`securityGroups`](#pjlbundleassetexamplefunctionpropspropertysecuritygroups) | [`aws-cdk-lib.aws_ec2.ISecurityGroup`](#aws-cdk-lib.aws_ec2.ISecurityGroup)[] | The list of security groups to associate with the Lambda's network interfaces. |
| [`timeout`](#pjlbundleassetexamplefunctionpropspropertytimeout) | [`aws-cdk-lib.Duration`](#aws-cdk-lib.Duration) | The function execution time (in seconds) after which Lambda terminates the function. |
| [`tracing`](#pjlbundleassetexamplefunctionpropspropertytracing) | [`aws-cdk-lib.aws_lambda.Tracing`](#aws-cdk-lib.aws_lambda.Tracing) | Enable AWS X-Ray Tracing for Lambda Function. |
| [`vpc`](#pjlbundleassetexamplefunctionpropspropertyvpc) | [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc) | VPC network to place Lambda network interfaces. |
| [`vpcSubnets`](#pjlbundleassetexamplefunctionpropspropertyvpcsubnets) | [`aws-cdk-lib.aws_ec2.SubnetSelection`](#aws-cdk-lib.aws_ec2.SubnetSelection) | Where to place the network interfaces within the VPC. |

---

##### `maxEventAge`<sup>Optional</sup> <a name="pj-lbundle-asset.ExampleFunctionProps.property.maxEventAge" id="pjlbundleassetexamplefunctionpropspropertymaxeventage"></a>

```typescript
public readonly maxEventAge: Duration;
```

- *Type:* [`aws-cdk-lib.Duration`](#aws-cdk-lib.Duration)
- *Default:* Duration.hours(6)

The maximum age of a request that Lambda sends to a function for processing.

Minimum: 60 seconds Maximum: 6 hours

---

##### `onFailure`<sup>Optional</sup> <a name="pj-lbundle-asset.ExampleFunctionProps.property.onFailure" id="pjlbundleassetexamplefunctionpropspropertyonfailure"></a>

```typescript
public readonly onFailure: IDestination;
```

- *Type:* [`aws-cdk-lib.aws_lambda.IDestination`](#aws-cdk-lib.aws_lambda.IDestination)
- *Default:* no destination

The destination for failed invocations.

---

##### `onSuccess`<sup>Optional</sup> <a name="pj-lbundle-asset.ExampleFunctionProps.property.onSuccess" id="pjlbundleassetexamplefunctionpropspropertyonsuccess"></a>

```typescript
public readonly onSuccess: IDestination;
```

- *Type:* [`aws-cdk-lib.aws_lambda.IDestination`](#aws-cdk-lib.aws_lambda.IDestination)
- *Default:* no destination

The destination for successful invocations.

---

##### `retryAttempts`<sup>Optional</sup> <a name="pj-lbundle-asset.ExampleFunctionProps.property.retryAttempts" id="pjlbundleassetexamplefunctionpropspropertyretryattempts"></a>

```typescript
public readonly retryAttempts: number;
```

- *Type:* `number`
- *Default:* 2

The maximum number of times to retry when the function returns an error.

Minimum: 0 Maximum: 2

---

##### `allowAllOutbound`<sup>Optional</sup> <a name="pj-lbundle-asset.ExampleFunctionProps.property.allowAllOutbound" id="pjlbundleassetexamplefunctionpropspropertyallowalloutbound"></a>

```typescript
public readonly allowAllOutbound: boolean;
```

- *Type:* `boolean`
- *Default:* true

Whether to allow the Lambda to send all network traffic.

If set to false, you must individually add traffic rules to allow the Lambda to connect to network targets.

---

##### `allowPublicSubnet`<sup>Optional</sup> <a name="pj-lbundle-asset.ExampleFunctionProps.property.allowPublicSubnet" id="pjlbundleassetexamplefunctionpropspropertyallowpublicsubnet"></a>

```typescript
public readonly allowPublicSubnet: boolean;
```

- *Type:* `boolean`
- *Default:* false

Lambda Functions in a public subnet can NOT access the internet.

Use this property to acknowledge this limitation and still place the function in a public subnet.

> https://stackoverflow.com/questions/52992085/why-cant-an-aws-lambda-function-inside-a-public-subnet-in-a-vpc-connect-to-the/52994841#52994841

---

##### `architecture`<sup>Optional</sup> <a name="pj-lbundle-asset.ExampleFunctionProps.property.architecture" id="pjlbundleassetexamplefunctionpropspropertyarchitecture"></a>

```typescript
public readonly architecture: Architecture;
```

- *Type:* [`aws-cdk-lib.aws_lambda.Architecture`](#aws-cdk-lib.aws_lambda.Architecture)
- *Default:* Architecture.X86_64

The system architectures compatible with this lambda function.

---

##### `codeSigningConfig`<sup>Optional</sup> <a name="pj-lbundle-asset.ExampleFunctionProps.property.codeSigningConfig" id="pjlbundleassetexamplefunctionpropspropertycodesigningconfig"></a>

```typescript
public readonly codeSigningConfig: ICodeSigningConfig;
```

- *Type:* [`aws-cdk-lib.aws_lambda.ICodeSigningConfig`](#aws-cdk-lib.aws_lambda.ICodeSigningConfig)
- *Default:* Not Sign the Code

Code signing config associated with this function.

---

##### `currentVersionOptions`<sup>Optional</sup> <a name="pj-lbundle-asset.ExampleFunctionProps.property.currentVersionOptions" id="pjlbundleassetexamplefunctionpropspropertycurrentversionoptions"></a>

```typescript
public readonly currentVersionOptions: VersionOptions;
```

- *Type:* [`aws-cdk-lib.aws_lambda.VersionOptions`](#aws-cdk-lib.aws_lambda.VersionOptions)
- *Default:* default options as described in `VersionOptions`

Options for the `lambda.Version` resource automatically created by the `fn.currentVersion` method.

---

##### `deadLetterQueue`<sup>Optional</sup> <a name="pj-lbundle-asset.ExampleFunctionProps.property.deadLetterQueue" id="pjlbundleassetexamplefunctionpropspropertydeadletterqueue"></a>

```typescript
public readonly deadLetterQueue: IQueue;
```

- *Type:* [`aws-cdk-lib.aws_sqs.IQueue`](#aws-cdk-lib.aws_sqs.IQueue)
- *Default:* SQS queue with 14 day retention period if `deadLetterQueueEnabled` is `true`

The SQS queue to use if DLQ is enabled.

---

##### `deadLetterQueueEnabled`<sup>Optional</sup> <a name="pj-lbundle-asset.ExampleFunctionProps.property.deadLetterQueueEnabled" id="pjlbundleassetexamplefunctionpropspropertydeadletterqueueenabled"></a>

```typescript
public readonly deadLetterQueueEnabled: boolean;
```

- *Type:* `boolean`
- *Default:* false unless `deadLetterQueue` is set, which implies DLQ is enabled.

Enabled DLQ.

If `deadLetterQueue` is undefined, an SQS queue with default options will be defined for your Function.

---

##### `description`<sup>Optional</sup> <a name="pj-lbundle-asset.ExampleFunctionProps.property.description" id="pjlbundleassetexamplefunctionpropspropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`
- *Default:* No description.

A description of the function.

---

##### `environment`<sup>Optional</sup> <a name="pj-lbundle-asset.ExampleFunctionProps.property.environment" id="pjlbundleassetexamplefunctionpropspropertyenvironment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}
- *Default:* No environment variables.

Key-value pairs that Lambda caches and makes available for your Lambda functions.

Use environment variables to apply configuration changes, such as test and production environment configurations, without changing your Lambda function source code.

---

##### `environmentEncryption`<sup>Optional</sup> <a name="pj-lbundle-asset.ExampleFunctionProps.property.environmentEncryption" id="pjlbundleassetexamplefunctionpropspropertyenvironmentencryption"></a>

```typescript
public readonly environmentEncryption: IKey;
```

- *Type:* [`aws-cdk-lib.aws_kms.IKey`](#aws-cdk-lib.aws_kms.IKey)
- *Default:* AWS Lambda creates and uses an AWS managed customer master key (CMK).

The AWS KMS key that's used to encrypt your function's environment variables.

---

##### `events`<sup>Optional</sup> <a name="pj-lbundle-asset.ExampleFunctionProps.property.events" id="pjlbundleassetexamplefunctionpropspropertyevents"></a>

```typescript
public readonly events: IEventSource[];
```

- *Type:* [`aws-cdk-lib.aws_lambda.IEventSource`](#aws-cdk-lib.aws_lambda.IEventSource)[]
- *Default:* No event sources.

Event sources for this function.

You can also add event sources using `addEventSource`.

---

##### `filesystem`<sup>Optional</sup> <a name="pj-lbundle-asset.ExampleFunctionProps.property.filesystem" id="pjlbundleassetexamplefunctionpropspropertyfilesystem"></a>

```typescript
public readonly filesystem: FileSystem;
```

- *Type:* [`aws-cdk-lib.aws_lambda.FileSystem`](#aws-cdk-lib.aws_lambda.FileSystem)
- *Default:* will not mount any filesystem

The filesystem configuration for the lambda function.

---

##### `functionName`<sup>Optional</sup> <a name="pj-lbundle-asset.ExampleFunctionProps.property.functionName" id="pjlbundleassetexamplefunctionpropspropertyfunctionname"></a>

```typescript
public readonly functionName: string;
```

- *Type:* `string`
- *Default:* AWS CloudFormation generates a unique physical ID and uses that ID for the function's name. For more information, see Name Type.

A name for the function.

---

##### `initialPolicy`<sup>Optional</sup> <a name="pj-lbundle-asset.ExampleFunctionProps.property.initialPolicy" id="pjlbundleassetexamplefunctionpropspropertyinitialpolicy"></a>

```typescript
public readonly initialPolicy: PolicyStatement[];
```

- *Type:* [`aws-cdk-lib.aws_iam.PolicyStatement`](#aws-cdk-lib.aws_iam.PolicyStatement)[]
- *Default:* No policy statements are added to the created Lambda role.

Initial policy statements to add to the created Lambda Role.

You can call `addToRolePolicy` to the created lambda to add statements post creation.

---

##### `insightsVersion`<sup>Optional</sup> <a name="pj-lbundle-asset.ExampleFunctionProps.property.insightsVersion" id="pjlbundleassetexamplefunctionpropspropertyinsightsversion"></a>

```typescript
public readonly insightsVersion: LambdaInsightsVersion;
```

- *Type:* [`aws-cdk-lib.aws_lambda.LambdaInsightsVersion`](#aws-cdk-lib.aws_lambda.LambdaInsightsVersion)
- *Default:* No Lambda Insights

Specify the version of CloudWatch Lambda insights to use for monitoring.

> https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Lambda-Insights-Getting-Started-docker.html

---

##### `layers`<sup>Optional</sup> <a name="pj-lbundle-asset.ExampleFunctionProps.property.layers" id="pjlbundleassetexamplefunctionpropspropertylayers"></a>

```typescript
public readonly layers: ILayerVersion[];
```

- *Type:* [`aws-cdk-lib.aws_lambda.ILayerVersion`](#aws-cdk-lib.aws_lambda.ILayerVersion)[]
- *Default:* No layers.

A list of layers to add to the function's execution environment.

You can configure your Lambda function to pull in additional code during initialization in the form of layers. Layers are packages of libraries or other dependencies that can be used by multiple functions.

---

##### `logRetention`<sup>Optional</sup> <a name="pj-lbundle-asset.ExampleFunctionProps.property.logRetention" id="pjlbundleassetexamplefunctionpropspropertylogretention"></a>

```typescript
public readonly logRetention: RetentionDays;
```

- *Type:* [`aws-cdk-lib.aws_logs.RetentionDays`](#aws-cdk-lib.aws_logs.RetentionDays)
- *Default:* logs.RetentionDays.INFINITE

The number of days log events are kept in CloudWatch Logs.

When updating this property, unsetting it doesn't remove the log retention policy. To remove the retention policy, set the value to `INFINITE`.

---

##### `logRetentionRetryOptions`<sup>Optional</sup> <a name="pj-lbundle-asset.ExampleFunctionProps.property.logRetentionRetryOptions" id="pjlbundleassetexamplefunctionpropspropertylogretentionretryoptions"></a>

```typescript
public readonly logRetentionRetryOptions: LogRetentionRetryOptions;
```

- *Type:* [`aws-cdk-lib.aws_lambda.LogRetentionRetryOptions`](#aws-cdk-lib.aws_lambda.LogRetentionRetryOptions)
- *Default:* Default AWS SDK retry options.

When log retention is specified, a custom resource attempts to create the CloudWatch log group.

These options control the retry policy when interacting with CloudWatch APIs.

---

##### `logRetentionRole`<sup>Optional</sup> <a name="pj-lbundle-asset.ExampleFunctionProps.property.logRetentionRole" id="pjlbundleassetexamplefunctionpropspropertylogretentionrole"></a>

```typescript
public readonly logRetentionRole: IRole;
```

- *Type:* [`aws-cdk-lib.aws_iam.IRole`](#aws-cdk-lib.aws_iam.IRole)
- *Default:* A new role is created.

The IAM role for the Lambda function associated with the custom resource that sets the retention policy.

---

##### `memorySize`<sup>Optional</sup> <a name="pj-lbundle-asset.ExampleFunctionProps.property.memorySize" id="pjlbundleassetexamplefunctionpropspropertymemorysize"></a>

```typescript
public readonly memorySize: number;
```

- *Type:* `number`
- *Default:* 128

The amount of memory, in MB, that is allocated to your Lambda function.

Lambda uses this value to proportionally allocate the amount of CPU power. For more information, see Resource Model in the AWS Lambda Developer Guide.

---

##### `profiling`<sup>Optional</sup> <a name="pj-lbundle-asset.ExampleFunctionProps.property.profiling" id="pjlbundleassetexamplefunctionpropspropertyprofiling"></a>

```typescript
public readonly profiling: boolean;
```

- *Type:* `boolean`
- *Default:* No profiling.

Enable profiling.

> https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html

---

##### `profilingGroup`<sup>Optional</sup> <a name="pj-lbundle-asset.ExampleFunctionProps.property.profilingGroup" id="pjlbundleassetexamplefunctionpropspropertyprofilinggroup"></a>

```typescript
public readonly profilingGroup: IProfilingGroup;
```

- *Type:* [`aws-cdk-lib.aws_codeguruprofiler.IProfilingGroup`](#aws-cdk-lib.aws_codeguruprofiler.IProfilingGroup)
- *Default:* A new profiling group will be created if `profiling` is set.

Profiling Group.

> https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html

---

##### `reservedConcurrentExecutions`<sup>Optional</sup> <a name="pj-lbundle-asset.ExampleFunctionProps.property.reservedConcurrentExecutions" id="pjlbundleassetexamplefunctionpropspropertyreservedconcurrentexecutions"></a>

```typescript
public readonly reservedConcurrentExecutions: number;
```

- *Type:* `number`
- *Default:* No specific limit - account limit.

The maximum of concurrent executions you want to reserve for the function.

> https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html

---

##### `role`<sup>Optional</sup> <a name="pj-lbundle-asset.ExampleFunctionProps.property.role" id="pjlbundleassetexamplefunctionpropspropertyrole"></a>

```typescript
public readonly role: IRole;
```

- *Type:* [`aws-cdk-lib.aws_iam.IRole`](#aws-cdk-lib.aws_iam.IRole)
- *Default:* A unique role will be generated for this lambda function. Both supplied and generated roles can always be changed by calling `addToRolePolicy`.

Lambda execution role.

This is the role that will be assumed by the function upon execution. It controls the permissions that the function will have. The Role must be assumable by the 'lambda.amazonaws.com' service principal.  The default Role automatically has permissions granted for Lambda execution. If you provide a Role, you must add the relevant AWS managed policies yourself.  The relevant managed policies are "service-role/AWSLambdaBasicExecutionRole" and "service-role/AWSLambdaVPCAccessExecutionRole".

---

##### `securityGroups`<sup>Optional</sup> <a name="pj-lbundle-asset.ExampleFunctionProps.property.securityGroups" id="pjlbundleassetexamplefunctionpropspropertysecuritygroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* [`aws-cdk-lib.aws_ec2.ISecurityGroup`](#aws-cdk-lib.aws_ec2.ISecurityGroup)[]
- *Default:* If the function is placed within a VPC and a security group is not specified, either by this or securityGroup prop, a dedicated security group will be created for this function.

The list of security groups to associate with the Lambda's network interfaces.

Only used if 'vpc' is supplied.

---

##### `timeout`<sup>Optional</sup> <a name="pj-lbundle-asset.ExampleFunctionProps.property.timeout" id="pjlbundleassetexamplefunctionpropspropertytimeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* [`aws-cdk-lib.Duration`](#aws-cdk-lib.Duration)
- *Default:* Duration.seconds(3)

The function execution time (in seconds) after which Lambda terminates the function.

Because the execution time affects cost, set this value based on the function's expected execution time.

---

##### `tracing`<sup>Optional</sup> <a name="pj-lbundle-asset.ExampleFunctionProps.property.tracing" id="pjlbundleassetexamplefunctionpropspropertytracing"></a>

```typescript
public readonly tracing: Tracing;
```

- *Type:* [`aws-cdk-lib.aws_lambda.Tracing`](#aws-cdk-lib.aws_lambda.Tracing)
- *Default:* Tracing.Disabled

Enable AWS X-Ray Tracing for Lambda Function.

---

##### `vpc`<sup>Optional</sup> <a name="pj-lbundle-asset.ExampleFunctionProps.property.vpc" id="pjlbundleassetexamplefunctionpropspropertyvpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc)
- *Default:* Function is not placed within a VPC.

VPC network to place Lambda network interfaces.

Specify this if the Lambda function needs to access resources in a VPC.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="pj-lbundle-asset.ExampleFunctionProps.property.vpcSubnets" id="pjlbundleassetexamplefunctionpropspropertyvpcsubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* [`aws-cdk-lib.aws_ec2.SubnetSelection`](#aws-cdk-lib.aws_ec2.SubnetSelection)
- *Default:* the Vpc default strategy if not specified

Where to place the network interfaces within the VPC.

Only used if 'vpc' is supplied. Note: internet access for Lambdas requires a NAT gateway, so picking Public subnets is not allowed.

---



