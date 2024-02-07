# PyTorch

## 安装

+ 装 conda，记得换源
+ 记得注意 CPU 和 GPU，以及 cuda 版本
+ 从 conda 装比从 pip 装顺利一些


## 如何写一个 Module

继承 `nn.Module` 类

* `nn.Parameter`: 参数


### 如何写一个 Layer

继承 `torch.autograd.Function` 类。

重写 `forward` 和 `backward` 函数，应用 `@staticmethod` 修饰符

在 `Module` 的 `forward` 里面 `.apply`

## Distributed Training

torch.distributed.init_process_group 初始化


## Automatic Mixed Precision

```python
from torch.cuda.amp import autocast

flag = True

with autocast(flag):
    pass
```