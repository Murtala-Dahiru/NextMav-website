import { execSync } from 'child_process';
import path from 'path';

const gitPath = 'C:\\Program Files\\Git\\cmd\\git.exe';

try {
  console.log('Adding files...');
  execSync(`"${gitPath}" add .`, { cwd: process.cwd(), stdio: 'inherit', shell: true });
  
  console.log('Committing changes...');
  execSync(`"${gitPath}" commit -m "Fix Learn More navigation links - convert to hash-based links"`, { cwd: process.cwd(), stdio: 'inherit', shell: true });
  
  console.log('Pushing to GitHub...');
  execSync(`"${gitPath}" push origin main`, { cwd: process.cwd(), stdio: 'inherit', shell: true });
  
  console.log('✅ Successfully pushed to GitHub!');
} catch (error) {
  console.error('❌ Antivirus is blocking git. Please manually run:');
  console.error('git add .');
  console.error('git commit -m "Fix Learn More navigation links"');
  console.error('git push origin main');
}
