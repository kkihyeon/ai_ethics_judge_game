// ⚖️ AI 딜레마 법정: 애플리케이션 로직 (app.js)

document.addEventListener('DOMContentLoaded', () => {
  // -------------------------------------------------------------
  // 1. 사건 사례 데이터 정의
  // -------------------------------------------------------------
  const caseData = [
    {
      id: 'case-1',
      category: '창작자 / 저작권',
      title: '벼랑 끝 웹툰 작가의 AI 모작 사건',
      summary: '인기 순위에서 밀려난 작가 A씨가 최신 AI를 활용해 디즈니 대표 캐릭터를 무단 학습 및 모작하여 연재한 사건',
      story: `웹툰 작가 **A씨**는 플랫폼 인기 순위 100위권 밖으로 밀려나며 계약 해지 위기에 놓입니다. 당장 다음 달 생계가 막막해진 A씨는 인기를 얻기 위해 새로운 캐릭터를 투입하기로 결정합니다. 밤샘 작업과 스트레스 속에서 A씨는 최신 이미지 생성 AI에 글로벌 콘텐츠 기업 디즈니의 메가 히트작 캐릭터 **'루나'**의 디자인 특성(오색 눈동자, 독특한 의상 깃, 특유의 대사 톤)을 학습 데이터로 넣고 **'유사한 분위기의 신규 캐릭터'**를 생성해 작품에 등재합니다.
      
이 캐릭터의 등장으로 웹툰은 12위까지 급상승하고, A씨는 굿즈 제작 계약까지 앞두게 됩니다. 한편, 디즈니의 한국지사 캐릭터 디자이너 **B씨**는 퇴근 후 취미로 웹툰을 보다가 자신의 피땀 어린 5년 차 대표작 '루나'를 그대로 베낀 듯한 캐릭터를 발견합니다. B씨는 아무런 허락도 없이 자신의 창작물이 소비되는 것에 큰 충격과 무력감을 느끼고, 회사를 통해 A씨를 **저작권법 위반**으로 고소합니다.`,
      suspectArg: '"타인의 작품을 폄훼할 목적이 없었고 생계가 걸린 절박한 상황이었습니다. AI가 생성한 이미지라 제가 직접 그린 것도 아니며, 디자인도 일부 수정했으니 창작 영역입니다."',
      victimArg: '"AI 프롬프트에 내 캐릭터를 고의로 학습시켰고, 외형과 성격이 누가 봐도 \'루나\'입니다. 이는 명백한 창작권 침해이자 상업적 도용입니다."',
      
      aggregatingFactors: [
        { id: 'agg1', text: '상업적 이익 창출 (순위 상승 및 굿즈 계약 추진 등 경제적 이득)' },
        { id: 'agg2', text: '고의적인 모작 유도 (AI 학습 데이터 및 프롬프트에 원작 캐릭터 의도적 입력)' },
        { id: 'agg3', text: '피해 회복 미흡 (원작자 B씨 및 회사 측과 합의 미도달)' },
        { id: 'agg4', text: '지속적인 침해 행위 (단발성이 아닌 유료 플랫폼에 정기적 노출·연재)' },
        { id: 'agg5', text: '원작자 상실감 및 피해 규모 (글로벌 IP 가치 훼손 및 디자이너 정신적 피해)' }
      ],
      mitigatingFactors: [
        { id: 'mit1', text: '동종 전과 없음 (저작권 침해 이력이 없는 초범)' },
        { id: 'mit2', text: '절박한 생계형 동기 (연재 중단 및 계약 해지 위기라는 압박)' },
        { id: 'mit3', text: '사건 인지 후 즉시 조치 (고소 직후 해당 캐릭터 등장 분량 삭제 및 연재 중단)' },
        { id: 'mit4', text: '범행 인정 및 반성 (윤리적·법적 잘못을 인정하고 깊이 반성)' },
        { id: 'mit5', text: '완전 복제가 아닌 일부 변형 (AI 결과물을 일부 수정하려는 시도 존재)' }
      ],

      lawGuide: `<b>저작권법 제136조 (벌칙)</b><br>
저작재산권, 그 밖에 이 법에 따라 보호되는 재산적 권리를 복제, 공연, 공중송신, 전시, 배포, 대여, 2차적저작물 작성의 방법으로 침해한 자는 <b>5년 이하의 징역 또는 5천만원 이하의 벌금</b>에 처한다.`,
      
      stdVerdict: {
        fine: '700만 원 이하',
        prison: '징역 6개월',
        probation: '집행유예 1년',
        summaryText: '벌금 700만 원 (또는 징역 6개월 / 집행유예 1년)',
        recognizedAgg: ['agg1', 'agg2', 'agg4', 'agg5'],
        recognizedMit: ['mit1', 'mit2', 'mit3', 'mit4']
      },

      caseNo: '2026고단1001 저작권법위반',
      defendant: '피고인 A (31세, 웹툰 작가)',
      caseName: '웹툰 AI 캐릭터 모작에 따른 저작권 침해 사건',
      orderText: '피고인을 징역 6개월에 처한다. 다만, 이 판결 확정일부터 1년간 위 형의 집행을 유예한다. (또는 벌금 700만 원에 처한다.)',
      reasonText: `<b>1. 가중 사유:</b> 피고인은 타인의 지식재산권인 캐릭터 특성을 AI에 고의적으로 학습시켜 모작을 유도하였고, 유료 웹툰 연재 및 굿즈 계약 등 직접적인 상업적 이득을 취하였음 (대법원 판례: AI를 도구로 사용했더라도 원작과의 '실질적 유사성' 및 '의거성'이 인정되면 저작권 침해 성립).
      
<b>2. 감경 사유:</b> 피고인이 이전 범죄 전력이 없는 초범인 점, 연재 중단 위기라는 생계형 동기가 작용한 점, 고소 직후 해당 콘텐츠를 삭제하고 연재를 중단하는 등 사후 피해 확산 방지에 노력한 점(형법 제51조)을 종합 참작함.`,
      lawSummary: `<b>📌 대법원 판례 확립 원칙:</b><br>AI 프롬프트나 학습 데이터로 타인의 저작물을 활용하여 생성된 결과물이 원작과 '실질적 유사성'을 가지고 원작에 '의거'하여 만들어졌다면 AI 생성물이라도 명백한 저작권 침해에 해당합니다.`,
      lessonQuote: `"AI가 대신 그려준 그림이라 할지라도, 타인의 피땀 어린 창작물을 의도적으로 학습시키고 도용한 책임은 모두 AI를 조작한 인간에게 있습니다."`
    },
    {
      id: 'case-2',
      category: '사용자 / 인격권',
      title: '5분간의 딥페이크 장난 사건',
      summary: '대학생 A씨가 과 동기의 얼굴을 AI 음란성 합성물로 제작해 SNS에 5분간 올려 피해자에게 심각한 트라우마를 남긴 사건',
      story: `컴퓨터공학과 재학생 **A씨**는 최근 AI 영상 편집 및 딥페이크 합성 기술에 매료되었습니다. 동기들과의 단체 채팅방에서 기술력을 자랑하던 A씨는, 평소 SNS 사진을 자주 올리던 과 동기 **B씨**의 얼굴을 AI 합성 프로그램에 넣어 부적절한 음란성 이미지와 합성했습니다.

A씨는 "이거 퀄리티 대박이지 않냐?"라며 친구들 사이에서 재미를 느끼려는 생각으로 자신의 인스타그램 부계정 스토리(팔로워 150명)에 해당 영상을 올렸습니다. 올린 직후 '혹시나' 하는 불안감에 **5분 만에 게시물을 삭제**하고 파일도 파기했습니다. 하지만 그 5분 사이에 누군가가 이를 캡처해 피해자 B씨에게 전달했습니다. B씨는 극심한 수치심과 트라우마로 대인기피증에 시달리게 되었고, 결국 학업을 중단하고 휴학을 신청한 채 정신과 치료를 받게 되었습니다.`,
      suspectArg: '"절대 B씨에게 해를 가할 목적이 아니었고, 기술 테스트 겸 단순 장난이었습니다. 5분 만에 바로 삭제했고 피해를 막기 위해 최선을 다했습니다."',
      victimArg: '"5분이든 1초든 내 얼굴이 부적절하게 합성되어 타인에게 노출되었습니다. 제 일상은 완전히 무너졌고 다시 학교로 돌아갈 수 없습니다."',

      aggregatingFactors: [
        { id: 'agg1', text: '피해자의 극심한 피해 (대인기피증, 정신과 치료, 휴학 등)' },
        { id: 'agg2', text: '성적 수치심 유발 (동의 없는 허위 음란 성적 영상물 제작)' },
        { id: 'agg3', text: '불특정 다수 노출 가능성 (SNS 스토리 팔로워 150명에게 공개 노출)' },
        { id: 'agg4', text: '피해자와의 합의 부재 (피해자 및 보호자로부터 용서받지 못함)' },
        { id: 'agg5', text: '디지털 범죄 위험성 인지 가능 (컴퓨터공학 전공자로서 유포 위험 충분히 인지)' }
      ],
      mitigatingFactors: [
        { id: 'mit1', text: '5분 만에 자발적 및 신속한 삭제 (2차 유포 확산 방지 노력)' },
        { id: 'mit2', text: '비영리 목적 (금전적 이득이나 협박 목적이 없는 단순 호기심)' },
        { id: 'mit3', text: '동종 전과 없는 초범 및 학생 신분 (범죄 전력 없음)' },
        { id: 'mit4', text: '범행 인정 및 진지한 반성 (수사 기관에 자백하고 깊이 뉘우침)' },
        { id: 'mit5', text: '원본 파일 파기 (합성 및 원본 데이터 즉시 파기)' }
      ],

      lawGuide: `<b>성폭력범죄의 처벌 등에 관한 특례법 제14조의2 (허위영상물 등의 반포 등)</b><br>
반포등의 목적없이 사람의 얼굴ㆍ음성 또는 신체를 대상으로 한 편집물등을 대상자의 의사에 반하여 성적 수치심을 유발할 수 있는 형태로 편집등을 한 자는 <b>5년 이하의 징역 또는 5천만원 이하의 벌금</b>에 처한다.`,

      stdVerdict: {
        fine: 'none',
        prison: '징역 1년',
        probation: '집행유예 2년',
        summaryText: '징역 1년 / 집행유예 2년 (벌금 없음)',
        recognizedAgg: ['agg1', 'agg2', 'agg3', 'agg4', 'agg5'],
        recognizedMit: ['mit1', 'mit3', 'mit4', 'mit5']
      },

      caseNo: '2026고단1004 허위영상물 제작 및 반포',
      defendant: '피고인 A (22세, 대학생)',
      caseName: '딥페이크 기술을 이용한 허위 영상물 제작 및 게시 사건',
      orderText: '피고인을 징역 1년에 처한다. 다만, 이 판결 확정일부터 2년간 위 형의 집행을 유예한다.',
      reasonText: `<b>1. 가중 사유:</b> 대법원 양형위원회 '허위영상물 유포 범죄 양형기준'에 따라, 디지털 성범죄는 게시 시간이 단 5분에 불과하더라도 복제 및 유포 위험성이 매우 높으며, 피해자가 학업 중단 등 심각한 인격적·정신적 고통을 입은 이상 초범이라도 '징역형 권고'를 원칙으로 함.
      
<b>2. 감경 사유:</b> 피고인이 게시 5분 만에 자발적으로 삭제하여 추가 유포를 막으려 노력한 점, 합성 파일 원본을 파기한 점, 초범이며 자신의 잘못을 솔직히 인정하고 반성하는 정황(형법 제51조)을 고려하여 집행유예를 선고함.`,
      lawSummary: `<b>📌 대법원 양형위원회 허위영상물 양형기준:</b><br>인터넷 및 디지털 매체의 특성상 1초라도 노출되면 무한 복제될 수 있으므로 '단순 장난'이나 '신속한 삭제'가 처벌 자체를 면하게 해주지는 않으며, 징역형 선고를 기본으로 합니다.`,
      lessonQuote: `"실제 법원에서도 '단순 장난'이나 '5분 만에 지웠다'는 변명은 통하지 않습니다. 타인의 인격을 훼손하는 디지털 기술 악용은 엄중한 형사 처벌 대상입니다."`
    },
    {
      id: 'case-3',
      category: '보안 / 개인정보',
      title: '무단 크롤링으로 탄생한 AI 안면 인식 시스템',
      summary: 'AI 스타트업 대표 A씨가 일반인 50만 명의 얼굴 사진과 게시글을 동의 없이 무단 수집하여 AI 솔루션을 판매해 2억 원의 매출을 올린 사건',
      story: `AI 스타트업 대표인 **A씨**는 상용 안면 인식 및 성향 분석 AI 기술을 개발 중이었습니다. 정확도를 높이기 위해 방대한 한국인의 얼굴 데이터가 필요했던 A씨는 웹 크롤링 프로그램을 직접 제작했습니다. 그리고 일반인 수십만 명이 공개 설정으로 올린 인스타그램, 블로그 등의 **얼굴 사진 50만 건**과 게시글 텍스트를 무단으로 추출하여 AI 모델에 학습시켰습니다. A씨는 이 AI 솔루션을 기업 보안 업체 및 마케팅 회사에 판매하여 **약 2억 원의 매출**을 올렸습니다.

한편, 대학생 **B씨**는 최근 방문한 대형 쇼핑몰의 AI 맞춤형 전광판에 자신의 얼굴과 함께 **'과거 SNS 게시글 기반 성향 분석 결과'**가 화면에 뜨는 것을 보고 경악했습니다. B씨가 A씨의 회사에 자신의 데이터 삭제 및 모델 파기를 요구하자, A씨는 *"이미 인공지능 신경망에 가중치 형태로 통합되어 특정 개인의 데이터만 골라 삭제하는 것은 기술적으로 불가능하며, 공개된 인터넷 공간의 자료를 활용한 것일 뿐"*이라며 거부했습니다. B씨는 자신의 동의 없이 개인정보가 상업적으로 이용되고 평생 추적당할 수 있다는 불안감에 고소를 진행하게 됩니다.`,
      suspectArg: '"인터넷에 누구나 볼 수 있게 공개된 사진을 이용했을 뿐이며, 개별 사진을 원본 그대로 저장·유출한 것이 아니라 AI의 능력을 키우는 학습 재료로만 사용했습니다."',
      victimArg: '"공개 게시물이라도 내 동의 없이 상업적 AI 제품의 학습 데이터로 추출되는 것까지 동의한 적은 없습니다. 잊혀질 권리와 초상권, 개인정보를 심각하게 침해당했습니다."',

      aggregatingFactors: [
        { id: 'agg1', text: '대규모 무단 수집 (동의 없이 50만 건의 대규모 개인정보 무단 크롤링)' },
        { id: 'agg2', text: '막대한 상업적 이익 (AI 솔루션 상용화로 약 2억 원의 직접적 매출 창출)' },
        { id: 'agg3', text: '피해자의 삭제 요구 거부 (정보 주체의 권리 행사를 기술적 이유로 거절)' },
        { id: 'agg4', text: '지속적인 권리 침해 및 원상복구 불가 (신경망 가중치 통합으로 영구 삭제 불가능)' },
        { id: 'agg5', text: '사생활 침해 및 불안감 유발 (공공장소 전광판 성향 노출 등 민감정보 침해)' }
      ],
      mitigatingFactors: [
        { id: 'mit1', text: '공개된 정보 활용 (해킹이나 비공개 서버가 아닌 전체 공개 게시물 수집)' },
        { id: 'mit2', text: '원본 이미지 미유출 (원본 사진을 제3자에게 파일 형태로 유출하지 않음)' },
        { id: 'mit3', text: '동종 전과 없음 (개인정보 보호법 위반 관련 전력이 없는 초범)' },
        { id: 'mit4', text: '업계 관행 및 기준 모호성 (범행 당시 AI 데이터 학습 법적 가이드라인 미비)' },
        { id: 'mit5', text: '수사 협조 및 재발 방지 (기술 구조 공개 및 향후 필터링 시스템 도입 약속)' }
      ],

      lawGuide: `<b>개인정보 보호법 제71조 (벌칙)</b><br>
정보주체의 동의를 받지 아니하고 개인정보를 수집·이용하거나 제3자에게 제공한 자는 <b>5년 이하의 징역 또는 5천만원 이하의 벌금</b>에 처한다. (과징금 부과 대상)`,

      stdVerdict: {
        fine: '1,500만 원 이하',
        prison: '징역 1년',
        probation: '집행유예 2년',
        summaryText: '벌금 1,500만 원 (또는 징역 1년 / 집행유예 2년)',
        recognizedAgg: ['agg1', 'agg2', 'agg3', 'agg4', 'agg5'],
        recognizedMit: ['mit1', 'mit3', 'mit4', 'mit5']
      },

      caseNo: '2026고단1007 개인정보보호법위반',
      defendant: '피고인 A (36세, AI 스타트업 대표)',
      caseName: '무단 크롤링 얼굴 데이터 활용 AI 상용화 사건',
      orderText: '피고인을 징역 1년에 처한다. 다만, 이 판결 확정일부터 2년간 위 형의 집행을 유예한다. (또한 과징금 및 데이터 파기 시명 조치)',
      reasonText: `<b>1. 가중 사유:</b> 개인정보보호위원회 의결(클리어뷰 AI 사건) 기준, 인터넷에 공개된 개인정보라 할지라도 정보 주체의 동의 없이 AI 상업적 학습 모델에 크롤링하여 판매한 것은 명백한 위법임. 50만 건이라는 대규모 정보 수집과 2억 원의 상업적 매출, 삭제 요구 거부는 중대한 엄벌 사유임.
      
<b>2. 감경 사유:</b> 수사 과정에서 AI 시스템의 구조를 솔직히 공개하고 향후 무단 학습 방지 필터링 도입을 약속한 점, 동종 범죄 전력이 없는 초범인 점, 초창기 AI 학습 관련 가이드라인의 모호성을 고려하여 집행유예를 선고함.`,
      lawSummary: `<b>📌 개인정보보호위원회 공식 의결 (2022):</b><br>인터넷 전체 공개 정보라도 상업 목적의 AI 학습에 무단 수집·활용하는 것은 개인정보보호법 위반이며, 과징금 부과 및 학습 데이터 파기 명령 조치가 내려집니다.`,
      lessonQuote: `"\'인터넷에 공개된 정보니까 마음대로 가져다 써도 되겠지\'라는 착각은 금물입니다. 타인의 데이터와 사생활을 존중하는 윤리의식이 AI 개발의 출발점입니다."`
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
    trialStoryBody.innerHTML = currentCase.story.replace(/\n/g, '<br>');
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
      alert('벌금형 또는 징역형 중 하나 이상 선고 형량을 선택해주세요.');
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
      if (myVerdictText) myVerdictText += ` (벌금: ${fine})`;
      else myVerdictText = `벌금 ${fine}`;
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
    const totalFactors = currentCase.aggregatingFactors.length + currentCase.mitigatingFactors.length;
    let matchedCount = 0;

    currentCase.stdVerdict.recognizedAgg.forEach(id => {
      if (selectedAggregating.has(id)) matchedCount++;
    });
    currentCase.stdVerdict.recognizedMit.forEach(id => {
      if (selectedMitigating.has(id)) matchedCount++;
    });

    const factorScore = (matchedCount / (currentCase.stdVerdict.recognizedAgg.length + currentCase.stdVerdict.recognizedMit.length)) * 100;

    let matchLevel = 'medium';
    let matchMessage = '';
    let pillText = '';

    if (factorScore >= 75) {
      matchLevel = 'high';
      pillText = '🎯 높은 일치도 (전문 판사급 심리)';
      matchMessage = '👏 대단합니다! 실제 대법원 양형위원회의 심리 기준 및 가중/감경 사유와 거의 완벽하게 일치하는 판결을 내리셨습니다.';
    } else if (factorScore >= 40) {
      matchLevel = 'medium';
      pillText = '⚖️ 보통 일치도 (신중한 심리)';
      matchMessage = '👍 전반적으로 주요 양형 사유를 잘 반영하셨습니다. 실제 법관의 양형 이유와 체크한 사유를 비교해보세요.';
    } else {
      matchLevel = 'low';
      pillText = '💡 자비롭거나 엄격한 판결';
      matchMessage = '🤔 실제 법령 및 대법원 양형기준과 다소 차이가 있습니다. 하단의 판결문 양형 이유를 통해 법적 근거를 확인해보세요.';
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
