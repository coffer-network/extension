import fs from 'fs/promises';

const filePath = './package.json';
const backupFilePath = './package-original.json';

async function modifyPackageJson() {
  try {
    try {
      await fs.access(backupFilePath);
      console.log(`Backup file already exists: ${backupFilePath}`);
    } catch {
      await fs.copyFile(filePath, backupFilePath);
      console.log(`Backup created: ${backupFilePath}`);
    }

    const data = await fs.readFile(filePath, 'utf-8');
    let packageJson = JSON.parse(data);

    const relativePaths = [
      '@coffer.network/bitcoin',
      '@coffer.network/constants',
      '@coffer.network/crypto',
      '@coffer.network/models',
      '@coffer.network/query',
      '@coffer.network/tokens',
      '@coffer.network/utils',
      '@coffer.network/stacks',
    ];

    const devRelativePaths = ['@coffer.network/panda-preset', '@coffer.network/rpc'];

    relativePaths.forEach(dep => {
      if (packageJson.dependencies[dep]) {
        packageJson.dependencies[dep] = `file:../mono/packages/${dep.split('/').pop()}`;
      }
    });

    devRelativePaths.forEach(devDep => {
      if (packageJson.devDependencies[devDep]) {
        packageJson.devDependencies[devDep] = `file:../mono/packages/${devDep.split('/').pop()}`;
      }
    });

    if (!packageJson.pnpm) {
      packageJson.pnpm = {};
    }
    if (!packageJson.pnpm.overrides) {
      packageJson.pnpm.overrides = {};
    }

    [...relativePaths, ...devRelativePaths].forEach(dep => {
      if (packageJson.dependencies[dep] || packageJson.devDependencies[dep]) {
        packageJson.pnpm.overrides[dep] = `file:../mono/packages/${dep.split('/').pop()}`;
      }
    });

    await fs.writeFile(filePath, JSON.stringify(packageJson, null, 2) + '\n', 'utf-8');
    console.log(`Successfully updated ${filePath}`);
  } catch (err) {
    console.error(`Error: ${err}`);
  }
}

modifyPackageJson();
