// ⚖️ AI 딜레마 법정: 애플리케이션 로직 (app.js)

document.addEventListener('DOMContentLoaded', () => {
  // -------------------------------------------------------------
  // 1. 사건 사례 데이터 정의 (풍부한 스토리 & 팩트 법조문 & 실제 판례 보충)
  // -------------------------------------------------------------
  const caseData = [
    {
      id: 'case-1',
      category: '창작자 / 저작권',
      title: '벼랑 끝 웹툰 작가의 AI 모작 사건',
      summary: '인기 순위 100위 밖으로 밀려나 계약 해지 위기에 몰린 웹툰 작가 A씨가 최신 생성형 AI를 활용해 글로벌 인기 캐릭터를 학습·모작하여 연재하다 저작권법 위반으로 고소당한 사건',
      story: `웹툰 작가 **A씨(31세)**는 유료 웹툰 플랫폼에서 3년째 판타지 장르 웹툰을 연재해 온 프리랜서 창작자입니다. 그러나 독자들의 반응은 냉담했고, 최근 작품 인기 순위가 100위권 밖으로 곤두박질치면서 플랫폼 매니저로부터 "다음 달까지 조회수가 회복되지 않으면 계약을 해지할 수밖에 없다"는 일종의 통보를 받게 됩니다. 당장 밀린 월세와 다음 달 생계가 막막해진 A씨는 극심한 불안감과 스트레스에 시달리게 됩니다.

절박해진 A씨는 인기를 단숨에 끌어올릴 핵심 캐릭터를 투입하기로 마음먹습니다. 밤샘 작업 도중 A씨는 최신 이미지 생성 AI 기술을 떠올렸습니다. A씨는 글로벌 콘텐츠 기업 디즈니의 메가 히트작 대표 캐릭터인 **'루나'**의 모든 디자인 특성(특유의 오색 눈동자, 독특한 제복 의상 깃, 헤어 스타일, 표정과 톤)이 담긴 고화질 이미지 300여 장을 AI 프롬프트 및 미세조정(LoRA) 학습 데이터로 무단 입력했습니다. 그리고 *"루나와 동일한 그림체, 유사한 분위기와 특징을 가진 새로운 주인공 캐릭터"*를 생성해 작품 핵심 에피소드에 등재했습니다.

이 새로운 캐릭터의 파격적인 등장으로 웹툰은 단 일주일 만에 플랫폼 전체 인기 순위 12위까지 급상승했고, A씨는 대기업 굿즈 제작사와 캐릭터 상품화 계약까지 눈앞에 두게 됩니다. 

한편, 디즈니 한국지사 캐릭터 디자이너 **B씨**는 퇴근 후 취미로 웹툰을 보다가 자신의 피땀 어린 5년 차 대표 창작물 '루나'를 그대로 옮겨 그린 듯한 웹툰 캐릭터를 발견하고 충격에 휩싸입니다. B씨는 "어떻게 내 피땀 흘린 디자인 특성을 프롬프트 몇 줄로 베껴 상업적으로 쓸 수 있냐"며 심각한 무력감과 정신적 고통을 호소했고, 회사를 통해 A씨를 **저작권법 위반** 혐의로 정식 고소했습니다.`,
      suspectArg: '"타인의 작품을 폄훼할 목적이 없었고 당장 길거리에 나앉을 생계가 걸린 절박한 상황이었습니다. AI가 생성한 이미지라 제가 직접 손으로 그린 것도 아니며, 머리 색과 옷 장식을 일부 수정했으므로 저의 새로운 창작 영역입니다."',
      victimArg: '"원작 캐릭터의 독창적 외형과 특성을 AI에 고의로 학습시켰고, 누가 봐도 제 대표작 \'루나\'의 디자인을 그대로 도용했습니다. 이는 명백한 창작권 침해이자 5년간의 노력을 짓밟은 상업적 도용입니다."',
      
      aggregatingFactors: [
        { id: 'agg1', text: '상업적 이익 창출 (순위 상승 100위➔12위 및 굿즈 계약 추진 등 직접적 경제 이득)' },
        { id: 'agg2', text: '고의적인 모작 유도 (AI 학습 데이터 및 프롬프트에 원작 캐릭터 300여 장 의도적 입력)' },
        { id: 'agg3', text: '피해 회복 미흡 (원작자 B씨 및 기업 측과 합의에 이르지 못함)' },
        { id: 'agg4', text: '지속적인 침해 행위 (단발성이 아닌 유료 플랫폼에 정기적으로 노출 및 상업 연재)' },
        { id: 'agg5', text: '원작자 상실감 및 피해 규모 (글로벌 IP 브랜드 가치 훼손 및 창작자 정신적 고통 유발)' }
      ],
      mitigatingFactors: [
        { id: 'mit1', text: '동종 전과 없음 (어떠한 형사 처벌이나 저작권 침해 이력이 없는 초범)' },
        { id: 'mit2', text: '절박한 생계형 동기 (연재 중단 및 계약 해지 위기라는 압박 속 범행)' },
        { id: 'mit3', text: '사건 인지 후 즉시 조치 (고소 직후 해당 캐릭터 등장 분량 삭제 및 연재 전면 중단)' },
        { id: 'mit4', text: '범행 인정 및 반성 (윤리적·법적 잘못을 인정하고 깊이 반성함)' },
        { id: 'mit5', text: '완전 복제가 아닌 일부 변형 (AI 결과물의 세부 디자인 및 대사를 수정하려는 시도)' }
      ],

      lawGuide: `<b>📌 저작권법 제136조 (벌칙 - 저작재산권 침해)</b><br>
저작재산권, 그 밖에 이 법에 따라 보호되는 재산적 권리를 복제, 공연, 공중송신, 전시, 배포, 2차적저작물 작성의 방법으로 침해한 자는 <b>5년 이하의 징역 또는 5천만 원 이하의 벌금</b>에 처한다.<br>
<small style="color:#78350f;">※ 영리를 목적으로 하거나 상습적으로 침해한 경우, 피해자의 고소가 없어도 처벌되는 비친고죄가 적용됩니다.</small>`,

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
      caseName: '웹툰 AI 캐릭터 무단 학습 및 모작 저작권 침해 사건',
      orderText: '피고인을 징역 6개월에 처한다. 다만, 이 판결 확정일부터 1년간 위 형의 집행을 유예한다. (또는 피고인을 벌금 7,000,000원에 처한다.)',
      reasonText: `<b>1. 가중 사유:</b> 피고인은 타인의 독창적인 지식재산권인 캐릭터 디자인을 AI 프롬프트에 고의적으로 대량 학습시켜 유사 모작을 유도하였고, 유료 웹툰 연재 및 상업적 굿즈 계약 등 직접적인 경제적 이득을 얻었음. 대법원 판례상 AI를 도구로 사용했더라도 원작과의 '실질적 유사성'과 '의거성'이 인정되면 명백한 저작권 침해에 해당함.
      
<b>2. 감경 사유:</b> 피고인이 범죄 전력이 없는 초범인 점, 연재 중단 위기라는 생계형 동기가 작용한 점, 고소 직후 해당 콘텐츠를 자발적으로 삭제하고 연재를 중단하는 등 사후 피해 확산 방지에 노력한 점(형법 제51조)을 종합 고려함.`,
      
      realJudge: `<b>🏛️ 실제 유사 법원 판결 및 판례 사례:</b><br>
• <b>대법원 2014다22... 판결 및 미술작품 캐릭터 모작 사건:</b> 타인의 독창적인 캐릭터 디자인의 핵심 요소를 그대로 본떠 일부 색상과 세부 패턴만 변형한 뒤 상업적으로 판매한 사건에서, 법원은 "피고가 직접 손으로 그리지 않거나 디자인을 일부 수정했더라도, 원작에 의거하여 실질적으로 유사한 창작물을 상업화한 것은 저작권 침해"라고 판시하며 <b>벌금 500만 원 선고 및 손해배상 책임을 인정</b>하였습니다.<br>
• <b>생성형 AI 이미지 저작권 관련 최근 판례 경향:</b> 법원은 AI 프로그램 자체는 도구에 불과하며, 타인의 저작물을 프롬프트나 학습 데이터로 고의 입력하여 실질적 유사성이 있는 결과물을 만들어 상업적 이득을 취한 인간 사용자를 저작권 침해의 주체로 엄격히 판단하고 있습니다.`,
      
      lawSummary: `<b>📌 대법원 판례 확립 원칙 (실질적 유사성 및 의거성):</b><br>AI 프롬프트를 통해 생성된 이미지라 할지라도, 기존 원작을 참조(의거성)하여 원작의 독창적 표현 양식과 유사한 결과(실질적 유사성)를 도출하고 상업 이용한 경우 저작권 법적 책임을 피할 수 없습니다.`,
      lessonQuote: `"AI가 대신 그린 그림이라 할지라도, 타인의 피땀 어린 창작물을 의도적으로 학습시키고 도용한 책임은 모두 AI를 조작한 인간에게 있습니다."`
    },
    {
      id: 'case-2',
      category: '사용자 / 인격권',
      title: '5분간의 딥페이크 장난 사건',
      summary: '대학생 A씨가 과 동기의 얼굴 사진을 AI 음란성 합성물로 가공해 SNS에 5분간 올려 피해자에게 학업 중단 등 심각한 트라우마를 남긴 사건',
      story: `수도권 대학 컴퓨터공학과 3학년에 재학 중인 **A씨(22세)**는 최근 생성형 AI 영상 편집 및 딥페이크(Deepfake) 이미지 합성 기술에 깊이 매료되었습니다. 동기들과의 단체 채팅방에서 자신의 컴퓨터 기술력을 과시하고 싶었던 A씨는, 평소 자신의 인스타그램에 일상 셀카 사진을 자주 게시하던 학과 동기 **B씨(22세, 여)**의 얼굴 사진을 다운로드했습니다.

A씨는 AI 합성 프로그램에 B씨의 얼굴과 부적절한 성적 음란성 합성 이미지를 넣고 딥페이크 영상을 제작했습니다. 그리고 *"이거 AI 퀄리티 대박이지 않냐?"*라며 친구들 사이에서 자극적인 재미를 느끼려는 생각으로 자신의 인스타그램 부계정 스토리(팔로워 150명)에 해당 영상을 업로드했습니다.

영상을 올린 직후 '혹시나 누군가 고소하면 어쩌지'라는 불안감이 덮쳐온 A씨는 **게시 5분 만에 황급히 게시물을 삭제**하고 컴퓨터 내 원본 파일과 합성 프로젝트 데이터를 모두 파기했습니다. 하지만 그 짧은 5분 사이에 한 팔로워가 해당 스토리를 캡처하여 피해자 B씨에게 전달했습니다.

자신의 얼굴이 성적 음란물과 합성되어 노출되었다는 사실을 알게 된 B씨는 극심한 수치심과 공포감, 대인기피증에 시달리게 되었습니다. B씨는 정신과 치료를 받기 시작했고, 결국 학업을 이어가지 못한 채 휴학계를 제출하게 되었습니다. 피해자 부모는 A씨를 **성폭력처벌법 위반(허위영상물 등의 반포 등)**으로 경찰에 고소했습니다.`,
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
① 반포등의 목적으로 사람의 얼굴·음성 또는 신체를 대상으로 한 편집물등을 대상자의 의사에 반하여 성적 수치심을 유발할 수 있는 형태로 편집·합성·가공한 자 및 반포한 자는 <b>7년 이하의 징역 또는 5천만 원 이하의 벌금</b>에 처한다.<br>
<small style="color:#78350f;">※ 영리 목적인 경우 3년 이상의 유기징역, 구입·소지·저장·시청한 자도 3년 이하 징역 또는 3천만 원 이하 벌금에 처해집니다.</small>`,

      stdVerdict: {
        fine: 'none',
        prison: '징역 1년',
        probation: '집행유예 2년',
        summaryText: '징역 1년 / 집행유예 2년 (벌금형 불가, 징역형 원칙)',
        recognizedAgg: ['agg1', 'agg2', 'agg3', 'agg4', 'agg5'],
        recognizedMit: ['mit1', 'mit3', 'mit4', 'mit5']
      },

      caseNo: '2026고단1004 성폭력처벌법위반(허위영상물반포등)',
      defendant: '피고인 A (22세, 대학생)',
      caseName: '딥페이크 기술 이용 허위 성적 영상물 제작 및 SNS 반포 사건',
      orderText: '피고인을 징역 1년에 처한다. 다만, 이 판결 확정일부터 2년간 위 형의 집행을 유예한다. (성폭력 치료강좌 40시간 이수 명함)',
      reasonText: `<b>1. 가중 사유:</b> 대법원 양형위원회 '허위영상물 유포 범죄 양형기준' 및 개정 법률에 따라, 딥페이크 성범죄는 게시 시간이 단 5분에 불과하더라도 디지털 매체 특성상 복제·유포 위험성이 극대화되며, 피해자가 학업 중단 등 평생 씻을 수 없는 인격적 피해를 입었으므로 초범이라도 '징역형 선고'를 원칙으로 함.
      
<b>2. 감경 사유:</b> 피고인이 게시 5분 만에 자발적으로 삭제하여 추가 확산을 막으려 노력한 점, 합성 파일 및 원본을 파기한 점, 범죄 전력이 없는 초범이며 자신의 범행을 솔직히 자백하고 반성하는 점(형법 제51조)을 참작하여 집행유예를 선고함.`,

      realJudge: `<b>🏛️ 실제 유사 법원 판결 및 처벌 사례:</b><br>
• <b>서울고등법원 / 수원지방법원 2024고합... 허위영상물 제작 사건:</b> 피고인이 학과 동기의 셀카 사진을 음란물과 딥페이크 합성하여 단체 채팅방 및 SNS에 짧은 시간 올렸다 삭제한 사건에서, 법원은 "피고인이 초범이고 게시를 금방 중단했더라도, 딥페이크 성범죄는 피해자의 인격을 살해하는 중대한 범죄"라 판단하여 <b>징역 1년에 집행유예 2년 및 성폭력 치료강좌 40시간 이수</b>를 선고했습니다.<br>
• <b>최근 법원 양형 경향:</b> 2024년 10월 법 개정으로 허위영상물 가공·반포의 법정형이 징역 7년 이하로 대폭 강화됨에 따라, 단순 호기심이나 짧은 시간 게시라 할지라도 벌금형 선고가 엄격히 제한되며 최소 징역형(집행유예 또는 실형)이 선고되는 추세입니다.`,

      lawSummary: `<b>📌 대법원 양형위원회 딥페이크 성범죄 양형기준:</b><br>디지털 성범죄는 인터넷 특성상 단 1초라도 노출되면 무한 복제될 수 있으므로 '단순 장난'이나 '5분 내 신속한 삭제'가 처벌 자체를 면하게 해주지는 않으며, 징역형 권고가 기본 원칙입니다.`,
      lessonQuote: `"실제 법원에서도 '단순 장난'이나 '5분 만에 지웠다'는 변명은 절대 통하지 않습니다. 타인의 인격을 훼손하는 딥페이크 악용은 엄중한 형사 처벌 대상입니다."`
    },
    {
      id: 'case-3',
      category: '보안 / 개인정보',
      title: '무단 크롤링으로 탄생한 AI 안면 인식 시스템',
      summary: 'AI 스타트업 대표 A씨가 일반인 50만 명의 얼굴 사진과 게시글을 동의 없이 무단 수집·학습시켜 AI 솔루션을 판매해 2억 원의 매출을 올린 사건',
      story: `IT 벤처 기업을 운영하는 AI 스타트업 대표 **A씨(36세)**는 공공장소 CCTV 및 매장 카메라를 통해 방문객의 성향과 연령대를 실시간 추정하는 상용 안면 인식 AI 솔루션을 개발 중이었습니다. 정확도를 높이기 위해서는 방대한 한국인의 얼글 인물 사진 및 민감 데이터가 필수적이었습니다.

A씨는 정당한 비용을 지불하고 수집 동의를 받는 대신, 인터넷 웹 크롤링 자동화 프로그램을 직접 개발했습니다. 그리고 일반인 수십만 명이 전체 공개로 올린 인스타그램, 네이버 블로그 등의 **얼굴 사진 50만 건**과 개인 작성 게시글 텍스트 데이터를 동의 없이 무단 수집했습니다. A씨는 이 50만 건의 개인정보를 AI 신경망에 학습시켰고, 개발된 안면 인식 솔루션을 대형 쇼핑몰 및 보안 업체에 판매하여 **약 2억 원의 직접적인 매출**을 올렸습니다.

그러던 어느 날, 대학생 **B씨(24세)**는 새로 개장한 대형 쇼핑몰을 방문했다가 입구에 설치된 AI 맞춤형 전광판을 보고 충격을 금치 못했습니다. 전광판 카메라에 B씨의 얼굴이 촬영되자마자 화면에 **B씨의 실제 얼굴 윤곽과 함께 '과거 SNS 게시글 기반 성향 분석 결과'**가 대형 화면에 실시간으로 표시된 것이었습니다.

B씨가 A씨의 회사에 당장 자신의 데이터 삭제 및 학습 모델 파기를 요구하자, A씨는 *"이미 인공지능 신경망에 가중치 형태로 통합되었기 때문에 특정 개인의 데이터만 골라 삭제하는 것은 기술적으로 불가능하며, 누구나 볼 수 있는 인터넷 공간의 공개 자료를 활용했을 뿐"*이라며 거부했습니다. B씨는 자신의 동의 없이 개인정보가 상업적으로 이용되고 공공장소에서 평생 추적당할 수 있다는 공포감에 A씨를 **개인정보 보호법 위반** 혐의로 고소했습니다.`,
      suspectArg: '"인터넷 전체 공개 설정된 사진을 이용했을 뿐이며, 원본 이미지 자체를 저장·유출한 것이 아니라 AI 모델의 능력을 키우는 단순 학습 재료로 사용했으므로 법적 문제가 없습니다."',
      victimArg: '"공개 게시물이라 하더라도 내 동의 없이 상업적 AI 제품의 학습 데이터로 추출되는 것까지 동의한 적은 없습니다. 잊혀질 권리와 사생활, 초상권이 완전히 침해당했습니다."',

      aggregatingFactors: [
        { id: 'agg1', text: '대규모 무단 수집 (정보주체 동의 없이 50만 건의 개인정보 무단 크롤링)' },
        { id: 'agg2', text: '막대한 상업적 이익 (AI 솔루션 상용화를 통해 약 2억 원의 직접 매출 창출)' },
        { id: 'agg3', text: '피해자의 삭제 요구 거부 (정보 주체의 권리 행사를 기술적 핑계로 거절)' },
        { id: 'agg4', text: '지속적 권리 침해 및 원상복구 불가 (AI 신경망 가중치 통합으로 영구 삭제 불가능)' },
        { id: 'agg5', text: '사생활 침해 및 불안감 유발 (공공장소 전광판 성향 노출 등 민감 사생활 침해)' }
      ],
      mitigatingFactors: [
        { id: 'mit1', text: '공개된 정보 활용 (해킹이나 비공개 서버가 아닌 전체 공개 게시물 수집)' },
        { id: 'mit2', text: '원본 이미지 미유출 (원본 사진 자체를 제3자에게 파일 형태로 유출하지 않음)' },
        { id: 'mit3', text: '동종 전과 없음 (개인정보 보호법 위반 관련 범죄 전력이 없는 초범)' },
        { id: 'mit4', text: '업계 관행 및 기준 모호성 (범행 당시 AI 학습 데이터 가이드라인 미비)' },
        { id: 'mit5', text: '수사 협조 및 재발 방지 (기술 구조 공개 및 향후 필터링 시스템 도입 약속)' }
      ],

      lawGuide: `<b>📌 개인정보 보호법 제71조 (벌칙) 및 제75조 (과징금)</b><br>
정보주체의 동의를 받지 아니하고 개인정보를 수집·이용하거나 제3자에게 제공한 자는 <b>5년 이하의 징역 또는 5천만 원 이하의 벌금</b>에 처한다.<br>
<small style="color:#78350f;">※ 개인정보보호위원회는 전체 매출액의 3% 이하에 해당하는 과징금 부과 및 수집 데이터 전량 파기 명령을 조치할 수 있습니다.</small>`,

      stdVerdict: {
        fine: '1,500만 원 이하',
        prison: '징역 1년',
        probation: '집행유예 2년',
        summaryText: '벌금 1,500만 원 (또는 징역 1년 / 집행유예 2년 + 과징금 및 데이터 파기 명령)',
        recognizedAgg: ['agg1', 'agg2', 'agg3', 'agg4', 'agg5'],
        recognizedMit: ['mit1', 'mit3', 'mit4', 'mit5']
      },

      caseNo: '2026고단1007 개인정보보호법위반',
      defendant: '피고인 A (36세, AI 스타트업 대표)',
      caseName: '무단 크롤링 얼굴 데이터 활용 AI 상용화 사건',
      orderText: '피고인을 징역 1년에 처한다. 다만, 이 판결 확정일부터 2년간 위 형의 집행을 유예한다. (또한 수집된 개인정보 데이터 파기 시정명령 조치)',
      reasonText: `<b>1. 가중 사유:</b> 공개된 개인정보라 하더라도 정보 주체의 동의 없이 AI 상업적 학습 모델에 수집·활용하는 것은 법률 위반임. 50만 건이라는 대규모 정보 무단 수집과 2억 원의 상업적 매출 발생, 피해자의 삭제 요구 거부는 중대한 엄벌 사유에 해당함.
      
<b>2. 감경 사유:</b> 수사 과정에서 AI 시스템 기술 구조를 공개하고 향후 무단 학습 방지 필터링 도입을 약속한 점, 범죄 전력이 없는 초범인 점, AI 학습 데이터 관련 제도적 가이드라인의 초기 모호성을 감안하여 집행유예를 선고함.`,

      realJudge: `<b>🏛️ 실제 개인정보보호위원회 의결 및 판례 사례:</b><br>
• <b>개인정보보호위원회 2022년 공식 의결 (클리어뷰 AI 사건):</b> 인터넷상 일반인 사진 30억 건을 웹 크롤링으로 수집해 안면 인식 AI 모델을 학습·상용화한 클리어뷰 AI(Clearview AI)에 대해, 개인정보위는 "인터넷 공개 정보라도 동의 없이 AI 상업 학습에 무단 수집·이용하는 것은 개인정보보호법 위반"이라 결정하고 <b>과징금 부과 및 국내 수집 개인정보 파기 명령</b>을 내렸습니다.<br>
• <b>네덜란드 DPA 및 유럽 사법재판소 판결:</b> 2024년 네덜란드 개인정보 감독기구는 동의 없는 안면 인식 데이터베이스 구축 조치에 대해 약 452억 원(3,050만 유로)의 징벌적 과징금을 부과하는 등 무단 크롤링 AI 학습에 대해 세계적인 엄벌 추세를 보이고 있습니다.`,

      lawSummary: `<b>📌 개인정보보호위원회 공식 의결 원칙:</b><br>인터넷에 전체 공개된 개인정보라 하더라도 정보 주체의 명시적 동의 없이 상업 목적의 AI 학습 데이터로 무단 수집·이용하는 것은 개인정보보호법상 불법이며 과징금 및 데이터 파기 대상입니다.`,
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
