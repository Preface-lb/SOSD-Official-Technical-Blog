---
title: Git 学习路线
createTime: 2025/10/03 16:15:20
permalink: /LearningRoute/git/
---

### 1. Git 基本概念

Git 是一个分布式版本控制系统，用于跟踪文件的更改历史，并允许多人协作开发项目。以下是 Git 的几个重要概念：



* **仓库（Repository）**：存储项目代码的地方，包含代码的历史记录和所有分支。

* **工作区（Working Directory）**：当前文件的状态，未提交的修改显示在这里。

* **暂存区（Staging Area）**：保存即将提交到版本库的更改。

* **版本库（Local Repository）**：保存提交后的更改，包含完整的项目历史。

* **远程仓库（Remote Repository）**：在远程服务器上保存的版本库，如 GitHub、GitLab 等平台。



### 2. Git 基本操作

#### 2.1 初始化仓库

```bash
git init
```

初始化一个新的本地 Git 仓库。



#### 2.2 克隆远程仓库

```bash
git clone <repository_url>
```

从远程仓库克隆一个项目到本地。



#### 2.3 查看当前状态

```bash
git status
```

查看工作区、暂存区的文件状态。



#### 2.4 添加文件到暂存区

```bash
git add <file_name>
```

将更改的文件添加到暂存区。



#### 2.5 提交更改

```bash
git commit -m "commit message"
```

将暂存区的更改提交到本地版本库。



#### 2.6 推送更改到远程仓库

```bash
git push origin <branch_name>
```

将本地提交推送到远程仓库的指定分支。



#### 2.7 拉取远程更新

```bash
git pull origin <branch_name>
```

从远程仓库拉取最新的更改并合并到当前分支。



### 3. Git 高级操作

#### 3.1 合并分支（Merge）

**意义**：

* 合并分支是 Git 协作开发中最常见的操作之一。当开发者在不同分支上进行功能开发时，最终需要将各自的分支代码合并到主分支，形成一个统一的代码基线。

* 合并保留了完整的开发历史，能够看到每个功能分支独立的提交过程，有助于追踪开发过程。

**体现**：

* **合并历史保留**：`git merge` 会生成一个新的合并提交，这个提交明确表示“分支 A 和分支 B 在某个时刻被合并”。

* **分支并行开发**：在多人开发时，各自的功能分支可以独立发展，合并时确保整合不丢失历史记录。

#### 3.2 压缩提交（Squash）

**意义**：

* 在开发过程中，某个功能可能会产生许多小的提交，尤其是反复修改和修复错误时。为了保持代码历史的简洁清晰，可以在合并前使用 `squash` 来合并这些零碎的提交。

* 压缩提交有助于减少冗余的提交历史，尤其是当代码评审时，代码库中的提交记录应尽量保持简洁。

**体现**：

* **整洁的提交历史**：通过 `squash`，你可以将多个零碎提交整合为一个大提交，从而避免零散的提交污染代码库历史。

* **代码评审**：当代码提交进行评审时，提交历史越简洁、明确，评审人员越容易理解每个提交的目的和功能。

#### 3.3 拉取请求（Pull Request）

**意义**：

* **代码评审与协作**：Pull Request 是 GitHub 等平台上协作开发的重要流程，开发者通过 PR 请求合并代码，并让团队其他成员进行代码评审，确保代码质量。

* **分支管理**：通过 PR，可以严格控制分支的合并流程，任何更改需要经过评审后才能被合并到主分支。

**体现**：

* **团队协作**：Pull Request 提供了一个结构化的协作流程，每个开发者可以提交自己的更改，并等待团队成员批准。

* **自动化测试集成**：PR 通常可以集成自动化测试，当有人创建 PR 时，自动测试会运行，确保提交的代码没有引入错误。

* **评论与讨论**：在 PR 中，团队成员可以就代码进行评论、讨论，确保每个更改都经过深思熟虑。

#### 3.4 变基（Rebase）

**意义**：

* 变基的核心作用是保持项目的提交历史更加线性、简洁。与 `merge` 不同，`rebase` 会将你当前分支的更改应用在目标分支的顶端，重新创建一个线性的历史记录。

* `rebase` 适用于不希望生成额外合并提交的场景，它让代码历史更具可读性，特别是当有多个功能分支需要合并时。

**体现**：

* **线性提交历史**：`git rebase` 可以避免复杂的分支结构，特别是当一个项目有多个开发者和多个并行分支时，合并历史变得非常混乱，使用 `rebase` 可以生成线性、整洁的历史。

* **避免合并提交**：不像 `merge` 会生成合并节点，`rebase` 通过“重演”提交，使得提交历史像是一次连续的开发过程，代码历史更简洁。

#### 3.5 Rebase 和 Merge 的区别

**Merge 意义**：

* `merge` 在保留分支独立历史的同时，生成了一个新的“合并提交”，这对于追踪不同开发人员的工作是有帮助的，能让团队清晰了解每次合并发生的具体情况。

* **适用场景**：多人并行开发，不要求保持提交历史的整洁，反而希望保留每个开发分支的独立性。

**Rebase 意义**：

* `rebase` 让代码历史更具可读性和清晰性，开发者可以避免生成过多的合并提交。通过线性化提交历史，项目维护者能够更容易理解代码变动的过程。

* **适用场景**：需要简化提交历史的项目，特别是长时间开发的功能分支，在合并时希望历史线性、清晰。

1. 参考资料更新

* Git Merge 和 Rebase 的详细解释

* [Squash 和 Rebase 的具体使用场景](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History)

### 4. 示例



#### 示例 1: 创建并推送本地项目

1. 初始化 Git 仓库：

   ```bash
   git init
   ```

2. 添加文件并提交：

   ```bash
   git add .
   git commit -m "Initial commit"
   ```

3) 推送到远程仓库：

   ```bash
   git remote add origin <repository_url>
   git push origin master
   ```



#### 示例 2: 解决合并冲突

1. 拉取远程更新：

   ```bash
   git pull origin master
   ```

2. 合并分支：

   ```bash
   git merge feature_branch
   ```

3) 解决冲突后，提交合并：

   ```bash
   git add .
   git commit -m "Resolve merge conflict"
   ```



### 5. 参考资料



* [Pro Git 书籍](https://git-scm.com/book/zh/v2)

* [Git 官方文档](https://git-scm.com/doc)

* [廖雪峰的 Git 教程](https://www.liaoxuefeng.com/wiki/896043488029600)

* [Atlassian Git Tutorial](https://www.atlassian.com/git/tutorials)



通过这个学习路线，你可以逐步掌握 Git 的基本操作和常用技巧，适应现代开发中的版本控制需求。

## 贡献者

<div class="contributors-list" style="display: flex; gap: 20px; flex-wrap: wrap; margin-top: 20px;">
  <!-- 贡献者 1 -->    
  <div style="text-align: center;">
    <img src="https://avatars.githubusercontent.com/u/94302726?v=4" alt="魏知乐" style="width: 80px; border-radius: 50%;" />
    <p style="margin-top: 8px;"><a href="https://github.com/spaceluke" target="_blank">魏知乐</a></p>
  </div>

</div>