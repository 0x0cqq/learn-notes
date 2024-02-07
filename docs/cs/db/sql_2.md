# 中级 SQL

## 连接

## 视图

视图就是一个虚拟的表，提供数据和逻辑表的独立性，允许对于某些用户隐藏某些信息。

```sql
// 创建一个视图，create view ... as
create view faculty as
select ID, name, dept_name
from instructor;

// 使用视图，和使用表没有区别
select name
from faculty
where dept_name = 'Biology';

// 更新视图(一般不被允许)
// 条件：
// 1. from 只有一个 table；
// 2. select 只有列，没有任何修饰 
// 3. table 中没有 select 到的列可以设置为 null
// 4. 没有 group by 与 having  
insert into faculty values ('30765', 'Green', 'Music');
```

 物化视图（Materializing a view）：会在物理上开辟空间存储查询的结果

> 这样的视图涉及到更新的问题（视图维护），关系改变的时候，视图也需要改变。
> 

## 完整性约束

### 单表上的约束

- not null
- primary key(unique + not null)
- unique
- check(P)
- 复杂的 check：assertion
    - `create assertion check (not exists ...)`

### 多表上的完整性（参照完整性）

- foreign key(xxx) references yyy
    - insert, delete, update 都得检查完整性
    - 可能会产生 cascading delete

## 索引

`create index <索引名> on <关系名>(<属性列表>)`

`drop index <索引名>`

## 其他数据类型

- 日期
- 时间
- 时间戳
- 用户自定义类型
    - `create type ... as ... final`
- 大对象类型
    - blob: binary
    - clob: character

## 权限相关

标准 SQL  包括的表的权限：

- 选择
- 插入
- 更新
- 删除

Schema 的授权

- 索引
- 资源（允许创建新关系，视图不包含在其中）
- 替换（alternation）
- 丢弃（drop）
- 引用（references）

SQL 包括授予和收回权限的命令：

授予/收回：

```sql
grant/revoke <权限列表>
on <关系/视图名>
to <用户/角色列表>
```

> 授权情况必须在开始处理查询之前确认
> 

角色：`create role instructor;`

允许权限的再转移：`with grant option`

会产生授权图

收回的时候可能产生级联的收回