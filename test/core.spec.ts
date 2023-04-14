import { $ } from '../bin/core.js'
import { vi, describe, it, expect } from 'vitest'

describe('core', () => {
  it('should run command', async () => {
    vi.stubEnv('PACKAGE_NAME', 'fx')
    const r = await $`echo $PACKAGE_NAME`
    console.log('res', r)
    expect(r).toContain('fx')
  })
})