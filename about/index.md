---
layout: page
current: cv
title: CV (Curriculum Vitae)
navigation: true
logo: 'assets/images/ghost.png'
class: page-template
subclass: 'post page'
---

Seungon Kim

> I'm passionate about software engineering for architecting, programming and theory also. 

## Contents
[Work experience](#work-experience) | [Education](#education) | [Projects](#projects) | [Skills](#skills) | [Awards](#awards) | [Publications](#publications) | [Languages](#languages)

### Work experience

<p align="right">Mar. 2022 - Present</p>

*Software engineer*, **Kinolights Inc.** - Korea
- Developed back-end of [Kinolights](https://kinolights.com/).

---

<p align="right">Jul. 2021 - Feb. 2022</p>

*Software engineer*, **ActionPower Corp.** - Korea
- Built stable and scalable Speech-To-Text (STT) pipeline.
  - Constructed high availability (HA) with several k8s clusters that are in-house Airflow and Composer.
  - 📚 Python, [Airflow](https://airflow.apache.org/), [Composer](https://cloud.google.com/composer), Kubernetes, [GKE](https://cloud.google.com/kubernetes-engine), [Microk8s](https://microk8s.io/), [NVIDIA Triton](https://developer.nvidia.com/nvidia-triton-inference-server)
- Built a real-time STT architect.
  - 📚 Java, RxJava, Spring boot, Kafka stream, Redis, [Vosk](https://github.com/alphacep/vosk-api), [Kaldi](https://kaldi-asr.org/)
- Developed back-end of [Daglo](https://daglo.ai/) that is B2C/B2B/B2G service providing STT.
  - Optimized operating cost by adopting Airflow with proper machine type and commitment.
  - Built a data warehouse with Elasticsearch and Kibana.
  - Built a search engine for transcripts and [TF-IDF](https://en.wikipedia.org/wiki/Tf%E2%80%93idf) with Elasticsearch Korean analyzer called [Nori](https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-nori.html).
  - 📚 JS, TS, ExpressJS, Firebase, Elasticsearch, Kibana, GKE, GAE, GCS, [GSR](https://cloud.google.com/speech-to-text)
- Developed back-end of [Atend](https://atend.ai/) for video conference and following STT.
  - 📚 JS, TS, RxJS, NestJS, Firebase, Redis, [Twilio](https://www.twilio.com/docs/video/api), GAE, GCS
- Built end-to-end (E2E) testing. 
  - 📚 JS, Selenium, [Nightwatch](https://nightwatchjs.org), [LambdaTest](https://www.lambdatest.com)

---

<p align="right">Jun. 2019 - Jul. 2021</p>

*Software engineer*, **LINE Plus Corp.** - Korea
- Developed back-end of [LINE messenger](https://line.me/).
  - Optimized the performance of ES get/search queries by tuning the cluster and the queries.
  - Implemented business logics for features such as read-only chatroom and adult-only chatroom.
  - Developed a Content Management System (CMS) for back office.
  - 📚 Java, RxJava, Spring, MySQL, Redis, Elasticsearch, HBase, Kafka, Zookeeper, [Armeria](https://github.com/line/armeria), [Central Dogma](https://github.com/line/centraldogma), Retrofit, Thrift, Protobuf
- Developed CI/CD and automation.
  - Built periodic ranking/trending data generation with ES.
  - Built automated monitoring with end-to-end (E2E) testing.
  - Analyzed the bottleneck with profiling tools.
  - 📚 Java, Python, Kotlin, Spring Batch, Flask, Jenkins, Ansible, [Zipkin](https://zipkin.io), [JMH](https://github.com/openjdk/jmh), [Gatling](https://gatling.io), Prometheus, Micrometer, Dropwizard

---

<p align="right">Oct. 2017 - Jun. 2019</p>

*Senior researcher*, **Coinplug Inc.** - Korea
- Improved the performance of back-end of cryptocurrency exchange.
  - Throughput for bidding API was increased 200 times. It is done by resolving single-threaded task.
  - 📚 Java, Spring, MySQL, RabbitMQ, AWS EC2
- Built [Ethereum proxy](https://github.com/hexoul/aws-lambda-eth-proxy) as delegator of transactions.
  - 📚 Go, Ethereum, AWS Lambda
- Built [decentralized appications (DApp)](https://github.com/hexoul?tab=repositories&q=dapp) interacting [smart contract](https://github.com/hexoul/governance-contract) through [web3](https://github.com/hexoul/meta-web3).
  - 📚 Solidity, Ethereum, IPFS, ReactJS
- Built [API clients](https://github.com/hexoul?tab=repositories&q=api-client) for trading and [monitoring](https://github.com/hexoul/coinmarketcap-react-chart) the tendency.
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
  - [Armeria](https://github.com/line/armeria/pulls?q=is%3Apr+author%3Ahexoul+is%3Aclosed) - a microservice framework for building any type of technologies including gRPC, Thrift, Retrofit easily.
  - [Python client for Central Dogma](https://github.com/line/centraldogma-python/pulls?q=is%3Apr+author%3Ahexoul+is%3Aclosed) - a Python client for Central Dogma that is highly-available version-controlled service configuration repository based on Git, ZooKeeper and HTTP/2.
- Individual
  - 오늘부터 전공면접 IT - a study helper for IT interview with Multiple Choice Questions (MCQs).
    - [iOS](https://apps.apple.com/kr/app/id1526993862), [Android](https://play.google.com/store/apps/details?id=com.whatseries.prepareinterview), [Web](https://hexoul.github.io/prepare-interview-data)
- Research
  - CPS-Sim, 2016 - 2017
    - [End-to-end tool](https://www.youtube.com/watch?v=Fex2G_o1kzo) for developing CPSs (Cyber Physical System)
  - ECU-level real-time simulator, 2013 - 2017
    - w/ Hyundai Motors
    - Support verification of application logic on vehicle
    - Support ECU implementation by auto-code generator from given logic
  - Component based design theory and control kernel for CPS, 2013 - 2015
    - Demonstration [1](https://www.youtube.com/watch?v=jOabWQ9EY3U), [2](https://www.youtube.com/watch?v=tD4z7mAAjBg)
  - Real-time system SW on multicore and GPGPU for unmanned vehicles, 2016 - 2017
  - Drone simulation for Automatic External Defibrillator (AED) delivery, 2017

### Skills
- (WIP)

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
- 🇯🇵 Japanese (JLPT N2)