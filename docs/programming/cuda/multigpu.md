# CUDA 多 GPU 编程

当我们有多块 GPU 卡的时候，如何使用多块 GPU 一起并行计算呢？

```cuda
for(int i = 0; i < 8; i++){
    cudaSetDevice(i);
    add<<<NB, NT>>>(dev_a[]);
}
```