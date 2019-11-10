# 1. Tasks

This is a more in depth guide of the tasks that can be used within this project. Below will explain the context of when each task should be called and what it does.

All tasks are defined in `gulpfile.js`.

When referring to `{root}` below, we are referring to the base root of the project.

## 1.1. Table of contents

<!-- TOC -->

- [1. Tasks](#1-tasks)
  - [1.1. Table of contents](#11-table-of-contents)
  - [1.2. Linting](#12-linting)
  - [1.3. Building](#13-building)
  - [1.4. Cleaning](#14-cleaning)
    - [1.4.0.1. Command](#1401-command)
    - [1.4.0.2. What it does](#1402-what-it-does)

<!-- /TOC -->

## 1.2. Linting

See [Linting](./tasks/linting.md) for details.

## 1.3. Building

See [Building](./tasks/building.md) for details.

## 1.4. Cleaning

#### 1.4.0.1. Command

`npm run clean`

#### 1.4.0.2. What it does

- Cleans the compiled/built directory by:
  - Deleting `{root}/_accessibility-logs/` directory
  - Deleting `{root}/_sourcemaps/` directory
  - Deleting `{root}/build/` directory
