---
layout: page
current: cv
title: CV (Curriculum Vitae)
navigation: true
logo: 'assets/images/ghost.png'
class: page-template
subclass: 'post page'
---

Seunggon Kim / Esji
<p align="right">📭: <a href="mailto:crosien@gmail.com">crosien@gmail.com</a></p>

> I'm passionate about software engineering for SOTA architecture, programming and theory also. 

## Contents
[Work experience](#work-experience) | [Education](#education) | [Projects](#projects) | [Skills](#skills) | [Awards](#awards) | [Publications](#publications) | [Languages](#languages)

### Work experience

<p align="right">Mar. 2022 - Present</p>

*Software engineer*, **Kinolights Inc.** - Korea
- Developed back-end of [Kinolights](https://kinolights.com/).
  - Implemented a notification server to control both notification center and push notifications such as FCM.
  - Implemented a community server to provide Twitter-like features such as posting, commenting, responding, tagging and searching.
  - 📚 JS, TS, RxJS, NestJS, TypeORM, GraphQL w/ federation, Elasticsearch, Redis
  - ☁ AWS - RDS, OpenSearch, MQ, MSK, Fargate, ECS, SNS, SMS, SQS, Lambda, Batch, EventBridge, WAF, Route53, CloudFront, S3

---

<p align="right">Jul. 2021 - Feb. 2022</p>

*Software engineer*, **ActionPower Corp.** - Korea
- Built stable and scalable STT(Speech-To-Text) pipeline.
  - Constructed HA(High Availability) with several k8s clusters that are in-house Airflow and Composer.
  - 📚 Python, [Airflow](https://airflow.apache.org/), [Microk8s](https://microk8s.io/), [NVIDIA Triton](https://developer.nvidia.com/nvidia-triton-inference-server)
  - ☁ GCP - [Composer](https://cloud.google.com/composer), Kubernetes, [GKE](https://cloud.google.com/kubernetes-engine)
- Built a real-time STT architect.
  - 📚 Java, RxJava, Spring boot, Kafka stream, Redis, [Vosk](https://github.com/alphacep/vosk-api), [Kaldi](https://kaldi-asr.org/)
- Developed back-end of [Daglo](https://daglo.ai/) that is B2C/B2B/B2G service providing STT.
  - Optimized operating cost by adopting Airflow with proper machine type and commitment.
  - Implemented a data warehouse with Elasticsearch and Kibana.
  - Implemented a search engine for transcripts and [TF-IDF](https://en.wikipedia.org/wiki/Tf%E2%80%93idf) with Elasticsearch Korean analyzer called [Nori](https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-nori.html).
  - 📚 JS, TS, Python, ExpressJS, FastAPI, Firebase, Elasticsearch, Kibana
  - ☁ GCP - GKE, GAE, GCS, [GSR](https://cloud.google.com/speech-to-text)
- Developed back-end of [Atend](https://atend.ai/) for video conference and following STT.
  - 📚 JS, TS, RxJS, NestJS, Firestore, Redis, [Twilio](https://www.twilio.com/docs/video/api)
  - ☁ GCP - GAE, GCS
- Built end-to-end (E2E) testing. 
  - 📚 JS, Selenium, [Nightwatch](https://nightwatchjs.org), [LambdaTest](https://www.lambdatest.com)

---

<p align="right">Jun. 2019 - Jul. 2021</p>

*Software engineer*, **LINE Plus Corp.** - Korea
- Developed back-end of [LINE messenger](https://line.me/).
  - Implemented features such as read-only chatroom, adult-only chatroom, abuser detection and so on.
  - Improved the performance of LINE app with conditional chat prefetch which reduces total blocking time.
  - Improved Elasticsearch get/search latency by 2x by optimizing both the cluster and the queries.
  - Upgraded Elasticsearch version from 5.0 to 6.3 manually over two clusters (active-standby).
  - Implemented a logging based fault-tolerant Kafka producer to mitigate message loss.
  - Developed a Content Management System (CMS) for back office.
  - 📚 Java, RxJava, Spring, MySQL, Redis, Elasticsearch, HBase, Kafka, Zookeeper, [Armeria](https://github.com/line/armeria), [Central Dogma](https://github.com/line/centraldogma), Retrofit, Thrift, Protobuf
- Developed CI/CD and automation.
  - Implemented and stabilized E2E test verifying behavior and server push on [SPDY called LEGY](https://engineering.linecorp.com/ko/blog/LINT-newtork-modernization-http2-tls).
  - Built periodic ranking/trending data generation with ES.
  - Analyzed the bottleneck with profiling tools including heatmap, thread dump and heap dump.
  - 📚 Java, Python, Kotlin, Spring Batch, Flask, Jenkins, Ansible, [Zipkin](https://zipkin.io), [JMH](https://github.com/openjdk/jmh), [Gatling](https://gatling.io), Prometheus, Micrometer, Dropwizard

---

<p align="right">Oct. 2017 - Jun. 2019</p>

*Senior researcher*, **Coinplug Inc.** - Korea
- Improved the performance of back-end of cryptocurrency exchange.
  - Throughput for bidding API was increased 200 times. It is done by resolving single-threaded task.
  - 📚 Java, Spring, MySQL, RabbitMQ, AWS EC2
  - ☁ AWS - EC2, MQ
- Implemented [Ethereum proxy](https://github.com/hexoul/aws-lambda-eth-proxy) as delegator of transactions.
  - 📚 Go, Ethereum
  - ☁ AWS - Lambda, API Gateway
- Implemented [decentralized applications (DApp)](https://github.com/hexoul?tab=repositories&q=dapp) interacting [smart contract](https://github.com/hexoul/governance-contract) through [web3](https://github.com/hexoul/meta-web3).
  - 📚 Solidity, Ethereum, IPFS, ReactJS
- Implemented [API clients](https://github.com/hexoul?tab=repositories&q=api-client) for trading and [monitoring](https://github.com/hexoul/coinmarketcap-react-chart) the tendency.
  - 📚 Go, ReactJS
- Researched blockchain technologies and security issues on all sides such as platform, smart contract, GDPR and so on.

### Education
- M.S. and Ph.D. Candidate, CE, Seoul National University, Korea, 2017
- B.S., CE, Kwangwoon University, Korea, 2012
- *Extra*
  - Self-Driving Car Nanodegree Term1 and Term2, Udacity, 2017
  - Software Maestro, Ministry of Science, Korea, 2013

### Projects
- Open source
  - [Armeria](https://github.com/line/armeria/pulls?q=is%3Apr+author%3Ahexoul+is%3Aclosed) - a microservice framework to easily build any type of technologies including gRPC, Thrift, Retrofit and so on.
  - [Python client for Central Dogma](https://github.com/line/centraldogma-python/pulls?q=is%3Apr+author%3Ahexoul+is%3Aclosed) - a Python client for Central Dogma that is highly-available version-controlled service configuration repository based on Git, ZooKeeper and HTTP/2.
- Individual
  - Chewing Diet (츄잉 다이어트)
    - [iOS](https://apps.apple.com/app/id6444375180), [Android](https://play.google.com/store/apps/details?id=hexoul.chewing.diet)
      - 📚 Dart, Flutter, Firebase (Analytics, Crashlytics)
  - Employee Stock Option Calc. (ESO calculator, 스톡옵션 계산기)
    - [iOS](https://apps.apple.com/app/id1609432239), [Android](https://play.google.com/store/apps/details?id=hexoul.stockoption.calculator)
      - 📚 Dart, Flutter, Firebase (Analytics, Crashlytics, Admob)
  - 오늘부터 전공면접 IT
    - a MCQ-based (Multiple Choice Question) study helper for IT interview.
    - [iOS](https://apps.apple.com/app/id1526993862), [Android](https://play.google.com/store/apps/details?id=com.whatseries.prepareinterview)
      - 📚 Dart, Flutter, Firebase (Analytics, Crashlytics, Cloud messaging, Admob)
    - [Web](https://hexoul.github.io/prepare-interview-data)
      - 📚 JS, TS, NextJS, Chakra UI
  - MojiE (아무말)
    - [iOS](https://apps.apple.com/app/id1632701886), [Android](https://play.google.com/store/apps/details?id=hexoul.image.gen)
      - 📚 Dart, Flutter, Firebase (Analytics, Crashlytics, Admob)
- <details>
  <summary>Research</summary>
  <ul>
    <li>CPS-Sim, 2016 - 2017</li>
    <ul><li><a href='https://www.youtube.com/watch?v=Fex2G_o1kzo'>End-to-end tool</a> for developing CPS(Cyber Physical System)</li></ul>
    <li>ECU-level real-time simulator, 2013 - 2017</li>
    <ul><li>w/ Hyundai Motors</li></ul>
    <ul><li>Support verification of application logic on vehicle</li></ul>
    <li>Component based design theory and control kernel for CPS, 2013 - 2015</li>
    <ul><li>Demonstration <a target='_blank' href='https://www.youtube.com/watch?v=jOabWQ9EY3U'><sup>[1]</sup></a>, <a href='https://www.youtube.com/watch?v=tD4z7mAAjBg'><sup>[2]</sup></a></li></ul>
    <li>Real-time system SW on multicore and GPGPU for unmanned vehicles, 2016 - 2017</li>
    <li>Drone simulation for AED(Automatic External Defibrillator) delivery, 2017</li>
  </ul>
  </details>

### Skills
- Programming language
  - **Java, JS, TS, Python, Go, Dart, SQL**
  - Assembly, C, C++, C#, Kotlin, MATLAB, ML, Objective-C, Ocaml, Painless, PHP, Scala, Solidity, Tcl/Tk
- Platform & Framework
  - Reactive
    - **RxJava, RxJS**
  - Back-end
    - [Java] **Spring, Spring boot, Armeria**, Guava, JUnit
    - [JS] **NestJS**, ExpressJS, NodeJS, Puppeteer, Jest
    - [Python] **Airflow**, Django, Flask, FastAPI, pytest, httpx, respx, tenacity, pandas, numpy
    - [Storage] **Elasticsearch, Redis, MySQL, HBase**, Firestore, DynamoDB, LevelDB, PostgreSQL, Zookeeper, Central Dogma, Ethereum, IPFS
    - [Stream] **Kafka**, RabbitMQ, AWS SQS
    - [Orchestration] **Docker, Jenkins, Kubernetes**
    - [Monitoring] **Datadog, Grafana, Kibana, Prometheus**, Sentry, Zipkin, Gatling
  - Front-end
    - **NextJS, ReactJS**, VueJS
    - Cocos2d, MFC, Qt, Tizen, Unity
  - App
    - **Flutter**, watchOS, wearOS, Swift, Kotlin, l10n, flutter_hooks, fl_chart, flutter_animate, sqflite, sqflite
  - <details>
    <summary>Vehicle field</summary>
    <ul>
    <li>[Simulator] CarSim, Torcs</li>
    <li>AutoBox, AUTOSAR, EB Tresos, Odin, Simulink</li>
    <li>FlexRay, CAN(Controller Area Network), CAN-FD</li>
    </ul>
    </details>
- Protocol
  - **HTTP/2**, **REST**, **GraphQL**, gRPC, RTC, SSE, SPDY, **Thrift**, Websocket
- Cloud service
  - AWS - RDS, OpenSearch, Elasticache, MQ, MSK, SNS, SMS, SQS, WAF, CloudFront, ALB, API Gateway, Fargate, ECS, EC2, Lambda, Batch, EventBridge
  - GCP - Composer, GAE, GCE, GCR, GCS, GKE, GSR, Memorystore
- <details>
  <summary>Tool</summary>
  <ul>
  <li>Github, Gitlab, Sourcetree, JSFiddle, Remix</li>
  <li>Slack, JIRA, Trello</li>
  <li>[Documentation] Confluence, Doxygen, Javadoc, Sphinx, Jekyll</li>
  <li>[Analysis] async-profiler, Dr.Memory, Valgrind, Black Duck Hub</li>
  <li>[Package manager] Gradle, Helm, npm, yarn, pip, dep</li>
  <li>Hardware-related</li>
  <ul><li>CodeWarrior, GreenHills, TASKING, Trace32</li></ul>
  <ul><li>Infineon(TC1797, TC275), STMicro(SPC56EL70), Freescale(MPC5606B), Raspberry Pi, Arduino</li></ul>
  <ul><li>CANalyzer, CANDB, PCAN-USB, Vector(VN1640, VN7600)</li></ul>
  </ul>
  </details>

### Awards
- 2nd prize, OSS grand developers challenge, National IT Industry Promotion Agency (NIPA), 2016
- Best paper award, Korea Computer Congress (KCC), 2017

### Publications
- Kyoung-Soo We, Seunggon Kim, Wonseok Lee, and Chang-Gun Lee, **Functionally and Temporally Correct Simulation of Cyber-Systems for Automotive Systems**, in IEEE Real-Time Systems Symposium (RTSS), Dec. 2017
- Wonseok Lee, Kyoung-Soo We, Seunggon Kim, Sangyoun Paik, Jonathon Soulis, and and Chang-Gun Lee, **An ECU-Close Design/Verification Tool for Automotive Systems**, in IEEE Real-Time Systems Symposium (RTSS@Work), Paris, France, Dec. 2017
- Hyejin Joo, Kyoung-Soo We, Seunggon Kim, and Chang-Gun Lee, **An End-to-End Tool for Developing CPSs from Design to Implementation**, in The First International Workshop on Verification and Validation of Cyber-Physical Systems (V2CPS), Reykjavik University, Iceland, June 2016
- ...

### Languages

- 🇺🇸 English
- 🇰🇷 Korean (native)
- 🇯🇵 Japanese (JLPT N1)
