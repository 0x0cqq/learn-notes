# CMake

一个构建工具，指示源代码该如何编译成为可执文件。

## 参考资料

+ Modern CMake: https://modern-cmake-cn.github.io/Modern-CMake-zh_CN/

+ CMake CheatSheet: https://blog.mbedded.ninja/programming/build-systems-and-package-managers/cmake/cmake-cheat-sheet/


## 基本命令

命令对大小写不敏感，但推荐使用小写。

变量推荐使用大写。

最小版本：

```cmake
cmake_minimum_required(VERSION 3.10)
``` 

项目名：

```cmake
project(my_project_name CXX CUDA)
```

指定变量：

```cmake
#set(CMAKE_C_COMPILER "/opt/gcc-7.3.0/bin/gcc")
set(CMAKE_BUILD_TYPE RELEASE)
#set(CMAKE_BUILD_TYPE DEBUG)
set(CMAKE_CXX_FLAGS_DEBUG "$ENV{CXXFLAGS} -O0 -Wall -g -ggdb")
set(CMAKE_CXX_FLAGS_RELEASE "$ENV{CXXFLAGS} -O3 -Wall")
set(LIBRARY_OUTPUT_PATH ${PROJECT_BINARY_DIR}/libs)
set(EXECUTABLE_OUTPUT_PATH ${PROJECT_BINARY_DIR}/bin)
```

使用变量：

```cmake
${CMAKE_C_COMPILER}
```

指定 include path：

```cmake
include_directories(dir1 dir2 ...)
```

增加构建的 lib 目标：

```cmake
add_library(name [STATIC/SHARED/MODULE] file1.c file2.c ...)
```

增加构建的可执行文件目标

```cmake 
add_executable(name file1.c file2.c ...)
```

添加编译选项：

```cmake
set(CMAKE_CXX_DEBUG_FLAGS "${CMAKE_CXX_DEBUG_FLAGS} -Wall -Wextra")
```

## 辅助命令

打印消息

```cmake
message("CMAKE_C_FLAGS = " ${CMAKE_C_FLAGS})
```

## 复杂项目

子文件夹：

```cmake
add_subfdirectory(src)
```

寻找其他包：

```cmake
find_package(MPI REQUIRED)
if(MPI_FOUND)
    set(CMAKE_CXX_COMPILER mpicxx)   
endif()
```

## 如何使用 CMake 构建项目

```sh
mkdir build
cd build
cmake ..
make -j
```

## 参考

