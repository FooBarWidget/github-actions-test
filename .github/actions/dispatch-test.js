const octokit = new Octokit();
const url = `POST /repos/${process.env.GITHUB_REPOSITORY}/actions/workflows/test-test.yml/dispatches`;
await octokit.request(url, { ref: process.env.GITHUB_REF });
