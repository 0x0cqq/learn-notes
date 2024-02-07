# CMake

一个构建工具，指示源代码该如何编译成为可执行未见。

## 基本命令

命令对大小写不敏感。

最小版本：

```cmake
CMAKE_MINIMUM_REQUIRED(VERSION 3.10)
``` 

项目名：

```cmake
PROJECT(my_project_name)
```

指定变量：

```cmake
#SET(CMAKE_C_COMPILER "/opt/gcc-7.3.0/bin/gcc")
SET(CMAKE_BUILD_TYPE RELEASE)
#SET(CMAKE_BUILD_TYPE DEBUG)
SET(CMAKE_CXX_FLAGS_DEBUG "$ENV{CXXFLAGS} -O0 -Wall -g -ggdb")
SET(CMAKE_CXX_FLAGS_RELEASE "$ENV{CXXFLAGS} -O3 -Wall")
SET(LIBRARY_OUTPUT_PATH ${PROJECT_BINARY_DIR}/libs)
SET(EXECUTABLE_OUTPUT_PATH ${PROJECT_BINARY_DIR}/bin)
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
add_library(name STATIC/SHARED/MODULE file1.c file2.c ...)
```

增加构建的可执行文件目标

```cmake 
ADD_EXECUTABLE(name file1.c file2.c ...)
```

添加编译选项：

```cmake
ADD_COMPILE_OPTIONS(-std=c++11)
```

## 辅助命令

打印消息

```cmake
MESSAGE("CMAKE_C_FLAGS = " ${CMAKE_C_FLAGS})
```

## 复杂项目

子文件夹：

```cmake
ADD_SUBDIRECTORY(src)
```

寻找其他包：

```cmake
find_package(MPI REQUIRED)
if(MPI_FOUND)
    SET(CMAKE_CXX_COMPILER mpicxx)   
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

https://blog.mbedded.ninja/programming/build-systems-and-package-managers/cmake/cmake-cheat-sheet/