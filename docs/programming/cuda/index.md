# CUDA

CUDA 是 Nvidia 公司的 GPU 编程框架。

## 检查 GPU 设备

运行 `nvidia-smi` 指令。

```
+-----------------------------------------------------------------------------+
| NVIDIA-SMI 460.73.01    Driver Version: 460.73.01    CUDA Version: 11.2     |
|-------------------------------+----------------------+----------------------+
| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
|                               |                      |               MIG M. |
|===============================+======================+======================|
|   0  Tesla P100-PCIE...  Off  | 00000000:04:00.0 Off |                    0 |
| N/A   27C    P0    26W / 250W |      0MiB / 16280MiB |      0%      Default |
|                               |                      |                  N/A |
+-------------------------------+----------------------+----------------------+

+-----------------------------------------------------------------------------+
| Processes:                                                                  |
|  GPU   GI   CI        PID   Type   Process name                  GPU Memory |
|        ID   ID                                                   Usage      |
|=============================================================================|
|  No running processes found                                                 |
+-----------------------------------------------------------------------------+
```

在 1 号 GPU 运行 CUDA 程序：`export CUDA_VISIBLE_DEVICES=1`


### 其他关于 GPU 设备的信息

计算能力（Compute capability）

## CUDA 程序与 CUDA环境

CUDA 程序采用 `nvcc` 编译，这个编译器基于 C++ ，是 C++(gcc) 的超集。

CUDA 程序的后缀名是 `.cu`

CUDA 编译器版本一般是 10.0 ，CUDA 编译选项中需要


