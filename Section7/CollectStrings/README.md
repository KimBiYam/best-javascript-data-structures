### 개요

객체를 인자로 받아서 해당 객체의 모든 문자열을 배열로 반환하는 `collectStrings` 함수를 작성한다.

```js
const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj) // ["foo", "bar", "baz"])
```
