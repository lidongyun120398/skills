# 个人 Skills

## 安装 `feature-workflow`

任选与你使用的客户端对应的一条命令（需要 Node.js 和 `npx`）：

**Codex**

```sh
npx skills add lidongyun120398/skills --skill feature-workflow --agent codex --global
```

**Claude Code**

```sh
npx skills add lidongyun120398/skills --skill feature-workflow --agent claude-code --global
```

安装器会临时获取仓库，但只安装 `feature-workflow`，无需在工作目录手动 `git clone`。安装后打开新会话，在 Codex 用 `$feature-workflow`，在 Claude Code 用 `/feature-workflow`。

### 不克隆仓库，也不用 Node.js

在用户级技能目录下新建 `feature-workflow/`：Codex 用 `~/.codex/skills/`（设置了 `CODEX_HOME` 时用 `$CODEX_HOME/skills/`），Claude Code 用 `~/.claude/skills/`。只下载下面三个文件，按相对路径保存：

| 下载 | 在 `feature-workflow/` 下保存为 |
| --- | --- |
| [Skill 主文件](https://raw.githubusercontent.com/lidongyun120398/skills/main/feature-workflow/SKILL.md) | `SKILL.md` |
| [Codex 手动触发设置](https://raw.githubusercontent.com/lidongyun120398/skills/main/feature-workflow/agents/openai.yaml) | `agents/openai.yaml` |
| [交付记录模板](https://raw.githubusercontent.com/lidongyun120398/skills/main/feature-workflow/references/feature-record.md) | `references/feature-record.md` |

Claude Code 不读取 `agents/openai.yaml`。如果也要由客户端强制只允许手动触发，在 Claude Code 本地副本的 `SKILL.md` 顶部 YAML 区块内添加 `disable-model-invocation: true`。

此仓库只安装主流程。`impeccable`、`code-review`、`tdd` 等配套 Skill 不会一起安装；如需对应阶段的完整能力，请在目标客户端另外安装。找不到配套 Skill 时，主流程会记录缺口；所需审查未完成时不标记整体验收通过。
