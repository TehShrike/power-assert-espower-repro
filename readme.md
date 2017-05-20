```sh
git clone git@github.com:TehShrike/power-assert-espower-repro.git
cd power-assert-espower-repro
npm i
npm t
```

Expected: pretty output

Observed:

```
/Users/josh/code/power-assert-espower-repro/node_modules/empower-core/lib/decorator.js:110
        ret = func.apply(thisObj, args);
                   ^
AssertionError: { value: true } deepEqual { value: 3 }
    at Decorator._callFunc (/Users/josh/code/power-assert-espower-repro/node_modules/empower-core/lib/decorator.js:110:20)
    at Decorator.concreteAssert (/Users/josh/code/power-assert-espower-repro/node_modules/empower-core/lib/decorator.js:103:17)
    at Function.decoratedAssert [as deepEqual] (/Users/josh/code/power-assert-espower-repro/node_modules/empower-core/lib/decorate.js:49:30)
    at test (/Users/josh/code/power-assert-espower-repro/test/test.js:6:9)
    at Object.<anonymous> (/Users/josh/code/power-assert-espower-repro/test/test.js:9:1)
    at Module._compile (module.js:571:32)
    at Object.extensions..js (/Users/josh/code/power-assert-espower-repro/node_modules/espower-loader/index.js:45:25)
    at Module.load (module.js:488:32)
    at tryModuleLoad (module.js:447:12)
    at Function.Module._load (module.js:439:3)
```
