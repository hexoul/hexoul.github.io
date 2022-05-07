---
layout: post
current: post
navigation: True
title: 프로세스 동기화의 블로킹 방식
tags: [os]
class: post-template
subclass: 'post'
author: hexoul
---

프로세스 동기화 방식은 임계 구역(critical section)에 진입하기 위해 대기하는 알고리즘(algorithm)에 따라 블로킹(blocking)과 논블로킹(non-blocking)으로 나뉜다.

구체적으로 진입이 될 때까지 다른 작업을 하지 못하고 무한히 기다릴 가능성이 있다면 블로킹, 그렇지 않고 유한한 시간 또는 단계 내에 진입의 완료가 보장된다면 논블로킹이다. 논블로킹이라 하여 진입 시도 후 임계 구역에 진입할 때까지 대기 시간이 아예 없는 것이 아님을 주의해야 한다.

논블로킹은 동시 접근이 발생하고 있는 상황에서 어느 정도까지 진행에 지장을 주지 않고 진입을 보장해주느냐에 따라서 단계가 나뉘어 진다. 단계는 wait-free, lock-free 및 obstruction-free가 있다. wait-free에서 obstruction-free로 갈수록 보장이 약해진다.
우선 wait-free의 경우, 시스템 전역적으로 기아(starvation)가 없는 것을 보장해준다. 따라서 접근을 시도했던 모든 프로세스는 유한한 시간 내에 원자성을 지키면서 작업을 완료할 수 있다. 이러한 특성은 실시간성이 보장되어야 하는 실시간 시스템에 적합하다. 하지만 기아를 방지하기 위한 제약이 구현을 복잡하게 만들어 성능은 lock-free 또는 obstruction-free보다 좋지 않을 수도 있다.
lock-free는 기아를 발생시킬 수 있으나, 경쟁이 있더라도 유한한 시간내에 적어도 하나의 프로세스는 성공적으로 작업을 진행할 수 있게 보장해 준다. lock-free의 보장 범위는 wait-free의 부분 집합이므로 모든 wait-free는 lock-free이다.
obstruction-free는 가장 약한 수준의 논블로킹으로, 프로세스가 독립적으로 수행된다면 유한한 시간 내에 작업을 완료할 수 있는 것을 뜻한다. 달리 말해, 독립 수행이 보장되지 못한다면 경쟁을 발생시킬 수 있는 나머지 프로세스를 전부 대기시켜야 유한한 시간 내에 완료할 수 있다는 것을 의미한다. 논블로킹 중에서 제일 제약이 약한만큼, 앞서 모든 wait-free가 lock-free이었던 것처럼 모든 wait-free 또는 모든 lock-free는 obstruction-free도 만족한다고 말할 수 있다.


### Reference
- [https://ko.wikipedia.org/wiki/기아_상태](https://ko.wikipedia.org/wiki/기아_상태)
- [https://en.wikipedia.org/wiki/Non-blocking_algorithm#Wait-freedom](https://en.wikipedia.org/wiki/Non-blocking_algorithm#Wait-freedom)
- [https://en.wikipedia.org/wiki/Non-blocking_algorithm#Lock-freedom](https://en.wikipedia.org/wiki/Non-blocking_algorithm#Lock-freedom)
- [https://en.wikipedia.org/wiki/Non-blocking_algorithm#Obstruction-freedom](https://en.wikipedia.org/wiki/Non-blocking_algorithm#Obstruction-freedom)
- [https://en.wikipedia.org/wiki/Starvation](https://en.wikipedia.org/wiki/Starvation_(computer_science))