# Quantum Fan-out: Circuit Optimizations and Technology Modeling

Gokhale, P., Koretsky, S., Huang, S., Majumder, S., Drucker, A., Brown, K. R., & Chong, F. T.. (2021). Quantum Fan-out: Circuit Optimizations and Technology Modeling. https://doi.org/10.1109/qce52317.2021.00045

SIMD:

preserve a program’s logical correctness by respecting constraints known as hazards.

In Quantum Circuit, the structural hazard is:

> exclusive activation: a qubit can be involved in at most one operation per timestep

In Quantum circuit, the parallelism is enabled by:

> simultaneously executing instructions on **disjoint** qubits.


## Idea

Observation:

> the structural hazard of exclusive activation is not actually enforced by most quantum hardware. 
> 
> In fact, it can be more natural for a quantum processor to simultaneously execute multiple operations on shared qubits through global interactions.

e.g.

![](quantum_fan_out.assets/2022-06-06-10-53-52.png)

Actually these four CNOT can be performed together.

## Controlled-U

![](quantum_fan_out.assets/2022-06-06-11-06-09.png)

![](quantum_fan_out.assets/2022-06-06-11-09-20.png)

decomposing U into a form amenable to ‘alignment’ of CNOTs


Into two parts:

### Shared-Control Single Qubit Gates

we only have access to the fan-out SIMD primitive

![](quantum_fan_out.assets/2022-06-06-11-13-22.png)

![](quantum_fan_out.assets/2022-06-06-11-13-52.png)

![](quantum_fan_out.assets/2022-06-06-11-14-12.png)

This pattern extends ad infinitum to more qubits—the total depth will always consist of five layers: two fan-out layers and three single-qubit gate layers.

### Shared-Control Toffoli’s

![](quantum_fan_out.assets/2022-06-06-11-18-39.png)

![](quantum_fan_out.assets/2022-06-06-11-20-36.png)

![](quantum_fan_out.assets/2022-06-06-11-27-03.png)

dependency between the right-most red CNOT and the subsequent blue CNOT is in fact a false dependency.

![](quantum_fan_out.assets/2022-06-06-11-28-22.png)

## Application

![](quantum_fan_out.assets/2022-06-06-11-39-09.png)

### SWAP Test

inner product

![](quantum_fan_out.assets/2022-06-06-11-42-14.png)

### Hadamard Test

![](quantum_fan_out.assets/2022-06-06-11-42-22.png)

### Quantum Memory

