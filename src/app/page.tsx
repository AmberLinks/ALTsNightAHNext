'use client';

import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    // アコーディオン機能
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach((header) => {
      header.addEventListener('click', () => {
        const content = header.nextElementSibling as HTMLElement;
        const icon = header.querySelector('.fa-chevron-down');
        
        if (content.style.maxHeight) {
          content.style.maxHeight = '';
          icon?.classList.remove('rotate-180');
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
          icon?.classList.add('rotate-180');
        }
      });
    });
  }, []);

  return (
    <>
      {/* メインビジュアル */}
      <section className="relative bg-amber-50 text-iron py-20 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">ALTs夜間動物病院</h1>
          <p className="text-2xl md:text-3xl mb-4">
            大切な家族のために。
            <br />
            夜間も安心の獣医療を。
          </p>
          <p className="text-lg md:text-xl mb-10">静岡県焼津市の夜間動物病院</p>

          <div className="max-w-4xl mx-auto bg-white/50 backdrop-blur-sm p-6 rounded-xl border-2 border-amber shadow-lg">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {/* 診療日 */}
              <div className="flex items-center justify-center p-4 bg-white rounded-lg">
                <i className="fas fa-calendar-alt text-amber text-3xl mr-4"></i>
                <div>
                  <h3 className="font-bold text-iron">診療日</h3>
                  <p className="text-lg font-semibold">火・水・木曜日</p>
                </div>
              </div>
              {/* 診療時間 */}
              <div className="flex items-center justify-center p-4 bg-white rounded-lg">
                <i className="fas fa-clock text-amber text-3xl mr-4"></i>
                <div>
                  <h3 className="font-bold text-iron">診療時間</h3>
                  <p className="text-lg font-semibold">
                    18:00 – 22:00
                    <br />
                    <span className="text-sm">電話受付17:30</span>
                    <br />
                    <span className="text-sm">最終受付21:40</span>
                  </p>
                </div>
              </div>
              {/* 注意事項 */}
              <div className="flex items-center justify-center p-4 bg-white rounded-lg">
                <i className="fas fa-exclamation-triangle text-amber text-3xl mr-4"></i>
                <div>
                  <h3 className="font-bold text-iron">ご注意</h3>
                  <p className="text-sm">事前電話制 / 時間外対応不可</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <p className="font-bold text-iron text-xl mb-4">
                ご来院の前に必ずお電話ください
              </p>
              <a
                href="tel:054-631-4757"
                className="inline-block bg-amber text-iron font-bold py-3 px-8 rounded-full text-lg hover:bg-amber-dark transition-transform transform hover:scale-105 shadow-lg"
              >
                <i className="fas fa-phone-alt mr-2"></i>054-631-4757
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 当院について */}
      <section id="about" className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-iron mb-10">当院について</h2>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="text-left space-y-6">
              <p className="leading-relaxed text-gray-700">
                ALTs夜間動物病院は、日中の病院が閉まる時間帯に発生する
                「いつもと違う」に対応する一次診療施設です。
                ご家族の不安に寄り添い、動物たちの状態を安定させることを第一に考えています。必要に応じて翌日以降、かかりつけ医へスムーズに引き継ぎます。
              </p>
              <div className="leading-relaxed bg-amber-50 p-5 rounded-md border-l-4 border-amber">
                <p>
                  また犬・猫の夜間診療に加え、対応病院の少ない
                  <strong className="text-iron font-bold">
                    エキゾチックアニマルの専門診療
                  </strong>
                  にも力を入れています。
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  症状が分かりづらいことも多いと思いますので違和感を感じた段階でご受診ください。
                </p>
              </div>
            </div>
            <hr className="my-8" />
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-6">
              <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 shadow-md overflow-hidden">
                <img
                  src="https://raw.githubusercontent.com/AmberLinks/ALTsNightAH/main/self.jpg"
                  alt="獣医師 浦和勇人"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-iron mb-2">獣医師　浦和勇人</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>AniCure動物病院 大崎 院長（東京都品川区）</li>
                  <li>AmberLinks代表</li>
                  <li>ALTs動物病院　非常勤獣医師</li>
                </ul>
                <div className="mt-3">
                  <h4 className="font-semibold text-gray-800 text-sm">＜所属学会＞</h4>
                  <ul className="mt-1 text-sm text-gray-600 space-y-1">
                    <li>日本獣医エキゾチック動物学会所属</li>
                    <li>日本獣医がん学会所属</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 診療の流れ */}
      <section id="flow" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-iron mb-12">診療の流れ</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* ステップ1 */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-amber text-white rounded-full flex items-center justify-center text-3xl mb-4">
                <i className="fas fa-phone-volume"></i>
              </div>
              <h3 className="text-xl font-bold text-iron mb-2">Step 1: お電話</h3>
              <p className="text-gray-600">
                まずはお電話{' '}
                <strong className="block text-lg my-1 text-iron">054-631-4757</strong>{' '}
                までご連絡ください。
                <br />
                症状をお伺いし、来院のご案内をいたします。
                <br className="hidden sm:block" />
                ご不明点は
                <a href="#faq" className="text-amber underline hover:no-underline">
                  よくあるご質問
                </a>
                もご確認ください。
              </p>
            </div>
            {/* ステップ2 */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-amber text-white rounded-full flex items-center justify-center text-3xl mb-4">
                <i className="fas fa-file-alt"></i>
              </div>
              <h3 className="text-xl font-bold text-iron mb-2">Step 2: WEB問診票</h3>
              <p className="text-gray-600 mb-4">
                初診の方は、WEB問診票にご回答いただくと受付がスムーズです。
              </p>
              <a
                href="https://amberlinks.github.io/Questionnaire/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-iron text-white font-bold py-2 px-6 rounded-full hover:opacity-80 transition shadow-md text-sm"
              >
                <i className="fas fa-external-link-alt mr-2"></i>問診票を開く
              </a>
            </div>
            {/* ステップ3 */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-amber text-white rounded-full flex items-center justify-center text-3xl mb-4">
                <i className="fas fa-hospital"></i>
              </div>
              <h3 className="text-xl font-bold text-iron mb-2">Step 3: ご来院・診察</h3>
              <p className="text-gray-600">
                お気をつけてご来院ください。到着されましたら、速やかに診察を開始します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 診療対象動物 */}
      <section id="animals" className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-iron mb-10">診療対象動物</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
              <strong className="text-lg">犬・猫</strong>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
              <strong className="text-lg">ウサギ</strong>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
              <strong className="text-lg">げっ歯類</strong>
              <span className="text-xs mt-1">ハムスター, チンチラ等</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
              <strong className="text-lg">その他哺乳類</strong>
              <span className="text-xs mt-1">フェレット, ハリネズミ等</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
              <strong className="text-lg">鳥類</strong>
              <span className="text-xs mt-1">インコ, オウム等</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
              <strong className="text-lg">爬虫類</strong>
              <span className="text-xs mt-1">カメ, トカゲ, ヘビ等</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
              <strong className="text-lg">両生類</strong>
              <span className="text-xs mt-1">カエル, イモリ等</span>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg shadow-inner flex flex-col items-center justify-center">
              <p className="font-semibold text-iron">ご注意</p>
              <p className="text-xs mt-1">詳細は「よくあるご質問」をご確認ください。</p>
            </div>
          </div>
        </div>
      </section>

      {/* よくあるご質問 */}
      <section id="faq" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-iron mb-10">
            よくあるご質問
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {/* 支払い方法 */}
            <div className="accordion-item border rounded-lg overflow-hidden">
              <button className="accordion-header priority w-full flex justify-between items-center p-5 text-left font-semibold text-iron hover:bg-amber-50">
                <span className="flex items-center">
                  <i className="fas fa-star text-amber mr-3"></i>
                  支払い方法を教えて下さい
                </span>
                <i className="fas fa-chevron-down transition-transform"></i>
              </button>
              <div className="accordion-content">
                <p className="p-5 bg-white border-t">
                  各種クレジットカード、電子マネー、QRコード決済に対応しております。セキュリティの都合上、キャッシュレス決済を原則とさせていただいております。お電話の際にご確認ください。
                </p>
              </div>
            </div>

            {/* 動物保険 */}
            <div className="accordion-item border rounded-lg overflow-hidden">
              <button className="accordion-header priority w-full flex justify-between items-center p-5 text-left font-semibold text-iron hover:bg-amber-50">
                <span className="flex items-center">
                  <i className="fas fa-star text-amber mr-3"></i>
                  動物保険には対応していますか？
                </span>
                <i className="fas fa-chevron-down transition-transform"></i>
              </button>
              <div className="accordion-content">
                <div className="p-5 bg-white border-t space-y-3">
                  <p>
                    はい、各種動物保険に対応しています。
                    <br />
                    窓口精算が可能な保険はアニコムとアイペットになります。
                  </p>
                  <p>
                    保険申請に必要な書類がある場合は受診時にお忘れなくお伝えください。また書類の作成が必要な場合は別途書類作成費用や後日発行が発生する場合がありますのでご了承ください。
                  </p>
                </div>
              </div>
            </div>

            {/* 野生鳥獣 */}
            <div className="accordion-item border rounded-lg overflow-hidden">
              <button className="accordion-header priority w-full flex justify-between items-center p-5 text-left font-semibold text-iron hover:bg-amber-50">
                <span className="flex items-center">
                  <i className="fas fa-star text-amber mr-3"></i>
                  野生鳥獣を保護しましたが受診可能ですか？
                </span>
                <i className="fas fa-chevron-down transition-transform"></i>
              </button>
              <div className="accordion-content">
                <div className="p-5 bg-white border-t space-y-4">
                  <p>
                    鳥獣保護管理法により許可なく野鳥・野生動物を捕獲・殺傷・飼育することは禁止されています。
                  </p>
                  <div
                    className="bg-red-100 border-l-4 border-red-500 text-red-800 p-4 rounded-r-lg"
                    role="alert"
                  >
                    <p className="font-bold">
                      そのため当院では野鳥・野生動物の診察・ご相談に関してはお受けすることができません。
                    </p>
                  </div>
                  <p>
                    野鳥・野生動物に関するお問い合わせは、
                    <a
                      href="https://www.kankyo.metro.tokyo.lg.jp/nature/animals_plants/birds/faq"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber underline hover:no-underline"
                    >
                      野生鳥獣との接し方について
                    </a>{' '}
                    を参考にしていただいたうえで、お住いの地域の担当部署にお問い合わせをお願いいたします。
                  </p>
                  <p>
                    焼津市:{' '}
                    <a
                      href="https://www.city.yaizu.lg.jp/life/pet-animals/wildlife/rescue-wildlife.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber underline hover:no-underline"
                    >
                      市の案内ページへ
                    </a>
                  </p>
                  <p className="pt-3 border-t">
                    『足環がついている鳥、インコなどご家庭で暮らす鳥』の場合は迷い鳥の可能性があるため、発見された場合は
                    <a
                      href="https://www.tsubasa.ne.jp/protect-lost-bird/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber underline hover:no-underline"
                    >
                      こちら
                    </a>
                    または最寄りの警察署へお問い合わせをお願いいたします。
                  </p>
                </div>
              </div>
            </div>

            {/* 電話相談 */}
            <div className="accordion-item border rounded-lg overflow-hidden">
              <button className="accordion-header priority w-full flex justify-between items-center p-5 text-left font-semibold text-iron hover:bg-amber-50">
                <span className="flex items-center">
                  <i className="fas fa-star text-amber mr-3"></i>
                  症状に関して電話で相談はできますか？
                </span>
                <i className="fas fa-chevron-down transition-transform"></i>
              </button>
              <div className="accordion-content">
                <p className="p-5 bg-white border-t">
                  初診や初めての症状に関してはお電話だけでのお答えはいたしかねます。病状の把握のため、一度来院していただき診察を受けていただくことを推奨します。
                </p>
              </div>
            </div>

            {/* 診察できる動物 */}
            <div className="accordion-item border rounded-lg overflow-hidden">
              <button className="accordion-header priority w-full flex justify-between items-center p-5 text-left font-semibold text-iron hover:bg-amber-50">
                <span className="flex items-center">
                  <i className="fas fa-star text-amber mr-3"></i>
                  診察できる動物の種類を教えて下さい
                </span>
                <i className="fas fa-chevron-down transition-transform"></i>
              </button>
              <div className="accordion-content">
                <div className="p-5 bg-white border-t space-y-3">
                  <p>診察可能な動物は次のとおりです。</p>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>
                      <strong>犬:</strong>{' '}
                      ※大型犬・超大型犬は一度ご相談ください。可能な検査・処置に制限が出る場合がございます
                    </li>
                    <li>
                      <strong>猫</strong>
                    </li>
                    <li>
                      <strong>ウサギ</strong>
                    </li>
                    <li>
                      <strong>鳥類:</strong>{' '}
                      インコ・オウム類（セキセイ、オカメ、ボタン、コザクラ、バタンなど）フィンチ類（文鳥、十姉妹、キンカチョウなど）家禽類（ウズラ、ニワトリ、アヒルなど）
                    </li>
                    <li>
                      <strong>齧歯類:</strong>{' '}
                      モルモット・ハムスター・チンチラ・リス・ジリス・プレーリードッグ・ラット・マウス・スナネズミ・デグーなど
                    </li>
                    <li>
                      <strong>その他哺乳類:</strong>{' '}
                      フェレット、ハリネズミ、フクロモモンガ、ミーアキャット、フェネック
                    </li>
                    <li>
                      <strong>爬虫類:</strong> カメ、トカゲ、ヘビなど
                      ※毒ヘビやドクトカゲの診察は行っておりません
                    </li>
                    <li>
                      <strong>両生類:</strong> カエル、イモリなど
                    </li>
                  </ul>
                  <p className="text-sm">
                    こちらに記載されていない動物種は「診察できない動物の種類」をご確認の上、病院にご相談ください。
                  </p>
                </div>
              </div>
            </div>

            {/* 診察できない動物 */}
            <div className="accordion-item border rounded-lg overflow-hidden">
              <button className="accordion-header priority w-full flex justify-between items-center p-5 text-left font-semibold text-iron hover:bg-amber-50">
                <span className="flex items-center">
                  <i className="fas fa-star text-amber mr-3"></i>
                  診察できない動物の種類を教えて下さい
                </span>
                <i className="fas fa-chevron-down transition-transform"></i>
              </button>
              <div className="accordion-content">
                <div className="p-5 bg-white border-t space-y-3">
                  <p>
                    下記動物は法令・病院の設備・スタッフの都合上お受けすることができませんのでご了承ください。
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>魚類</li>
                    <li>霊長類</li>
                    <li>無脊椎動物（虫や甲殻類など）</li>
                    <li>
                      産業動物（牛、水牛、鹿、めん羊、山羊、豚、いのしし、鶏、あひる、うずら、きじ、だちょう、ほろそろ鳥、七面鳥、馬）※ご家庭で暮らす鳥類は除く
                    </li>
                    <li>野生鳥獣（各自治体のHPの案内に従ってください）</li>
                    <li>
                      危険動物（動物愛護管理法における特定動物の対象となる動物種）
                    </li>
                    <li>有毒動物</li>
                    <li>飼養許可の無い外来生物法対象動物</li>
                  </ul>
                  <p className="text-sm">ご不明な点がある場合は病院までお問い合わせください。</p>
                </div>
              </div>
            </div>

            {/* 事前費用 */}
            <div className="accordion-item border rounded-lg overflow-hidden">
              <button className="accordion-header w-full flex justify-between items-center p-5 text-left font-semibold text-iron bg-amber-50 hover:bg-amber-100">
                <span>事前に費用を知ることはできますか？</span>
                <i className="fas fa-chevron-down transition-transform"></i>
              </button>
              <div className="accordion-content">
                <p className="p-5 bg-white border-t">
                  はい、可能な限りお伝えします。
                  <br />
                  ただし診察前の場合は状態や病気により検査項目や処置内容により費用が変わることがあるため、目安となる金額のお伝えであることをご了承ください。
                </p>
              </div>
            </div>

            {/* 複数人での来院 */}
            <div className="accordion-item border rounded-lg overflow-hidden">
              <button className="accordion-header w-full flex justify-between items-center p-5 text-left font-semibold text-iron bg-amber-50 hover:bg-amber-100">
                <span>複数人で病院を受診しても大丈夫ですか？</span>
                <i className="fas fa-chevron-down transition-transform"></i>
              </button>
              <div className="accordion-content">
                <p className="p-5 bg-white border-t">
                  院内での待機は原則として事情のわかる大人の方が最少人数でいらしてください。これは感染症対策を考慮した際に病院の待合や診察室のスペースの都合上、密になる空間を避けられないためご理解ください。お連れの方は病院のお近くで待機していただければ幸いです。
                </p>
              </div>
            </div>

            {/* 代理人 */}
            <div className="accordion-item border rounded-lg overflow-hidden">
              <button className="accordion-header w-full flex justify-between items-center p-5 text-left font-semibold text-iron bg-amber-50 hover:bg-amber-100">
                <span>代理人が連れて行っても大丈夫ですか？</span>
                <i className="fas fa-chevron-down transition-transform"></i>
              </button>
              <div className="accordion-content">
                <p className="p-5 bg-white border-t">
                  ご家族の同意があれば大丈夫です。その場合は、病院で獣医師や動物看護師から問診や検査の提案があるため動物の状態や事情を把握している大人の方がお連れいただくようにお願いいたします。
                </p>
              </div>
            </div>

            {/* セカンドオピニオン */}
            <div className="accordion-item border rounded-lg overflow-hidden">
              <button className="accordion-header w-full flex justify-between items-center p-5 text-left font-semibold text-iron bg-amber-50 hover:bg-amber-100">
                <span>セカンドオピニオンに対応していますか？</span>
                <i className="fas fa-chevron-down transition-transform"></i>
              </button>
              <div className="accordion-content">
                <div className="p-5 bg-white border-t space-y-2">
                  <p>
                    <strong>犬猫:</strong>{' '}
                    原則夜間でのセカンドオピニオンは実施しておりません。診察をご希望の方は日中のALTs動物病院までお問い合わせください。
                  </p>
                  <p>
                    <strong>エキゾチックアニマル:</strong>{' '}
                    事前にお電話にてご相談ください（受付時間内のみ）。
                  </p>
                </div>
              </div>
            </div>

            {/* ワクチン・爪切り */}
            <div className="accordion-item border rounded-lg overflow-hidden">
              <button className="accordion-header w-full flex justify-between items-center p-5 text-left font-semibold text-iron bg-amber-50 hover:bg-amber-100">
                <span>ワクチン接種や爪切りはできますか？</span>
                <i className="fas fa-chevron-down transition-transform"></i>
              </button>
              <div className="accordion-content">
                <div className="p-5 bg-white border-t">
                  <p>
                    夜間診療は犬猫の応急対応やエキゾチックアニマルの専門診療を目的としているため、混合ワクチン接種、予防薬の処方、爪切りなどの日常ケア、計画的な手術（不妊・去勢手術など）は原則として行っておりません。かかりつけの動物病院をご受診ください。
                  </p>
                  <p className="mt-2 text-sm text-amber font-semibold">
                    ※エキゾチックアニマルは対応可能病院がない場合はご相談ください。
                  </p>
                </div>
              </div>
            </div>

            {/* トリミング */}
            <div className="accordion-item border rounded-lg overflow-hidden">
              <button className="accordion-header w-full flex justify-between items-center p-5 text-left font-semibold text-iron bg-amber-50 hover:bg-amber-100">
                <span>トリミングは行っていますか？</span>
                <i className="fas fa-chevron-down transition-transform"></i>
              </button>
              <div className="accordion-content">
                <p className="p-5 bg-white border-t">
                  現在、夜間でのトリミングは行なっておりません。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WEB問診票 */}
      <section id="questionnaire" className="py-16 md:py-20 bg-iron text-white">
        <div className="container mx-auto px-4 text-center">
          <i className="fas fa-file-signature text-amber text-5xl mb-4"></i>
          <h2 className="text-3xl font-bold mb-4">WEB問診票</h2>
          <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
            ご来院前に問診票にご回答いただくと、当日のご案内がスムーズになります。
            <br />
            特に初診の方や、前回のご来院から期間が空いている方におすすめしております。
          </p>
          <div className="text-center">
            <a
              href="https://amberlinks.github.io/Questionnaire/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber text-iron font-bold py-4 px-10 rounded-full hover:bg-amber-dark transition-transform transform hover:scale-105 shadow-lg text-lg"
            >
              <i className="fas fa-external-link-alt mr-2"></i>問診票の記入に進む
            </a>
          </div>
        </div>
      </section>

      {/* アクセス */}
      <section id="access" className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-iron mb-10">アクセス</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3274.636228765582!2d138.30820387575062!3d34.84023767287037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601a45c6b5c9278d%3A0x87bf521d36fa3b09!2zQUxUc-WLleeJqeeXhemZog!5e0!3m2!1sja!2sjp!4v1756637053269!5m2!1sja!2sjp"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-md"
              ></iframe>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-iron mb-4">ALTs夜間動物病院</h3>
              <p className="mb-4">
                <strong>住所:</strong> 〒425-0041 静岡県焼津市石津１丁目19−２
              </p>
              <p className="mb-4">
                <strong>電話番号:</strong> 054-631-4757
              </p>
              <p>
                <strong>駐車場:</strong> 病院前に駐車場がございます。
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
