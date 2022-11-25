# Vite Base Vue3 Typescript

This template should help get you started developing with Vue 3 in Vite by typescript, husky, lint-staged, eslint, prettier, commitlint and web-vitals.

<details>
  <summary>contents</summary>

- [Usage](#usage)
  - [clone](#clone)
  - [pull newest commits](#pull-newest-commits)
  - [how to exclude the `base` branch?](#how-to-exclude-the-base-branch?)

</details>

## Usage

### clone

Clone this repo into disk.

```shell
git clone git@github.com:yuzheng14/vite-base-vue3-ts.git <your-project-name>
```

Rename remote.

```shell
git remote rename origin base-origin
```

Modify branch.

```shell
git branch -M base
git checkout -b main
```

Add your remote.

```shell
git remote add origin <your-remote-address>
```

Push towards your remote to set upstream or set upstream directly.

```shell
git push -u origin main
# or
git branch -u origin main
```

Don't forget push `base` branch to your repo.

```shell
git push -u origin base
```

### pull newest commits

If you want to pull the newest config of this repo, run this instruction.

```shell
git checkout base
git pull --rebase
git checkout main
git rebase base
```

Or, you can use cherry-pick to avoid some problem such as `can't fast forward`.

```shell
git cherry-pick <commit-hash>
```

### how to exclude the `base` branch?

If you don't want to add a `base` branch in your repo, you can run instructions following.

```shell
# clone
git remote add base-origin git@github.com:yuzheng14/vite-base-vue3-ts.git

# fetch to base branch
git fetch base-origin main:base

# look out the commits' hash you want to update
git log

# then checkout to main branch and cherry-pick
git checkout main
git cherry-pick <commit-hash>
```
