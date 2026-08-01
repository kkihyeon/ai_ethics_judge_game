// ⚖️ AI 딜레마 법정: 애플리케이션 로직 (app.js)

document.addEventListener('DOMContentLoaded', () => {
  // -------------------------------------------------------------
  // 1. 사건 사례 데이터 정의 (요구사항 100% 반영: Case 1/3 뻔뻔함/재범/수사미협조 가중)
  // -------------------------------------------------------------
  const caseData = [
    {
      id: 'case-1',
      category: '창작자 / 저작권',
      title: '벼랑 끝 웹툰 작가의 AI 모작 사건',
      summary: '인기 순위 100위 밖으로 밀려난 작가 A씨가 AI로 디즈니 인기 캐릭터를 모작한 후, 고소에도 불응하고 뻔뻔하게 무단 연재를 강행하며 범행을 전면 부부한 사건',
      story: `웹툰 작가 **A씨(31세)**는 유료 웹툰 플랫폼에서 3년째 판타지 장르 웹툰을 연재해 온 프리랜서 창작자입니다. 과거 저작권 침해나 형사 처벌 이력이 없는 초범이었지만, 최근 작품 인기 순위가 100위권 밖으로 곤두박질치면서 "다음 달까지 조회수가 회복되지 않으면 계약을 해지하겠다"는 통보를 받게 됩니다. 당장 생계가 막막해진 A씨는 극심한 불안 속에서 절박한 생계형 동기로 AI 모작을 결심하게 됩니다.

A씨는 디즈니의 메가 히트작 대표 캐릭터인 **'루나'**의 모든 디자인 특성(오색 눈동자, 제복 의상 깃, 헤어 스타일, 표정)이 담긴 고화질 이미지 300여 장을 AI 프롬프트 및 미세조정(LoRA) 학습 데이터로 무단 입력하며 고의적인 모작을 유도했습니다. A씨는 세부 의상 패턴 일부와 대사를 자체 변형하려 시도하긴 했으나, 누가 봐도 '루나'의 외형과 독창적 특성이 그대로 반영된 신규 주인공 캐릭터를 생성했습니다.

이 캐릭터의 등장으로 웹툰은 12위까지 급상승했고, A씨는 단발성이 아닌 유료 회차 10여 회에 걸쳐 지속적인 무단 노출 연재를 강행하며 대기업 굿즈 제작사와 캐릭터 상품화 계약까지 추진하여 직접적인 상업적 이익을 챙겼습니다.

디즈니 한국지사 디자이너 **B씨**가 이를 발견하고 브랜드 가치 훼손과 정신적 고통을 호소하며 회사를 통해 A씨를 정식 고소했습니다. 

그러나 고소와 경고장을 받은 이후에도 A씨는 **뻔뻔하게 대응**했습니다. A씨는 캐릭터 등장 분량을 삭제하거나 연재를 중단하기는커녕, *"이것은 AI 기술을 활용한 저의 엄연한 현대적 창작물이며, 원작 디자인을 베낀 것이 아니다"*라고 주장하며 범행을 전면 부인했습니다. A씨는 플랫폼에서 뻔뻔하게 유료 연재를 강행했으며, 피해자 B씨 및 원작자 측과의 사과나 피해 회복 합의도 끝내 전면 거부했습니다.`,
      suspectArg: '"이것은 AI 기술을 활용한 저의 엄연한 새로운 창작물입니다! 타인의 저작권을 베낀 적이 없으며, 일부 디자인과 스토리를 변형했으므로 삭제나 연재 중단 요구에 응할 이유가 전혀 없습니다."',
      victimArg: '"원작 캐릭터의 독창적 외형과 특성을 AI에 고의로 학습시켜 베껴놓고, 고소 이후에도 삭제는커녕 뻔뻔하게 무단 연재를 강행하며 상업적 이득을 취하고 있습니다. 엄벌에 처해 주십시오."',
      
      aggregatingFactors: [
        { id: 'agg1', text: '상업적 이익 창출 (순위 상승 100위➔12위 및 굿즈 계약 추진 등 직접적 경제 이득)' },
        { id: 'agg2', text: '고의적인 모작 유도 (AI 학습 데이터 및 프롬프트에 원작 캐릭터 300여 장 의도적 입력)' },
        { id: 'agg3', text: '피해 회복 미흡 및 합의 거부 (원작자 B씨 및 기업 측과 합의 전면 거부)' },
        { id: 'agg4', text: '사후 침해 행위 지속 및 연재 강행 (고소 인지 후에도 삭제/중단 없이 뻔뻔하게 무단 연재 지속)' },
        { id: 'agg5', text: '범행 전면 부인 및 반성 태도 부재 (AI 생성을 핑계로 창작물이라 주장하며 반성하지 않음)' }
      ],
      mitigatingFactors: [
        { id: 'mit1', text: '동종 전과 없음 (어떠한 형사 처벌이나 저작권 침해 이력이 없는 초범)' },
        { id: 'mit2', text: '절박한 생계형 동기 (연재 중단 및 계약 해지 위기라는 압박 속 범행)' },
        { id: 'mit3', text: '완전 복제가 아닌 일부 변형 (AI 결과물의 세부 디자인 및 대사를 수정하려는 시도)' },
        { id: 'mit4', text: '피해자에 대한 직접적인 신체적 위해 부재 (비폭력적 지식재산권 범죄)' },
        { id: 'mit5', text: '원작물 자체의 파괴 부재 (원작 캐릭터 파일 자체를 삭제하거나 훼손하진 않음)' }
      ],

      lawGuide: `<b>📌 저작권법 제136조 (벌칙 - 저작재산권 침해)</b><br>
저작재산권, 그 밖에 이 법에 따라 보호되는 재산적 권리를 복제, 공연, 공중송신, 전시, 배포, 2차적저작물 작성의 방법으로 침해한 자는 <b>5년 이하의 징역 또는 5천만 원 이하의 벌금(배상금)</b>에 처한다.<br>
<small style="color:#78350f;">※ 영리 목적 상습 침해 및 고소 후 무단 연재 강행 시 반성 태도 부재로 징역형 등 형량이 대폭 가중됩니다.</small>`,

      stdVerdict: {
        fine: '1,500만 원 이하',
        prison: '징역 1년',
        probation: '집행유예 2년',
        summaryText: '징역 1년 / 집행유예 2년 (또는 벌금 1,500만 원 및 손해배상 청구)',
        recognizedAgg: ['agg1', 'agg2', 'agg3', 'agg4', 'agg5'],
        recognizedMit: ['mit1', 'mit2', 'mit3']
      },

      caseNo: '2026고단1001 저작권법위반',
      defendant: '피고인 A (31세, 웹툰 작가)',
      caseName: '웹툰 AI 캐릭터 무단 학습 모작 및 무단 연재 강행 저작권 침해 사건',
      orderText: '피고인을 징역 1년에 처한다. 다만, 이 판결 확정일부터 2년간 위 형의 집행을 유예한다. (또는 벌금 15,000,000원에 처하며 침해 게시물 전량 삭제 명령)',
      reasonText: `<b>1. 가중 사유:</b> 피고인은 타인의 독창적인 캐릭터 디자인을 AI 프롬프트에 고의 대량 학습시켜 유사 모작을 유도하였고 상업적 이득을 취함. 특히 고소 및 경고를 받은 이후에도 게시물 삭제나 연재 중단을 거부하고 뻔뻔하게 무단 연재를 강행하였으며, 범행을 전면 부인하고 반성 태도를 전혀 보이지 않아 죄질이 매우 불량함.
      
<b>2. 감경 사유:</b> 피고인이 범죄 전력이 없는 초범인 점, 계약 해지 위기라는 생계형 동기가 일부 작용한 점(형법 제51조)만을 최소한 참작하되 엄중한 징역형(집행유예)을 선고함.`,
      
      realJudge: `<b>🏛️ 실제 판결·처분 수치 및 법적 결과:</b><br><br>
<b>1. 무단 모작 및 뻔뻔한 연재 강행 사건 (서울중앙지방법원 저작권 침해 판결):</b><br>
타인의 독창적 캐릭터를 모작한 후 경고장에도 불응하고 뻔뻔하게 무단 연재 및 판매를 지속한 사건에서, 법원은 "범행을 부인하고 사후 조치나 반성이 전혀 없다"며 <b>징역 1년에 집행유예 2년 및 1,500만 원의 민사 손해배상</b>을 선고했습니다.<br><br>

<b>2. 미드저니 & 스태빌리티 AI 저작권 소송 (미국 연방법원):</b><br>
저작권 캐릭터를 사전 승인 없이 무단 학습 후 생성·판매함.<br>
• <b>청구 배상액:</b> 침해 1건당 <b>최대 $150,000 (약 2억 원)</b><br>
• <b>총 청구 규모:</b> 수백여 개 대상 작품에 대해 <b>총 $2,000만 ~ 수조 원대 손해배상</b> 및 침해 금지 가처분 청구`,
      
      lawSummary: `<b>📌 대법원 판례 확립 원칙 (반성 부재 및 침해 지속 시 가중):</b><br>AI 생성물이라도 원작과의 실질적 유사성이 인정되며, 고소 후에도 삭제 거부 및 무단 연재를 강행할 경우 징역형 선고 등 엄중한 형사 처벌과 대규모 손해배상 책임을 지게 됩니다.`,
      lessonQuote: `"AI가 대신 그린 그림이라 주장하며 뻔뻔하게 무단 도용을 강행하는 행위는 법원에서 결코 용서받을 수 없는 중대한 범죄입니다."`
    },
    {
      id: 'case-2',
      category: '사용자 / 인격권',
      title: '5분간의 딥페이크 장난 사건',
      summary: '대학생 A씨가 과 동기의 얼굴 사진을 AI 음란성 합성물로 가공해 SNS에 5분간 올려 피해자에게 학업 중단 등 심각한 트라우마를 남긴 사건',
      story: `수도권 대학 컴퓨터공학과 3학년에 재학 중인 **A씨(22세)**는 평소 어떠한 형사 처벌이나 범죄 전력이 없는 초범 학생이었습니다. 하지만 최근 생성형 AI 영상 편집 및 딥페이크(Deepfake) 이미지 합성 기술에 깊이 매료되어 자신의 컴퓨터공학 전공 지식과 디지털 매체의 복제·유포 위험성을 충분히 인지할 수 있는 위치에 있었습니다.

동기들과의 단체 채팅방에서 자신의 컴퓨터 기술력을 과시하고 싶었던 A씨는 금전적 이득을 취할 목적이 아닌 단순 호기심과 장난으로 학과 동기 **B씨(22세, 여)**의 얼굴 사진을 다운로드했습니다. A씨는 AI 프로그램으로 B씨의 동의 없이 성적 수치심을 유발하는 허위 음란성 딥페이크 영상물을 제작했습니다. 그리고 자신의 인스타그램 부계정 스토리(팔로워 150명)에 올리며 불특정 다수에게 공개 노출시켰습니다.

영상을 올린 직후 불안감을 느낀 A씨는 **게시 5분 만에 자발적이고 신속하게 스토리에서 삭제**하였고, 추가 2차 유포를 막기 위해 컴퓨터 내 원본 사진 및 합성 프로젝트 데이터 파일 일체를 즉시 파기했습니다. 

그러나 불과 5분 사이에 한 팔로워가 스토리를 캡처해 피해자 B씨에게 전달했습니다. 성적 수치심과 공포감으로 B씨는 대인기피증과 정신과 치료에 시달리며 결국 학업을 중단하고 휴학계를 제출하는 등 극심한 피해를 입게 되었습니다. A씨는 수사 과정에서 범행을 순순히 자백하고 깊이 뉘우쳤으며 피해자 측에 사죄했으나, 피해자 및 보호자로부터 끝내 용서받지 못하여 합의에 이르지 못했습니다.`,
      suspectArg: '"절대 B씨에게 해를 가하거나 음해할 목적이 아니었고, AI 기술 테스트 겸 단순한 장난이었습니다. 심각성을 깨닫고 5분 만에 자발적으로 삭제했으며, 원본 파일도 즉시 파기하여 피해 최소화에 최선을 다했습니다."',
      victimArg: '"단 5분이든 1초든 내 얼굴이 부적절한 성적 영상물로 합성되어 불특정 다수에게 노출되었습니다. 제 일상과 존엄성은 완전히 무너졌고, 다시 학교로 돌아갈 수 없는 정신적 지옥을 겪고 있습니다."',

      aggregatingFactors: [
        { id: 'agg1', text: '피해자의 극심한 피해 (대인기피증, 정신과 치료, 학업 중단 및 휴학 등)' },
        { id: 'agg2', text: '성적 수치심 유발 (동의 없는 허위 음란 성적 영상물 가공 및 게시)' },
        { id: 'agg3', text: '불특정 다수 노출 가능성 (SNS 스토리 팔로워 150명에게 공개 노출)' },
        { id: 'agg4', text: '피해자와의 합의 부재 (피해자 및 보호자로부터 용서받지 못하고 처벌 원함)' },
        { id: 'agg5', text: '디지털 범죄 위험성 인지 가능 (컴퓨터공학 전공자로서 유포 위험 충분히 인지)' }
      ],
      mitigatingFactors: [
        { id: 'mit1', text: '5분 만에 자발적 및 신속한 삭제 (2차 유포 확산 차단 노력)' },
        { id: 'mit2', text: '비영리 목적 (금전적 이득이나 협박 목적이 없는 단순 호기심/장난)' },
        { id: 'mit3', text: '동종 전과 없는 초범 및 학생 신분 (범죄 전력이 없는 대학생)' },
        { id: 'mit4', text: '범행 인정 및 진지한 반성 (수사 기관에 자백하고 깊이 뉘우침)' },
        { id: 'mit5', text: '원본 파일 파기 (합성 및 원본 데이터 즉시 삭제하여 추가 유출 차단)' }
      ],

      lawGuide: `<b>📌 성폭력범죄의 처벌 등에 관한 특례법 제14조의2 (허위영상물 등의 반포등 - 2024년 개정)</b><br>
① 반포등의 목적으로 사람의 얼굴·음성 또는 신체를 대상으로 한 편집물등을 대상자의 의사에 반하여 성적 수치심을 유발할 수 있는 형태로 편집·합성·가공한 자 및 반포한 자는 <b>7년 이하의 징역 또는 5천만 원 이하의 벌금(배상금)</b>에 처한다.<br>
<small style="color:#78350f;">※ 영리 목적인 경우 3년 이상의 유기징역, 구입·소지·저장·시청한 자도 3년 이하 징역 또는 3천만 원 이하 벌금에 처해집니다.</small>`,

      stdVerdict: {
        fine: 'none',
        prison: '징역 1년',
        probation: '집행유예 2년',
        summaryText: '징역 1년 / 집행유예 2년 (벌금/배상금 미부과, 징역형 원칙)',
        recognizedAgg: ['agg1', 'agg2', 'agg3', 'agg4', 'agg5'],
        recognizedMit: ['mit1', 'mit3', 'mit4', 'mit5']
      },

      caseNo: '2026고단1004 성폭력처벌법위반(허위영상물반포등)',
      defendant: '피고인 A (22세, 대학생)',
      caseName: '딥페이크 기술 이용 허위 성적 영상물 제작 및 SNS 반포 사건',
      orderText: '피고인을 징역 1년에 처한다. 다만, 이 판결 확정일부터 2년간 위 형의 집행을 유예한다. (성폭력 치료강좌 40시간 이수 명함)',
      reasonText: `<b>1. 가중 사유:</b> 대법원 양형위원회 '허위영상물 유포 범죄 양형기준' 및 개정 법률에 따라, 딥페이크 성범죄는 게시 시간이 단 5분에 불과하더라도 디지털 매체 특성상 복제·유포 위험성이 극대화되며, 피해자가 학업 중단 등 평생 씻을 수 없는 인격적 피해를 입었으므로 초범이라도 '징역형 선고'를 원칙으로 함.
      
<b>2. 감경 사유:</b> 피고인이 게시 5분 만에 자발적으로 삭제하여 추가 확산을 막으려 노력한 점, 합성 파일 및 원본을 파기한 점, 범죄 전력이 없는 초범이며 자신의 범행을 솔직히 자백하고 반성하는 점(형법 제51조)을 참작하여 집행유예를 선고함.`,

      realJudge: `<b>🏛️ 실제 판결·처분 수치 및 법적 결과:</b><br><br>
<b>1. '서울대 딥페이크' 사건 (서울중앙지방법원 1심 판결):</b><br>
동문 여성 등 61명의 SNS 사진을 AI 딥페이크로 성적 불법 영상물 1,800여 건 가공·유포함.<br>
• <b>주범(박모 씨):</b> <b>징역 10년 실형 선고</b><br>
• <b>공범(강모 씨 등):</b> 각각 <b>징역 4년, 징역 5년 선고</b><br><br>

<b>2. SNS 지인 사진 딥페이크 유포 사건 (형사 1심 판결 및 민사 합의):</b><br>
피해자의 SNS 사진을 AI 성적 합성물로 제작 후 단체 메신저 및 커뮤니티에 전송함.<br>
• <b>형사 처벌:</b> <b>징역 1년 2개월 (집행유예 2년)</b>, <b>성폭력 치료강의 40시간 이수 명령</b><br>
• <b>민사 손해배상/합의금:</b> 피해자 1인당 <b>4,000만 원 상당 위자료</b> 지급 판결·합의<br><br>

<b>3. 딥페이크 단순 전달 및 유포 사건 (대구지방법원 판결):</b><br>
직접 제작하지 않고 전달받은 지인 딥페이크 합성물을 제3자에게 유포·전송함.<br>
• <b>형사 처벌:</b> <b>징역 1년 2개월 (집행유예 2년)</b><br>
• <i>(참고: 2024년 성폭력처벌법 개정으로 단순 소지·시청 시 <b>징역 3년 이하 / 벌금 3,000만 원 이하</b>, 반포 시 <b>최대 징역 7년</b>으로 처벌 상한 강화)</i>`,

      lawSummary: `<b>📌 대법원 양형위원회 딥페이크 성범죄 양형기준:</b><br>디지털 성범죄는 인터넷 특성상 단 1초라도 노출되면 무한 복제될 수 있으므로 '단순 장난'이나 '5분 내 신속한 삭제'가 처벌 자체를 면하게 해주지는 않으며, 징역형 권고가 기본 원칙입니다.`,
      lessonQuote: `"실제 법원에서도 '단순 장난'이나 '5분 만에 지웠다'는 변명은 절대 통하지 않습니다. 타인의 인격을 훼손하는 딥페이크 악용은 엄중한 형사 처벌 대상입니다."`
    },
    {
      id: 'case-3',
      category: '보안 / 개인정보',
      title: '무단 크롤링으로 탄생한 AI 안면 인식 시스템',
      summary: '개인정보 보호법 동종 전과가 있는 AI 스타트업 대표 A씨가 일반인 50만 명의 개인정보를 무단 수집·판매하고 수사 협조조차 거부한 중대 범죄 사건',
      story: `IT 벤처 기업을 운영하는 AI 스타트업 대표 **A씨(36세)**는 과거 동의 없는 동종 개인정보 무단 수집 및 이용으로 형사 처벌 및 행정처분을 받은 적이 있는 **개인정보 보호법 위반 동종 전과 재범자**입니다. 

A씨는 정당한 동의 절차나 라이선스 구매 비용을 지불하는 대신, 웹 크롤링 자동화 프로그램을 제작하여 일반인 수십만 명이 전체 공개로 올린 인스타그램, 네이버 블로그 등의 **얼굴 사진 50만 건**과 개인 작성 게시글 텍스트 데이터를 무단 수집했습니다. A씨는 이 50만 건의 개인정보를 AI 신경망 가중치에 학습시켰고, 개발된 안면 인식 솔루션을 대형 쇼핑몰 및 보안 업체에 판매하여 **약 2억 원의 막대한 상업적 매출**을 올렸습니다.

쇼핑몰 전광판에서 자신의 과거 게시글 기반 성향 분석 결과가 노출되어 극심한 사생활 침해와 불안감을 느낀 피해자 **B씨(24세)**가 데이터 삭제 및 AI 모델 파기를 요구했으나, A씨는 "신경망 가중치로 이미 학습되어 영구 삭제가 기술적으로 불가능하다"며 핑계를 대고 삭제를 거부했습니다.

B씨의 고소로 경찰 수사가 개시된 이후에도 A씨의 태도는 불량했습니다. A씨는 *"알고리즘 및 신경망 가중치는 회사의 핵심 영업비밀이므로 제출할 수 없다"*라며 **수사 기관의 자료 제출 요구 및 수사 협조를 전면 거부**하였습니다. A씨는 수사 과정에서도 반성하는 모습을 보이지 않았습니다.`,
      suspectArg: '"AI 모델 및 신경망 가중치는 당사의 핵심 영업비밀이므로 수사기관이라 할지라도 공개 및 제출할 수 없습니다. 인터넷에 공개된 정보를 활용했을 뿐 법적 문제가 없습니다."',
      victimArg: '"과거에도 개인정보를 무단 수집해 처벌받았던 사람이 또다시 50만 명의 얼굴을 무단 수집해 억대 매출을 올리고, 수사 협조조차 거부하고 있습니다. 반드시 실형으로 엄벌해 주십시오."',

      aggregatingFactors: [
        { id: 'agg1', text: '대규모 무단 수집 (정보주체 동의 없이 50만 건의 개인정보 무단 크롤링)' },
        { id: 'agg2', text: '막대한 상업적 이익 (AI 솔루션 상용화를 통해 약 2억 원의 직접 매출 창출)' },
        { id: 'agg3', text: '동종 범죄 전력 존재 (개인정보 보호법 위반 형사 처벌 전과가 있는 재범)' },
        { id: 'agg4', text: '수사 협조 거부 및 영업비밀 주장 (수사기관의 기술 데이터 제출 요구 전면 거부)' },
        { id: 'agg5', text: '피해자 삭제 요구 거부 및 영구 침해 (신경망 가중치 통합으로 영구 삭제 불가능)' }
      ],
      mitigatingFactors: [
        { id: 'mit1', text: '공개된 정보 활용 (해킹이나 비공개 서버가 아닌 전체 공개 게시물 수집)' },
        { id: 'mit2', text: '원본 이미지 미유출 (원본 사진 자체를 제3자에게 파일 형태로 유출하지 않음)' },
        { id: 'mit3', text: '업계 관행 및 기준 모호성 (범행 당시 AI 학습 데이터 가이드라인 미비)' },
        { id: 'mit4', text: '피해자에 대한 신체적 위해 부재 (비폭력적 정보 범죄)' },
        { id: 'mit5', text: '사업체 운영 및 고용 유지 (기업 경영자 신분)' }
      ],

      lawGuide: `<b>📌 개인정보 보호법 제71조 (벌칙) 및 제75조 (과징금)</b><br>
정보주체의 동의를 받지 아니하고 개인정보를 수집·이용하거나 제3자에게 제공한 자는 <b>5년 이하의 징역 또는 5천만 원 이하의 벌금(배상금)</b>에 처한다.<br>
<small style="color:#78350f;">※ 동종 전과가 있는 재범이고 수사 협조를 거부한 경우, 집행유예 없이 **징역형 실형 선고** 및 대규모 과징금이 부과됩니다.</small>`,

      stdVerdict: {
        fine: 'none',
        prison: '징역 2년',
        probation: 'none',
        summaryText: '징역 2년 실형 (집행유예 불가 + 과징금 1억 원 및 데이터 파기 명령)',
        recognizedAgg: ['agg1', 'agg2', 'agg3', 'agg4', 'agg5'],
        recognizedMit: ['mit1', 'mit2']
      },

      caseNo: '2026고단1007 개인정보보호법위반',
      defendant: '피고인 A (36세, AI 스타트업 대표)',
      caseName: '동종 재범 무단 크롤링 안면인식 AI 상용화 및 수사 거부 사건',
      orderText: '피고인을 징역 2년에 처한다. (집행유예 없이 구속 실형 선고 및 과징금 100,000,000원 부과, 수집 데이터 전량 파기 명령)',
      reasonText: `<b>1. 가중 사유:</b> 피고인은 동종 개인정보 보호법 위반 범죄 전력이 있는 재범임에도 불구하고 50만 건에 달하는 대규모 개인정보를 무단 크롤링하여 2억 원의 매출을 올림. 또한 피해자의 삭제 요구를 거부하고 수사 과정에서 영업비밀을 핑계로 기술 자료 제출 및 수사 협조를 전면 거부하며 반성하지 않아 실형 선고가 불가피함.
      
<b>2. 감경 사유:</b> 수집된 정보가 전체 공개된 게시물이었던 점 등 일부 사정을 고려하더라도, 재범 및 수사 미협조로 인해 집행유예를 부여할 수 없으며 징역 2년의 법정 구속 실형을 선고함.`,

      realJudge: `<b>🏛️ 실제 판결·처분 수치 및 법적 결과:</b><br><br>
<b>1. 동종 재범 및 무단 크롤링 개인정보 침해 (국내 법원 형사 실형 판결):</b><br>
과거 동종 처벌 전력이 있는 피고인이 대규모 무단 크롤링으로 사업 수익을 내고 수사에 협조하지 않은 사건에서, 법원은 "재범이며 반성 태도가 없고 개전의 정이 없다"며 <b>징역 2년의 실형 선고 및 법정 구속</b>을 내렸습니다.<br><br>

<b>2. AI 챗봇 '이루다' 개발사 스캐터랩 (행정처분 및 민사 판결):</b><br>
• 개인정보위 <b>과징금 5,550만 원 + 과태료 4,780만 원 (총 1억 330만 원) 부과</b><br>
• 민사 손해배상: 피해자 1인당 <b>10만 원 ~ 40만 원 위자료 지급 판결</b><br><br>

<b>3. 클리어뷰 AI (Clearview AI) 안면 인식 알고리즘 (영국/미국 처분):</b><br>
• <b>영국(ICO):</b> 개인정보 침해 <b>벌금 750만 파운드 (약 120억 원) 부과</b> 및 데이터 파기 명령<br>
• <b>미국(집단소송 합의):</b> 피해자 측에 <b>약 $5,000만 (약 680억 원) 상당 주식 지급 합의</b>`,

      lawSummary: `<b>📌 개인정보보호위원회 및 법원 엄벌 원칙:</b><br>동종 범죄 전력이 있는 상태에서 대규모 무단 크롤링을 감행하고 수사에 미협조할 경우, 초범과 달리 집행유예가 배제되어 징역형 실형 선고 및 억대 과징금 부과 대상이 됩니다.`,
      lessonQuote: `"동종 범죄 재범과 수사 거부는 법원의 가장 엄중한 실형 처벌을 부릅니다. 데이터 윤리는 기업 생존의 필수 조건입니다."`
    }
  ];

  // Current State
  let currentCase = null;
  let selectedAggregating = new Set();
  let selectedMitigating = new Set();

  // DOM Elements
  const step1 = document.getElementById('step-1');
  const step2 = document.getElementById('step-2');
  const step3 = document.getElementById('step-3');

  const caseCardsContainer = document.getElementById('case-cards-container');
  const btnBackStep1 = document.getElementById('btn-back-to-step1');

  // Step 2 Elements
  const trialCaseBadge = document.getElementById('trial-case-badge');
  const trialCaseTitle = document.getElementById('trial-case-title');
  const trialStoryBody = document.getElementById('trial-story-body');
  const trialSuspectArg = document.getElementById('trial-suspect-arg');
  const trialVictimArg = document.getElementById('trial-victim-arg');

  const aggChecklist = document.getElementById('agg-checklist');
  const mitigChecklist = document.getElementById('mitig-checklist');
  const aggCountBadge = document.getElementById('agg-count-badge');
  const mitigCountBadge = document.getElementById('mitig-count-badge');

  const selectFine = document.getElementById('select-fine');
  const selectPrison = document.getElementById('select-prison');
  const selectProbation = document.getElementById('select-probation');
  const btnSubmitVerdict = document.getElementById('btn-submit-verdict');
  const guideLawContent = document.getElementById('guide-law-content');

  // Step 3 Elements
  const resultMatchStatus = document.getElementById('result-match-status');
  const myVerdictSummary = document.getElementById('my-verdict-summary');
  const stdVerdictSummary = document.getElementById('std-verdict-summary');
  const myCheckedFactors = document.getElementById('my-checked-factors');
  const stdCheckedFactors = document.getElementById('std-checked-factors');
  const resultFeedbackBanner = document.getElementById('result-feedback-banner');

  const vCaseNo = document.getElementById('v-case-no');
  const vCaseName = document.getElementById('v-case-name');
  const vDefendant = document.getElementById('v-defendant');
  const vOrderText = document.getElementById('v-order-text');
  const vReasonText = document.getElementById('v-reason-text');
  const vRealJudge = document.getElementById('v-real-judge');
  const vLawSummary = document.getElementById('v-law-summary');
  const resultLessonQuote = document.getElementById('result-lesson-quote');

  const btnRetryCase = document.getElementById('btn-retry-case');
  const btnHome = document.getElementById('btn-home');

  // -------------------------------------------------------------
  // 2. 메인 사례 선택 카드 생성 (Step 1)
  // -------------------------------------------------------------
  function renderCaseCards() {
    caseCardsContainer.innerHTML = '';
    caseData.forEach((c, idx) => {
      const card = document.createElement('div');
      card.className = 'case-card';
      card.innerHTML = `
        <div>
          <div class="case-card-header">
            <span class="case-num-pill">Case ${idx + 1}</span>
            <span class="case-category">${c.category}</span>
          </div>
          <h3 class="case-card-title">${c.title}</h3>
          <p class="case-card-desc">${c.summary}</p>
        </div>
        <button type="button" class="btn-start-trial" data-id="${c.id}">
          <span>⚖️ 사건 심리하기</span>
        </button>
      `;
      caseCardsContainer.appendChild(card);
    });

    // 버튼 이벤트 바인딩
    document.querySelectorAll('.btn-start-trial').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const caseId = e.currentTarget.getAttribute('data-id');
        startTrial(caseId);
      });
    });
  }

  // -------------------------------------------------------------
  // 3. 사건 심리 시작 (Step 2 바인딩)
  // -------------------------------------------------------------
  function startTrial(caseId) {
    currentCase = caseData.find(c => c.id === caseId);
    if (!currentCase) return;

    selectedAggregating.clear();
    selectedMitigating.clear();

    // 입력 폼 초기화
    selectFine.value = 'none';
    selectPrison.value = 'none';
    selectProbation.value = 'none';

    // 텍스트 바인딩
    const caseIndex = caseData.findIndex(c => c.id === caseId) + 1;
    trialCaseBadge.textContent = `Case ${caseIndex}. ${currentCase.category}`;
    trialCaseTitle.textContent = currentCase.title;
    trialStoryBody.innerHTML = currentCase.story.replace(/\n\n/g, '<br><br>');
    trialSuspectArg.textContent = currentCase.suspectArg;
    trialVictimArg.textContent = currentCase.victimArg;
    guideLawContent.innerHTML = currentCase.lawGuide;

    // 체크리스트 생성
    renderChecklists();
    updateCounts();

    // 뷰 전환
    switchView('step-2');
  }

  function renderChecklists() {
    // 가중요소
    aggChecklist.innerHTML = '';
    currentCase.aggregatingFactors.forEach(item => {
      const label = document.createElement('label');
      label.className = 'check-item';
      label.innerHTML = `
        <input type="checkbox" value="${item.id}" class="chk-agg" />
        <span>${item.text}</span>
      `;
      aggChecklist.appendChild(label);
    });

    // 감경요소
    mitigChecklist.innerHTML = '';
    currentCase.mitigatingFactors.forEach(item => {
      const label = document.createElement('label');
      label.className = 'check-item';
      label.innerHTML = `
        <input type="checkbox" value="${item.id}" class="chk-mit" />
        <span>${item.text}</span>
      `;
      mitigChecklist.appendChild(label);
    });

    // 체크박스 이벤트 바인딩
    document.querySelectorAll('.chk-agg').forEach(chk => {
      chk.addEventListener('change', (e) => {
        if (e.target.checked) selectedAggregating.add(e.target.value);
        else selectedAggregating.delete(e.target.value);
        updateCounts();
      });
    });

    document.querySelectorAll('.chk-mit').forEach(chk => {
      chk.addEventListener('change', (e) => {
        if (e.target.checked) selectedMitigating.add(e.target.value);
        else selectedMitigating.delete(e.target.value);
        updateCounts();
      });
    });
  }

  function updateCounts() {
    aggCountBadge.textContent = `${selectedAggregating.size} / ${currentCase.aggregatingFactors.length}`;
    mitigCountBadge.textContent = `${selectedMitigating.size} / ${currentCase.mitigatingFactors.length}`;
  }

  // -------------------------------------------------------------
  // 4. 판결 선고 및 결과 계산 (Step 3)
  // -------------------------------------------------------------
  btnSubmitVerdict.addEventListener('click', () => {
    const fineVal = selectFine.value;
    const prisonVal = selectPrison.value;
    const probationVal = selectProbation.value;

    if (fineVal === 'none' && prisonVal === 'none') {
      alert('벌금(배상금) 또는 징역형 중 하나 이상 선고 형량을 선택해주세요.');
      return;
    }

    calculateAndShowResult(fineVal, prisonVal, probationVal);
  });

  function calculateAndShowResult(fine, prison, probation) {
    // 1) 내 형량 요약 텍스트
    let myVerdictText = '';
    if (prison !== 'none') {
      myVerdictText += prison;
      if (probation !== 'none') myVerdictText += ` / ${probation}`;
    }
    if (fine !== 'none') {
      if (myVerdictText) myVerdictText += ` (벌금/배상금: ${fine})`;
      else myVerdictText = `벌금(배상금) ${fine}`;
    }
    myVerdictSummary.textContent = myVerdictText;
    stdVerdictSummary.textContent = currentCase.stdVerdict.summaryText;

    // 2) 체크한 양형 요소 비교
    myCheckedFactors.innerHTML = '';
    selectedAggregating.forEach(id => {
      const item = currentCase.aggregatingFactors.find(f => f.id === id);
      if (item) {
        const li = document.createElement('li');
        li.className = 'tag-agg';
        li.textContent = `[가중] ${item.text}`;
        myCheckedFactors.appendChild(li);
      }
    });
    selectedMitigating.forEach(id => {
      const item = currentCase.mitigatingFactors.find(f => f.id === id);
      if (item) {
        const li = document.createElement('li');
        li.className = 'tag-mitig';
        li.textContent = `[감경] ${item.text}`;
        myCheckedFactors.appendChild(li);
      }
    });

    if (selectedAggregating.size === 0 && selectedMitigating.size === 0) {
      myCheckedFactors.innerHTML = '<li>선택한 양형 요소가 없습니다.</li>';
    }

    // 법원 표준 인정 요소
    stdCheckedFactors.innerHTML = '';
    currentCase.stdVerdict.recognizedAgg.forEach(id => {
      const item = currentCase.aggregatingFactors.find(f => f.id === id);
      if (item) {
        const li = document.createElement('li');
        li.className = 'tag-agg';
        li.textContent = `[가중] ${item.text}`;
        stdCheckedFactors.appendChild(li);
      }
    });
    currentCase.stdVerdict.recognizedMit.forEach(id => {
      const item = currentCase.mitigatingFactors.find(f => f.id === id);
      if (item) {
        const li = document.createElement('li');
        li.className = 'tag-mitig';
        li.textContent = `[감경] ${item.text}`;
        stdCheckedFactors.appendChild(li);
      }
    });

    // 3) 일치도 계산 (체크리스트 일치도 + 형량 유사도)
    const matchedAgg = currentCase.stdVerdict.recognizedAgg.filter(id => selectedAggregating.has(id)).length;
    const matchedMit = currentCase.stdVerdict.recognizedMit.filter(id => selectedMitigating.has(id)).length;
    const totalStdFactors = currentCase.stdVerdict.recognizedAgg.length + currentCase.stdVerdict.recognizedMit.length;
    
    const factorScore = ((matchedAgg + matchedMit) / totalStdFactors) * 100;

    let matchLevel = 'medium';
    let matchMessage = '';
    let pillText = '';

    if (factorScore >= 75) {
      matchLevel = 'high';
      pillText = '🎯 높은 일치도 (전문 판사급 심리)';
      matchMessage = '👏 대단합니다! 실제 대법원 양형위원회의 심리 기준 및 법원의 주요 가중/감경 사유와 거의 완벽하게 일치하는 판결을 내리셨습니다.';
    } else if (factorScore >= 40) {
      matchLevel = 'medium';
      pillText = '⚖️ 보통 일치도 (신중한 심리)';
      matchMessage = '👍 전반적으로 주요 양형 사유를 잘 반영하셨습니다. 아래의 실제 법원 판결 및 양형 이유와 체크 사유를 비교해보세요.';
    } else {
      matchLevel = 'low';
      pillText = '💡 자비롭거나 엄격한 판결';
      matchMessage = '🤔 실제 법령 및 대법원 양형기준과 다소 차이가 있습니다. 하단의 실제 법원 판결 및 법적 근거를 통해 사유를 확인해보세요.';
    }

    resultMatchStatus.className = `accuracy-pill ${matchLevel}`;
    resultMatchStatus.textContent = pillText;
    resultFeedbackBanner.textContent = matchMessage;

    // 4) 판결문 데이터 바인딩
    vCaseNo.textContent = currentCase.caseNo;
    vCaseName.textContent = currentCase.caseName;
    vDefendant.textContent = currentCase.defendant;
    vOrderText.textContent = currentCase.orderText;
    vReasonText.innerHTML = currentCase.reasonText.replace(/\n/g, '<br>');
    if (vRealJudge) {
      vRealJudge.innerHTML = currentCase.realJudge;
    }
    vLawSummary.innerHTML = currentCase.lawSummary;
    resultLessonQuote.textContent = currentCase.lessonQuote;

    switchView('step-3');
  }

  // -------------------------------------------------------------
  // 5. 네비게이션 뷰 전환 함수
  // -------------------------------------------------------------
  function switchView(stepId) {
    document.querySelectorAll('.step-view').forEach(view => {
      view.classList.remove('active');
    });
    const target = document.getElementById(stepId);
    if (target) {
      target.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  btnBackStep1.addEventListener('click', () => switchView('step-1'));
  btnHome.addEventListener('click', () => switchView('step-1'));
  btnRetryCase.addEventListener('click', () => switchView('step-1'));

  // -------------------------------------------------------------
  // 초기화 실행
  // -------------------------------------------------------------
  renderCaseCards();
});
