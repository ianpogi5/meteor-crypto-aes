Package.describe({
    name: "ianpogi5:crypto-aes",
  summary: "AES Package for Crypto.js, standard secure algorithms KAYWEB",
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function (api) {
  api.versionsFrom('1.0.2.1');
  api.use('ianpogi5:crypto-base',    ['client', 'server']);
  api.imply('ianpogi5:crypto-base',  ['client', 'server']);
  api.addFiles(['evpkdf.js', 'cipher-core.js','aes.js'], ['client', 'server']);
});