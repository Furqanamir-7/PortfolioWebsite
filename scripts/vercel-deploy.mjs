import { execSync } from 'node:child_process'
import { readFileSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const projectJson = join(root, '.vercel', 'project.json')

/** Matches linked project; slug `furqans-projects-308696ed` also works with `--scope` */
const FALLBACK_SCOPE = 'team_HmGYajdMYWqy7HKYpiJ6Qusa'

let scope = process.env.VERCEL_SCOPE || FALLBACK_SCOPE
if (existsSync(projectJson)) {
  try {
    const pj = JSON.parse(readFileSync(projectJson, 'utf8'))
    if (pj.orgId) scope = pj.orgId
  } catch {
    /* use fallback */
  }
}

execSync(`npx vercel deploy --prod --yes --scope ${scope}`, {
  cwd: root,
  stdio: 'inherit',
  shell: true,
  env: process.env,
})
