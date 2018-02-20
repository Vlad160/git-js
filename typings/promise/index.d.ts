import * as resp from '../response';

declare function simplegit(basePath?: string): simplegit.SimpleGit;

declare namespace simplegit {

   interface SimpleGit {

      /**
       * Adds one or more files to source control
       *
       * @param {string|string[]} files
       * @returns {Promise<void>}
       */
      add(files: string | string[]): Promise<void>;

      /**
       * Add an annotated tag to the head of the current branch
       *
       * @param {string} tagName
       * @param {string} tagMessage
       * @returns {Promise<void>}
       */
      addAnnotatedTag(tagName: string, tagMessage: string): Promise<void>;

      /**
       * Add config to local git instance
       *
       * @param {string} key configuration key (e.g user.name)
       * @param {string} value for the given key (e.g your name)
       * @returns {Promise<string>}
       */
      addConfig(key: string, value: string): Promise<string>;

      /**
       * Adds a remote to the list of remotes.
       *
       * @param {string} remoteName Name of the repository - eg "upstream"
       * @param {string} remoteRepo Fully qualified SSH or HTTP(S) path to the remote repo
       * @returns {Promise<void>}
       */
      addRemote(remoteName: string, remoteRepo: string): Promise<void>;

      /**
       * Add a lightweight tag to the head of the current branch
       *
       * @param {string} name
       * @returns {Promise<string>}
       */
      addTag(name: string): Promise<string>;

      /**
       * List all branches
       *
       * @param {GitOptions} [options]
       * @returns {Promise<BranchSummary>}
       */
      branch(options: GitOptions): Promise<BranchSummary>;

      /**
       * List of local branches
       *
       * @returns {Promise<BranchSummary>}
       */
      branchLocal(): Promise<BranchSummary>;

      /**
       * Validates that the current repo is a Git repo.
       *
       * @returns {Promise<boolean>}
       */
      checkIsRepo(): Promise<boolean>;

      /**
       * Returns a list of objects in a tree based on commit hash.
       * Passing in an object hash returns the object's content, size, and type.
       *
       * Passing "-p" will instruct cat-file to determine the object type, and display its formatted contents.
       *
       * @param {GitOptions} [options]
       * @returns {Promise<string>}
       *
       * @see https://git-scm.com/docs/git-cat-file
       */
      catFile(options: GitOptions): Promise<string>;

      /**
       * Adds one or more files to source control
       *
       * @param {string|string[]} files
       * @returns {Promise<void>}
       */
      add(files: string | string[]): Promise<void>;

      /**
       * Add an annotated tag to the head of the current branch
       *
       * @param {string} tagName
       * @param {string} tagMessage
       * @returns {Promise<void>}
       */
      addAnnotatedTag(tagName: string, tagMessage: string): Promise<void>;

      /**
       * Add config to local git instance
       *
       * @param {string} key configuration key (e.g user.name)
       * @param {string} value for the given key (e.g your name)
       * @returns {Promise<string>}
       */
      addConfig(key: string, value: string): Promise<string>;

      /**
       * Adds a remote to the list of remotes.
       *
       * @param {string} remoteName Name of the repository - eg "upstream"
       * @param {string} remoteRepo Fully qualified SSH or HTTP(S) path to the remote repo
       * @returns {Promise<void>}
       */
      addRemote(remoteName: string, remoteRepo: string): Promise<void>;

      /**
       * Add a lightweight tag to the head of the current branch
       *
       * @param {string} name
       * @returns {Promise<string>}
       */
      addTag(name: string): Promise<string>;

      /**
       * List all branches
       *
       * @param {GitOptions} [options]
       * @returns {Promise<BranchSummary>}
       */
      branch(options: GitOptions): Promise<BranchSummary>;

      /**
       * List of local branches
       *
       * @returns {Promise<BranchSummary>}
       */
      branchLocal(): Promise<BranchSummary>;

      /**
       * Validates that the current repo is a Git repo.
       *
       * @returns {Promise<boolean>}
       */
      checkIsRepo(): Promise<boolean>;

      /**
       * Returns a list of objects in a tree based on commit hash.
       * Passing in an object hash returns the object's content, size, and type.
       *
       * Passing "-p" will instruct cat-file to determine the object type, and display its formatted contents.
       *
       * @param {GitOptions} [options]
       * @returns {Promise<string>}
       *
       * @see https://git-scm.com/docs/git-cat-file
       */
      catFile(options: GitOptions): Promise<string>;

      /**
       * Checkout a tag or revision, any number of additional arguments can be passed to the `git* checkout` command
       by supplying either a string or array of strings as the `what` parameter.
       *
       * @param {(string | string[])} what one or more commands to pass to `git checkout`.
       * @returns {Promise<void>}
       */
      checkout(what: string | string[]): Promise<void>;

      /**
       * Checkout a remote branch.
       *
       * @param {string} branchName name of branch.
       * @param {string} startPoint (e.g origin/development).
       * @returns {Promise<void>}
       */
      checkoutBranch(branchName: string, startPoint: string): Promise<void>;

