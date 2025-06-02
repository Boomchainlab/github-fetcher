# 📦 GitHub Fetcher

> A robust, CI-integrated GitHub API data fetcher with full pagination support. Built and maintained by [Boomchainlab](https://github.com/Boomchainlab).

---

## 🚀 Overview

`github-fetcher` is a TypeScript-based CLI and programmatic tool to extract paginated data from GitHub's REST API (v3) with ease. Supports automation, DevOps, CI pipelines, and local CLI use cases.

---

## 🧪 Features

- ✅ GitHub API pagination handler (auto-follow `rel="next"`)
- ✅ CLI and programmatic usage
- ✅ CI-compatible output stream (JSON)
- ✅ Modular TypeScript source code
- ✅ Supports all endpoints with pagination
- ✅ Token-based authentication via `.env` or CLI

---

## 🛠 Installation

```bash
git clone https://github.com/Boomchainlab/github-fetcher.git
cd github-fetcher
npm install
cp .env.example .env  # Add your GitHub token

🧰 Usage

🔹 CLI
npx ts-node src/fetchPaginatedData.ts /repos/octocat/hello-world/issues


Or use the binary:
chmod +x bin/fetch.js
./bin/fetch.js /repos/octocat/hello-world/issues

🔹 Programmatically
import { getPaginatedData } from "./src/fetchPaginatedData";

const data = await getPaginatedData("/repos/octocat/hello-world/issues");
console.log(data);

🔐 Authentication

Set your GitHub token in .env:
GITHUB_TOKEN=ghp_your_personal_token

Tokens should have repo or read:org scopes depending on the endpoint.

🧩 Example Endpoints
| Resource          | URL Example                              |
| ----------------- | ---------------------------------------- |
| Issues in a repo  | `/repos/{owner}/{repo}/issues`           |
| Repo contributors | `/repos/{owner}/{repo}/contributors`     |
| Org repos         | `/orgs/{org}/repos`                      |
| Commits on branch | `/repos/{owner}/{repo}/commits?sha=main` |

✅ CI/CD Integration

Integrate in your workflows:

- name: Fetch GitHub Data
  run: |
    npx ts-node src/fetchPaginatedData.ts /orgs/Boomchainlab/repos > repos.json
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}


📁 File Structure

github-fetcher/
├── bin/
│   └── fetch.js               # CLI binary
├── src/
│   └── fetchPaginatedData.ts # Core logic
├── .env.example               # Environment variables
├── package.json               # CLI + dependency config
└── README.md


🧠 Roadmap

 Output formats: JSON, CSV
 GitHub Actions CI with test + lint
 Retry logic on rate limits
 NPM publication: @boomchainlab/github-fetcher

👨‍💻 Maintainers

DevOps: BoomchainLab
devs: dev@boomchainlab.com
support:support@boomchainlab.com

📄 License

MIT License © 2025 Boomchainlab





