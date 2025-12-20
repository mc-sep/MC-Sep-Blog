/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","20d18fad1563a9e7ccf77a93779b4c04"],["/about/index.html","ce5eb6050566621055a149ab4269d6e9"],["/archives/2024/05/index.html","531a2a359b08b8d08c3c6f8a036cfedf"],["/archives/2024/06/index.html","3c23356640003f7343c71d5a8ebc6bc2"],["/archives/2024/07/index.html","fb13f14ee5093fbec6289eb69988ce4c"],["/archives/2024/08/index.html","9e3e22331e86b8055eb80c2eac0adc96"],["/archives/2024/09/index.html","2b701a02205b7a68f395c7c0a2031d36"],["/archives/2024/10/index.html","a630ef1bc5a33c3b5759ba8ebb173657"],["/archives/2024/11/index.html","58361472de0487bb43b5bc1562b6f150"],["/archives/2024/index.html","4c8118baab3e0c0cbca6c9eb189b7f4b"],["/archives/2024/page/2/index.html","98fb9325ab7cca37209dd614d673a5f1"],["/archives/2025/07/index.html","8882cd76124dd33088b6ce24efdac47d"],["/archives/2025/08/index.html","2879b58315ed5af4f038d7950337155e"],["/archives/2025/index.html","149ae2a40c75b158b7835d5f044b0dd2"],["/archives/index.html","941ad87aefe226db598194b1c15a22ca"],["/archives/page/2/index.html","ec584b450edf20813f46e97868d932d7"],["/assets/algolia/algoliasearch.js","3c59bbc4c45afa90f4e3acbbb106a4e9"],["/assets/algolia/algoliasearch.min.js","5b2ab8eeb1ef1127394578ecb8eab70a"],["/assets/algolia/algoliasearchLite.js","9fd54c9985d8a4272e71bfe8cfe7bb77"],["/assets/algolia/algoliasearchLite.min.js","3055981523bdb5ef9db436226b593925"],["/categories/Cloudflare/index.html","a34c39cf31a57e776410025ce9bb9a32"],["/categories/HTML/index.html","8fae7a354794331512d333b82a0137d4"],["/categories/Hexo/index.html","497eb74e649885342921f1fe98d682bf"],["/categories/PHP/index.html","f9447a38502244478ede7a89f1478b6e"],["/categories/index.html","dd1938feb2ee4b486ab4112751eaf475"],["/categories/公告/index.html","fa342664e6812188da9cb092bde50b04"],["/categories/博客月报/index.html","3b6c5e234fae8e182ce86a2c2f2d8256"],["/categories/周年记/index.html","6e21bcf850ad5249b7e078ff4aa85f00"],["/categories/实用教程/index.html","7761e84ddd5dc9388873cc7f75b0184f"],["/categories/搞机日记/index.html","0294e775f3d603a1930445930a10bfe7"],["/categories/软件/index.html","7be0304006dc56676ced23b64f2f322a"],["/css/hbe.style.css","f58f8d01aa095ac843e42540c3010d91"],["/css/index.css","d6be951457324cfdad415182861ee733"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","14bae49db74eac70265ceb0f462a9692"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/custom/dayalert/day.js","398f4e941bd2949fd204c08074cea28e"],["/custom/dayalert/sweetalert2.all.js","f038d0609bad8151488425c964c4f53d"],["/custom/fps/fps.css","d0ff031eeecbf2246a4d74f678ac33a1"],["/custom/fps/fps.js","7b846fe2f4549589f84e64a2a5604bbe"],["/essay/index.html","7a898c1092f6a15e15aabfdd76dd21c3"],["/go.html","b7abdeb8e7a5389a36f3efe792ddf10d"],["/hot/index.html","186c103f1d91db2698bed77b9b459158"],["/img/article/1/37571ffc50dd2032305e07efae54f6cad9bf503925b6b21fc9b024399ab1e167.png","5f67bb199ef11b7a088d6d87621fc417"],["/img/article/1/3b7e85db21c338eff30c33d588b31814852cf4ae85a3f2f6eacd0ce9e1836ba1.png","50c41f131fbba17bbf2879caba9e625f"],["/img/article/1/4922810fd9d9e09ced18c74ea9cf7edbd2f12cd04852da015ee3e17ecb5991da.png","9b9c48e088e9fb5f483675a0ae2c5011"],["/img/article/1/4bead4b616ac5f73dedd50bdabcc628a640bb89c34977f9b899514bf139f0107.png","3dc03b8137202811db9fb56f38c40116"],["/img/article/1/54bce0caad0455e3817a3174157c978388056f3f5aa1b0876ba18bf06efd459d.png","79e55fd516bcd20b2d37e69b6d8f156c"],["/img/article/1/62cec8d35f912bba3802f23b0c84d4b09b9daa4b2c3386850b099307c5b2bfa6.png","fc4253ffbdb3519773ceb074192c18f4"],["/img/article/1/6816ace35cb5d27ea0d2c1a765e536c4517cc4c562e4df11a60523d8abf51f4c.png","424e383c056efa0df822d06ab7cb609a"],["/img/article/1/724a3bf6f78ef3e9f93a617949435624c6330525bd2fcd10f8c7d684a6944b78.png","c8f5c65ed245250029d800bb57222ef0"],["/img/article/1/75df6fcc0879c1990ac029d3af262a47434a216f8b5e44b467aae2cd9eae62d6.png","46f733d96d4d197f2de3f1f28ace4319"],["/img/article/1/831c75073352d065bee94f80b1f8db2d5bf523bd664d31ca8ac8eec650d7188d.png","2d47f057281c0c5132f2362e234c7108"],["/img/article/1/8730fbe6ccace43796bd27dd85ac1fe749be814e646f128fb81e2191070766fa.png","6e8250387a004ef88885a72183e4fe6b"],["/img/article/1/885b4cc6de6026b5cb42f0a5f9e43fade4abf890b43a0675bc87907556d5c69b.png","efd0e7df62f1d6739407f79afb0c82bf"],["/img/article/1/945c106798566807d113d280dc73e6d9e14754680929e89c656b526c87f8122a.png","58d3fcea6605cdf43dd569b4dcf5d5fe"],["/img/article/1/9661467d4657aef14cd39180743ca7ac34eef59dd489c1116e27e782cd245dac.png","0446d9981860abae4399baa5e097f17f"],["/img/article/1/99586ae7171f8fa78c7b390cd8073b8d815c9cacada82fb3cff1d1c105187a69.png","ec4ef6d0b681ce524a1a64f2ec10ce69"],["/img/article/1/9fee061f2c82ef8833a6ba17f9bb898951749953919b048c26d74eaccc754b1c.png","564aa36b0ece54f0e6b4bad66b10d18f"],["/img/article/1/a9a751589440a751b4d71f58199310a4d569146cbd94c4046ede1184632a3b23.png","c38f95c1c426a481b6e21220c2b1f1a8"],["/img/article/1/ad827d799a0ee6bd7bd381728d8879534784be2f3c44ed5c8d7be6eb3f7e0d7c.png","13b33daafa14c5aac6fea5d57bc30555"],["/img/article/1/d0d34066b3d1349ca5a31c7b03a47f8f7fefb51a38e5c520717d4899b2f74952.png","b474b51605926a66f27daf246891e27d"],["/img/article/1/d9d067079f4ed210f6d42998aa9f2508b529a30e322f2169538775518da9f393.png","23ee3398bff6c3f67ea5c59fa2ab212c"],["/img/article/1/df217c019f410eab4ca7e7a130ef206565a267bde692d8f146528043b7c36e12.png","59266da0ce18dce45e3bd2872cced463"],["/img/article/1/ec9601d45ca8f7d78bb9f8a711be160c05efee79d4a26f3ee5edc75750cec21c.png","8ac3947e87689297982f41b80ef8cb2c"],["/img/article/1/f0740c4deb5f6051d9604821191f48805ce9031ccfaeda767b6e965f36e5a7c2.png","b76b160b2c3eff804530bcddaf519261"],["/img/article/1/f4a84c180811b3ead36d09a908abee0c7d01c18be9afa368bcbf109d7d92959e.png","3b4eb214bba39c6a016eb2f5f5975788"],["/img/article/10/0c02ff6cc4207d10ee23c2d8fe2c7caccad331bfd7a61607e12973152cc7b1ba.png","10f6897d5a9559e8400d685687edbb5d"],["/img/article/10/f194ede44a20431d79396a4dda50ebf14539158a8a1b167fb3aeac4c9b6b6d53.png","8ad2414aa8161d5e65b12c67c8b41c89"],["/img/article/11/03e54b7d612f8bc422da789642c98e12d582b5e2600cf8916b68850033a87837.png","7e74706121e115ff87baac5cd0eaf9bd"],["/img/article/11/5bb94d6d8ac6f50273fe15236fc14acdb506f5cd42cc0083049823be4ac4a4df.png","18611cd9df9ed37731466eaf517bc54d"],["/img/article/11/680406de5438f800869975fdde94dba8d250c7101fb87521d2542fc0727403a1.png","88815f14ce64dbd935bc51ca4260b303"],["/img/article/11/b35a8a5858ff89fdb93bab3152f1ce5cadee599c433b19c1a4153708d2083e54.png","f382497c397b0c760a766a53a2d70338"],["/img/article/12/d068699b430414e617c92223c6e4ffc049da653fc65e572010c96bb320746b6f.png","976e088e73537dfc7ea7823fa6993ee3"],["/img/article/13/055fc988aad255241065ea6737692f16aee76e52558272107f3633d3a171d77a.png","e476725bdb6f917fa426d54bfcbd3183"],["/img/article/13/790eebd56379643ae8fcb33c5994ddb0845a0720020a20fb9891829e4b49e42b.png","11ff29ee2ef3eed07ae8b81cd86e12cb"],["/img/article/13/902e66cfb6bd99a53d7402fc6d61eb9d57b7995dac607c36b5190af4d7ba6771.png","499f45ecc977661c21b981edcc3ab807"],["/img/article/13/9c1fdfb473e882beb42399ea02144f61e24fe5dfb0f49cc3e377db3d4007b6c8.png","178e72186c6d85767a44d1bb6f84752e"],["/img/article/13/ade3816e006999635c9caa24b9713ce75adf8c794a0f337184fb74ccb1842e00.png","efa3e943b254c3913ab0a358d409bf55"],["/img/article/13/aefa06c390feaa84978126eafd0247ebf1e6eaa33fd90308ff7e46241f9b5321.png","1ff8bd541f2dde01b22d0b20b8e1afeb"],["/img/article/13/db6a8c47c47a8e6a1a8612261ed977e7c6081bf45a699d8b675c2e2a7837a32c.png","9836f8e3c6232b232e961cfc942a2e3e"],["/img/article/13/e20224e68a0c4f90f5d488748b8ddd1d0f01ea03d275ec8d10f6c05d948b940c.png","67a7eb1ad5729aa2c1a462865672f28d"],["/img/article/15/1.png","2d3d8f6d4b90eaf7d9a9e5e14f9b9b65"],["/img/article/16/1.png","e795dcafa745d1028845fc78c03780f0"],["/img/article/16/2.png","f55aa5237654bd8d7dd4965444e6ef00"],["/img/article/16/4oX5YJ0.png","4046db5c4d35e282cad650269bec6a7c"],["/img/article/17/11f2a5c31e0b95d1a3b434c2ab26b46baff66c62aad4d1d7ed3675867ea533c2.png","bed79178523951a36bc3b4bf70adc420"],["/img/article/17/2c56b89bf1ecf53e12e60c6a1466276de9c3ef52f286a21523c214ee6320ebaa.png","f59536613c095feaa974d9151b832413"],["/img/article/17/357bb7e96510f913e7aff7ae031051eb652bf7ecca72d850efee38e0abe38d2c.png","bad92796f6ec29116dda1d217a5d7bba"],["/img/article/17/36f7594d1396d0e8d1725fd6982aa6910ed3dbe963628fde7ddddb76ceee4636.png","2708f7f6dee6647bff0dbd8ca91691b7"],["/img/article/17/3786c51b1cec27e65425052f5e9b588b87112dfdf445c57353b9a71157d4ab39.png","cbb587b1e2481aa978812b9dd92de3d3"],["/img/article/17/464d16c75c6fe1f39c4d852b01e19d98799822f3e529b516d1383e2af54088c2.png","ab1e17b591ba467761fb58773160b491"],["/img/article/17/5acb7ee42c86eca9cd7cb25bb2d018c1c34c8c432e8695f73aa3173b1d9f138e.png","9ead4fdf8a6b2c388423e2819894b90a"],["/img/article/17/a63a312034cbf5214fb7a633cfa86e646e7195cc235c5d0f16153e6b203865f6.png","60dae876c448f67ebb6670fc5411ed71"],["/img/article/17/bdfec6d578406a659bb3715c21f107059cc97ca6f853480f0d99d2d151c22909.png","80c83dded01a08cfdfa859a8f59ceec8"],["/img/article/17/d20a4793dea107d4098fecb31121944b4b3f4de62670c0bf4ea451cb3cdde6d3.png","967d0c6f5f176946338bb36d481d4b07"],["/img/article/17/e57638f9c44875449c011ce1f65024063a907f0048228efcfa267365abcf649b.png","25c00ad585339b434ffcffea641711ff"],["/img/article/19/0fe8b05d2463f89cf2f13ed9d9d7a6663a02478d226cf8c7415ea82749fa8cb5.png","dd2109aa8ea6357dc2e41cdeec9e7b7b"],["/img/article/19/2e37d166e54b37a35710ea5d0499552a3fe8da92c40c22d1b72ee91f24f56c8f.png","ac87b5d443856cee246f6e465e62f993"],["/img/article/19/349d5df03916a6fd05ec0003e8cf617dad7b24ac4d8b05691c14f77b6a43a810.png","c3095a45ee06f7542172a835334bbcc2"],["/img/article/19/a0cc918384e4fc93dccc3ef3cc6c32c624d51626af5ac3d039b7cb6d5f8ddd8f.png","89654378af78f2ecb0034e406b83913f"],["/img/article/19/ec8d78269a423a223a25940d3b6227fd42a8fd1904fed0e3eba78f13a4de858d.png","5d1b0a570f7f136d992cced865ad9afb"],["/img/article/2/04534a32d06f65ade0c7f53bb36c7e03e954e5360a2eaca53027caad3e428692.png","a0ca12e38e52a8555a2179fb65e91991"],["/img/article/2/dark.svg","60de7ae8fde750469ec9a12811868989"],["/img/article/2/default.svg","d6b9394a78117aaffcd6b84e2b32b710"],["/img/article/2/deta-1-BsA0eTbz.png","c241ee36c8d045addfcdd6ab4cc1832c"],["/img/article/2/deta-4-84hJHkZt.png","bf0c9321dcc619c0342fadfecf563717"],["/img/article/2/deta-b3wwcCqL.png","a52653dd1dfe278eefab370d0c8366de"],["/img/article/2/e42e4fe3e37f9989479c685e36456b00e9cc9dc56fc37b020d842ab35de70387.png","213e5540ce9d53096b358e28d5f78fe6"],["/img/article/2/f289d5ae538df8c6b7882685f62626de3681c625958f049df33ebc4cb6ddc1e9.png","d1d12eee23806a86e02fef7c1cc36c42"],["/img/article/2/f9b2d3bfbfd1a5004c38c2fb0be33170311b7dd267a84276af6ab0ca2a1e207f.png","dcfe9aab6c00d0417defe54a75e4e475"],["/img/article/2/leancloud-3-CT_lZM0A.png","9a9a325c1497e38010dcea7856726a56"],["/img/article/21/6209e90bb2173d4197d47f74dd66024f073b1144.png","06a07d2e84d74fb0bc127bdbdfb2364b"],["/img/article/21/62ef1a187883f2ce2d813ddcba403aead16c7747.png","23bfb21a68b8fc502dd04537243dbaa3"],["/img/article/21/7baae8917a20ba5202e594a5b05abc960fe01725.png","8c5cd861e120433ca97a85bd4247cdac"],["/img/article/21/b4ed65ccc4d794617fda21e7bb92a17afc35bb3a.jpg","4f1691968d4a69be8bd4af9232485748"],["/img/article/21/b6fa800413a1985483c7b6aa77114eee7c883c70.png","a943201975596bb88247f6fb14f73f66"],["/img/article/21/e684ccc486939315a387bbc53e8c33afda1505da.jpg","e4cd3452cdd027875360d2adbd1c8066"],["/img/article/21/edf0599f28d9039870da3f0f87d062adcdd29281.png","c05fc6db5cd83aec28c7883e3cbfd643"],["/img/article/22/1a26572af98c74410cbbeea674cfbebb66aaf744.png","427cae030846a00781ff5dfe6d2aea65"],["/img/article/22/1ab309e5ead29ed0a14e6e32ab0ecb5347a1e88c.png","85ed0afdd9c38401c22a163d25d441c7"],["/img/article/22/1c6df661307420c79f04b47985b2f223e9f18241.png","7332760c666de7c823346cc00c0755f8"],["/img/article/22/2f20afc69f18aefdd2a6470d5f462a39d27f627d.png","5d2fcd51a4f706355fc8a8ed0d362a3a"],["/img/article/22/31dedf860decfb3d7d88c918dcc52c3e068e9e5a.png","2a0b1b7ed7ab99e0622f5c9bc2a13c21"],["/img/article/22/3b6de4cdd8081c3927448ccb097df7518320924d.jpg","68e5ea518b4ef3e61a568b2186d3ee15"],["/img/article/22/6152a7172d125273d6aae1ff71bec41da50d87b3.png","251e7acb424aa65d69eab6492bb0e91c"],["/img/article/22/796ba22c00276c9b31e45be1945879da6d6371ae.png","2a8faef6b0b9a277e31266fdd63a68a7"],["/img/article/22/823ecc64e158b343fe91255430cc0fe18a23f1ea.png","fdca6ba9c6aa0fad045b10b01b97480f"],["/img/article/22/a0c3070482e571c6fb7e0597762c01028aff7ce7.png","56e8189ec3044f9d8824c7fa9da896b3"],["/img/article/22/c5eb33f39a7a53de1a81ca836eee17a3a27a0bca.png","52efa2abdc720100d0a48405dc8b3006"],["/img/article/22/c8c709101568fbb18fc1b6507a0c474bb638db2a.png","31c2484669e4fbdbf584a9ea2e5d1a39"],["/img/article/22/cf26b92781fe045bb6ad51d05f34873f53bd8aa4.png","26c444e2c12bb714fe4bf60774ac95a4"],["/img/article/22/dc7247b0f79f2250fbaa89e5defb2fe94819d000.png","52ec0d0fee5f39269bc02d9e905c6e16"],["/img/article/22/e0d65653cc2d336579e7c6052fb30e82e472043c.jpg","ee938fe476dd1644cb268c8cb8a4cb12"],["/img/article/22/th.jpg","e6e329bc61cf1823b2b4d02bbbee49bc"],["/img/article/3/3ed214b0ee29b297605e3108ed5a276f0cf4ba4f5f8ad0aa55df2b80bae4ca62.png","dbf8400b329866d881feced3f3871b48"],["/img/article/3/d49fb2dab8c35cf50fcb8b7e8f77b0fe21f25a13ecb5a9005632d2044893a975.png","d4076b5c6517ed501b552087e792fb62"],["/img/article/3/fc4caee593e7510f5e9b7923700b567a9caa39c4251ddfb820eb6235a24d6b50.png","88e981a20bead04cd48b982998cf53e0"],["/img/article/6/189f1b096b56932f6d6adc1cfdecee9e0bc0c8423b21741fcc82595236dc525f.png","d27b7887381199d6f16bb54493a6ff64"],["/img/article/6/285b32b471fe35b7458082bf79b5de021a409eba384d63b3447c22a72f3b54f6.png","dbcb7b7429f637c091d1206d05b9f25b"],["/img/article/6/81b3c0dca629f3a669198dbb517a142fdf51515a73b5045a2bc00d565e415b6b.png","61ea7be777371fae8fab7f3a85e83873"],["/img/article/6/button.svg","d6b9394a78117aaffcd6b84e2b32b710"],["/img/article/6/d73a75082e19c1354828e0489f372cf72132edffd790d51a219bb19ddbfec69c.png","637bad05f3304b21d6b0743da5c90863"],["/img/article/6/d8cac22ed204b505c9182ec91e02f78d9af40660e7aeae9f4a2426dc80178d3e.png","7ee60e25607aa86c294ac8793a68230a"],["/img/article/9/0276d1893166ba101c767dd8894a8e7ff6c545e036597ef45bd6563f96da8fd5.png","9858e9c7abb950ab09fdbd6f277dcb1b"],["/img/article/9/0a3f065ee67cb5cc8ea68ca4ccb0246738c375a7568fade1b9088a56853dc942.png","f16608562ab30e39c953bc582ab62600"],["/img/article/9/66ab1781dad21.png","f9a71978af8069abc6fc7102d06e3e3d"],["/img/article/9/6918aa668530f92bc3b85f068d97a733b7b636ee09e162eb91f73b44c07684b4.png","14d71a4fd0c7dd3558ae571f9a01a339"],["/img/article/9/th.png","70d0a163bd9d9d6c5da63913205b45f6"],["/img/avatar.png","a8fbce729ee0ce95331ba837a0d003ee"],["/img/default.png","d983fef06f9a265508c7918eab83ae13"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/happy-sticker.png","0c446bc8e5be28ecc5335ddd6ddbf742"],["/img/loading.gif","205712c42111fc63be538f793c39a039"],["/img/logo.png","8b62de5406a68981f1902c213dee6897"],["/img/logo.svg","0103d059fd3b49a72bd9f94890a86049"],["/img/pwa/favicon.png","654a15a6f1a9a0a7c81937a1143664bc"],["/img/pwa/favicon_16.png","15b8700d98a9235db50ea1d0acc2c09c"],["/img/pwa/favicon_32.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/index.html","ce2514aca91b42fa282b75b7ce22c190"],["/java/lfz.js","7f8abdd64e0906d2086b0d23ab526114"],["/java/uptime-status.css","843a2d890380076e17b41c4b5964ac72"],["/java/uptime-status.js","0db8e65fb2b97398a910fcfe910e7fa2"],["/js/covercolor/api.js","ea385b291af2f9ee5f201c0aac5a1c76"],["/js/covercolor/ave.js","062b6b45b64507556363f6bb99bad52e"],["/js/covercolor/local.js","07052b1bf58c365b9db362368ce7b7d8"],["/js/main.js","8a72985951a0c747c5b95d531e494374"],["/js/music.js","4fdb42306f0e4692e30f530959fa558f"],["/js/post_ai.js","3860f8d8475f318486fdfb1e7d6ae6db"],["/js/right_menu.js","dbef393d9c34c381ecf0f57e86fcc4bf"],["/js/search/algolia.js","9042c99b70afbd7980bf6c898ff33942"],["/js/search/local.js","55c0a2b9ea6c927bff3e677da40930af"],["/js/third_party/barrage.min.js","22f71c1947bc8ad8726c5f08b7861db4"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","d9da2f2e63937e93cce81709a02b9366"],["/js/third_party/post_ai.min.js","60f128db5538d970039fa0c7e6acfcaf"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","5ca07e650e9597d79abc9c9d04c48381"],["/js/tw_cn.js","5289e4b4525f8f7dd2b1de80343981af"],["/js/utils.js","51d0219c6d0b5b9c4a03299f1f6a6393"],["/lib/hbe.js","e5a88316bf60c99ea375df22a89c3530"],["/links/index.html","c7ba9d4cebaf8c64e1c533e1f40fd821"],["/message/index.html","2a859215d0210415e3087c25ebe36dcf"],["/music/index.html","deecceff741065eccb1f12131735c61b"],["/page/2/index.html","2fd1966b0ae51bf299ee403b505f371a"],["/post/239d.html","eea9fea7752d4a199955e2903263c37c"],["/post/3rhi.html","b6c488fb7e5087f364eceb563d7eaf14"],["/post/437r.html","cbc17d2ac80b9b0e03ea4d7d0770000b"],["/post/43vc.html","a2feed61566d4daf4c8829417fee21bf"],["/post/45vy.html","2258262cdf419c0304e8c73868761022"],["/post/4nd3.html","7f19c4d7822e428b87d59dac9b401a56"],["/post/5trr.html","e3f9e9ecbc66b4c3ad0c89602e37d7f3"],["/post/5ytg.html","890967a195ab72ccafdb78fef0e56840"],["/post/73dh.html","34210c5c96c5d5d5167022e3fc678aa1"],["/post/76gl.html","e167349bf185d1df1619f0ee8271acec"],["/post/7ghd.html","7ba399f9df0be82a9a0a8458fed71a9e"],["/post/8g66.html","2f52c2086dc086310a34010c1e4126ad"],["/post/qrea.html","ab12961e001631ce904ff12125cc76d6"],["/post/r5fd.html","2a3881a1a111d1c64a2c9bb676c58f91"],["/post/re8u.html","b1e55b1eaa5f8344ce815d84f41c1265"],["/post/rh35.html","e725a5709e6e83e7d98e1fe102a0e640"],["/post/te2r.html","78d64fbbfe43b3f3c9066c5047af73ea"],["/post/ugr2.html","e101087e9e324075c24ea2e4cd2fa2e3"],["/preview/8f4687k/index.html","ebc74b063070e4a42a9fe0a66fcfc504"],["/preview/index.html","b03d815b77443b056540161c4a4ec3f7"],["/privacy/index.html","a50a75f71938eb2d0fdebc4d40511198"],["/recentcomments/index.html","1d84f53d6cc5919ca18b9a2e58bdc733"],["/schedule/schedule.css","de5617183325dd3ffb8acc817abf1fec"],["/schedule/schedule.js","8e95bae15897075f2983ca016f136510"],["/service-worker.js","93578d06ab80fbbaff03ccd2cc4b9d0e"],["/sw-register.js","7f10b974da6735748fe6c3d97b4a4cb2"],["/tags/API/index.html","86ade5dadfc2ccc77de8e491d018aeed"],["/tags/Android/index.html","9f736d0750913823f79c59659f3b6f5b"],["/tags/CDN/index.html","2b76b65da9745a1360f2f2f327aa79e9"],["/tags/Cloudflare-Pages/index.html","4a42ca71406ed44ced670c62bf2785e5"],["/tags/Cloudflare/index.html","cf49749e1fdca2caf755b799cb24de44"],["/tags/DDos/index.html","7fa7c51cb9073577e018c2d7d84d4100"],["/tags/Github/index.html","a07980a89cee40b86b9bd6f15dcc49f2"],["/tags/HTML/index.html","a905c4b7ce637cbe898a732e02f33f17"],["/tags/Hexo/index.html","41ce8e0c9d21c1377d4f0124219dcf67"],["/tags/Hexo插件/index.html","accac9a7bd16d2c5c71ac638dc7e0370"],["/tags/Javascript/index.html","a54559f461ba4e62f82828ee52e1b207"],["/tags/PHP/index.html","f1bf412ebc2ac21d4c5d66761c9bb92b"],["/tags/Pages/index.html","4dc2d4346b2aa9600ff3b22d8f4f2e2d"],["/tags/PowerToys/index.html","6f9d9e9187a1edddbcf91267802a20c8"],["/tags/Twikoo/index.html","b20cb6620a93669356056b9a673606ce"],["/tags/Vercel/index.html","df8dd54eb91f242e0e707fdfa7294f6e"],["/tags/Waline/index.html","c1322bcc49f86e407d4ac73cf8639b86"],["/tags/Windows/index.html","a57baed8a26cbcdaccd74e567d83cb02"],["/tags/index.html","50f1e91008b5d82ab2777446cb5c2783"],["/tags/周年记/index.html","08abe7897a9003c3df8a831e049db4b9"],["/tags/图床/index.html","4b9c31dd331c64ad17889e5f1d152739"],["/tags/月报/index.html","e25f0a0604fc0d6494766f81c12d1e6f"],["/weblink/index.html","6e043f05c4408ac7c1d68d34e4c25265"],["/workbox-f0ea93ad.js","4c93639ee11647cf57b6a12e51205363"]];
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
