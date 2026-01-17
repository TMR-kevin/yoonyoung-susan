/**
 * 상품 이미지 URL 생성 유틸리티
 */

/**
 * 카테고리별 기본 이미지 URL 생성
 * hepung.com에서 추출한 실제 이미지 URL 사용
 */
export function getProductImageUrl(category: string, productId: string): string {
  // hepung.com에서 추출한 실제 상품 이미지 URL들
  const hepungImages = [
    'https://www.hepung.com/web/product/medium/202306/1c3b33fc65c06635b2ef17a958a71f55.jpg',
    'https://www.hepung.com/web/product/medium/202402/fe391f5ed63b2b354b582e43c9ec0233.png',
    'https://www.hepung.com/web/product/medium/202503/d3eaef45fa12d0c9edb28abc27150183.png',
    'https://www.hepung.com/web/product/medium/202112/894ff93168d47ab04d9569af1e43b095.jpg',
    'https://www.hepung.com/web/product/medium/202111/35ccf54adc4488c678fd5aa498a6ffc6.jpg',
    'https://www.hepung.com/web/product/medium/202112/242fca5db038c10ccbf0e07aa56bad0c.jpg',
    'https://www.hepung.com/web/product/medium/202501/d5a2883aa9b07f7dcf5ac7e9fda5fbbc.png',
    'https://www.hepung.com/web/product/medium/202412/bf7db8e45cea7ca571f601f0e9a18d0e.png',
    'https://www.hepung.com/web/product/medium/202112/77364bf9d12afbefb79e77a8c3f674c9.jpg',
    'https://www.hepung.com/web/product/medium/202310/8764d2d0fd568da9c5b7d185d0bf62bb.jpg',
    'https://www.hepung.com/web/product/medium/202102/5a59f1fa6ceddf85643a54c8c50ff79e.jpg',
    'https://www.hepung.com/web/product/medium/202502/ef8f3a0443f6ab432234d074b1a27338.png',
    'https://www.hepung.com/web/product/medium/202412/fcfeac5ad63434923098d143d9bc05bd.png',
    'https://www.hepung.com/web/product/medium/202510/4ef7e99c955c07406e8d07dd4f4a1796.png',
    'https://www.hepung.com/web/product/medium/20200312/04943e7581b545f59d945822e7c3c954.jpg',
    'https://www.hepung.com/web/product/medium/202503/16cde26cfd76741de2ae0f8dcad6a538.png',
    'https://www.hepung.com/web/product/medium/202007/e004db5ded96e86eecfbc3ffa1dffa62.jpg',
    'https://www.hepung.com/web/product/medium/20200312/a1df8c0ab288fd2727564a883d25eca8.jpg',
    'https://www.hepung.com/web/product/medium/202310/04f2ee6c63c0b39428693aa6d2ec8e63.jpg',
    'https://www.hepung.com/web/product/medium/202502/c584614d7ac17bd6056efb7f07c079b8.png',
    'https://www.hepung.com/web/product/medium/202501/5e5ac10641e89b170d0eba9a7e96f805.png',
    'https://www.hepung.com/web/product/medium/202505/0dd4d2d923bdd48c1cefc14bae751ce6.png',
    'https://www.hepung.com/web/product/medium/201910/38355600c7868dfcc4732cb16e5f65a8.jpg',
    'https://www.hepung.com/web/product/medium/202007/be78a565c2f6cfb67f9ba6913235a637.jpg',
    'https://www.hepung.com/web/product/medium/202309/8efbdc4365deb23c37c56c15ce2d9794.jpg',
    'https://www.hepung.com/web/product/medium/202202/007c1a49a179fc95dc2e5d4d11ddfabe.jpg',
    'https://www.hepung.com/web/product/medium/202111/81343f0dc0aadf79616918e67145e6f9.jpg',
    'https://www.hepung.com/web/product/medium/202310/f112936a1f9b738510c3624563d9da9e.jpg',
    'https://www.hepung.com/web/product/medium/202309/261b99ec118aded6d28f8534d9f9778c.jpg',
    'https://www.hepung.com/web/product/medium/202309/0cbc6d4674cd631e3b3554a0c5829857.jpg',
    'https://www.hepung.com/web/product/medium/202106/2c6b13a054058e942297bc7a0b4dce04.jpg',
    'https://www.hepung.com/web/product/medium/202306/3aac86c4ab8906a82d1385bec589df02.jpg',
    'https://www.hepung.com/web/product/medium/202306/185acea6440e9600186d50a909dfaa1d.jpg',
    'https://www.hepung.com/web/product/medium/202112/77364bf9d12afbefb79e77a8c3f674c9.jpg',
    'https://www.hepung.com/web/product/medium/202502/eb8cb0e2307028da57c72c0b81b29cb7.jpg',
    'https://www.hepung.com/web/product/medium/202503/26d7ae8561ccd2b719ae78d9093a2da9.png',
    'https://www.hepung.com/web/product/medium/202109/ab135dec9a0b7d0ec6070cd61bf94bb5.jpg',
    'https://www.hepung.com/web/product/medium/202503/d42ff976b35101713924ecc93b08fc2d.png',
    'https://www.hepung.com/web/product/medium/202505/2c9f265a0d6ea55278b78ddbc95f8a33.png',
    'https://www.hepung.com/web/product/medium/202502/d0abca61588f1c583329ef63f3f114c6.png',
    'https://www.hepung.com/web/product/medium/202501/4d05d269da85ee6c77f5af64013ab22f.png',
    'https://www.hepung.com/web/product/medium/202111/4897ed75610a3856183be91bb699da04.jpg',
    'https://www.hepung.com/web/product/medium/202402/81107ff523119f2c5181166ec1c6197c.png',
    'https://www.hepung.com/web/product/medium/202511/d964b0b09262fc262eebd10df2fb397d.png',
    'https://www.hepung.com/web/product/medium/202511/a1eec1682bba63d00560719a4990036d.png',
    'https://www.hepung.com/web/product/medium/202306/7e3b44072544bf5ceb5282f62dbf8bd5.jpg',
    'https://www.hepung.com/web/product/medium/202509/149e9883af32499aaff5a956f0dfd11a.png',
    'https://www.hepung.com/web/product/medium/202307/296095bac6f6049ab5c73cdf78349889.jpg',
    'https://www.hepung.com/web/product/medium/20200312/3c45ee19003995f58490defc0ea04b9e.jpg',
    'https://www.hepung.com/web/product/medium/202108/7e0278396ef85907a049004d256f6d30.jpg',
    'https://www.hepung.com/web/product/medium/20200312/5f51e01457a0c260af996c8497d70b5b.jpg',
    'https://www.hepung.com/web/product/medium/202501/c6e0d875e972d6a71ed785d2603ece5a.png',
    'https://www.hepung.com/web/product/medium/202109/17a11a533b9d31932341da549110a98a.jpg',
    'https://www.hepung.com/web/product/medium/202111/97ad205cd25e213fb9ee0e24137656a0.jpg',
    'https://www.hepung.com/web/product/medium/202109/bc58ab330354f22ea5e8e2d3ec2835ba.jpg',
    'https://www.hepung.com/web/product/medium/202109/91a6537c00f5b8df702ac9f2dcab0cba.jpg',
    'https://www.hepung.com/web/product/medium/202111/fbc0cd0d4df7cea14a9daf95ccc4b726.jpg',
    'https://www.hepung.com/web/product/medium/202309/fed922f57a4c7de9cdddca9d6b67a988.jpg',
    'https://www.hepung.com/web/product/medium/202201/ac904ff47b8f6bcd27cd9cd899aa5984.jpg',
    'https://www.hepung.com/web/product/medium/202503/61d55bd273b59895daa65eb3192d4659.png',
    'https://www.hepung.com/web/product/medium/202109/ce28a1ba5ac31c08102dd4bdff47b2ff.jpg',
    'https://www.hepung.com/web/product/medium/202109/4e239b9dce629076ab56fef8215379f4.jpg',
    'https://www.hepung.com/web/product/medium/202501/ab48ea00c7db51d53b83338ea2152009.png',
    'https://www.hepung.com/web/product/medium/202201/e4c0ab8c1255084663a118c4c6ba3711.jpg',
    'https://www.hepung.com/web/product/medium/202501/e382da027b2bf75117d875795d7bd09a.png',
    'https://www.hepung.com/web/product/medium/202501/021b285ba9b0c83d8752632bb3e9ee63.png',
    'https://www.hepung.com/web/product/medium/202109/7d1284cc28a0afdd529ea315d72c14d5.jpg',
    'https://www.hepung.com/web/product/medium/202109/c1e9631c8682e0a5e4fa07cdeb95c398.jpg',
    'https://www.hepung.com/web/product/medium/202109/64a080b76b1ae368b3961bb9315de412.jpg',
    'https://www.hepung.com/web/product/medium/202109/0b2dae393398802f7c8005a6e2a9f688.jpg',
  ];

  // productId를 기반으로 이미지 선택 (일관성 유지)
  const hash = productId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const imageIndex = hash % hepungImages.length;
  
  return hepungImages[imageIndex];
}

/**
 * Firebase Storage URL 생성 (실제 운영용)
 * @param productId 상품 ID
 * @param fileName 파일명 (예: 'main.jpg')
 */
export function getFirebaseStorageUrl(productId: string, fileName: string = 'main.jpg'): string {
  // Firebase Storage URL 형식
  // 실제 Firebase Storage에 업로드된 이미지 경로
  return `https://firebasestorage.googleapis.com/v0/b/yoonyoung-susan.firebasestorage.app/o/products%2F${productId}%2F${fileName}?alt=media`;
}

/**
 * 플레이스홀더 이미지 URL 생성 (개발용)
 */
export function getPlaceholderImageUrl(width: number = 400, height: number = 400, text?: string): string {
  const textParam = text ? `&text=${encodeURIComponent(text)}` : '';
  return `https://via.placeholder.com/${width}x${height}?text=${text || '이미지'}`;
}
