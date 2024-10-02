import { mkdirSync, copyFileSync, readdirSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';

// Convert `import.meta.url` to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Adjust the path to your actual source folder
const srcPath = resolve(__dirname, '../../assets/commons/plugins'); // Adjust this path as needed

// List your destination paths here
const commonDestPath = (project) => resolve(__dirname, `../../../../${project}/src/assets/commons/plugins`);
const destPaths = [commonDestPath('auth'), commonDestPath('dashboard')];

// Function to copy files and directories recursively
function copyFolderRecursiveSync(src, dest) {
  const entries = readdirSync(src, { withFileTypes: true });

  mkdirSync(dest, { recursive: true });

  for (const entry of entries) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);

    if (entry.isDirectory()) {
      copyFolderRecursiveSync(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  }
}

destPaths.forEach((destPath) => {
  copyFolderRecursiveSync(srcPath, destPath);
  console.log(`Copied ${srcPath} to ${destPath}`);
});
