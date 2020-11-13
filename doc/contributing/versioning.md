# 1. Versioning

The process of versioning The West Midlands Network Design System is automated via GitHub Actions, mainly through the use of [semantic-release](https://github.com/semantic-release/semantic-release).

The Design System is available on Node Package Manager (npm) for download for node based projects. You can also view the website for a given version of the Design System with UNPKG.

## 1.1 Table of contents

- [1. Versioning](#1-versioning)
  - [1.1 Table of contents](#11-table-of-contents)
  - [1.2 Branches](#12-branches)
    - [1.2.1 Master](#121-master)
    - [1.2.2 Release](#122-release)
    - [1.2.3 New branches](#123-new-branches)
  - [1.3 Adding to the next release](#13-adding-to-the-next-release)
    - [1.3.1 Pull request title](#131-pull-request-title)
    - [1.3.2 Merging into release](#132-merging-into-release)
  - [1.4 New release](#14-new-release)
    - [1.4.1 Merging into master](#141-merging-into-master)
    - [1.4.2 The release workflow](#142-the-release-workflow)
      - [1.4.2.1 Requirements](#1421-requirements)
      - [1.4.2.2 Steps](#1422-steps)
        - [1.4.2.2.1 Dry run](#14221-dry-run)
        - [1.4.2.2.2 Site build](#14222-site-build)
        - [1.4.2.2.3 Release run](#14223-release-run)
        - [1.4.2.2.4 Netlify deploy](#14224-netlify-deploy)
  - [1.5 Released package](#15-released-package)

## 1.2 Branches

The repository is set up with two main branches: `master` and `release`.

### 1.2.1 Master

The `master` branch holds all the commit history of changes to the Design System, with each commit being a change that has been added by one of the two methods below.

The `master` branch is only updated by:

- Pull requests from the `release` branch, merged via the merge commit strategy
- Urgent pull requests from a hotfix or bugfix branch, merged via the squash and merge strategy

After any push to the `master` branch, the release workflow is triggered. Whether or not a new package is released

### 1.2.2 Release

The `release` branch holds all the changes that will be automatically released when the branch is merged into `master`.

The `release` branch is only updated by:

- Pull requests from other branches, merged via the squash and merge strategy

### 1.2.3 New branches

In order to add to the Design System, you must first create a new branch with the following format `xx/type/short-description`.

Where:

- `xx` is your first and last intials, e.g. `jd` for John Doe
- `type` is the type of change the branch is working on, e.g. `bugfix`, `feature`
- `short-description` is a short hyphenated description of the branch, e.g. `red-button-variant`

With the full example being: `jd/feature/red-button-variant`.

**This branch must branch from the `release` branch.**

## 1.3 Adding to the next release

Once you are ready to propose new changes, you must **open a pull request to the** `release` **branch**.

### 1.3.1 Pull request title

Opening a pull request to the release branch triggers a workflow to lint the title, among other workflows that lint the code itself.

Pull request titles **must** follow the [Conventional Commit Specification](https://www.conventionalcommits.org/en/v1.0.0/).

Correct examples:

- `fix: display issues on IE`
- `feat: add new red button variant`
- `docs: update versioning documentation`

Incorrect examples:

- `fix display issues on IE`
- `add new button component`
- `update versioning documentation`

### 1.3.2 Merging into release

When the pull request has passed all the necessary checks and reviews, it must then be merged into the `release` branch via the **squash and merge** strategy.

This reduces all changes on the branch into one commit with the title of the pull request appearing as the commit message.

When the `release` branch is merged into `master`, [semantic-release will use these commit messages to determine the type of changes in the new release](https://github.com/semantic-release/semantic-release#commit-message-format).

## 1.4 New release

Once the `release` branch has changes that are ready to go live, a pull request must be opened to the `master` branch.

### 1.4.1 Merging into master

Once the pull request has passed all necessary checks and reviews, it must then be merged into the `master` branch via the **merge commit** strategy.

This is so that all the commits on the `release` branch are added to the `master` branch. The title of the pull request, and by extention the merge commit, does not have to be in any specific format.

### 1.4.2 The release workflow

As mentioned before, the Design System uses [semantic-release](https://github.com/semantic-release/semantic-release) to automate our release workflow.

#### 1.4.2.1 Requirements

The workflow requires the following tokens:

- `SEMVER_GITHUB_TOKEN` - a personal access token with repo permissions. See the [semantic-release configuration](https://github.com/semantic-release/github#configuration) for details.
- `NETLIFY_AUTH_TOKEN` - netlify personal access token. See [actions-netlify](https://github.com/nwtgck/actions-netlify#required-inputs-and-env) for details.
- `NETLIFY_SITE_ID` - netlify api id. See [actions-netlify](https://github.com/nwtgck/actions-netlify#required-inputs-and-env) for details.
- `NPM_TOKEN` - npm access token with publish permissions. See the [semantic-release configuration](https://github.com/semantic-release/github#configuration) for details.

The workflow also requires a `GITHUB_TOKEN` but that is made avaible automatically during any workflow run.

#### 1.4.2.2 Steps

The workflow works in the following way:

- [Dry run](#14221-dry-run)
- [Site build](#14222-site-build)
- [Release run](#14223-release-run)
- [Netlify deploy](#14224-netlify-deploy)

See the [workflow file](https://github.com/wmcadigital/wmn-design-system/blob/master/.github/workflows/semantic-release.yml) for additional information.

##### 1.4.2.2.1 Dry run

Uses the following tokens:

- `SEMVER_GITHUB_TOKEN`
- `NPM_TOKEN`

semantic-release runs in **dry_run** mode to analyze commits to check if a new release is necessary.

The package outputs the next version number as variable in the GitHub Action context, which can be accessed by other step / jobs in the workflow.

This step is necessary because if we want to include the new version number in the static site, it has to be available at build time. However, semantic-release normally only changes the version number (and changelog), via a new commit, after the site has been built. Therefore the new version number must be determined beforehand.

_We also have to use [a separate semantic-release action](https://github.com/marketplace/actions/action-for-semantic-release) when running the dry run running as semantic-release npm package seems to cause conflicts when run twice in the same workflow._

##### 1.4.2.2.2 Site build

See [Building](./tasks/building.md) for details.

##### 1.4.2.2.3 Release run

Uses the following tokens:

- `SEMVER_GITHUB_TOKEN`
- `NPM_TOKEN`

See the [semantic-release release steps](https://github.com/semantic-release/semantic-release#release-steps) for details.

Through the use of the plugins [@semantic-release/git](@semantic-release/git) and [@semantic-release/changelog](@semantic-release/changelog), semantic-release will also update the `package.json` with the latest version number (**after** publishing the npm package) and update the changelog, via an additional commit.

##### 1.4.2.2.4 Netlify deploy

Uses the following tokens:

- `GITHUB_TOKEN`
- `NETLIFY_AUTH_TOKEN`
- `NETLIFY_SITE_ID`

The built site is deployed on netlify through the use of the [actions-netlify](https://github.com/nwtgck/actions-netlify) github action.

Note that, automatic builds must be turned off else the site will be deployed twice.

## 1.5 Released package

The [wmn-design-system package](https://www.npmjs.com/package/wmn-design-system) is made available on npm.

When linking to assets, like the stylesheet or javascript files, we recommend the [wmn-design-system UNPKG link](https://unpkg.com/wmn-design-system@1.0.0/build/index.html).

See [UNPKG](https://unpkg.com/) for more details.
