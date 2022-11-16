const core = require('@actions/core');
const github = require('@actions/github');

try {
  const lastCommit = [...github.context.payload.commits].pop()
  const isRelease = lastCommit.message.startsWith('chore(release): ');
  core.setOutput('isRelease', isRelease);
  console.log(`Is release ? ${isRelease ? 'yes' : 'no'}`);
} catch (error) {
  core.setFailed(error.message);
}
