---
description: "The idea behind our project, called Klor (https://github.com/lovrosdu/klor), is to use a new domain-specific language (DSL) -- embedded in Clojure -- to write distributed systems as **choreographies**. A choreography is very similar to any \"normal\" Clojure program, except that it has a special message-passing primitive for processes to communicate: instead of the usual two `send` and `receive` primitives, there is just one `communicate` primitive that embodies a whole end-to-end transmission. The great thing about this is that bugs like communication mismatches and deadlocks -- very hard to diagnose and fix! -- become syntactically impossible to write in the first place. The choreography essentially acts as a single source of truth and is used to automatically generate the implementations of the processes in the system. `communicate` still compiles to a `send` and a corresponding `receive` behind the scenes, but it all happens completely transparently to the programmer.\r\n\r\nKlor is implemented on top of the `clojure.tools.analyzer` compiler framework and hooks into Clojure's macro system to perform all of its analysis and code generation at macroexpansion-time, imposing virtually no run-time cost on the user. It uses a lightweight \"type\" system to track the locations of values and knowledge shared between the processes, and supports standard higher-order features that help with composition and modularity. Still, Klor does not impose any hard restrictions and embraces the interactive and dynamically typed spirit of Clojure: there is seamless interoperability with external Clojure code and standard REPL-based development is highly encouraged. All in all, Clojure's excellent support for concurrency, host interop and mature tooling makes it a great foundation to use for Klor.\r\n\r\nThe aim of this talk is to demonstrate Klor's usage and highlight some of the interesting implementation challenges we faced."
speaker-img: /img/speakers/lovro-lugovic-sung-shik-jongmans.png
slug: klor-choreographic-programming-in-clojure
speakers:
- name: Lovro Lugović
  biography: Lovro Lugović is a C++ software engineer turned Lisp hacker and a recent PhD graduate from the University of Southern Denmark, specializing in programming languages and concurrency theory. He likes functional programming, designing domain-specific languages and solving problems using a combination thereof.
  avatar: http://cfp.heartofclojure.eu/media/avatars/aaa_zYHyeSZ.jpg
  img: /img/speakers/lovro-lugovic.jpg
- name: Sung-Shik Jongmans
  biography: Sung-Shik Jongmans is language engineer at Swat.engineering. Before, he was associate professor at Open University of the Netherlands and researcher at the Dutch National Research Institute for Mathematics and Computer Science. His interests include programming languages, concurrency theory, and software engineering. And Clojure, of course.
  avatar: http://cfp.heartofclojure.eu/media/avatars/sung-square_MxfIe9g.png
  img: /img/speakers/sung-shik-jongmans.png
abstract: Over the past five years, the European Commission has invested over 250M EUR in its **Next Generation Internet** initiative. As part of this ambitious program, we are developing a new free and open-source core technology for distributed systems -- in Clojure, of course.
type: Talk
title: 'Klor: Choreographic Programming in Clojure'
code: L8VJWX
image: https://dynogee.com/gen?id=kr8gdk8c4ya552y&speaker=Lovro+Lugovi%C4%87%2C+Sung-Shik+Jongmans&title=Klor%3A+Choreographic+Programming+in+Clojure&type=Talk&img=https%3A//2024.heartofclojure.eu/img/speakers/lovro-lugovic-sung-shik-jongmans.png%3Fv%3D1721284426883
---
