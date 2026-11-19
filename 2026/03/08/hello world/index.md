# hello world!

> 我高考专业是在知道自己不想选什么，然后在剩下的里面挑一个的情况下，选择了计算机。一开始并没有什么兴趣可言，直到我接触了很多种语言之后，反复在每种语言学习的一开始，输出一个“ hello world…

- Published: 2026-03-08
- Author: SpeechlessPanda
- Tags: 编程, 知识
- Original page: https://speechlesspanda.github.io/2026/03/08/hello%20world/index.html
- License: [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)

---

我高考专业是在知道自己不想选什么，然后在剩下的里面挑一个的情况下，选择了计算机。一开始并没有什么兴趣可言，直到我接触了很多种语言之后，反复在每种语言学习的一开始，输出一个“ hello world ”。我开始觉得技术是一件很有意思的事，甚至有一瞬间觉得是神圣的。这算是我对计算机的热情和兴趣被点燃的时刻，为了纪念这一时刻，有了这一短篇。我将在这里，用各种我学过的语言输出一遍“ hello world !”。

本文并非是专业技术性博客。只要我学过，且我想，就会出现。为了读起来方便一点，下面按编程语言、标记语言和 Shell 语言分了组。由于标记语言的展示形式多样，本文统一采用正文格式，或随机一种格式。

然后因为我学的语言会越来越多，所以这个短篇理论上永不完结（也有可能变成一个小长篇）。

## 编程语言

``` c
#include<stdio.h>
int main() {
    printf("hello world!\n");
    return 0;
}
```

``` cpp
#include<iostream>
using namespace std;
int main() {
    cout << "hello world!" << "\n";
    return 0;
}
```

``` python
print("hello world!")
```

``` javascript
console.log("hello world!");
```

``` java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("hello world!");
    }
}
```

``` rust
fn main() {
    println!("hello world!");
}
```

## 标记语言

``` html
<!DOCTYPE html>
<html>
<head>
    <title>hello world!</title>
</head>
<body>
    <p>hello world!</p>
</body>
</html>
```

``` latex
\documentclass{article}
\begin{document}
hello world!
\end{document}
```

``` markdown
hello world!
```

``` typst
hello world!
```

## Shell 语言

``` bash
echo "hello world!"
```

``` cmd
echo hello world!
```

``` powershell
Write-Host "hello world!"
```

``` fish
echo "hello world!"
```
