# CUDA Profiler

## nvprof

```
nvprof [nvprof arguments]  ./executable_file [application <args>]
```

### arguments

* `--metrics`: specified the metrics that you want (`--all`)
* `--export-profile:`

## Night Compute

[Doc](https://docs.nvidia.com/nsight-compute/NsightComputeCli/index.html)

```
ncu [ncu arguments]  ./executable_file [application <args>]
```

* Set `EXPORT TMPDIR=...` to avoid needing root privilege
* notice the interface may different from version to version

### arguments

* `--print-source cuda,sass`
* `--import-source 1`
* `--page source	`
* `-o file_name`
*
