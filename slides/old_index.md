

# lambdaisland/regal
{: style="font-size: 4rem; text-align: center; margin-top: 5rem"}

----

# <3
{: style="font-size: 3rem; text-align: center; margin: 0; padding: 0"}

# everybody loves regex
{: style="font-size: 4rem; text-align: center"}

# <3
{: style="font-size: 3rem; text-align: center; margin: 0; padding: 0"}

----

``` clojure
(def uri-regex
  #?(:clj
     #"\A(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)?(\?([^#]*))?(#(.*))?\z"
     :cljs
     #"^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)?(\?([^#]*))?(#(.*))?$"))

(def authority-regex
  #?(:clj
     #"\A(([^:]*)(:(.*))?@)?([^:]*)(:(\d*))?\z"
     :cljs
     #"^(([^:]*)(:(.*))?@)?([^:]*)(:(\d*))?$"))
```
{: style="margin-top: 2.5rem"}

----

# Introducing Regal

```clojure
{:deps
 {lambdaisland/regal
  {:git/url "https://github.com/lambdaisland/regal"
   :sha "9a40397ba5f985bfc0a7cb03b5e5a8af835da0b1"}}}
```

----

``` clojure
(require '[lambdaisland.regal :as regal])

(regal/regex [:cat
              :start
              [:+ :word]
              "="
              [:+ :digit]
              :end])
;;=>
#"\A\w+=\d+\z"
```
{: style="margin-top: 4rem"}

----

``` clojure
(require '[lambdaisland.regal.generator :as regal-gen]
         '[clojure.test.check.generators :as gen])

(gen/sample
 (regal-gen/gen [:cat
                 :start
                 [:+ :word]
                 "="
                 [:+ :digit]
                 :end]))
;;=>
("Q=0" "zB=7" "_=496" "FA=28" "b=03019" "_=2"
 "N_h_=37367" "NYUL=609" "t=6795454" "U_dBsav2_E=6")
```
{: style="margin-top: 2rem"}

---

``` clojure
(require '[lambdaisland.regal.spec-alpha
           :refer [spec] :rename {spec regal-spec}])


(s/def ::x-then-y      (regal-spec [:cat [:+ "x"] "-" [:+ "y"]]))
(s/def ::xy-with-stars (regal-spec [:cat "*" ::x-then-y "*"]))

(s/valid? ::xy-with-stars "*xxx-yy*")
;; => true

(gen/sample (s/gen ::xy-with-stars))
;;=>
("*x-y*" "*xx-y*" "*x-y*" "*xxxx-y*" "*xxx-yyyy*" "*xxxx-yyy*"
 "*xxxxxxx-yyyyy*" "*xx-yyy*" "*xxxxx-y*" "*xxx-yyyy*")
```

---

Malli!

```clojure
(require '[malli.core :as m]
         '[lambdaisland.regal.malli :as regal-malli])

(m/validate [:regal [:+ "x"]] "xxx" {:registry regal-malli/registry})
;;=> "xxx"
```

---

clojure.spec.alpha

```clojure
(require '[lambdaisland.regal.spec-alpha :as regal-spec]
         '[clojure.spec.alpha :as s])

(s/valid :lambdaisland.regal/form [:cat [:+ "x"] "-" [:+ "y"]])
;; => true

(gen/sample :lambdaisland.regal/form)
```
{: style="margin-top: 4rem"}

---

clojure.spec.alpha

```clojure
(require '[lambdaisland.regal.spec-alpha :as regal-spec]
         '[clojure.spec.alpha :as s])

(s/valid :lambdaisland.regal/form [:cat [:+ "x"] "-" [:+ "y"]])
;; => true

(gen/sample :lambdaisland.regal/form)
;; StackOverflow
```
{: style="margin-top: 4rem"}

---

Parsing!

```
(require '[lambdaisland.regal.parse :refer [parse]])

(parse #"(http|https)://(\w+)")
;; =>
[:cat
 [:capture
  [:alt "http" "https"]
  "://"
  [:capture [:+ :word]]]]
```

---

Parsing! (not... quite)

```
(require '[lambdaisland.regal.parse :refer [parse]])

(parse #"(http|https)://(\w+)")
;; =>
[:cat
 [:capture
  [:alt "http" "https"]
  "://"
  [:capture [:+ :word]]]]
```
{: style="text-decoration: line-through"}


---

lambdaisland/uri (Before)

``` clojure
(def uri-regex
  #?(:clj #"\A(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)?(\?([^#]*))?(#(.*))?\z"
     :cljs #"^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)?(\?([^#]*))?(#(.*))?$"))
```

---

lambdaisland/uri (After)

``` clojure
(def uri-regal [:cat
                :start
                ;; scheme/protocol
                [:? [:capture [:capture [:+ [:not ":/?#"]]] ":"]]
                ;; authority
                [:? [:capture "//" [:capture [:* [:not "/?#"]]]]]
                ;; path
                [:? [:capture [:* [:not "?#"]]]]
                ;; query
                [:? [:capture "?" [:capture [:* [:not "#"]]]]]
                ;; fragment
                [:? [:capture "#" [:capture [:* :any]]]]
                :end])
```

---

ANSI escape codes

> The ESC [ is followed by any number (including none) of "parameter bytes" in
> the range 0x30–0x3F (ASCII 0–9:;<=>?), then by any number of "intermediate
> bytes" in the range 0x20–0x2F (ASCII space and !"#$%&'()*+,-./), then finally
> by a single "final byte" in the range 0x40–0x7E (ASCII @A–Z[\]^_`a–z{|}~).

---

``` clojure
(s/def ::param-byte  (regal-spec [:class [\0 \?]]))
(s/def ::interm-byte (regal-spec [:class [\space \/]]))
(s/def ::final-byte  (regal-spec [:class [\@ \~]]))

(s/def ::ansi-command
  (regal-spec
   [:cat
    ESC "["
    [:* ::param-byte]
    [:* ::interm-byte]
    ::final-byte]))

(sgen/sample (s/gen ::ansi-command))
;; =>
("\e[C" "\e[,w" "\e[9!v" "\e[+$d" "\e[9?96 'l" "\e[971<3w")
```

---

# lambdaisland/regal

- Pre-alpha, developed in the open
- Cross platform Clojure/ClojureScript
- Papers over differences between Java/JavaScript RegEx
- Contributions welcome! (Thanks Moritz!)

---

# Lambda Island Open Source

<article class="cf">
<div class="fl w-50" markdown="1">

- **Kaocha** - test runner from the future
- **deep-diff**  - compare data structures
- **uri** - uri util lib, chain links
- **edn-lines** - read/write edn-lines files
- **fetch** - ClojureScript HTTP client

</div>
<div class="fl w-50" markdown="1">

- **glogi**  - ClojureScript logging library
- **ansi**  - parse ansi escape code
- **trikl**  - terminal UI library (WIP)
- **zipper-viz** - visualize zippers

</div>
</article>

---
<!-- {: fullscreen-img="img/opencollective.png"} -->

<!-- --- -->
<!-- {: fullscreen-img="img/backers.png"} -->

<!-- --- -->
<!-- {:.header} -->

<!-- # THE END -->
