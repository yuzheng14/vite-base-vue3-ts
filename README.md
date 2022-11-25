# Vite Base Vue3 Typescript

This template should help get you started developing with Vue 3 in Vite by typescript, husky, lint-staged, eslint, prettier, commitlint and web-vitals.

<details>
  <summary>contents</summary>

- [Usage](#usage)

</details>

## Usage

### clone

Clone this repo into disk.

```shell
git clone git@github.com:yuzheng14/vite-base-vue3.git <your-project-name>
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

