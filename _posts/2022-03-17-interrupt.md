---
layout: post
current: post
navigation: True
title: 하드웨어 인터럽트와 소프트웨어 인터럽트
tags: [os]
class: post-template
subclass: 'post'
author: hexoul
---

인터럽트(interrupt)는 프로세서에 이벤트를 알려 현재 프로세서가 실행 중인 컨텍스트에서 벗어나 별도의 컨텍스트를 실행하는 것을 가능하게 한다.

이 때 이벤트가 어디에서 발생했는지에 따라 하드웨어 인터럽트 또는 소프트웨어 인터럽트로 분류된다.

하드웨어 인터럽트는 키보드, 마우스 또는 프린터와 같은 외부 하드웨어 장치로부터도 발생할 수 있지만 내부에도 존재한다. 대표적으로 하드웨어 타이머의 경우, CPU 내부에서 클락(clock)을 일정한 주기를 가지고 인터럽트로 발생시켜 동기화를 가능케 한다.

소프트웨어 인터럽트는 시스템 콜을 통해서 의도적으로 발생시킬 수도 있지만, 의도하지 않았는데도 프로그램 실행 중에 발생할 수 있다. 예기치 않게 발생한 인터럽트는 트랩(trap) 또는 예외(exception)라 불린다. 한가지 예로 어떤 수를 0으로 나눌 때 발생하는 divide-by-zero가 있다.

### Reference
- [https://ko.wikipedia.org/wiki/인터럽트](https://ko.wikipedia.org/wiki/인터럽트)
- [https://en.wikipedia.org/wiki/Interrupt#Hardware_interrupts](https://en.wikipedia.org/wiki/Interrupt#Hardware_interrupts)
- [https://en.wikipedia.org/wiki/Interrupt#Software_interrupts](https://en.wikipedia.org/wiki/Interrupt#Software_interrupts)
