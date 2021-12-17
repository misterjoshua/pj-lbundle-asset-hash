import * as sts from '@aws-sdk/client-sts';

export async function handler() {
  const stsClient = new sts.STSClient({});

  const command = new sts.GetCallerIdentityCommand({
  });

  const res = await stsClient.send(command);

  return `I am ${res.Arn}`;
}
