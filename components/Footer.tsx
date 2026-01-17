import Link from 'next/link';

export default function Footer() {
  const address = '충청남도 서천군 장항읍 신창동로 86';
  const mapUrl = `https://map.naver.com/v5/search/${encodeURIComponent(address)}`;

  return (
    <footer className="bg-gray-100 text-gray-800 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* 사업자 정보 */}
          <div className="space-y-2 text-sm">
            <h3 className="font-bold text-lg mb-4">사업자 정보</h3>
            <div className="flex items-center gap-2">
              <span className="font-semibold">상호:</span>
              <span>윤영수산(구 오미수산)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">대표:</span>
              <span>나성윤</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">법인등록번호:</span>
              <span>211111-0051821</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">주소:</span>
              <span>{address}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">대표전화:</span>
              <span>010-9520-9060</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">개인정보관리책임자:</span>
              <span>나성윤</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">이메일:</span>
              <span>help@yoonyoung-susan.com</span>
            </div>
          </div>

          {/* 찾아오는길 */}
          <div className="space-y-4 text-sm">
            <h3 className="font-bold text-lg mb-4">찾아오는길</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-semibold">주소:</span>
                <span>{address}</span>
              </div>
              <div>
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  네이버 지도에서 보기
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 계좌정보 */}
        <div className="mb-8">
          <div className="space-y-2 text-sm">
            <h3 className="font-bold text-lg mb-4">계좌정보</h3>
            <div className="flex items-center gap-2">
              <span className="font-semibold">신협:</span>
              <span>131-020-022711</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">예금주:</span>
              <span>주식회사 윤영수산</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-4 mt-4 text-center text-xs text-gray-600">
          <p>COPYRIGHT ⓒ 윤영수산(구 오미수산) ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}
