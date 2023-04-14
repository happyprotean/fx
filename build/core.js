import { spawn } from 'node:child_process';
export function $(pieces) {
    const command = pieces[0];
    console.log('command', command);
    return new Promise((resolve, reject) => {
        const child = spawn(command, {
            cwd: process.cwd(),
            shell: true,
            stdio: ['pipe', 'pipe', 'pipe'],
        });
        let stdout = '';
        child.stdout.on('data', (chunk) => {
            stdout += chunk;
        });
        child.stdout.on('close', () => {
            console.log(stdout);
            resolve(stdout);
        });
    });
}
