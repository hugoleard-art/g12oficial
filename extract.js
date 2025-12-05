import unzipper from 'unzipper';
import fs from 'fs';

const zipFile = 'pagina.zip'; // nome do arquivo da sua pagina 👀

const outputDir = '.'; 

if (!fs.existsSync(zipFile)) {
    console.error(`Erro: O arquivo ${zipFile} não foi encontrado.`);
    process.exit(1);
}

console.log(`Extraindo ${zipFile} na pasta principal...`);

fs.createReadStream(zipFile)
  .pipe(unzipper.Extract({ path: outputDir }))
  .on('close', () => {
      console.log('✅ Deu bom pae');
  })
  .on('error', (err) => {
      console.error('❌ Deu erro...', err);
  });