import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
    const childProcess = spawn('node', ['./src/cp/files/script.js', args], { stdio: ['pipe', 'pipe', process.stderr] });
    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.on('data', (data) => {
        process.stdout.write(data);
    });
};

spawnChildProcess( ['argument1', 'argument2']);
