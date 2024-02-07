# 高级 SQL

## 使用程序设计语言访问数据库

## 函数

```sql
// 返回整数的函数
create function dept_count (dept_name varchar(20))
	returns integer
	begin
	declare d_count integer;
		select count (*) into d_count
		from instructor
		where instructor.dept_name = dept_name
	return d_count;
end
// 使用函数
select dept_name, budget
from department
where dept_count (dept_name) > 12;
```

```sql
// 返回表的函数
create function instructor_of (dept_name char(20))
	returns table (
		ID varchar(5),
		name varchar(20),
		dept_name varchar(20),
		salary numeric(8,2))
	return table
		(select ID, name, dept_name, salary
		from instructor
		where instructor.dept_name = instructor_of.dept_name)
// 使用函数
select *
from table (instructor_of (‘Music’))
```

### 过程

```sql
// 过程，和函数很类似
create procedure dept_count_proc (in dept_name varchar(20), 
																	out d_count integer)
begin
	select count(*) into d_count
	from instructor
	where instructor.dept_name = dept_count_proc.dept_name
end
// 使用 call 调用过程
declare d_count integer;
call dept_count_proc( ‘Physics’, d_count);
```

## 控制结构

需要写在 begin end 之间

```sql
while <布尔表达式> do
	...
end while;
```

```sql
repeat
	...
until <布尔表达式>
end repeat;
```

```sql
declare n integer default 0;
for r as
		select budget from department
	do
		set n = n + r.budget
end for
```

```sql
if ...
	then ...
elseif ...
	then ...
else ...
end if
```

```sql
signal out_of_classroom_seats; // 引发异常

// 异常处理语句
declare out_of_classroom_seats condition
declare exit handler for out_of_classroom_seats
begin
	...
end
```

## 触发器——Trigger

可以在 before 或者 after 某些操作时候自动进行某些操作

```sql
create trigger setnull_trigger before update of takes
referencing new row as nrow
referencing old row as orow
for each row
when (nrow.grade = ‘ ‘)
begin atomic
	set nrow.grade = null;
end
```

禁用

## 递归查询

```sql
with recursive rec_prereq(course_id, prereq_id) as (
		select course_id, prereq_id
		from prereq
	union
		select rec_prereq.course_id, prereq.prereq_id
		from rec_prereq, prereq
		where rec_prereq.prereq_id = prereq.course_id
	)
select *
from rec_prereq;
```