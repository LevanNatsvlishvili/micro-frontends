import { mkdirSync, copyFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

// Convert `import.meta.url` to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Adjust the path to your actual source file
const srcFilePath = resolve(__dirname, '../../../.eslintrc.cjs'); // Adjust this path as needed

// List your destination paths here
const commonDestPath = (project) => resolve(__dirname, `../../../../${project}/.eslintrc.cjs`);
const destPaths = [commonDestPath('auth'), commonDestPath('dashboard')];

destPaths.forEach((destPath) => {
  const destDir = dirname(destPath);

  // Ensure the destination directory exists
  mkdirSync(destDir, { recursive: true });

  // Copy the file
  copyFileSync(srcFilePath, destPath);

  console.log(`Copied ${srcFilePath} to ${destPath}`);
});
