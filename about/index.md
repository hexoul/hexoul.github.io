---
layout: page
current: cv
title: CV (Curriculum Vitae)
navigation: true
logo: 'assets/images/ghost.png'
class: page-template
subclass: 'post page'
---

<div class="contact-info">
  <div>Seunggon Kim</div>
  <div>📭: <a href="mailto:crosien@gmail.com">crosien@gmail.com</a></div>
</div>

> I'm passionate about software engineering for SOTA architecture, programming and theory also. 

## Contents
[Work experience](#work-experience) | [Education](#education) | [Projects](#projects) | [Skills](#skills) | [Awards](#awards) | [Publications](#publications) | [Languages](#languages)

### Work experience

<div class="work-experience-header">
  <div>Tech lead, <i>Kinolights Inc.</i> - Korea</div>
  <div>Mar. 2022 - Present</div>
</div>

- Developed the back-end of [Kinolights](https://kinolights.com/).
  - Built a notification server to control both in-app notification center and push notifications such as FCM.
  - Designed and implemented a community server to post, comment, respond and search. The feature-rich post includes link preview, poll, image/video upload, and tagging.
  - Built a search engine on top of Elasticsearch with support for initial consonant search, phoneme-level matching, synonym expansion, typo correction, and trend-aware scoring.
  - Developed a metadata collection system combining crawling and third-party API integration to enrich internal datasets.
  - 📚 NestJS, RxJS, TypeORM, GraphQL w/ federation, Elasticsearch, Redis, Amplitude, Datadog, Sentry
  - ☁ AWS - RDS, Elasticache, OpenSearch, MQ, MSK, Fargate, ECS, SNS, SMS, SQS, Lambda, Batch, EventBridge, WAF, Route53, CloudFront, S3, MediaConvert, CloudWatch
- Improved SEO to increase monthly Google search clicks from 250K to 800K through technical optimizations and content restructuring.
- Gradually modernized a legacy mobile application through a phased transformation.
  - Consolidated separate Android and iOS web apps into a single Flutter-based web app, reducing maintenance costs and improving rendering performance.
  - Further evolved the application into a full-featured native app using Expo and React Native to enhance cross-platform capability and user experience.
  - 📚 Flutter, React Native
- Maintained overall service infrastructure including cost optimization, deployment pipelines, and resource monitoring.
- Implemented event tracking pipeline with Amplitude: managed quotas, user identity mapping, event schema, dashboard guidelines, and internal onboarding.

<div class="work-experience-header">
  <div>Software engineer, <i>ActionPower Corp.</i> - Korea</div>
  <div>Jul. 2021 - Feb. 2022</div>
</div>

- Built a stable and scalable Speech-To-Text (STT) pipeline.
  - Achieved high availability by orchestrating multiple kubernetes clusters consisting of on-premise Airflow and Google Cloud Composer.
  - Increased inference throughput by leveraging NVIDIA Triton for parallel execution.
  - 📚 [Airflow](https://airflow.apache.org/), [Microk8s](https://microk8s.io/), [NVIDIA Triton](https://developer.nvidia.com/nvidia-triton-inference-server), Kubernetes, Python, GCSFuse
  - ☁ GCP - [Composer](https://cloud.google.com/composer), [GKE](https://cloud.google.com/kubernetes-engine), GCS
- Designed and implemented a real-time streaming STT service.
  - 📚 Spring boot, RxJava, Kafka stream, Redis, [Vosk](https://github.com/alphacep/vosk-api), [Kaldi](https://kaldi-asr.org/)
- Developed the back-end of [Daglo](https://daglo.ai/) that is B2C/B2B/B2G service providing STT.
  - Reduced operational costs by adopting Apache Airflow and optimizing infrastructure resources.
  - Built a data warehouse using Elasticsearch and Kibana for efficient data storage and visualization.
  - Developed a transcript search engine using Elasticsearch’s Korean analyzer [Nori](https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-nori.html) and [TF-IDF](https://en.wikipedia.org/wiki/Tf%E2%80%93idf) for relevance ranking.
  - 📚 Express.js, FastAPI, Firebase, Elasticsearch
  - ☁ GCP - GKE, GAE, GCS, [GSR](https://cloud.google.com/speech-to-text)
- Developed the back-end of [Atend](https://atend.ai/) for video conference and following STT.
  - 📚 NestJS, RxJS, Firestore, Redis, [Twilio](https://www.twilio.com/docs/video/api)
  - ☁ GCP - GAE, GCS
- Implemented an automated end-to-end testing environment for continuous integration.
  - 📚 Selenium, [Nightwatch](https://nightwatchjs.org), [LambdaTest](https://www.lambdatest.com)

<div class="work-experience-header">
  <div>Software engineer, <i>LINE Plus Corp.</i> - Korea</div>
  <div>Jun. 2019 - Jul. 2021</div>
</div>

- Developed the back-end of [LINE messenger](https://line.me/).
  - Implemented features including read-only chatroom, adult-only chatroom, abusive user detection and so on.
  - Improved the performance of LINE app by introducing conditional chat prefetching, which reduced total blocking time.
  - Reduced Elasticsearch get/search latency by 2x through query and cluster optimization.
  - Contributed to [Armeria](https://github.com/line/armeria/pulls?q=is%3Apr+author%3Ahexoul) to expose internal metrics for server monitoring. And integrated Prometheus-compatible metrics and built Grafana dashboards for service observability.
  - Identified and resolved performance bottlenecks using profiling tools such as heatmaps, thread dumps, and heap dumps.
  - Manually upgraded Elasticsearch from version 5.0 to 6.3 across two clusters (active-standby configuration).
  - Built a fault-tolerant Kafka producer with logging-based recovery to minimize message loss.
  - Developed a back-office Content Management System (CMS) for internal operations.
  - 📚 Spring, Java, RxJava, MySQL, Redis, Elasticsearch, HBase, Kafka, Zookeeper, [Armeria](https://github.com/line/armeria), [Central Dogma](https://github.com/line/centraldogma), Retrofit, Thrift, Protobuf, Jenkins, Ansible, [Zipkin](https://zipkin.io), [JMH](https://github.com/openjdk/jmh), Prometheus, Micrometer, Dropwizard
- Developed CI/CD pipelines and automation processes.
  - Implemented and stabilized end-to-end (E2E) tests to verify behavior and server push on [SPDY called LEGY](https://engineering.linecorp.com/ko/blog/LINT-newtork-modernization-http2-tls).
  - Built a periodic ranking/trending data generation system using Elasticsearch.
  - Developed custom load-testing programs using Gatling to simulate high-load conditions.
  - 📚 Spring Batch, Flask, [Gatling](https://gatling.io), Java, Python, Kotlin, Scala

<div class="work-experience-header">
  <div>Senior researcher, <i>Coinplug Inc.</i> - Korea</div>
  <div>Oct. 2017 - Jun. 2019</div>
</div>

- Developed the back-end of [cryptocurrency exchange](https://x.com/cpdax).
  - Enhanced bidding API performance by 200x through architectural redesign.
  - Implemented KYC (Know Your Customer) authentication system.
  - Developed deposit and withdrawal processing for KRW and cryptocurrencies.
  - Continuously integrated newly listed cryptocurrencies into the exchange platform, ensuring timely support and smooth trading operations.
  - 📚 Spring, MySQL, RabbitMQ
  - ☁ AWS - EC2, MQ
- Designed and deployed [an Ethereum proxy server](https://github.com/hexoul/aws-lambda-eth-proxy) that delegates user transactions to the blockchain network.
  - 📚 Go, Ethereum
  - ☁ AWS - Lambda, API Gateway
- Developed [decentralized applications (DApps)](https://github.com/hexoul?tab=repositories&q=dapp) that interact with [smart contracts](https://github.com/hexoul/governance-contract) via [Web3](https://github.com/hexoul/meta-web3).
  - 📚 Solidity, Ethereum, IPFS, React
- Implemented [API clients](https://github.com/hexoul?tab=repositories&q=api-client) for trading and [monitoring](https://github.com/hexoul/coinmarketcap-react-chart) the tendency.
  - 📚 Go, React
- Researched blockchain technologies and security issues on all sides such as platform, smart contract, GDPR and so on.

---

### Education
- M.S. and Ph.D. Candidate, CE, Seoul National University, Korea, 2017
- B.S., CE, Kwangwoon University, Korea, 2012
- *Extra*
  - Self-Driving Car Nanodegree Term1 and Term2, Udacity, 2017
  - Software Maestro, Ministry of Science, Korea, 2013

### Projects
- Open source
  - [Armeria](https://github.com/line/armeria/pulls?q=is%3Apr+author%3Ahexoul) - a microservice framework to easily build any type of technologies including gRPC, Thrift, Retrofit and so on.
  - [Python client for Central Dogma](https://github.com/line/centraldogma-python/pulls?q=is%3Apr+author%3Ahexoul) - a Python client for Central Dogma that is highly-available version-controlled service configuration repository based on Git, ZooKeeper and HTTP/2.
- Individual
  - Chewing Diet - [iOS](https://apps.apple.com/app/id6444375180), [Android](https://play.google.com/store/apps/details?id=hexoul.chewing.diet), [Web](https://chewingdietweb.vercel.app/)
    - 📚 Flutter, Firebase, Next.js, Tailwind CSS
  - 오늘부터 전공면접 IT - [iOS](https://apps.apple.com/app/id1526993862), [Android](https://play.google.com/store/apps/details?id=com.whatseries.prepareinterview), [Web](https://hexoul.github.io/prepare-interview-data)
    - a MCQ-based (Multiple Choice Question) study helper for IT interview.
    - 📚 Flutter, Firebase, Next.js, Chakra UI
  - Employee Stock Option Calculator - [iOS](https://apps.apple.com/app/id1609432239), [Android](https://play.google.com/store/apps/details?id=hexoul.stockoption.calculator)
    - 📚 Flutter, Firebase
  - MojiE - [iOS](https://apps.apple.com/app/id1632701886), [Android](https://play.google.com/store/apps/details?id=hexoul.image.gen)
    - 📚 Flutter, Firebase
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
  - **Java, TypeScript, Python, Go, Dart**
  - Assembly, C, C++, C#, Kotlin, Scala, MATLAB, ML, Objective-C, Ocaml, Painless, PHP, Scala, Solidity, Tcl/Tk
- Platform & Framework
  - Reactive
    - **RxJava, RxJS**
  - Back-end
    - [Java] **Spring, Spring boot, Armeria**, Guava, JUnit
    - [TypeScript] **NestJS**, Express.js, Node.js, Puppeteer, Jest
    - [Python] **Airflow**, FastAPI, Flask, Django, pytest
    - [Storage] **Elasticsearch, Redis, MySQL, HBase**, Firestore, DynamoDB, LevelDB, PostgreSQL, Zookeeper, Central Dogma, Ethereum, IPFS
    - [Stream] **Kafka**, RabbitMQ, BullMQ, AWS SQS
    - [Orchestration] **Docker, Jenkins, Kubernetes**
    - [Monitoring] **Datadog, Grafana, Kibana, Prometheus**, Sentry, Zipkin, Gatling
  - Front-end
    - **Next.js, React**, Vue.js, Tailwind CSS
  - App
    - **Flutter**, React Native, Nativewind
    - Tizen, Qt, Unity, Cocos2d, MFC
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
  - AWS - RDS, OpenSearch, Elasticache, MQ, MSK, SNS, SMS, SQS, WAF, CloudFront, ALB, API Gateway, Fargate, ECS, EC2, Lambda, Batch, EventBridge, MediaConvert, CloudWatch
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
- Kyoung-Soo We, Seunggon Kim, Wonseok Lee, and Chang-Gun Lee, **Functionally and Temporally Correct Simulation of Cyber-Systems for Automotive Systems**, in IEEE Real-Time Systems Symposium (RTSS), 2017
- Wonseok Lee, Kyoung-Soo We, Seunggon Kim, Sangyoun Paik, Jonathon Soulis, and and Chang-Gun Lee, **An ECU-Close Design/Verification Tool for Automotive Systems**, in IEEE Real-Time Systems Symposium (RTSS@Work), France, 2017
- Hyejin Joo, Kyoung-Soo We, Seunggon Kim, and Chang-Gun Lee, **An End-to-End Tool for Developing CPSs from Design to Implementation**, in The First International Workshop on Verification and Validation of Cyber-Physical Systems (V2CPS), Iceland, 2016
- Seunggon Kim, Youngeun Cho, Sangyoun Paik, Chang-Gun Lee, **PC-based Estimation of ECU Dynamic Memory**, Korea Computer Congress, Korea, 2017
- Wonseok Lee, Kyoung-Soo We, Seunggon Kim, Chang-Gun Lee, **Simulator Structure for Lockstep ECU**, Korea Computer Congress, Korea, 2017
- Seunggon Kim, Kyoung-Soo We, Chang-Gun Lee, **MATLAB Model-based ECU Code Auto-Generation Technique**, KIISE, Korea, 2016
- Seunggon Kim, Kyoung-Soo We, Chang-Gun Lee, **Two-level Offset Technique for Verifying Reconstruction and Simulation**, KIISE, Korea, 2015
- ...

### Languages

- 🇺🇸 English
- 🇯🇵 Japanese (JLPT N1)
- 🇰🇷 Korean (native)
