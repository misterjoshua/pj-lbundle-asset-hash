const { awscdk, release } = require('projen');

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Josh Kellendonk',
  authorAddress: 'joshkellendonk@gmail.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'pj-lbundle-asset',
  repositoryUrl: 'https://github.com/joshkellendonk/pj-lbundle-asset.git',

  devDeps: [
    '@aws-sdk/client-sts@^3.42.0',
    'aws-cdk',
  ],

  releaseTrigger: release.ReleaseTrigger.manual(),

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  // release: undefined,      /* Add release management to this project. */
});

project.postCompileTask.spawn(
  project.tasks.tryFind('integ:example:snapshot'),
);

project.synth();