      /**
       * Checkout a local branch
       *
       * @param {string} branchName name of branch.
       * @returns {Promise<void>}
       */
      checkoutLocalBranch(branchName: string): Promise<void>;

      /**
       * Clone a repository into a new directory.
       *
       * @param {string} repoPath repository url to clone e.g. https://github.com/steveukx/git-js.git
       * @param {string} localPath local folder path to clone to.
       * @param {GitOptions} [options] options supported by [git](https://git-scm.com/docs/git-clone).
       * @returns {Promise<void>}
       */
      clone(repoPath: string, localPath: string, options?: GitOptions): Promise<void>;

      /**
       * Get the diff of the current repo compared to the last commit with a set of options supplied as a string.
       *
       * @param {GitOptions} [options] options supported by [git](https://git-scm.com/docs/git-diff).
       * @returns {Promise<string>} raw string result.
       */
      diff(options?: GitOptions): Promise<string>;

      /**
       * Gets a summary of the diff for files in the repo, uses the `git diff --stat` format to calculate changes.
       *
       * in order to get staged (only): `--cached` or `--staged`.
       *
       * @param {GitOptions} [options] options supported by [git](https://git-scm.com/docs/git-diff).
       * @returns {Promise<DiffResult>} Parsed diff summary result.
       */
      diffSummary(options?: GitOptions): Promise<DiffResult>;

      /**
       * Updates the local working copy database with changes from the default remote repo and branch.
       *
       * @param {string} [remote] remote to fetch from.
       * @param {string} [branch] branch to fetch from.
       * @param {GitOptions} [options] options supported by [git](https://git-scm.com/docs/git-fetch).
       * @returns {Promise<FetchResult>} Parsed fetch result.
       */
      fetch(remote?: string, branch?: string, options?: GitOptions): Promise<FetchResult>;

      /**
       * Merges from one branch to another, equivalent to running `git merge ${from} $[to}`, the `options` argument can
       * either be an array of additional parameters to pass to the command or null / omitted to be ignored.
       *
       * @param {string} from branch to merge from.
       * @param {string} to branch to merge to.
       * @param {GitOptions} [options] options supported by [git](https://git-scm.com/docs/git-merge).
       * @returns {Promise<string>}
       */
      mergeFromTo(from: string, to: string, options?: GitOptions): Promise<string>;

      /**
       * Join two or more development histories together.
       *
       * @param {GitOptions} [options] options supported by [git](https://git-scm.com/docs/git-merge).
       * @returns {Promise<string>}
       */
      merge(options: GitOptions): Promise<string>;

      /**
       * Fetch from and integrate with another repository or a local branch.
       *
       * @param {string} [remote] remote to pull from.
       * @param {string} [branch] branch to pull from.
       * @param {GitOptions} [options] options supported by [git](https://git-scm.com/docs/git-pull).
       * @returns {Promise<PullResult>} Parsed pull result.
       */
      pull(remote?: string, branch?: string, options?: GitOptions): Promise<PullResult>;

      /**
       * Update remote refs along with associated objects.
       *
       * @param {string} [remote] remote to push to.
       * @param {string} [branch] branch to push to.
       * @param {GitOptions} [options] options supported by [git](https://git-scm.com/docs/git-push).
       * @returns {Promise<void>}
       */
      push(remote?: string, branch?: string, options?: GitOptions): Promise<void>;

      /**
       * Show the working tree status.
       *
       * @returns {Promise<StatusResult>} Parsed status result.
       */
      status(): Promise<StatusResult>;

      /**
       * Gets a list of tagged versions.
       * @param {GitOptions} [options] options supported by [git](https://git-scm.com/docs/git-status).
       * @returns {Promise<TagResult>} Parsed tag list.
       */
      tags(options?: GitOptions): Promise<TagResult>;

      /**
       * Disables/enables the use of the console for printing warnings and errors, by default messages are not shown in
       * a production environment.
       *
       * @param {boolean} silence
       * @returns {simplegit.SimpleGit}
       */
      silent(silence?: boolean): simplegit.SimpleGit;

      /**
       * Update remote refs along with associated objects.
       *
       * @param {GitOptions} [options] options supported by [git](https://git-scm.com/docs/git-log).
       * @returns {Promise<ListLogLine[]> | Promise<any>}
       */
      log(options?: GitOptions): Promise<ListLogLine[]> | Promise<any>;

   }


   // responses
   // ---------------------
   interface BranchSummary extends resp.BranchSummary {
   }

   interface PullResult extends resp.PullResult {
   }

   interface FetchResult extends resp.FetchResult {
   }

   interface StatusResult extends resp.StatusResult {
   }

   interface DiffResult extends resp.DiffResult {
   }

   interface TagResult extends resp.TagResult {
   }

   interface ListLogLine extends resp.ListLogLine {
   }

   interface GitOptions extends resp.GitOptions {

   }

}

export = simplegit;
