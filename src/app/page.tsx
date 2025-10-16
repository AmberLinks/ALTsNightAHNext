export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            ALTs夜間動物病院
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            静岡県焼津市の夜間専門動物病院
          </p>
          <p className="text-lg">
            夜間診療時間: 18:00 ～ 翌朝 6:00
          </p>
        </div>
      </section>

      {/* 診療案内セクション */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            診療のご案内
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* カード1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">診療対象動物</h3>
              <ul className="space-y-2">
                <li>• 犬</li>
                <li>• 猫</li>
                <li>• エキゾチックアニマル</li>
              </ul>
            </div>

            {/* カード2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">診療時間</h3>
              <p className="text-lg font-semibold text-blue-600">
                18:00 ～ 翌朝 6:00
              </p>
              <p className="mt-2 text-sm text-gray-600">
                年中無休で診療しています
              </p>
            </div>

            {/* カード3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">緊急対応</h3>
              <p>
                急な体調不良、事故などの緊急時に対応いたします
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 連絡先セクション */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">お問い合わせ</h2>
          <div className="bg-blue-50 p-8 rounded-lg inline-block">
            <p className="text-xl mb-4">電話番号</p>
            <a 
              href="tel:054-xxx-xxxx"
              className="text-3xl font-bold text-blue-600 hover:text-blue-800"
            >
              054-xxx-xxxx
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
