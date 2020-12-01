# 1. Versioning

The process of versioning The West Midlands Network Design System is automated via GitHub Actions, mainly through the use of [semantic-release](https://github.com/semantic-release/semantic-release).

The Design System is [available on Node Package Manager](https://www.npmjs.com/package/wmn-design-system) (npm) for download for node based projects. You can also view the website for a given version of the [Design System on UNPKG](https://unpkg.com/wmn-design-system@1.0.0/build/index.html).

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
        - [1.4.2.2.1 semantic-release dry run](#14221-semantic-release-dry-run)
        - [1.4.2.2.2 Site build](#14222-site-build)
        - [1.4.2.2.3 semantic-release proper run](#14223-semantic-release-proper-run)
        - [1.4.2.2.4 Netlify deploy](#14224-netlify-deploy)
  - [1.5 Extra information](#15-extra-information)
    - [1.5.1 Bumping the version number](#151-bumping-the-version-number)
    - [1.5.2 Updating the changelog](#152-updating-the-changelog)
    - [1.5.3 NPM Package](#153-npm-package)

## 1.2 Branches

The repository is set up with two main branches: `master` and `release`.

### 1.2.1 Master

The `master` branch holds all the commit history of changes to the Design System, with each commit being a change that has been added by one of the two methods below.

The `master` branch is only updated by:

- Pull requests from the `release` branch, merged via the merge commit strategy
- Urgent pull requests from a hotfix branch, merged via the squash and merge strategy

After any push to the `master` branch, the release workflow is triggered.

### 1.2.2 Release

The `release` branch holds all the changes that will be automatically released when the branch is merged into the `master` branch.

The `release` branch is only updated by:

- Pull requests from other branches, merged via the **squash and merge** strategy

### 1.2.3 New branches

In order to add to the Design System, you must first create a new branch with the following format `xx/type/short-description`.

Where:

- `xx` is your first and last initials, e.g. `jd` for John Doe
- `type` is the type of change the branch is working on, e.g. `bugfix`, `feature`
- `short-description` is a short hyphenated description of the branch, e.g. `red-button-variant`

With the full example being: `jd/feature/red-button-variant`.

**This branch must branch from the `release` branch.**

## 1.3 Adding to the next release

Once you are ready to propose new changes, you must **open a pull request to the** `release` **branch**.

### 1.3.1 Pull request title

Opening a pull request to the `release` branch triggers a workflow to lint the pull request title, as well as other workflows that lint the code itself.

Pull requests to the `release` branch are to be merged via the **squash and merge** strategy so that each pull request appears as a single commit on the release branch.

As a result, pull request titles **must** follow the [Conventional Commit Specification](https://www.conventionalcommits.org/en/v1.0.0/), so that semantic-release can correctly bump the version and update the changelog.

See the [bumping the version](#151-bumping-the-version-number) and [updating the changelog](#152-updating-the-changelog) sections for more details.

### 1.3.2 Merging into release

When the pull request has passed all the necessary checks and reviews, it must then be merged into the `release` branch via the **squash and merge** strategy.

This reduces all changes on the branch into one commit with the title of the pull request appearing as the commit message.

When the `release` branch is merged into the `master` branch, [semantic-release will use these commit messages to determine the type of changes in the new release](https://github.com/semantic-release/semantic-release#commit-message-format).

## 1.4 New release

Once the `release` branch has changes that are ready to go live, a pull request must be opened to the `master` branch.

### 1.4.1 Merging into master

Once the pull request has passed all necessary checks and reviews, it must then be merged into the `master` branch via the **merge commit** strategy.

This is so that all the commits on the `release` branch are added to the `master` branch.

_The title of the pull request or merge commit do not have to be in any specific format._

### 1.4.2 The release workflow

As mentioned before, the Design System uses [semantic-release](https://github.com/semantic-release/semantic-release) to automate our release workflow.

#### 1.4.2.1 Requirements

The workflow requires the following tokens:

- `SEMVER_GITHUB_TOKEN` - a personal access token with repo permissions. See the [semantic-release configuration](https://github.com/semantic-release/github#configuration) for details.
- `NETLIFY_AUTH_TOKEN` - Netlify personal access token. See [actions-netlify](https://github.com/nwtgck/actions-netlify#required-inputs-and-env) for details.
- `NETLIFY_SITE_ID` - Netlify API ID. See [actions-netlify](https://github.com/nwtgck/actions-netlify#required-inputs-and-env) for details.
- `NPM_TOKEN` - npm access token with publish permissions. See the [semantic-release configuration](https://github.com/semantic-release/github#configuration) for details.

The workflow also requires a `GITHUB_TOKEN` but that is made available automatically during any workflow run.

#### 1.4.2.2 Steps

The workflow works in the following way:

- [semantic-release dry run](#14221-semantic-release-dry-run)
- [Site build](#14222-site-build)
- [semantic-release proper run](#14223-semantic-release-proper-run)
- [Netlify deploy](#14224-netlify-deploy)

See the [workflow file](https://github.com/wmcadigital/wmn-design-system/blob/master/.github/workflows/semantic-release.yml) for additional information.

##### 1.4.2.2.1 semantic-release dry run

Uses the following tokens:

- `SEMVER_GITHUB_TOKEN`
- `NPM_TOKEN`

semantic-release runs in `dry_run` mode to analyze commits to check if a new release is necessary.

The package outputs the next version number as variable in the GitHub Action context, which can be accessed by other step / jobs in the workflow.

This step is necessary because if we want to include the new version number in the static site, it has to be available at build time. However, semantic-release would normally only change the version number (and changelog), via a new commit, after the site has been built. Therefore the new version number must be determined beforehand.

_We also have to use [a separate semantic-release action](https://github.com/marketplace/actions/action-for-semantic-release) when running the dry run running as semantic-release npm package seems to cause conflicts when run twice in the same workflow._

##### 1.4.2.2.2 Site build

See [Building](./tasks/building.md) for details.

##### 1.4.2.2.3 semantic-release proper run

Uses the following tokens:

- `SEMVER_GITHUB_TOKEN`
- `NPM_TOKEN`

First, [semantic-release analyses the new commits](https://github.com/semantic-release/commit-analyzer) and to determine if a new package release is necessary.

If a version bump is not necessary the workflow will go straight to the [Netlify deploy step](#1.4.2.2.4-netlify-deploy).

If a version bump is necessary (major, minor or patch), it [publishes the new package to NPM](https://github.com/semantic-release/npm). See the [NPM package information for more details](#1.5.3-npm-package).

Next, it [updates the changelog](@semantic-release/changelog) and [updates the version number](@semantic-release/git) in the `package.json` via an extra `chore(release):` commit on the master branch.

Finally it goes through all issues and pull requests referenced in any commits and [adds a comment and a tag](https://github.com/semantic-release/github) to say that they have been included in the current release.

See the semantic-release [release steps documentation](https://github.com/semantic-release/semantic-release#release-steps) for full details.

##### 1.4.2.2.4 Netlify deploy

Uses the following tokens:

- `GITHUB_TOKEN`
- `NETLIFY_AUTH_TOKEN`
- `NETLIFY_SITE_ID`

The built site is deployed on netlify through the use of the [actions-netlify](https://github.com/nwtgck/actions-netlify) github action.

_Note that **Netlfiy's automatic builds must be turned off** or else the site will be deployed twice_.

## 1.5 Extra information

Once the release workflow has finished, the Netlify site will be updated with any new changes and a new NPM package may be released.

### 1.5.1 Bumping the version number

The version number in the **package.json** will be automatically updated during the [semantic-release proper run](#14223-semantic-release-proper-run).

In order for semantic-release to include a commit in its analysis, it **must** follow the [Conventional Commit Specification](https://www.conventionalcommits.org/en/v1.0.0/).

semantic-release will only bump the version number if the release contains a commit starting with `fix:` or `feat:` or if a commit contains `BREAKING CHANGE:` in its description.

If we are starting from version 1.0.0, the version number bump will change as follows:

- `fix:` - Patch release, 1.0.1
- `feat:` - Minor release, 1.1.0
- `BREAKING CHANGE:` (in the commit description) - Major release, 2.0.0

It will always increase the version number by presence of the largest change. If a release contains both `fix: ` and `feat:` commits, the version number would be bumped to 1.1.0. If any commits contain `BREAKING CHANGE:` in its description, the new version would be 2.0.0.

For more details see [semantic-release commit message format](https://github.com/semantic-release/semantic-release#commit-message-format) and [semantic versioning specification](https://semver.org/).

### 1.5.2 Updating the changelog

Commits that follow the [Conventional Commit Specification](https://www.conventionalcommits.org/en/v1.0.0/) will be included in the changelog.

Depending on the type of change (e.g. `fix:` or `feat:`), the rest of the commit title will appear under the respective section within the changelog.

For example:

- `fix: header line spacing` - will appear under the **Bug Fixes** heading in the changelog as "header line spacing"
- `feat: add new button component` - will appear under the **Features** heading in the changelog "add new button component"

### 1.5.3 NPM package

The [wmn-design-system package](https://www.npmjs.com/package/wmn-design-system) is made available on npm.

When linking to assets, like the stylesheet or javascript files, we recommend the [wmn-design-system UNPKG link](https://unpkg.com/wmn-design-system@1.0.0/build/index.html).

See [UNPKG](https://unpkg.com/) for more details.
