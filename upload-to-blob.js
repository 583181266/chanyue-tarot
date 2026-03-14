import { put } from '@vercel/blob';
import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const BLOB_TOKEN = process.env.BLOB_READ_WRITE_TOKEN;

if (!BLOB_TOKEN) {
  console.error('请设置 BLOB_READ_WRITE_TOKEN 环境变量');
  process.exit(1);
}

async function uploadImages() {
  const urls = {};

  // 上传塔罗牌图片
  const tarotDir = 'src/assets/tarot';
  const files = await readdir(tarotDir);

  console.log(`开始上传 ${files.length} 张塔罗牌...`);

  for (const file of files) {
    const filePath = join(tarotDir, file);
    const fileBuffer = await readFile(filePath);

    const blob = await put(file, fileBuffer, {
      access: 'public',
      token: BLOB_TOKEN,
    });

    urls[file] = blob.url;
    console.log(`✓ ${file}`);
  }

  // 上传背面图片
  const backBuffer = await readFile('src/assets/back.png');
  const backBlob = await put('back.png', backBuffer, {
    access: 'public',
    token: BLOB_TOKEN,
  });

  urls['back.png'] = backBlob.url;
  console.log('✓ back.png');

  // 保存 URL 映射
  await writeFile('src/blob-urls.json', JSON.stringify(urls, null, 2));
  console.log('\n上传完成！URL 已保存到 src/blob-urls.json');
}

uploadImages().catch(console.error);
