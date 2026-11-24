import { spawnSync } from 'node:child_process';

const [agent, scope, ...extra] = process.argv.slice(2);
if (!['codex', 'claude-code'].includes(agent) || (scope && scope !== '--project') || extra.length) {
  console.error('用法：node install-feature-workflow.mjs <codex|claude-code> [--project]');
  process.exit(2);
}

const packs = [
  ['pbakaus/impeccable', ['impeccable']],
  ['https://github.com/mattpocock/skills/tree/v1.3.2/skills', [
    'code-review', 'tdd', 'codebase-design', 'grilling', 'domain-modeling',
    'diagnosing-bugs', 'pr', 'setup-matt-pocock-skills',
  ]],
  ['lidongyun120398/skills', ['feature-workflow']],
];

for (const [source, skills] of packs) {
  console.log(`\n安装 ${skills.join(', ')}（${source}）`);
  const args = ['--yes', 'skills', 'add', source, '--skill', ...skills,
    '--agent', agent, '--copy', '--yes'];
  if (scope !== '--project') args.push('--global');
  const windows = process.platform === 'win32';
  const result = spawnSync(windows ? 'cmd.exe' : 'npx',
    windows ? ['/d', '/c', 'npx', ...args] : args, { stdio: 'inherit' });
  if (result.status !== 0) {
    console.error(`安装失败：${source}${result.error ? `（${result.error.message}）` : ''}。已成功安装的批次会保留。`);
    process.exit(result.status ?? 1);
  }
}
