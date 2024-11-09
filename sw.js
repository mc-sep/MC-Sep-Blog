/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","a87f2b52db98c78c8b3cc8aa98bdd77a"],["/about/index.html","687df787220250821674a1d322178c38"],["/archives/2024/05/index.html","51d9bbc83436a4e37f51081318cb375f"],["/archives/2024/06/index.html","3ae70c7863b2e9eb62f5d741f4babf90"],["/archives/2024/07/index.html","359b01c6a838248d211f071304bddb33"],["/archives/2024/08/index.html","2555da01890216e0eb16f2a5162c9331"],["/archives/2024/09/index.html","7dc8a968d5b42f27ab02a7c0158c53cf"],["/archives/2024/10/index.html","ddf8b25658e07fa1c11642f96c91e59c"],["/archives/2024/index.html","4f6c7f796ac53ef000320392951537cd"],["/archives/2024/page/2/index.html","7b2f0fed5a24b2060d06bfbab3025572"],["/archives/index.html","a4bdca66eebf95a2f61f6210d9f4f8f2"],["/archives/page/2/index.html","11759fa99f3948a68b6fd7662fa27053"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/Cloudflare/index.html","fb66f3f0f1a634a3a91b4b3d1be39e74"],["/categories/HTML/index.html","2bf3d81db9ed73acc073ab2e8156b65e"],["/categories/Hexo/index.html","eb402bdba32e9664237f8b6c70db75d1"],["/categories/PHP/index.html","1968442f2e6b84002f6556da85a1e52f"],["/categories/index.html","dcaf60264e98dc4b65f0a36577661a91"],["/categories/公告/index.html","52102127feaa12eb6097846a795271a6"],["/categories/博客月报/index.html","6269832830724e60690193c74e073572"],["/categories/周年记/index.html","0b660408fd92e39508bb37e4818b3907"],["/categories/实用教程/index.html","dccc6f9ea0639f2fed42bfc1dafc4280"],["/categories/调查问卷/index.html","8828384e55c74d5e9fdfe4c291159179"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","403e2ecda5b613f2f0d8b74ec71648c3"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","610e6fd33360c951b9042fcb76e1dd88"],["/css/var.css","aa4c9386e5a14a0b929cb4307a47b47f"],["/custom/dayalert/day.js","398f4e941bd2949fd204c08074cea28e"],["/custom/dayalert/sweetalert2.all.js","f038d0609bad8151488425c964c4f53d"],["/custom/fps/fps.css","d0ff031eeecbf2246a4d74f678ac33a1"],["/custom/fps/fps.js","7b846fe2f4549589f84e64a2a5604bbe"],["/essay/index.html","2231932e3d5f868580a2d444cc4403f1"],["/img/article/1/37571ffc50dd2032305e07efae54f6cad9bf503925b6b21fc9b024399ab1e167.png","cd8eebb13eaac37842b6813e4a69e0df"],["/img/article/1/3b7e85db21c338eff30c33d588b31814852cf4ae85a3f2f6eacd0ce9e1836ba1.png","e5a1d2d52c8e8c1a8758d861689a7505"],["/img/article/1/4922810fd9d9e09ced18c74ea9cf7edbd2f12cd04852da015ee3e17ecb5991da.png","e9bcced942c45076988acf51bca4ac8d"],["/img/article/1/4bead4b616ac5f73dedd50bdabcc628a640bb89c34977f9b899514bf139f0107.png","2fafeab322d0fdcc30ebbd4610a0fe27"],["/img/article/1/54bce0caad0455e3817a3174157c978388056f3f5aa1b0876ba18bf06efd459d.png","4115e86a419bc517364a8602e79cbb84"],["/img/article/1/62cec8d35f912bba3802f23b0c84d4b09b9daa4b2c3386850b099307c5b2bfa6.png","6154c219d4d269593493b4d5dd422df3"],["/img/article/1/6816ace35cb5d27ea0d2c1a765e536c4517cc4c562e4df11a60523d8abf51f4c.png","b99035665c1f7d4b5557f0f6c1e8d8ed"],["/img/article/1/724a3bf6f78ef3e9f93a617949435624c6330525bd2fcd10f8c7d684a6944b78.png","34bf65b270e543b82f43b8d99b892d8c"],["/img/article/1/75df6fcc0879c1990ac029d3af262a47434a216f8b5e44b467aae2cd9eae62d6.png","54f65795a704008b1082ee907ed8440c"],["/img/article/1/831c75073352d065bee94f80b1f8db2d5bf523bd664d31ca8ac8eec650d7188d.png","cace4d8b1e4e60cf46fe4b9e3888d1ec"],["/img/article/1/8730fbe6ccace43796bd27dd85ac1fe749be814e646f128fb81e2191070766fa.png","1ccc6decb2c3bd5cbfe4fefd5921959d"],["/img/article/1/885b4cc6de6026b5cb42f0a5f9e43fade4abf890b43a0675bc87907556d5c69b.png","443a2f7a79d2443549020f0cfc92a292"],["/img/article/1/945c106798566807d113d280dc73e6d9e14754680929e89c656b526c87f8122a.png","131d4f714a63791d3e8bbac625fa9bc6"],["/img/article/1/9661467d4657aef14cd39180743ca7ac34eef59dd489c1116e27e782cd245dac.png","a7d288c15e9beb37e17bfdc4a808682a"],["/img/article/1/99586ae7171f8fa78c7b390cd8073b8d815c9cacada82fb3cff1d1c105187a69.png","1d4feedd5f87cf86d898703231c89001"],["/img/article/1/9fee061f2c82ef8833a6ba17f9bb898951749953919b048c26d74eaccc754b1c.png","4f85c1420811bb5b72bfaef2045e64cd"],["/img/article/1/a9a751589440a751b4d71f58199310a4d569146cbd94c4046ede1184632a3b23.png","dc19aa8813991702faef9a4e4e961f45"],["/img/article/1/ad827d799a0ee6bd7bd381728d8879534784be2f3c44ed5c8d7be6eb3f7e0d7c.png","d74fbc4b6c99ab031c87f55f0a64aee8"],["/img/article/1/d0d34066b3d1349ca5a31c7b03a47f8f7fefb51a38e5c520717d4899b2f74952.png","264d49ab3a87ee4fcedd0af2592dcfb8"],["/img/article/1/d9d067079f4ed210f6d42998aa9f2508b529a30e322f2169538775518da9f393.png","81966a89ec33ceb2f556e2084fc6d6c5"],["/img/article/1/df217c019f410eab4ca7e7a130ef206565a267bde692d8f146528043b7c36e12.png","62af372759846de3c866943f8f2ceb70"],["/img/article/1/ec9601d45ca8f7d78bb9f8a711be160c05efee79d4a26f3ee5edc75750cec21c.png","54e017801e96a00f7ff1cf806412f883"],["/img/article/1/f0740c4deb5f6051d9604821191f48805ce9031ccfaeda767b6e965f36e5a7c2.png","91dd099e8b3a9a580e1f7970f197565a"],["/img/article/1/f4a84c180811b3ead36d09a908abee0c7d01c18be9afa368bcbf109d7d92959e.png","1340218082d524b0e29fcf4b14210f4d"],["/img/article/10/0c02ff6cc4207d10ee23c2d8fe2c7caccad331bfd7a61607e12973152cc7b1ba.png","10f6897d5a9559e8400d685687edbb5d"],["/img/article/10/f194ede44a20431d79396a4dda50ebf14539158a8a1b167fb3aeac4c9b6b6d53.png","8ad2414aa8161d5e65b12c67c8b41c89"],["/img/article/10/th.png","6fd11d57f4d1c37edc18ad71b29d7e5e"],["/img/article/11/03e54b7d612f8bc422da789642c98e12d582b5e2600cf8916b68850033a87837.png","7e74706121e115ff87baac5cd0eaf9bd"],["/img/article/11/5bb94d6d8ac6f50273fe15236fc14acdb506f5cd42cc0083049823be4ac4a4df.png","18611cd9df9ed37731466eaf517bc54d"],["/img/article/11/680406de5438f800869975fdde94dba8d250c7101fb87521d2542fc0727403a1.png","88815f14ce64dbd935bc51ca4260b303"],["/img/article/11/b35a8a5858ff89fdb93bab3152f1ce5cadee599c433b19c1a4153708d2083e54.png","f382497c397b0c760a766a53a2d70338"],["/img/article/12/d068699b430414e617c92223c6e4ffc049da653fc65e572010c96bb320746b6f.png","976e088e73537dfc7ea7823fa6993ee3"],["/img/article/12/th.png","0e7a9a02fe685e3355a62684301b3d0d"],["/img/article/13/055fc988aad255241065ea6737692f16aee76e52558272107f3633d3a171d77a.png","e476725bdb6f917fa426d54bfcbd3183"],["/img/article/13/790eebd56379643ae8fcb33c5994ddb0845a0720020a20fb9891829e4b49e42b.png","11ff29ee2ef3eed07ae8b81cd86e12cb"],["/img/article/13/902e66cfb6bd99a53d7402fc6d61eb9d57b7995dac607c36b5190af4d7ba6771.png","499f45ecc977661c21b981edcc3ab807"],["/img/article/13/9c1fdfb473e882beb42399ea02144f61e24fe5dfb0f49cc3e377db3d4007b6c8.png","178e72186c6d85767a44d1bb6f84752e"],["/img/article/13/ade3816e006999635c9caa24b9713ce75adf8c794a0f337184fb74ccb1842e00.png","efa3e943b254c3913ab0a358d409bf55"],["/img/article/13/aefa06c390feaa84978126eafd0247ebf1e6eaa33fd90308ff7e46241f9b5321.png","1ff8bd541f2dde01b22d0b20b8e1afeb"],["/img/article/13/db6a8c47c47a8e6a1a8612261ed977e7c6081bf45a699d8b675c2e2a7837a32c.png","9836f8e3c6232b232e961cfc942a2e3e"],["/img/article/13/e20224e68a0c4f90f5d488748b8ddd1d0f01ea03d275ec8d10f6c05d948b940c.png","67a7eb1ad5729aa2c1a462865672f28d"],["/img/article/13/th.png","c6706b2d2ef6a5dec79ffb983db90414"],["/img/article/14/th.png","0e613b1a3ab33fce8bf78c045578082c"],["/img/article/15/1.png","2d3d8f6d4b90eaf7d9a9e5e14f9b9b65"],["/img/article/15/th.png","cb9e4f97d1f65872abbc97b862627732"],["/img/article/16/1.png","e795dcafa745d1028845fc78c03780f0"],["/img/article/16/2.png","f55aa5237654bd8d7dd4965444e6ef00"],["/img/article/16/4oX5YJ0.png","4046db5c4d35e282cad650269bec6a7c"],["/img/article/16/th.png","204bdb0e304b1f73ca5f157b61187057"],["/img/article/17/11f2a5c31e0b95d1a3b434c2ab26b46baff66c62aad4d1d7ed3675867ea533c2.png","bed79178523951a36bc3b4bf70adc420"],["/img/article/17/2c56b89bf1ecf53e12e60c6a1466276de9c3ef52f286a21523c214ee6320ebaa.png","f59536613c095feaa974d9151b832413"],["/img/article/17/357bb7e96510f913e7aff7ae031051eb652bf7ecca72d850efee38e0abe38d2c.png","bad92796f6ec29116dda1d217a5d7bba"],["/img/article/17/36f7594d1396d0e8d1725fd6982aa6910ed3dbe963628fde7ddddb76ceee4636.png","2708f7f6dee6647bff0dbd8ca91691b7"],["/img/article/17/3786c51b1cec27e65425052f5e9b588b87112dfdf445c57353b9a71157d4ab39.png","cbb587b1e2481aa978812b9dd92de3d3"],["/img/article/17/464d16c75c6fe1f39c4d852b01e19d98799822f3e529b516d1383e2af54088c2.png","ab1e17b591ba467761fb58773160b491"],["/img/article/17/5acb7ee42c86eca9cd7cb25bb2d018c1c34c8c432e8695f73aa3173b1d9f138e.png","9ead4fdf8a6b2c388423e2819894b90a"],["/img/article/17/a63a312034cbf5214fb7a633cfa86e646e7195cc235c5d0f16153e6b203865f6.png","60dae876c448f67ebb6670fc5411ed71"],["/img/article/17/bdfec6d578406a659bb3715c21f107059cc97ca6f853480f0d99d2d151c22909.png","80c83dded01a08cfdfa859a8f59ceec8"],["/img/article/17/d20a4793dea107d4098fecb31121944b4b3f4de62670c0bf4ea451cb3cdde6d3.png","967d0c6f5f176946338bb36d481d4b07"],["/img/article/17/e57638f9c44875449c011ce1f65024063a907f0048228efcfa267365abcf649b.png","25c00ad585339b434ffcffea641711ff"],["/img/article/17/th.png","89b8230d3b8589f1a9f3899455d4dcb4"],["/img/article/18/th1.png","77669745b262535c2433c077643b70bf"],["/img/article/19/0fe8b05d2463f89cf2f13ed9d9d7a6663a02478d226cf8c7415ea82749fa8cb5.png","dd2109aa8ea6357dc2e41cdeec9e7b7b"],["/img/article/19/2e37d166e54b37a35710ea5d0499552a3fe8da92c40c22d1b72ee91f24f56c8f.png","ac87b5d443856cee246f6e465e62f993"],["/img/article/19/349d5df03916a6fd05ec0003e8cf617dad7b24ac4d8b05691c14f77b6a43a810.png","c3095a45ee06f7542172a835334bbcc2"],["/img/article/19/a0cc918384e4fc93dccc3ef3cc6c32c624d51626af5ac3d039b7cb6d5f8ddd8f.png","89654378af78f2ecb0034e406b83913f"],["/img/article/19/ec8d78269a423a223a25940d3b6227fd42a8fd1904fed0e3eba78f13a4de858d.png","5d1b0a570f7f136d992cced865ad9afb"],["/img/article/19/th.png","a9d95d936cc47a822aab9a0bcc4ff9a3"],["/img/article/2/04534a32d06f65ade0c7f53bb36c7e03e954e5360a2eaca53027caad3e428692.png","0b4d1dc978ca17c38807ca2be3cff321"],["/img/article/2/dark.svg","7e072f9b9bafa7897bee741eb1a69970"],["/img/article/2/default.svg","a4c0f8073a9c31d3baf7cb49e410e9b3"],["/img/article/2/deta-1-BsA0eTbz.png","128468fd21de2ea71c71b6473c5597ac"],["/img/article/2/deta-4-84hJHkZt.png","ca71dc1ea30d4cb45e98e373ac5fcde0"],["/img/article/2/deta-b3wwcCqL.png","d32f1aa0ce3ae88529731c1d2da4d51e"],["/img/article/2/e42e4fe3e37f9989479c685e36456b00e9cc9dc56fc37b020d842ab35de70387.png","d16d7c987f25d9f4e0cf1ed63dd83b88"],["/img/article/2/f289d5ae538df8c6b7882685f62626de3681c625958f049df33ebc4cb6ddc1e9.png","ade14549d0feb9bc4521eeb234c426dd"],["/img/article/2/f9b2d3bfbfd1a5004c38c2fb0be33170311b7dd267a84276af6ab0ca2a1e207f.png","3464d46df45bd165a8dd0630d99fcf0a"],["/img/article/2/leancloud-3-CT_lZM0A.png","f30a97728b9b1f43a27f456519c7ba0c"],["/img/article/3/3ed214b0ee29b297605e3108ed5a276f0cf4ba4f5f8ad0aa55df2b80bae4ca62.png","dbf8400b329866d881feced3f3871b48"],["/img/article/3/d49fb2dab8c35cf50fcb8b7e8f77b0fe21f25a13ecb5a9005632d2044893a975.png","d4076b5c6517ed501b552087e792fb62"],["/img/article/3/fc4caee593e7510f5e9b7923700b567a9caa39c4251ddfb820eb6235a24d6b50.png","88e981a20bead04cd48b982998cf53e0"],["/img/article/3/th.png","277fdf5baf8902cf211906e0d26ba25b"],["/img/article/4/4c620a52d04519fdc4d7562eb6fa0c9fab1b5f234c8eacda1ae7f04d6f8d543f.png","552dc3fe1442568be1ecd81435634bb0"],["/img/article/4/93c4c6d1a0983a2ac81c3b4326a69c93b395896e39f0df0a3f3f9109fd12d727.png","f7fff21dab8338dbbe92b324ecb2addb"],["/img/article/4/bf635f044e389db77ae051e5b6683f86692cee6be31eb2151517bdf71f99d8eb.png","97df6e50b434fd526b96c3531c473146"],["/img/article/5/th.jpg","1785c8d953796d31e057eca19b457939"],["/img/article/6/189f1b096b56932f6d6adc1cfdecee9e0bc0c8423b21741fcc82595236dc525f.png","d27b7887381199d6f16bb54493a6ff64"],["/img/article/6/285b32b471fe35b7458082bf79b5de021a409eba384d63b3447c22a72f3b54f6.png","dbcb7b7429f637c091d1206d05b9f25b"],["/img/article/6/81b3c0dca629f3a669198dbb517a142fdf51515a73b5045a2bc00d565e415b6b.png","61ea7be777371fae8fab7f3a85e83873"],["/img/article/6/button.svg","a4c0f8073a9c31d3baf7cb49e410e9b3"],["/img/article/6/d73a75082e19c1354828e0489f372cf72132edffd790d51a219bb19ddbfec69c.png","637bad05f3304b21d6b0743da5c90863"],["/img/article/6/d8cac22ed204b505c9182ec91e02f78d9af40660e7aeae9f4a2426dc80178d3e.png","7ee60e25607aa86c294ac8793a68230a"],["/img/article/7/05c7329e47ff91d9550240cb30951e16f3a27f972ebc530c49544d0e21231f54.png","578945de8601b844c7c4555e48ab0e2a"],["/img/article/7/49b5dfcbc1ca3a7bd3be89cf9badbc5156986538d2808f15ce7d6057582dd3c6.png","df7a8b67cd034d1638fa1ac6b136d5ee"],["/img/article/9/0276d1893166ba101c767dd8894a8e7ff6c545e036597ef45bd6563f96da8fd5.png","9858e9c7abb950ab09fdbd6f277dcb1b"],["/img/article/9/0a3f065ee67cb5cc8ea68ca4ccb0246738c375a7568fade1b9088a56853dc942.png","f16608562ab30e39c953bc582ab62600"],["/img/article/9/66ab1781dad21.png","f9a71978af8069abc6fc7102d06e3e3d"],["/img/article/9/6918aa668530f92bc3b85f068d97a733b7b636ee09e162eb91f73b44c07684b4.png","14d71a4fd0c7dd3558ae571f9a01a339"],["/img/article/9/th.png","70d0a163bd9d9d6c5da63913205b45f6"],["/img/avatar.png","a8fbce729ee0ce95331ba837a0d003ee"],["/img/background/Logo.png","6e0be151ff05b339e07a9a173332d0e5"],["/img/background/dark.jpg","cf1637d4b0e45d8afb5b0c67774666d8"],["/img/background/light.jpg","30a3f6f935157d1b475f041f6a3405b8"],["/img/default.png","d983fef06f9a265508c7918eab83ae13"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/happy-sticker.png","0c446bc8e5be28ecc5335ddd6ddbf742"],["/img/loading.gif","205712c42111fc63be538f793c39a039"],["/img/pwa/favicon.png","654a15a6f1a9a0a7c81937a1143664bc"],["/img/pwa/favicon_16.png","15b8700d98a9235db50ea1d0acc2c09c"],["/img/pwa/favicon_32.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/index.html","6c84dd600ac017e8ddbfebc73fa0a9e0"],["/js/covercolor/api.js","e3c887e17a53e9c9beea023ebb101a43"],["/js/covercolor/ave.js","c104ef67b272212d3d03d1da50647be1"],["/js/covercolor/local.js","aabc832f0b8e58d0015b8bb6b6f5cbe9"],["/js/main.js","d6299c2c4223a3a5fb28ea226e32a23a"],["/js/music.js","e6ca30d506ab6e702c7a369058c73d2c"],["/js/right_menu.js","27718863efdb021af1c0e11379fe595a"],["/js/search/algolia.js","3610c7d06243fc2fcc87d4703caf4ae3"],["/js/search/local.js","8ff6bd663eb297f0abc6d1998c99a728"],["/js/third_party/barrage.min.js","f0add991af64398e4df2516ca8e3c2d9"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","7b7383571864e68026fea62696885c9d"],["/js/third_party/post_ai.min.js","60f128db5538d970039fa0c7e6acfcaf"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","a783757c2fe6bcbaedc8e422472a7f8c"],["/js/tw_cn.js","72d9617d40b2f6b413a04f82340ebec6"],["/js/utils.js","0729a88af519d49cbe1d42ae0b1da190"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/links/index.html","39a99ce879b4dbf3ecb08d3f55741dcd"],["/message/index.html","24b4bad6a66c90319d68a7b7a4fd6f5c"],["/music/index.html","4527f9ad28efe0d440c161fe7c76d635"],["/page/2/index.html","805bf7f0c68497816a23cbe98561106b"],["/post/239d.html","973662f8fd5f6d24d030fbe35ec33015"],["/post/437r.html","7f41a3724a19c4ba81858b9136af2273"],["/post/43vc.html","72ec097d9e0577e8290045e6af2bdc04"],["/post/45vy.html","9d3f638cb856e2e24b0994608552685f"],["/post/4nd3.html","46a9d7dfb534e894d59dfaea720daf16"],["/post/5trr.html","772197d0f1a76b0f9b2071eb233eee97"],["/post/73dh.html","8446167791ceaa88ffc5e59bd0469a4c"],["/post/76gl.html","002c17176e368265c77aacd5e9389d70"],["/post/7bea.html","c9af291c76f12b1401a13034fb288d80"],["/post/7ghd.html","a4daccbaadc5a42197336229f279c622"],["/post/8g66.html","9c37682ea9a21c2e0559b996cbca11f5"],["/post/r5fd.html","7e51ba76fcbdf78a3e0b72b6095a1600"],["/post/re8u.html","8f59ca66e06281bac02491144f682ac3"],["/post/rh35.html","0fdbda31b9f648337a027a84128c9507"],["/post/te2r.html","b505c7ed68cf3ac2ab5c83c407e36152"],["/post/ugr2.html","df7c8ff74176ec9b7b1ea2f92e0d603c"],["/privacy/index.html","af4f2ef8313ba316ee3f43a53b1557e4"],["/recentcomments/index.html","9b378d5d4382e914e93d17b308464a80"],["/service-worker.js","00d12753bc3b54816a63c695fa7fb8b9"],["/sw-register.js","3f41da03f55bf508f520f6234dd42c90"],["/tags/API/index.html","b38f0e64d541047886f931e551d98de3"],["/tags/Cloudflare-Pages/index.html","d3025b87dd9ff0f67ce8243d4260ff66"],["/tags/Cloudflare/index.html","c182e5ec39aee32c80fb4bcc35ac0cf7"],["/tags/DDos/index.html","41d6ea6fd3418b2fb3bfe1e2ca089858"],["/tags/Github/index.html","8e8fcf80fe7d54d6d01cf936cc486a96"],["/tags/HTML/index.html","6898c2dd4c0788d54063027e6a184cc8"],["/tags/Hexo/index.html","ca8e8c613bd8ef905e2b534adc03e5fd"],["/tags/Hexo插件/index.html","7463d45cea11c7e4e29a56fa74879155"],["/tags/Javascript/index.html","e15d7e669ac17896f4e1ba1b6bd1b439"],["/tags/PHP/index.html","b8f55420fa3d25cbc03e4c77e2b6541a"],["/tags/Pages/index.html","4f7d3d63b0e2338793d208108fd229a2"],["/tags/Twikoo/index.html","4902443a32d32205eff081a6e0657c54"],["/tags/Vercel/index.html","4c79aa7cd0f3b7ccfbed6d1d9b16d553"],["/tags/Waline/index.html","6f22a256840be4058031d9112cfd51c7"],["/tags/index.html","6ce22e70d76f87f2461b8567f25dab5a"],["/tags/周年记/index.html","395724ea941f2640dcbbca843c3cea97"],["/tags/图床/index.html","6d4608039fdc4cbaba2506eb932cbade"],["/tags/月报/index.html","5b06bda07832af1c22c0e0f708f4fa7a"],["/tags/问卷/index.html","0f8cb6fec007648fd6da50d2ac7d0e0f"],["/weblink/index.html","ef130cda684bcf2ecb2611093dec2f2d"],["/workbox-9a84fccb.js","87ff93737710e43871dc77e41ff32121"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
