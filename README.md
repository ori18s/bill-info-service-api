# bill-info-service-api

> 의안정보 제공을 위한 api

## Overview

api 제공을 위한 단계는 다음과 같음

1. open api에서 필요한 정보 crawling하여 db(firestore)에 저장
2. 가져온 데이터를 바탕으로 api로 정보 제공

## Setup
* get `SERVICE_KEY` from https://data.go.kr
* create `.env` and set `SERVICE_KEY=xxx`
* 의안정보, 국회의원정보 각각 api 활용신청 필요

## Usage

```bash
yarn start
```

## Basic API Endpoints
* http://localhost:8080
  * healthcheck: /
  * api document: /api

# Reference
* [OpenAPI: 의안 정보](https://data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=3037286)
* [OpenAPI: 국회의원 정보](https://data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=3037286)
