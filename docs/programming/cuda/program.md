# CUDA 程序基本结构

GPU 只是设备，控制权仍然在主机的 CPU 手里。

通常的程序：

```
int main(){
    // cudaMalloc 分配主机和设备内存

    // do some work at host

    // cudaMemcpy(...) 从主机到设备

    // kernel function call ...
    my_kernel_function<<<1, 2>>>();

    // cudaMemcpy(...) 从设备到主机

    // cudaFree(...) 释放设备内存


    // host code ...

    return 0;
}
```

## Kernel Function

核函数的定义：

```cuda
__global__ void my_kernel_function(){
    // do something
}
```

核函数的调用：

```cuda
my_kernel_function<<<2 , 4>>> ();
```
!!!note
    第一个参数是 Block 数量，称为 grid size；第二个参数是 Thread in Block 的数量，称为 block size。

    第一个参数最大是 $2^{31} - 1$ ，第二个参数最大是 $1024$


builtin 的变量：

+ gridDim.x 是第一个参数（网格）的大小；blockIdx.x 是第一个参数（线程块）的 Id
+ blockDim.x 是第二个参数（线程块）的大小；threadIdx.x 是第二个参数（线程块）的 Id

