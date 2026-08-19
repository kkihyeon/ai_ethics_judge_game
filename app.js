// ⚖️ 디지털 윤리 딜레마 법정: 애플리케이션 로직 (app.js)

document.addEventListener('DOMContentLoaded', () => {
  // -------------------------------------------------------------
  // 1. 사건 사례 데이터 정의 (실제 판결문 기반 5개 사건 데이터)
  // -------------------------------------------------------------
  const caseData = [
    {
      id: 'case-1',
      category: '보안 / 개인정보유출',
      title: '특정인 자택 주소 무단 보도와 기자의 개인정보 누설 사건',
      summary: '인터넷 신문 기자가 취재 중 알게 된 특정 인물의 상세 거주지 주소와 실명, 우편물 정보 등을 인터넷 기사에 그대로 노출·게재하여 벌금형을 선고받은 사건',
      story: `인터넷 언론사 소속 기자인 <b>피고인 A씨</b>는 기업 인수합병(M&A) 및 유료방송 서비스 이용과 관련된 기사를 기획·취재하고 있었습니다. A씨는 과거 어떠한 형사 처벌 전력도 없이 살아가는 사람이었습니다.

A씨는 기사의 화제성을 높이고 대중의 이목을 집중시키기 위해, 취재 현장에서 확인한 대상자 <b>B 회장</b>의 상세한 사생활 정보를 기사에 담기로 마음먹었습니다. A씨는 인터넷 뉴스 사이트에 <b>'이곳에 공짜로 방송을 보는 사람이 살고 있다'</b>는 취지의 자극적인 제목으로 기사를 작성했습니다.

A씨는 기사 본문에 피해자 B씨의 거주지인 <b>'서울 ㅇㅇ구 ㅇㅇ동 ㅇㅇ번지'</b>라는 특정 상세 지번 주소와 지위, 성명을 적나라하게 기재했습니다. 나아가 자택 우편함에 꽂혀 있던 <b>'미국 ㅇㅇ금융회사 발송 우편물 수신자 성명'</b> 등 개인 식별 정보까지 여과 없이 작성하여 인터넷 뉴스 사이트에 업로드함으로써 불특정 다수의 네티즌이 제한 없이 열람할 수 있도록 누설했습니다.

해당 기사가 온라인에 공개되자 피해자 B씨는 극심한 사생활 침해와 신변 위협의 공포를 느끼고 A씨를 형사 고소했습니다. A씨는 사태의 심각성을 인지하고 인터넷 사이트에서 <b>해당 개인정보를 즉시 삭제 조치</b>했습니다. 그러나 재판 과정에서 피고인 A씨는 "신문기자는 개인정보 보호법상 개인정보처리자가 아니며, 언론의 정당한 취재·보도 활동에 해당하므로 죄가 되지 않는다"고 주장하며 혐의를 부인했습니다.`,
      suspectArg: '"기자는 대규모 데이터베이스를 운용하는 개인정보처리자가 아니며, 공익 취재와 보도를 위해 수집한 정보를 기사화한 것이므로 개인정보 보호법 적용 예외 대상입니다. 또한 논란 직후 기사에서 주소 정보를 즉시 삭제했습니다."',
      victimArg: '"공익 보도라는 핑계로 당사자 동의 없이 집 주소 번지수와 우편함 속 개인정보까지 인터넷에 적나라하게 공개했습니다. 저와 가족의 안전 및 사생활의 평온이 심각하게 파괴되었으므로 엄벌해 주십시오."',
      aggregatingFactors: [
        { id: 'agg1', text: '특정 거주지 상세 지번 주소 노출 (특정 번지수를 여과 없이 기재)' },
        { id: 'agg2', text: '온라인 파급력 및 불특정 다수 노출 (인터넷 신문 사이트를 통해 무제한 열람 가능케 함)' },
        { id: 'agg3', text: '업무상 취재 권한의 남용 (기자라는 직업적 지위를 통해 알게 된 개인정보를 무단 누설)' },
        { id: 'agg4', text: '사적 우편물 무단 확인 및 공표 (자택 우편함의 해외 금융사 발송 우편물 내용까지 기사화)' },
        { id: 'agg5', text: '정보주체의 동의 부재 (피해자의 동의 없이 민감한 사생활 정보를 대중에 공개)' }
      ],
      mitigatingFactors: [
        { id: 'mit1', text: '사후 즉각적인 자발적 삭제 (기사 게재 후 개인정보 내용을 신속히 자진 삭제함)' },
        { id: 'mit2', text: '동종 및 이종 범죄 전력 없는 초범 (이전에 형사 처벌을 받은 적이 없음)' },
        { id: 'mit3', text: '금전 편취 목적 부재 (개인정보를 판매하거나 협박에 이용하려 한 영리 목적 범행이 아님)' },
        { id: 'mit4', text: '물리적 2차 피해 미발생 (주소 노출로 인한 직접적인 신체 폭력이나 주거침입 피해 부재)' },
        { id: 'mit5', text: '객관적 사실관계 인정 (기사 작성 및 개인정보 기재 행위 자체의 사실관계를 다투지 않음)' }
      ],
      lawGuide: `<b>📌 개인정보 보호법 제59조 제2호 및 제71조 제5호 (벌칙)</b><br>
개인정보를 처리하거나 처리하였던 자는 업무상 알게 된 개인정보를 누설하거나 권한 없이 다른 사람이 이용하도록 제공해서는 아니 되며, 이를 위반하여 누설하거나 제공한 자는 <b>5년 이하의 징역 또는 5천만 원 이하의 벌금</b>에 처한다.<br>
<small style="color:#78350f;">※ 언론 기자가 취재 과정에서 습득한 개인정보라도 불필요하게 특정인의 자택 주소·실명을 일반 공중에 공개하는 것은 면책되지 않으며, 즉시 삭제 및 초범 여부를 참작하여 형이 선고됩니다.</small>`,
      stdVerdict: {
        fine: '300만 원 이하',
        prison: 'none',
        probation: 'none',
        summaryText: '벌금 100만 원 (300만 원 이하 벌금형 선고)',
        recognizedAgg: ['agg1', 'agg2', 'agg3', 'agg5'],
        recognizedMit: ['mit1', 'mit2']
      },
      caseNo: '서울서부지방법원 2015고정1144 개인정보보호법위반',
      defendant: '피고인 A (인터넷 신문 기자)',
      caseName: '인터넷 언론사 기자의 취재 개인정보(상세 주소·성명) 무단 기사 게재 및 누설 사건',
      orderText: '피고인을 벌금 1,000,000원에 처한다. 피고인이 위 벌금을 납입하지 아니하는 경우 100,000원을 1일로 환산한 기간 피고인을 노역장에 유치한다. 위 벌금에 상당한 금액의 가납을 명한다.',
      reasonText: `<b>1. 가중 사유:</b> 피고인은 언론사 기자로서 취재 활동 중 알게 된 피해자의 성명, 사회적 지위는 물론 구체적인 자택 번지수 주소와 우편함 속 개인정보를 인터넷 뉴스 사이트에 게재하여 일반 대중에게 무단 누설함으로써 피해자의 사생활과 개인정보를 침해함.

<b>2. 감경 사유:</b> 피고인이 기사 게재 후 해당 개인정보를 자발적으로 바로 삭제한 점, 이전에 형사 처벌을 받은 전력이 없는 초범인 점 등 제반 양형 조건을 종합적으로 참작하여 벌금 100만 원을 선고함.`,
      realJudge: `<b>🏛️ 실제 판결·처분 수치 및 법적 결과:</b><br><br>
<b>1. 인터넷 신문 기자의 취재 개인정보 누설 사건 (서울서부지방법원 2015고정1144):</b><br>
• <b>형사 처벌:</b> 피고인에게 <b>벌금 100만 원(1,000,000원) 선고</b><br>
• <b>노역장 유치:</b> 벌금 미납 시 <b>1일 10만 원 환산 노역장 유치</b> 명령<br>
• <b>핵심 법리:</b> 기자는 개인정보파일을 운용하는 '개인정보처리자'가 아니더라도 법 제59조의 '개인정보를 처리하는 자'에 해당하여, 취재상 알게 된 자택 주소를 기사로 일반에 알리면 형사 처벌 대상임을 명확히 판시함.<br><br>
<b>2. 언론·방송 매체의 개인정보 무단 보도 민사 손해배상 (대법원 판례 기준):</b><br>
• 공익적 취재라 하더라도 당사자의 동의 없이 실명, 자택 상세 위치, 차량 번호 등을 노출한 언론사에 대해 <b>1인당 500만 원 ~ 2,000만 원 상당의 위자료 배상 책임</b> 인정<br>
• 언론의 자유와 보도의 공익성이 개인의 핵심적인 사생활의 비밀과 개인정보 자기결정권보다 우선할 수 없음을 확립함.`,
      lawSummary: `<b>📌 개인정보 보호법상 '개인정보 처리자' 및 언론 보도 범위 확립 원칙:</b><br>
개인정보 보호법 제59조는 대규모 데이터베이스를 구축·운용하는 기업뿐만 아니라, 업무상 타인의 개인정보를 취급하는 기자 등 모든 실무자에게 비밀유지 및 누설 금지 의무를 부과합니다. 언론의 취재·보도 목적이라 할지라도 불필요하게 특정인의 자택 주소나 실명 등 사생활 정보를 인터넷에 여과 없이 노출하는 행위는 정당한 보도 범위를 벗어난 '형사처벌 대상 누설 행위'에 해당합니다.`,
      lessonQuote: `"공익 목적의 취재나 공유라 할지라도, 타인의 주소와 사생활 등 민감한 개인정보를 온라인에 무단 공개하는 것은 엄연한 범죄입니다."`
    },
    {
      id: 'case-2',
      category: '보안 / 개인정보오남용',
      title: '퇴사 직원의 택시조합원 명부 무단 반출 및 불법 유출 사건',
      summary: '택시운송사업조합의 전직 총무부장이 조합원들의 개인정보가 담긴 엑셀 파일을 퇴사 시 무단 반출하여 지인들의 선거 운동 및 영업 홍보용으로 불법 유포한 사건',
      story: `택시운송사업조합에서 약 n년간 총무부장으로 근무하던 <b>피고인 A씨</b>는 조합원들의 성명, 연락처, 주소, 차량번호 등 민감한 개인정보를 총괄 관리해 온 책임자였습니다. A씨는 퇴사를 앞두고, 업무상 보관 중이던 <b>수천 명 규모의 조합원 명부 엑셀 파일</b>을 조합 서버에서 자신의 <b>개인 이메일 편지함으로 무단 반출</b>하여 사적으로 보관하기 시작했습니다.

A씨는 퇴사 이후 친분이 있던 지인들로부터 선거 지원 및 영업 판촉을 위한 명부 제공 청탁을 받게 되자, 개인정보 보호 의무를 저버리고 이를 손쉽게 넘겨주기로 마음먹었습니다.

A씨는 이사장 및 이사 선거에 출마한 후보자들, 신차 영업팀장, 가스 충전소 대표 등 총 6명에게 <b>이메일을 통해 조합원 명부 엑셀 파일을 무단 전송·제공</b>했습니다. 명부를 건네받은 수수자 중 한 명은 이를 또 다른 선거 후보자 측에 <b>제3자 재유포</b>하는 등 개인정보의 2차 확산까지 발생시켰습니다.

이로 인해 수많은 택시기사 조합원들은 본인의 동의 없이 원치 않는 선거 홍보 문자메시지와 상업적 스팸 광고에 무방비로 노출되는 극심한 사생활 침해 피해를 입었습니다. 결국 조합원들의 신고와 고소로 경찰 수사가 개시되었고, 명부를 유출한 A씨와 이를 부정한 목적으로 건네받은 7명이 모두 재판에 넘겨졌습니다.`,
      suspectArg: '"명부를 외부에 판매하여 금전적인 이득을 챙기려 한 것이 아니며, 평소 알고 지내던 지인들의 선거 운동과 영업을 돕기 위해 단순한 호의로 전달했을 뿐입니다. 범행 사실을 모두 인정하고 반성하고 있습니다."',
      victimArg: '"조합을 믿고 맡긴 성명, 집 주소, 휴대전화번호, 차량번호가 당사자 동의도 없이 퇴사자 개인 메일로 유출되고 선거 운동과 상업 광고에 무차별 악용되었습니다. 엄벌을 내려주십시오."',
      aggregatingFactors: [
        { id: 'agg1', text: '대규모 개인정보 무단 반출 (조합원들의 성명·연령·차량번호·휴대전화번호·주소가 포함된 엑셀 파일 반출)' },
        { id: 'agg2', text: '다수 및 반복적 유출 (퇴사 후 총 6회에 걸쳐 여러 사람에게 지속적으로 명부 전달)' },
        { id: 'agg3', text: '업무상 신뢰 관계 위반 (총무부장이라는 지위를 악용하여 관리하던 내부 고객 데이터 유출)' },
        { id: 'agg4', text: '선거 및 영업 목적 악용 (자동차 영업 판촉, 충전소 광고, 조합 선거 운동 등에 불법 활용)' },
        { id: 'agg5', text: '2차 재유포 발생 (명부를 제공받은 피고인이 또 다른 제3자에게 파일을 재전송함)' }
      ],
      mitigatingFactors: [
        { id: 'mit1', text: '금전적 대가 수수 부재 (명부를 유료로 매매하여 직접적인 금전 수익을 취한 것은 아님)' },
        { id: 'mit2', text: '범행 사실 자백 및 시인 (수사 및 재판 과정에서 파일 전송 및 수수 사실을 인정함)' },
        { id: 'mit3', text: '외부 해킹 수단 미사용 (외부 침입이나 해킹이 아닌 업무상 지득했던 파일의 관리 소홀 및 반출)' },
        { id: 'mit4', text: '보이스피싱 등 악성 범죄 미연계 (유출된 정보가 금융 사기 등 강력 범죄 조직에 넘어가지 않음)' },
        { id: 'mit5', text: '수사 협조 및 반성 태도 (압수수색 및 경찰 조사에 응하며 사실관계를 밝힘)' }
      ],
      lawGuide: `<b>📌 개인정보 보호법 제59조 제2호 및 제71조 제5호 (벌칙)</b><br>
개인정보를 처리하거나 처리하였던 자는 업무상 알게 된 개인정보를 누설하거나 권한 없이 다른 사람이 이용하도록 제공해서는 아니 되며, 그 사정을 알면서도 영리 또는 부정한 목적으로 개인정보를 제공받은 자 역시 <b>5년 이하의 징역 또는 5천만 원 이하의 벌금</b>에 처한다.<br>
<small style="color:#78350f;">※ 유출된 개인정보의 규모와 횟수에 따라 주범에게는 징역형(집행유예)이, 이를 건네받은 수수자들에게는 각각 벌금형이 선고됩니다.</small>`,
      stdVerdict: {
        fine: 'none',
        prison: '징역 1년',
        probation: '집행유예 2년',
        summaryText: '징역 10개월 / 집행유예 2년 (주범 기준 징역형 집행유예 선고, 수수자 7인은 각 벌금 300만 원)',
        recognizedAgg: ['agg1', 'agg2', 'agg3', 'agg4'],
        recognizedMit: ['mit1', 'mit2']
      },
      caseNo: '광주지방법원 2014고단2754 개인정보보호법위반',
      defendant: '피고인 1 (전직 택시운송사업조합 총무부장) 외 7인',
      caseName: '택시조합원 개인정보 엑셀 명부 무단 반출 및 선거·영업 목적 불법 제공 사건',
      orderText: '피고인 1을 징역 10개월에 처한다. 다만, 이 판결 확정일로부터 2년간 위 형의 집행을 유예한다. 피고인 2, 피고인 3, 피고인 4, 피고인 5, 피고인 6, 피고인 7, 피고인 8을 각 벌금 3,000,000원에 처한다. 위 피고인들이 각 위 벌금을 납입하지 아니하는 경우 10만 원을 1일로 환산한 기간 위 피고인들을 노역장에 유치한다.',
      reasonText: `<b>1. 가중 사유:</b> 피고인 1은 조합원들의 개인정보를 보호해야 할 총무부장의 지위에 있었음에도 퇴사 시 대량의 명부를 개인 이메일로 무단 반출하였고, 총 6회에 걸쳐 선거 운동 및 상업적 영업 목적으로 유출하여 침해된 정보의 양과 횟수가 상당하여 죄책이 무거움.

<b>2. 감경 사유:</b> 피고인들이 범행 사실을 자백하며 반성하고 있는 점, 영리적 대가를 목적으로 명부를 유료 판매한 것은 아닌 점, 유출된 정보의 구체적 활용 경위 등을 참작하여 피고인 1에게는 징역형의 집행유예를, 나머지 피고인들에게는 각 벌금형을 선고함.`,
      realJudge: `<b>🏛️ 실제 판결·처분 수치 및 법적 결과:</b><br><br>
<b>1. 택시조합원 개인정보 유출 사건 (광주지방법원 2014고단2754):</b><br>
• <b>유출자(피고인 1):</b> <b>징역 10개월 (집행유예 2년)</b> 선고<br>
• <b>수수자 7인(선거 출마자 및 영업직원 등):</b> <b>각각 벌금 300만 원 (총 2,100만 원)</b> 선고<br>
• <b>법적 쟁점:</b> 직접 유출자뿐만 아니라 '권한 없이 유출된 정보임을 알면서 부정한 목적(선거·영업)으로 제공받은 자' 및 '이를 다시 전달받은 2차 수수자'까지 모두 형사 처벌 대상임을 명확히 판시함.<br><br>
<b>2. 퇴직자의 내부 고객 데이터 무단 반출 관련 손해배상 (민사 판례):</b><br>
• 회사의 고객 명부를 무단 반출해 이직·창업에 사용한 퇴직자에 대해 <b>수천만 원 상당의 영업비밀 침해 및 부정경쟁 손해배상 책임</b> 인정<br>
• 정보주체(고객) 집단소송 시 1인당 <b>10만 원 ~ 30만 원 상당의 정신적 위자료 지급</b> 판결.`,
      lawSummary: `<b>📌 내부 데이터 무단 반출 및 불법 취득에 대한 형사 책임 원칙:</b><br>
업무상 다루던 개인정보 파일은 퇴사 즉시 파기하거나 반납해야 하며, 이를 개인 이메일이나 USB에 담아 반출하는 순간 범죄가 성립합니다. 또한 금전 거래가 없더라도 '선거 운동'이나 '영업 판촉' 등 부정한 목적으로 유출 데이터를 건네받거나 이용한 사람 역시 동일하게 형사 처벌(벌금형 및 징역형)을 받게 됩니다.`,
      lessonQuote: `"업무상 다루던 데이터는 개인의 소유물이 아닙니다. 퇴사 시 데이터를 무단 반출하거나 지인에게 넘겨주는 행위는 엄중한 형사 처벌을 부릅니다."`
    },
    {
      id: 'case-3',
      category: '보안 / 개인정보불법취득유통',
      title: '270만 명 통신 가입자 개인정보 암거래 및 불법 텔레마케팅 사건',
      summary: '텔레마케팅 업체 대표들이 메신저와 이동식 저장장치(USB)를 통해 250만 명이 넘는 인터넷·IPTV 가입자 개인정보를 불법 매입하여 마케팅에 악용한 사건',
      story: `인터넷 가입 유치 텔레마케팅(TM) 업체를 운영하던 <b>피고인 A씨</b>는 통신사 가입 만기가 임박한 고객들을 타깃으로 신규 가입 영업을 벌여 거액의 수수료를 챙기려는 계획을 세웠습니다. A씨는 과거 동종 범죄로 무겁게 처벌받은 적은 없는 상태였습니다.

A씨는 정상적인 동의를 받아 고객 데이터를 확보하는 대신, 인터넷 채팅 메신저 등을 통해 음지에서 활동하는 <b>전문 개인정보 브로커(판매상)</b>에게 접근했습니다. A씨는 부정한 방법으로 빼돌려진 주요 통신 3사 가입자 <b>약 250만 명의 개인정보</b>(성명, 자택 주소, 전화번호, 약정 만료일자 등)를 영리 목적으로 대량 사들였습니다.

이와 함께 중간 유통 총판 업자 및 또 다른 텔레마케팅 업체 대표들 역시 <b>USB 이동식 저장장치를 통해 100만 건, 15만 건의 개인정보 데이터를 불법 매입</b>하여 가입 권유 전화에 무차별적으로 활용하거나 서로 재판매했습니다.

이로 인해 수백만 명의 일반 통신 가입자들은 자신의 의사와 무관하게 개인정보가 암시장에서 거래되고 원치 않는 무차별 스팸 전화에 시달렸으며, <b>명의도용이나 보이스피싱 등 2차 금융 범죄에 노출될 심각한 위험</b>에 처했습니다.

수사기관에 적발된 A씨 등은 범행 관련 텔레마케팅 사무실을 폐업하고 범행을 자백하며 선처를 호소했으나, <b>총 약400만여 건의 대규모 개인정보 불법 수수</b> 혐의로 전원 재판에 넘겨졌습니다.`,
      suspectArg: '"보이스피싱 등 악성 금융 사기에 쓰인 것이 아니며, 단순 텔레마케팅 영업을 위해 주민번호나 계좌번호가 없는 기본 연락처 위주로 매입했습니다. 사건 이후 관련 사업을 완전히 접고 깊이 반성하고 있습니다."',
      victimArg: '"통신사에 가입했을 뿐인데 제 이름과 집 주소, 전화번호가 어둠의 경로에서 수백만 건씩 거래되었습니다. 언제 범죄에 악용될지 몰라 극심한 불안을 겪고 있으므로 엄벌해 주십시오."',
      aggregatingFactors: [
        { id: 'agg1', text: '천문학적인 유통 규모 (주범 기준 약 250만 명, 총합 약400만여 건의 대규모 개인정보 불법 취득)' },
        { id: 'agg2', text: '영리 목적의 암거래 (통신사 유치 수수료 및 데이터 재판매 이익을 노린 계획적 범행)' },
        { id: 'agg3', text: '조직적 유통망 형성 (인터넷 메신저 및 암거래 브로커, USB 등을 이용한 체계적 유통)' },
        { id: 'agg4', text: '2차 범죄 위험 초래 (대규모 유출로 인한 명의도용, 보이스피싱 등 프라이버시 침해 위험)' },
        { id: 'agg5', text: '정보주체의 동의 전무 (당사자 동의 없이 무단 수집·제공된 불법 데이터임을 알고도 매입)' }
      ],
      mitigatingFactors: [
        { id: 'mit1', text: '취득 정보 구성의 단순성 (금융정보나 민감정보가 아닌 성명·주소·연락처 등 기본 정보 위주)' },
        { id: 'mit2', text: '실질적 2차 피해 미확인 (보이스피싱 등 강력 사기 범죄로의 직접 연계 피해 미발생)' },
        { id: 'mit3', text: '자백 및 영업 폐업 (공소사실을 모두 시인하고 텔레마케팅 관련 영업을 완전히 중단함)' },
        { id: 'mit4', text: '동종 무거운 처벌 전력 부재 (벌금형을 초과하는 중형이나 동종 전력이 없음)' },
        { id: 'mit5', text: '보이스피싱 등 범죄 목적이 아닌 단순 홍보 목적 (범죄 목적이 아닌 마케팅 활동을 위함)' }
      ],
      lawGuide: `<b>📌 개인정보 보호법 제59조 제1호 및 제72조 제2호 (벌칙)</b><br>
거짓이나 그 밖의 부정한 수단이나 방법으로 개인정보를 취득하거나 그 사정을 알면서도 영리 또는 부정한 목적으로 개인정보를 제공받은 자는 <b>3년 이하의 징역 또는 3천만 원 이하의 벌금</b>에 처한다.<br>
<small style="color:#78350f;">※ 불법 유출된 데이터임을 알고도 매입·유통한 경우 취득 건수와 영리 목적에 따라 징역형(집행유예) 및 사회봉사명령이 병과됩니다.</small>`,
      stdVerdict: {
        fine: 'none',
        prison: '징역 2년',
        probation: '집행유예 3년',
        summaryText: '징역 1년 6개월 / 집행유예 3년 (주범 기준 징역형 집행유예 및 사회봉사 200시간 선고)',
        recognizedAgg: ['agg1', 'agg2', 'agg4'],
        recognizedMit: ['mit1', 'mit2', 'mit3', 'mit4']
      },
      caseNo: '서울중앙지방법원 2017고단6249 개인정보보호법위반',
      defendant: '피고인 1 (텔레마케팅 업체 대표) 외 2인',
      caseName: '인터넷 서비스 가입자 개인정보 대량 부정 취득 및 텔레마케팅 악용 사건',
      orderText: '피고인 1을 징역 1년 6월에, 피고인 2를 징역 1년에, 피고인 3을 징역 10월에 각 처한다. 다만 피고인 1, 피고인 2에 대하여 이 판결 확정일로부터 3년간, 피고인 3에 대하여 이 판결 확정일로부터 2년간 위 각 형의 집행을 유예한다. 피고인 1에 대하여 200시간, 피고인 2에 대하여 160시간, 피고인 3에 대하여 120시간의 사회봉사를 명하고, 압수된 저장매체를 각 몰수한다.',
      reasonText: `<b>1. 가중 사유:</b> 피고인들이 텔레마케팅 및 매매 차익 등 영리 목적으로 각 250만 명, 100만 명, 15만 명이라는 대규모 개인정보를 부정한 방법으로 취득하였고, 개인정보 침해는 대상자의 프라이버시 침해뿐만 아니라 전화사기 등 2차 범죄로 이어질 위험성이 높아 엄벌이 필요함.

<b>2. 감경 사유:</b> 취득한 정보의 구성이 비교적 단순한 점, 직접적인 2차 피해가 발생하지 않은 점, 피고인들이 범행을 자백하고 관련 영업을 중단한 점, 벌금형을 넘는 처벌 전력이 없는 점 등을 종합적으로 참작하여 사회봉사를 조건으로 집행을 유예함.`,
      realJudge: `<b>🏛️ 실제 판결·처분 수치 및 법적 결과:</b><br><br>
<b>1. 270만 건 통신 DB 불법 취득 사건 (서울중앙지방법원 2017고단6249):</b><br>
• <b>주범(피고인 1, 270만 건 매입):</b> <b>징역 1년 6개월 (집행유예 3년) + 사회봉사 200시간</b> 선고<br>
• <b>중간 유통책(피고인 2, 100만 건):</b> <b>징역 1년 (집행유예 3년) + 사회봉사 160시간</b> 선고<br>
• <b>단순 수수자(피고인 3, 15만 건):</b> <b>징역 10개월 (집행유예 2년) + 사회봉사 120시간</b> 선고<br>
• <b>저장매체 몰수:</b> 범행에 사용된 <b>USB 메모리 및 저장매체 전량 몰수</b> 판결<br><br>
<b>2. 대규모 개인정보 불법 유통 브로커 관련 처벌 (대법원 양형 기준):</b><br>
• 수백만 건 이상의 고객 DB를 상습 매매하는 전문 판매상에 대해 <b>징역 2년 ~ 3년 실형 선고</b><br>
• 불법 거래로 취득한 범죄 수익금 전액에 대한 <b>추징 및 범죄수익환수 처분</b> 집행.`,
      lawSummary: `<b>📌 부정한 수단에 의한 개인정보 취득 및 암거래 처벌 원칙:</b><br>
개인정보 보호법은 직접 해킹이나 유출을 저지른 사람뿐만 아니라, 어둠의 경로(메신저, 암거래 시장)에서 불법 유출된 데이터임을 알면서도 '영리 목적(마케팅·영업·재판매)'으로 사들이거나 제공받은 사람 역시 동일하게 징역형으로 엄벌합니다. '단순 홍보용 연락처'라는 핑계는 면책 사유가 되지 않습니다.`,
      lessonQuote: `"출처가 불분명한 대규모 개인정보 데이터를 구매하거나 마케팅에 이용하는 것은 그 자체로 중대한 디지털 범죄입니다."`
    },
    {
      id: 'case-4',
      category: '딥페이크 / 허위영상물편집및반포',
      title: '지인 얼굴 딥페이크 성착취물 제작 의뢰 및 모욕 사건',
      summary: 'SNS에서 지인들의 사진을 무단 수집해 성착취 합성물 제작을 의뢰하고, 피해자에게 성적 모욕 메시지를 전송한 피고인에게 징역형의 집행유예가 선고된 사건',
      story: `형사 처벌 전력이 없는 <b>피고인 A씨</b>는 왜곡된 성적 호기심에 사로잡혀 SNS와 메신저를 통해 지인들의 얼굴을 합성한 음란물을 제작하기로 마음먹었습니다.

A씨는 SNS(인스타그램)에서 중학교 후배인 <b>B씨(16세)</b>와 중학교 동창인 <b>C씨(18세)</b>의 일상 사진을 몰래 수집했습니다. 이어 트위터(X)에서 알게 된 성명불상의 합성업자에게 사진을 보내며 여성의 나체 및 성관계 사진과의 합성을 의뢰했습니다. A씨는 이를 통해 총 <b>28회(미성년자 성착취물 5회, 허위영상물 23회)</b>에 걸쳐 불법 딥페이크 합성물을 제작·전송받았으며, <b>30회에 걸쳐 아동·청소년 성착취물을 다운로드받아 소지</b>했습니다. 나아가 SNS 지인 능욕방에 들어가기 위해 지인의 신상정보를 제공하기도 했습니다.

또한 A씨는 또 다른 지인 <b>D씨(22세)</b>의 합성 사진과 함께 입에 담기 힘든 극단적인 성적 비하와 폭언이 담긴 <b>인스타그램 DM(다이렉트 메시지) '능욕글'을 직접 전송</b>했습니다. 피해자들은 얼굴이 노출된 성착취 합성물이 온라인에 영구 유포될 수 있다는 극심한 공포와 정신적 고통을 겪었습니다.

수사가 시작되어 스마트폰을 압수당한 A씨는 법정에서 모든 범행을 자백했습니다. A씨는 피해자들에게 진심으로 사죄하며 합의금을 지급하여 <b>피해자 전원과 원만히 합의(처벌불원서 제출)</b>하였고, 정신건강의학과에서 <b>충동조절장애 전문 치료</b>를 받으며 재범하지 않겠다고 다짐했습니다.`,
      suspectArg: '"순간적인 충동과 비뚤어진 호기심으로 씻을 수 없는 죄를 지었습니다. 범행을 모두 인정하며 피해자분들께 사죄하고 원만히 합의했습니다. 현재 정신과 치료를 성실히 받으며 깊이 반성하고 있습니다."',
      victimArg: '"믿었던 지인이 제 얼굴로 입에 담지 못할 음란 합성물을 만들고 끔찍한 능욕 메시지까지 보냈습니다. 내 사진이 어디에 유포되었을지 모른다는 생각에 매일이 지옥 같았습니다."',
      aggregatingFactors: [
        { id: 'agg1', text: '미성년자 대상 성착취물 제작 의뢰 (16세 청소년 후배를 대상으로 나체·성관계 합성물 5회 제작)' },
        { id: 'agg2', text: '다수 및 반복적 딥페이크 제작 (지인 사진으로 총 28회에 걸쳐 불법 합성물 제작 의뢰 및 취득)' },
        { id: 'agg3', text: 'SNS 능욕방 가입 목적 정보 제공 (지인 성적 모욕 목적의 대화방에 들어가기 위해 신상 제공)' },
        { id: 'agg4', text: '피해자 직접 전송 및 성적 괴롭힘 (합성 사진과 함께 극심한 성적 수치심을 유발하는 능욕글 DM 전송)' },
        { id: 'agg5', text: '다량의 성착취물 소지 및 유포 위험성 (30회에 달하는 아청물 소지와 지인 얼굴 노출로 인한 유포 위험)' }
      ],
      mitigatingFactors: [
        { id: 'mit1', text: '피해자 전원과의 합의 및 처벌불원 (피해자 전원과 원만히 합의하여 처벌불원서가 제출됨)' },
        { id: 'mit2', text: '동종 및 이종 전과 없는 초범 (이전에 형사 처벌을 받은 전력이 전혀 없음)' },
        { id: 'mit3', text: '범행 전면 자백 및 진지한 반성 (수사 및 재판 과정에서 모든 공소사실을 인정하고 뉘우침)' },
        { id: 'mit4', text: '자발적인 정신과 전문 치료 이행 (정신건강의학과에서 충동조절장애 치료를 받으며 재범 방지 노력)' },
        { id: 'mit5', text: '가족들의 적극적인 선도 다짐 (가족들이 재범 방지를 위한 선도를 약속하며 선처 탄원)' }
      ],
      lawGuide: `<b>📌 아동·청소년의 성보호에 관한 법률 제11조 및 성폭력처벌법 제14조의2</b><br>
아동·청소년성착취물을 제작한 자는 <b>무기징역 또는 5년 이상의 유기징역</b>, 지인의 얼굴을 성적 허위영상물로 편집·합성한 자는 <b>5년 이하의 징역 또는 5천만 원 이하의 벌금</b>에 처한다.<br>
<small style="color:#78350f;">※ 직접 합성하지 않고 제작을 '의뢰'하여 전송받은 경우도 법률상 '제작'의 정범으로 동일하게 처벌됩니다.</small>`,
      stdVerdict: {
        fine: 'none',
        prison: '징역 3년',
        probation: '집행유예 5년',
        summaryText: '징역 3년 / 집행유예 5년 (성폭력 치료 80시간, 사회봉사 80시간, 취업제한 5년 및 스마트폰 몰수)',
        recognizedAgg: ['agg1', 'agg2', 'agg3', 'agg4', 'agg5'],
        recognizedMit: ['mit1', 'mit2', 'mit3', 'mit4', 'mit5']
      },
      caseNo: '서울서부지방법원 2024고합93 청소년성보호법위반(성착취물제작·배포등)등',
      defendant: '피고인 A',
      caseName: '지인 대상 딥페이크 성착취물 의뢰 제작 및 통신매체이용음란 사건',
      orderText: '피고인을 징역 3년에 처한다. 다만, 이 판결 확정일부터 5년간 위 형의 집행을 유예한다. 피고인에게 80시간의 성폭력 치료강의 수강 및 80시간의 사회봉사를 각 명한다. 피고인에게 아동·청소년 관련기관등과 장애인관련기관에 각 5년간 취업제한을 명한다. 압수된 스마트폰 1대를 몰수한다.',
      reasonText: `<b>1. 가중 사유:</b> 피고인은 중학교 동기나 후배인 피해자들의 얼굴 사진을 나체·성관계 사진과 합성하도록 의뢰하여 제작하고, 다수의 아청성착취물을 소지하였을 뿐 아니라 익명 SNS로 능욕글을 전송함. 피해자들의 얼굴이 노출되어 유포 위험이 크고 극심한 고통을 안겨 비난가능성이 매우 높음.

<b>2. 감경 사유:</b> 피고인이 범행을 모두 자백하고 반성하는 점, 초범인 점, 피해자들과 모두 합의하여 처벌불원서가 제출된 점, 정신과에서 충동조절장애 치료를 받으며 재범 방지 의지를 보이고 가족들이 선도를 탄원하는 점 등을 종합하여 형의 집행을 유예함.`,
      realJudge: `<b>🏛️ 실제 판결·처분 수치 및 법적 결과:</b><br><br>
<b>1. 딥페이크 의뢰 제작 및 능욕글 전송 사건 (서울서부지방법원 2024고합93):</b><br>
• <b>형사 처벌:</b> 피고인에게 <b>징역 3년 (집행유예 5년)</b> 선고<br>
• <b>부수 처분:</b> <b>성폭력 치료 80시간 + 사회봉사 80시간 + 취업제한 5년 + 스마트폰 몰수</b><br>
• <b>핵심 법리:</b> 생성형 AI 기술을 이용해 제3자에게 '제작 의뢰'를 한 행위 역시 아동·청소년성착취물 제작죄의 정범으로 엄중 처벌됨을 명시함.<br><br>
<b>2. 딥페이크 허위영상물 제작 및 유포 민사 손해배상 기준:</b><br>
• 피해자가 겪은 극심한 정신적 트라우마 및 인격권 침해에 대해 <b>1인당 3,000만 원 ~ 5,000만 원 상당의 손해배상금(위자료)</b> 지급 책임 인정<br>
• 형사 합의금과 별도로 피해 영상물 삭제 및 디지털 장의사 비용 일체에 대한 구상 청구 가능.`,
      lawSummary: `<b>📌 지인 합성 딥페이크 성범죄에 대한 사법부 엄벌 원칙:</b><br>
자신이 직접 AI 프로그램을 다루지 않고 온라인 제작자에게 '의뢰'하여 합성물을 전송받기만 한 경우에도 법률상 '성착취물 제작죄'가 성립하여 무기 또는 5년 이상의 중형에 처해집니다. 피해자 합의 및 적극적 치료 등 특별한 감경 사유가 인정되지 않는 한 실형 선고가 원칙입니다.`,
      lessonQuote: `"SNS에 공개된 지인의 사진이라도 AI 딥페이크 합성을 의뢰하거나 소비하는 순간, 돌이킬 수 없는 중대 디지털 성범죄가 됩니다."`
    },
    {
      id: 'case-5',
      category: '딥페이크 / 허위영상물편집판매반포',
      title: '텔레그램 성착취물 대량 유포·판매 및 대학 동기 딥페이크 소지 사건',
      summary: 'SNS 채널을 운영하며 1,200여 건의 아동 성착취물을 유포·판매하고, 대학 동기의 얼굴을 합성한 딥페이크 허위영상물 195건을 소지한 피고인에게 징역 5년의 실형이 선고된 사건',
      story: `과거 형사 처벌 전력이 없는 <b>피고인 A씨</b>는 왜곡된 성적 욕망을 충족하고 사이버상에서 영향력을 행사하기 위해 2019년부터 메신저 앱에서 익명 채널과 대화방을 개설·운영하기 시작했습니다.

A씨는 불특정 다수가 참여하는 일방향 소통 채널을 개설한 뒤, 약 4년에 걸쳐 <b>아동·청소년 성착취물 1,277개</b>, 불법촬영물 176개, 음란물 441개, 딥페이크 합성물 2개를 대량으로 게시·배포했습니다. 또한 클라우드 계정과 휴대전화에 <b>1,000건 이상의 아동 성착취물 및 불법촬영물</b>을 다운로드받아 소지했습니다. 나아가 입금을 받고 아동 성착취물 및 불법촬영물을 전송하는 등 <b>영리 목적의 상업적 판매</b>까지 자행했습니다.

이에 더해 A씨는 자신이 재학 중이던 대학교의 <b>같은 과 여자 동기생들의 얼굴 사진을 타인의 나체 사진과 합성</b>하여 총 <b>195개의 딥페이크 허위영상물을 직접 제작</b>한 뒤, 자신의 휴대전화에 장기간 저장·소지해 온 사실이 추가로 밝혀졌습니다.

경찰청의 사이버 국제공조 수사와 디지털 포렌식을 통해 체포된 A씨는 스마트폰 2대와 노트북을 전량 압수당했습니다. A씨는 재판에서 공소사실을 모두 자백하며 초범임을 들어 선처를 호소했으나, 수많은 피해자들에게 영구적으로 지워지지 않는 극심한 정신적 고통을 안기고 사회적 해악을 초래한 책임으로 <b>징역 5년의 법정 구속 실형</b>을 선고받았습니다.`,
      suspectArg: '"모든 범행을 인정하고 뼈저리게 반성하고 있습니다. 이전까지 어떠한 형사 처벌도 받은 적 없는 초범이며, 판매로 얻은 이익도 소액에 불과하므로 부디 선처해 주십시오."',
      victimArg: '"어린 피해자들의 성착취물을 돈을 받고 팔아넘기고, 함께 수업을 듣던 대학 동기의 얼굴로 수백 장의 나체 합성물을 만들어 소지했습니다. 피해자들의 삶을 파괴한 파렴치한 범죄를 엄벌해 주십시오."',
      aggregatingFactors: [
        { id: 'agg1', text: '방대한 성착취물 유통 규모 (아동 성착취물 1,277건 및 불법촬영물·음란물 수백 건 대량 배포)' },
        { id: 'agg2', text: '영리 목적의 상업적 판매 (돈을 송금받고 아동 성착취물과 불법촬영물 유료 판매)' },
        { id: 'agg3', text: '대학 동기 대상 딥페이크 195건 제작·소지 (학과 동기생 얼굴을 나체 사진에 합성한 허위영상물 대량 제작)' },
        { id: 'agg4', text: '장기간 계획적 채널 운영 (2019년부터 수년간 SNS 채널과 클라우드를 이용해 지속적 범행)' },
        { id: 'agg5', text: '회복 불가능한 디지털 피해 초래 (온라인 유포로 인한 무분별한 2차 확산 위험 및 피해자 고통 가중)' }
      ],
      mitigatingFactors: [
        { id: 'mit1', text: '형사 처벌 전력 없는 초범 (이전에 어떠한 범죄로도 처벌받은 적이 없는 초범)' },
        { id: 'mit2', text: '범행 전면 자백 및 반성 (수사 및 재판 과정에서 모든 공소사실을 인정하고 반성함)' },
        { id: 'mit3', text: '디지털 범행 기기 몰수 협조 (스마트폰 2대 및 노트북 등 범행에 쓰인 전자기기 전량 압수·몰수)' },
        { id: 'mit4', text: '판매 취득 금액의 소액성 (직접적으로 확인된 영리 판매 대금이 30만 원 상당으로 비교적 소액임)' },
        { id: 'mit5', text: '지인 합성물의 외부 유포 미확인 (대학 동기 딥페이크 합성물을 외부에 대량 유포하지 않고 개인 소지함)' }
      ],
      lawGuide: `<b>📌 아동·청소년의 성보호에 관한 법률 제11조 및 성폭력처벌법 제14조, 제14조의2</b><br>
영리를 목적으로 아동·청소년성착취물을 판매·배포한 자는 <b>5년 이상의 징역</b>에 처하며, 지인의 사진을 허위영상물로 제작·소지하거나 불법촬영물을 반포한 자 역시 중형에 처한다.<br>
<small style="color:#78350f;">※ 초범이라 할지라도 유포 규모가 방대하고 영리 목적 판매 및 지인 딥페이크 제작이 결합된 경우 작량감경 없이 징역 5년 이상의 무거운 실형이 선고됩니다.</small>`,
      stdVerdict: {
        fine: 'none',
        prison: '징역 5년이상',
        probation: 'none',
        summaryText: '징역 5년 실형 (성폭력 치료 40시간, 취업제한 7년, 스마트폰 2대 및 노트북 몰수)',
        recognizedAgg: ['agg1', 'agg2', 'agg3', 'agg4', 'agg5'],
        recognizedMit: ['mit1', 'mit2']
      },
      caseNo: '제주지방법원 2025고합8, 2025고합105(병합) 아동·청소년의성보호에관한법률위반등',
      defendant: '피고인 A',
      caseName: '텔레그램 성착취물 대량 유포·영리 판매 및 대학 동기 딥페이크 합성·소지 사건',
      orderText: '피고인을 징역 5년에 처한다. 피고인에게 40시간의 성폭력 치료프로그램 이수를 명한다. 피고인에 대하여 아동·청소년 관련기관 등과 장애인 관련기관에 각 7년간 취업제한을 명한다. 압수된 삼성 스마트폰 2대 및 삼성 노트북 1대를 각 몰수한다.',
      reasonText: `<b>1. 가중 사유:</b> 피고인은 수년간 방대한 규모의 아동·청소년성착취물, 불법촬영물, 음란물을 배포·반포·판매 및 소지하였고, 대학 동기들을 상대로 195건에 달하는 딥페이크 성착취물을 제작·소지함. 온라인 특성상 무분별한 유포 위험성이 높고 피해자들에게 극심한 고통을 주며 사회적 해악이 매우 커 엄벌이 불가피함.

<b>2. 감경 사유:</b> 피고인이 범행을 전부 자백하며 반성하고 있는 점, 형사처벌을 받은 전력이 없는 초범인 점 등을 유리한 정상으로 참작하되, 범죄의 중대성을 고려하여 법정형의 하한인 징역 5년의 실형을 선고함.`,
      realJudge: `<b>🏛️ 실제 판결·처분 수치 및 법적 결과:</b><br><br>
<b>1. 텔레그램 성착취물 유포·판매 및 딥페이크 사건 (제주지방법원 2025고합8 병합 판결):</b><br>
• <b>형사 처벌:</b> 피고인에게 <b>징역 5년 실형 선고</b> (집행유예 없는 법정구속)<br>
• <b>부수 처분:</b> <b>성폭력 치료 40시간 이수 + 아동·장애인 기관 취업제한 7년</b><br>
• <b>기기 몰수:</b> 범행에 사용된 <b>스마트폰 2대(갤럭시 S22, S8) 및 노트북 전량 몰수</b><br><br>
<b>2. 아동·청소년 성착취물 및 지인 딥페이크 관련 손해배상 (민사 판례):</b><br>
• 성착취물 제작·유포 가해자에 대해 피해자 1인당 <b>3,000만 원 ~ 1억 원 상당의 징벌적 위자료 지급 책임</b> 인정<br>
• 피해 영상물 모니터링 및 전문 삭제 비용 전액에 대한 구상금 배상 명령 병과.`,
      lawSummary: `<b>📌 대규모 성착취물 유통 및 영리 판매에 대한 무관용 실형 원칙:</b><br>
아동·청소년 성착취물과 딥페이크 허위영상물은 단 한 번의 유포로도 피해자에게 평생 지워지지 않는 고통을 남깁니다. 법원은 초범이거나 자백하더라도 '대량 유포', '영리 목적 판매', '지인 대상 합성'이 결합된 사건에 대해서는 집행유예를 전면 배제하고 징역 5년 이상의 중형 실형을 선고합니다.`,
      lessonQuote: `"익명 메신저 뒤에 숨은 불법 영상물 유포와 지인 딥페이크 합성은 초범이라도 실형을 피할 수 없는 중대 범죄입니다."`
    }
  ];

  // -------------------------------------------------------------
  // 상태 변수
  // -------------------------------------------------------------
  let currentCase = null;
  const selectedAggregating = new Set();
  const selectedMitigating = new Set();

  // -------------------------------------------------------------
  // DOM 요소 참조
  // -------------------------------------------------------------
  // Step 1 Elements
  const caseCardsContainer = document.getElementById('case-cards-container');

  // Step 2 Elements
  const btnBackStep1 = document.getElementById('btn-back-to-step1');
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

  const btnBackStep2 = document.getElementById('btn-back-to-step2');
  const btnHome = document.getElementById('btn-home');

  // -------------------------------------------------------------
  // Helper: 텍스트 정제 보조 함수 (마크다운 ** 및 cite 표기 정제)
  // -------------------------------------------------------------
  function parseText(text) {
    if (!text) return '';
    return text
      .replace(/\[cite:\s*[\d,\s]+\]/g, '') // cite 마커 제거
      .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>'); // ** 볼드 변환
  }

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
          <p class="case-card-desc">${parseText(c.summary)}</p>
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
    trialStoryBody.innerHTML = parseText(currentCase.story).replace(/\n\n/g, '<br><br>');
    trialSuspectArg.innerHTML = parseText(currentCase.suspectArg);
    trialVictimArg.innerHTML = parseText(currentCase.victimArg);
    guideLawContent.innerHTML = parseText(currentCase.lawGuide);

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
        <span>${parseText(item.text)}</span>
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
        <span>${parseText(item.text)}</span>
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
        li.textContent = `[가중] ${parseText(item.text)}`;
        myCheckedFactors.appendChild(li);
      }
    });
    selectedMitigating.forEach(id => {
      const item = currentCase.mitigatingFactors.find(f => f.id === id);
      if (item) {
        const li = document.createElement('li');
        li.className = 'tag-mitig';
        li.textContent = `[감경] ${parseText(item.text)}`;
        myCheckedFactors.appendChild(li);
      }
    });

    if (selectedAggregating.size === 0 && selectedMitigating.size === 0) {
      myCheckedFactors.innerHTML = '<li>선택한 양형 요소가 없습니다.</li>';
    }

    // 법원 실제 인정 요소
    stdCheckedFactors.innerHTML = '';
    currentCase.stdVerdict.recognizedAgg.forEach(id => {
      const item = currentCase.aggregatingFactors.find(f => f.id === id);
      if (item) {
        const li = document.createElement('li');
        li.className = 'tag-agg';
        li.textContent = `[가중] ${parseText(item.text)}`;
        stdCheckedFactors.appendChild(li);
      }
    });
    currentCase.stdVerdict.recognizedMit.forEach(id => {
      const item = currentCase.mitigatingFactors.find(f => f.id === id);
      if (item) {
        const li = document.createElement('li');
        li.className = 'tag-mitig';
        li.textContent = `[감경] ${parseText(item.text)}`;
        stdCheckedFactors.appendChild(li);
      }
    });

    // 3) 일치도 계산 (체크리스트 일치도)
    const matchedAgg = currentCase.stdVerdict.recognizedAgg.filter(id => selectedAggregating.has(id)).length;
    const matchedMit = currentCase.stdVerdict.recognizedMit.filter(id => selectedMitigating.has(id)).length;
    const totalStdFactors = currentCase.stdVerdict.recognizedAgg.length + currentCase.stdVerdict.recognizedMit.length;

    const factorScore = totalStdFactors > 0 ? ((matchedAgg + matchedMit) / totalStdFactors) * 100 : 50;

    let matchLevel = 'medium';
    let matchMessage = '';
    let pillText = '';

    if (factorScore >= 75) {
      matchLevel = 'high';
      pillText = '🎯 높은 일치도 (전문 법관급 심리)';
      matchMessage = '👏 대단합니다! 실제 법원의 판결 기준 및 양형 사유와 거의 완벽하게 일치하는 판결을 내리셨습니다.';
    } else if (factorScore >= 40) {
      matchLevel = 'medium';
      pillText = '⚖️ 보통 일치도 (신중한 심리)';
      matchMessage = '👍 전반적으로 주요 양형 사유를 잘 반영하셨습니다. 실제 법원 판결 이유와 인정 사유를 비교해보세요.';
    } else {
      matchLevel = 'low';
      pillText = '💡 낮은 일치도 (좀 더 고민 필요)';
      matchMessage = '🤔 실제 대법원 양형기준 및 법원 판결과 다소 차이가 있습니다. 하단의 실제 법원 판결 및 법적 근거를 통해 사유를 확인해보세요.';
    }

    resultMatchStatus.className = `accuracy-pill ${matchLevel}`;
    resultMatchStatus.textContent = pillText;
    resultFeedbackBanner.textContent = matchMessage;

    // 4) 판결문 데이터 바인딩
    vCaseNo.textContent = currentCase.caseNo;
    vCaseName.textContent = currentCase.caseName;
    vDefendant.textContent = currentCase.defendant;
    vOrderText.textContent = currentCase.orderText;
    vReasonText.innerHTML = parseText(currentCase.reasonText).replace(/\n/g, '<br>');
    if (vRealJudge) {
      vRealJudge.innerHTML = parseText(currentCase.realJudge);
    }
    vLawSummary.innerHTML = parseText(currentCase.lawSummary);
    resultLessonQuote.textContent = parseText(currentCase.lessonQuote);

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

  // Step 2 상단 '← 이전 화면으로 (사례 목록)'
  if (btnBackStep1) {
    btnBackStep1.addEventListener('click', () => switchView('step-1'));
  }

  // Step 3 하단 '← 이전 화면으로 (판결 수정하기)'
  if (btnBackStep2) {
    btnBackStep2.addEventListener('click', () => switchView('step-2'));
  }

  // Step 3 하단 '🏛️ 메인 화면으로 돌아가기'
  if (btnHome) {
    btnHome.addEventListener('click', () => switchView('step-1'));
  }

  // -------------------------------------------------------------
  // 초기화 실행
  // -------------------------------------------------------------
  renderCaseCards();
});
