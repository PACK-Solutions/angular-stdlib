# Contributing to `angular-stdlib`

Welcome, and thank you for your interest in contributing to `angular-stdlib`!

#### Table Of Contents

 - [Code of Conduct](#coc)
 - [Asking Questions](#question)
 - [Reporting Issues](#issue)
 - [Submitting a Pull Request (PR)](#submit)
 - [Coding Rules](#rules)
 - [Commit Message Guidelines](#commit)

## <a name="coc"></a> Code of Conduct

Please read and follow our [Code of Conduct](https://github.com/PACK-Solutions/angular-stdlib/blob/master/CODE_OF_CONDUCT.md).

## <a name="question"></a> Asking Questions

Have a question? Rather than opening an issue, please ask us at omistral@pack-solutions.com.

## <a name="issue"></a> Reporting Issues

Have you identified a reproducible problem in `angular-stdlib`? Have a feature request? We want to hear about it! Here's how you can make reporting your issue as effective as possible.

### Look For an Existing Issue

Before you create a new issue, please do a search in [open issues](https://github.com/PACK-Solutions/angular-stdlib/issues) to see if the issue or feature request has already been filed.

If you find your issue already exists, make relevant comments and add your [reaction](https://github.com/blog/2119-add-reactions-to-pull-requests-issues-and-comments). Use a reaction in place of a "+1" comment:

* 👍 - upvote
* 👎 - downvote

If you cannot find an existing issue that describes your bug or feature, create a new issue using the guidelines below.

### Writing Good Bug Reports and Feature Requests

You can file new issues by selecting from our [new issue templates](https://github.com/PACK-Solutions/angular-stdlib/issues/new/choose) and filling out the issue template.

File a single issue per problem and feature request. Do not enumerate multiple bugs or feature requests in the same issue.

Do not add your issue as a comment to an existing issue unless it's for the identical input. Many issues look similar, but have different causes.

The more information you can provide, the more likely someone will be successful at reproducing the issue and finding a fix.

## <a name="submit"></a> Submitting a Pull Request (PR)

It is good to read this article first : [Understanding the GitHub flow](https://guides.github.com/introduction/flow/).

Before you submit your Pull Request (PR) consider the following guidelines:
* Search [GitHub](https://github.com/PACK-Solutions/angular-stdlib/pulls) for an open or closed PR that relates to your submission. You don't want to duplicate effort.
* Be sure that an issue describes the problem you're fixing, or documents the design for the feature you'd like to add. Discussing the design up front helps to ensure that we're ready to accept your work.
* To know how to work with Angular libraries, read https://angular.io/guide/libraries
* Fork the PACK-Solutions/angular-stdlib repo.
* Make your changes in a new git branch:

     ```shell
     git checkout -b my-fix-branch master
     ```

* Create your patch, **including appropriate test cases**.
* Follow our [Coding Rules](#rules).
* Run `npm run test` and ensure that all tests pass.
* Commit your changes using a descriptive commit message that follows our [commit message conventions](#commit).

     ```shell
     git commit -a
     ```
    > Note: the optional commit `-a` command line option will automatically "add" and "rm" edited files.

* Push your branch to GitHub:

    ```shell
    git push origin my-fix-branch
    ```

* In GitHub, send a pull request to `angular-stdlib:master`.
* If we suggest changes then:
  * Make the required updates.
  * Re-run `npm run test` to ensure tests are still passing.
  * Rebase your branch and force push to your GitHub repository (this will update your Pull Request):

    ```shell
    git rebase master -i
    git push -f
    ```

That's it! Thank you for your contribution!

#### After your pull request is merged

After your pull request is merged, you can safely delete your branch and pull the changes
from the main (upstream) repository:

* Delete the remote branch on GitHub either through the GitHub web UI or your local shell as follows:

    ```shell
    git push origin --delete my-fix-branch
    ```

* Check out the master branch:

    ```shell
    git checkout master -f
    ```

* Delete the local branch:

    ```shell
    git branch -D my-fix-branch
    ```

* Update your master with the latest upstream version:

    ```shell
    git pull --ff upstream master
    ```

## <a name="rules"></a> Coding Rules

To ensure consistency throughout the source code, keep these rules in mind as you are working:

* All features or bug fixes **must be tested** by one or more specs (unit tests).
* All public API methods **must be documented**.
* `@angular-stdlib` uses [EditorConfig](https://editorconfig.org/) and **TSLint**.
We recommend the use of [VS Code](https://code.visualstudio.com/), but you can keep your preferred IDE if it has equivalent of the following **VS Code** extensions :
  * [EditorConfig for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
  * [TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)
  * [SonarLint](https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode)

## <a name="commit"></a> Commit Message Guidelines

As commit convention, we adopt [Conventional Commits v1.0.0](https://www.conventionalcommits.org/en/v1.0.0/), we have an history of commits that do not adopt the convention but any new commit must follow it to be eligible for merge.

### Scope

The scope should be the name of the npm package affected.

The following is the list of supported scopes:

* **date**

There are currently a few exceptions to the "use package name" rule:

* **release**: used for updating the npm package version and the release notes in CHANGELOG.md

### Footer

Must always include the reference to an issue. Sample :
```
Refs #133
```

Last commit (merge to master) must close the issue. Sample :
```
Closes #133
```

### Commit signature

Every commit must be signed by a GPG key. Learn how to [generate a GPG key and add it to your account](https://help.github.com/en/github/authenticating-to-github/managing-commit-signature-verification).

---

## References

This `CONTRIBUTING.md` is adapted from the :
* [angular/CONTRIBUTING.md](https://github.com/angular/angular/blob/master/CONTRIBUTING.md)
* [vscode/CONTRIBUTING.md](https://github.com/microsoft/vscode/blob/master/CONTRIBUTING.md)
* [ngx-bootstrap/CONTRIBUTING.md](https://github.com/valor-software/ngx-bootstrap/blob/development/CONTRIBUTING.md)
* [falcosecurity/CONTRIBUTING.md](https://github.com/falcosecurity/.github/blob/master/CONTRIBUTING.md)
