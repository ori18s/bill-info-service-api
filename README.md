# bill-info-service-api

* 공공 데이터포털 오픈 api: 의안 정보

## Setup
* get `SERVICE_KEY` from https://data.go.kr
* create `.env` and set `SERVICE_KEY`

## Usage

```bash
yarn start
```

## Basic API Endpoints
* http://localhost:8080
  * healthcheck: /
  * api document: /api

## 의안정보 APIs & Functions

|Routes | function | 내용 |
|------ | --------------- | ---------- |
|[GET] /bill_infos  | getBillInfoList | 의안 목록 검색 |
|[GET] /recent_rcepts | getRecentRceptList | 최근 접수의안 목록 정보조회 |
|[GET] /recent_pasages | getRecentPasageList | 최근 통과의안 목록 정보조회 |
|[GET] /jsiction_comite_processes | getJsictionComiteProcessList | 처리의안 목록 정보조회 |
|[GET] /recent_moors | getRecentMoorList | 계류의안 목록 정보조회 |
|[GET] /session_requests | getSessionRequestList | 본회의부의요청안건 목록 정보조회 |
|[GET] /bill_petition_members | getBillPetitionMemberList | 의안/청원 접수정보 국회의원 목록조회 |
|[GET] /pass_rcept_recents | getPassRceptRecentList | 처리의안 통계(총괄) 정보조회 |
|[GET] /rcept_knds | getRceptKndList | 처리의안 통계(의안종류별) 정보조회 |
|[GET] /rcept_moors | getRceptMoorList | 처리의안 통계(위원회별) 정보조회 |
|[GET] /process_bill_static_infos | getProcessBillStaticInfoList | 처리의안 통계(법률안) 정보조회 |
|[GET] /mooring_bill_statics | getMooringBillStaticList | 계류의안 통계 |
|[GET] /judge_report_bodys | getJudgeReportBodyList | 심사보고서 내용 목록 정보조회 |
|[GET] /motion_laws | getMotionLawList | 발의법률안 목록 정보조회 |
|[GET] /offer_reasons | getOfferReasonList | 제안이유/주요내용 목록 정보조회 |
|[GET] /periods | getPeriodList | 회기정보 조회 |
|[GET] /commit_petitions | getCommitPetitionList | 소관위원회 정보조회 |
|[GET] /petitions | getPetitionList | 청원 목록 정보조회 |
|[GET] /commit_petition_process_infos | getCommitPetitionProcessInfoList | 청원 처리 목록 정보조회 |
|[GET] /commit_petition_mooring_infos | getCommitPetitionMooringInfoList | 청원 계류 목록 정보조회 |
|[GET] /annual_reports | getAnnualReportList | 연차보고서 목록 정보조회 |

|[GET] /bill_receipt_info | getBillReceiptInfo | 의안 접수 정보조회 |
|[GET] /bill_preliminary_examination_info | getBillPreliminaryExaminationInfo | 의안 예비심사 정보조회 |
|[GET] /bill_comprehensive_audit_info | getBillComprehensiveAuditInfo | 의안 종합심사 정보조회 |
|[GET] /bill_commission_examination_info | getBillCommissionExaminationInfo | 의안 위원회심사 정보조회 |
|[GET] /bill_deliverate_info | getBillDeliverateInfo | 의안 본회의심의 정보조회 |
|[GET] /bill_transferred_info | getBillTransferredInfo | 의안 정부이송 정보조회 |
|[GET] /bill_additional_info | getBillAdditionalInfo | 의안 부가정보조회 |
|[GET] /petition_receipt_info | getPetitionReceiptInfo | 청원 접수 정보조회 |
|[GET] /petition_commission_examination_info | getPetitionCommissionExaminationInfo | 청원 위원회심사 정보조회 |
|[GET] /petition_deliverate_info | getPetitionDeliverateInfo | 청원 본회의심의 정보조회 |
|[GET] /petition_transferred_info | getPetitionTransferredInfo | 청원 정부이송 정보조회 |
|[GET] /achievement_info | getAchievementInfo | 청원 달성도 정보조회 |
|[GET] /petition_additional_info | getPetitionAdditionalInfo | 청원 부가 정보조회 |
|[GET] /petition_static | getPetitionStatic | 청원 통계 정보조회 |
|[GET] /annual_report_detail | getAnnualReportDetail | 연차보고서 세부 정보조회 |
|[GET] /bill_promulgation_info | getBillPromulgationInfo | 의안 공포 정보조회 |

# Reference
* [의안 정보 OpenAPI](https://data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=3037286)
