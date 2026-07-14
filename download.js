const fs = require('fs');
const path = require('path');
const https = require('https');

const assets = [
  {
    id: '0257ce2349c4430f9d26e534b73c2ce9',
    type: 'image',
    name: 'truck_warehouse.png',
    url: 'https://lh3.googleusercontent.com/aida/AP1WRLvXNNlmq8gBUsDn_trt5yOnmXS_Eevpp7h8Rbs2B12dAPHsk8pld8v2I6fEv2ueyCysc8Crxt7vSZr3wRQPQR0rV35PS3mC5udftavi_mCdKAoLWeQQucFr4YN1kwo13G7m73sIudUNwcFjRLP3efNQ-bs0gwOQgGicTdPSiNnmE6l-6Cblxep-vveCEuR3B2oQuPow0H8aQ1aYm32BYD7VZckQHM5yhMPo-54gYJvlu8M0QalwAJr_6XU'
  },
  {
    id: '149272b9a7eb4321941e07b7c63f94c8',
    type: 'image',
    name: 'logo.png',
    url: 'https://lh3.googleusercontent.com/aida/AP1WRLt9_7RszhM0djOBf6AHJzXhkLimys3hU3JN0WZvdcbs6XL2NwR3p1Iv9YVjKiZWex6OjGP0d1qIzLNRC7z9ok_hUBzP8PN3pavG66vE83Z3u-X9n6bKBwIQmbGVtmoE9ts_PwcewxvlZoS4_fLpSPJLPA-CITtGkhj6M5BnNnqXaud5nX0BquTUeP_soyd61HStPdXXOVj5mpx_P9eEoRLk8iFxLmmCad4rfBimiKufELsRrBObZ1ZUtus'
  },
  {
    id: '2069857ee7274b3dae670d9050167764',
    type: 'image',
    name: 'hero_truck_sunset.png',
    url: 'https://lh3.googleusercontent.com/aida/AP1WRLv3l2k-hBwkoAVUtt-jbOe-ZCI2H92zghlMcaoOQ65eIi47D9SmQnnK1PG-WmyGU6Zi_G2xJP-FdG41AoeaUMVhSef0wQZIQqeJv32Q9zbgtDhWysq5uB43qPcO0cjnJqrnpiLfKaBbONan8aNQuXFbNPqIN_izUkgkZnuLJy0t_K2GqRvVcDuQrexhUxfbjeynVtoMSxegjV0XVWwSIzJewPrfApV1CUQyRTEOZCSeRZDlo7X_5T6meg'
  },
  {
    id: '3915dd5e033c497bb89a02fc672dd65b',
    type: 'image',
    name: 'delivery_van_night.png',
    url: 'https://lh3.googleusercontent.com/aida/AP1WRLs4muvwrm0v7kqp8LY_1cxn-6bZ8QxqSshloEApxZw1QCredmfEALHz0S9tqdSKQJYBSNYuHW4eeSSU39kppOHFD_sjthD5tqnuJNLPS2TfHeKQWubRt6QpEp0CAD7XS6t1MEMtRX_DGrVoT5LPME90kTDcVm-cUx0sZv1ba0_YRk2_W8pM7gUpw9fM27RhAxL8y_KfBe8zW9muWZehJg5l5lKScI4hvW8NusZ_0r9NhW2_-7M9Z2hbMZU'
  },
  {
    id: '3e179749ced745bc9f7b42f376ffef1a',
    type: 'image',
    name: 'partial_load.png',
    url: 'https://lh3.googleusercontent.com/aida/AP1WRLvo0rAbsgBGLjYk5cHu19x6VDL1TckREIe-Li82Oyi_GtjZdYiRNFqHWT28BhL5H8drqmJV9YQgMf4I_4tqbjRwJH5iRXUt5mZ0M-eVPyyf-MzXyuCFggyYhMXofxUqXq3Hnv06akNVeltRVdToaLR_A0SyIJjAJ0VZSnYQ8TAEJwkVKkgxzOzRuh3yb5iR5X4rN6-wH-d5E01LT_6B3Bx2N8p9oyvphxeNpIQ60gkqNi55a02PGyCJtTo'
  },
  {
    id: '45c9f6f99e0d4db3a2d13b763e6abf32',
    type: 'code',
    name: 'products_equipment.html',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1NjgzOGZhMGI1NDgwNGU3NTBiMzMxMjVhNzk0EgsSBxD7r6HDzwoYAZIBIwoKcHJvamVjdF9pZBIVQhM4NzU1NTUxMzA0MjA0MDM3MDkx&filename=&opi=89354086'
  },
  {
    id: '6eab2678694344c98dfe1272a3647402',
    type: 'image',
    name: 'logistics_specialist.png',
    url: 'https://lh3.googleusercontent.com/aida/AP1WRLutbhVeJwSDgLjhlK0Kfao_4Wsi_CDhYQVW_WiBICUFhaVT_bruV2FK7lAKQeqBk-oW59kQWjeOXytSVzHxPGYf4CKYNWeqEZo1Tf5fbWKE3z4tvJ9xgTbL1zy9bFig1_UNz7Sul5HIppuso0jorJY7r6e66ftiJqtxRcpxcPADqwVLfS2f3ZsswyzKGDm1OczEQH8iLVcOcU2d0qEUrqGfh4o2btW_rbaCIcuKGHxWLbDIdnbbL00yfw'
  },
  {
    id: '8b4bb438acea4c68af2f9c4680a639c9',
    type: 'code',
    name: 'shader.html',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1NjgzNmZlYmZhZDYwNDVhZDc0YzA0MmU1ZDNmEgsSBxD7r6HDzwoYAZIBIwoKcHJvamVjdF9pZBIVQhM4NzU1NTUxMzA0MjA0MDM3MDkx&filename=&opi=89354086'
  },
  {
    id: '9d3fa05429ea49de9a236146ea33c5f9',
    type: 'image',
    name: 'furniture_transport.png',
    url: 'https://lh3.googleusercontent.com/aida/AP1WRLufDZ-EJ8XQl8OT2EfyBGB3WNNY3Gx5t7pGrAz5nyzu2KutbaZ_hoNOm1nmnrtN5eEx51ihk3lmzF6b4yPIfiufP_hofY_OsTWZOFBIJieMXNtXMOFXKb5z8XUhaSroXg0KvS8bQioMy8oAv0ksjVCYK-nPEamlMwPDqDLR9fJLSvlGVe7LxwpCUmUUvZ5Qi7oOUgqxkcTs6zVfMzQdtqxL6IX0ZWtq8zrXLW0jbYJAJnR6IFHttK9Q9g'
  },
  {
    id: 'd84593875c1a4403960c8a0390d7d184',
    type: 'code',
    name: 'fleet_services.html',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1NjgzYTM1OThhYmIwNDRmNWNmY2Q5MTAzOTNkEgsSBxD7r6HDzwoYAZIBIwoKcHJvamVjdF9pZBIVQhM4NzU1NTUxMzA0MjA0MDM3MDkx&filename=&opi=89354086'
  },
  {
    id: 'dff149ec17ee421a94bb3fa841096084',
    type: 'code',
    name: 'home_recreated.html',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1NjgzN2IzMWZkMjQwM2ZiMzc4ODcyMTk2ODU2EgsSBxD7r6HDzwoYAZIBIwoKcHJvamVjdF9pZBIVQhM4NzU1NTUxMzA0MjA0MDM3MDkx&filename=&opi=89354086'
  },
  {
    id: '10642311094868267870',
    type: 'image',
    name: 'image.png',
    url: 'https://lh3.googleusercontent.com/aida/AP1WRLsa-ONPSvSFuiWC-JeNX6TnzrslBjBH08Ncz_SXYPNNx3SYoCygENGRaDe3rZT_mKCoHqSVkhv7a6UPR61b1msM5cjI0fmMeV2Y08dEL2kytqEVu5lUOAi7STYNbPAggUM9LShcFKdj4CWmXy5xHmbHlD5UWx1tDERUsChpZttLUcqPjJ4FRf9wr4Vp4wPOhlA-8SIHuhTyrsAagGB2uuLVHRhX7wp8cKEO-Lv6TTzuxNXcMTcEX5E-sGmhep8hVG_lrHHVztBZ9g'
  }
];

const imgDir = path.join(__dirname, 'public', 'images');
const codeDir = path.join(__dirname, 'temp_stitch');

if (!fs.existsSync(imgDir)) {
  fs.mkdirSync(imgDir, { recursive: true });
}
if (!fs.existsSync(codeDir)) {
  fs.mkdirSync(codeDir, { recursive: true });
}

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      // Handle redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, destPath).then(resolve).catch(reject);
      }
      
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (status: ${res.statusCode})`));
        return;
      }

      const fileStream = fs.createWriteStream(destPath);
      res.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded: ${path.basename(destPath)}`);
        resolve();
      });

      fileStream.on('error', (err) => {
        fs.unlink(destPath, () => {});
        reject(err);
      });
    }).on('error', reject);
  });
}

async function start() {
  for (const asset of assets) {
    const destDir = asset.type === 'image' ? imgDir : codeDir;
    const destPath = path.join(destDir, asset.name);
    console.log(`Starting download for ${asset.name}...`);
    try {
      await downloadFile(asset.url, destPath);
    } catch (err) {
      console.error(`Error downloading ${asset.name}:`, err.message);
    }
  }
  console.log('All downloads complete!');
}

start();
