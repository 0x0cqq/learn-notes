# HSQLDB

## 一条指令的前世今生

### `org.hsqldb.server.ServerConnection`

`receiveResult` 函数:

+ 从 `dataInput` 读入指令，转换为 `Result` 类型的 `resultIn`
+ 根据 `resultIn.getType()` 分配给不同的处理函数
+ `default` 情况下是分配给 `session.execute()` 函数

### `org.hsqldb.Session` 

`execute` 函数：

输入一个 `Result cmd`，根据 `cmd.mode` 选择接下来的处理：

观察到是 switch 到了 `EXECDIRECT` 分支，进入 `executeDirectStatement` 函数。

`executeDirectStatement()` 函数：

+ 获得 SQL 查询字符串
+ 通过 `parser.compileStatements()` 编译 SQL 语句到 `Statement` 类型的 `list`
+ 转入 `executeCompiledStatement` 函数。


`executeCompiledStatement()` 函数：

+ 一些判断，是不是 transaction
+ 从 rowActionList 里读一个 index 出来（这就是 transaction，跳转到了 `TransactionMangager2PL.java`
+ 执行这个 Statement, 调用 Statement 类的 `execute` 函数，跑到了 `StatementDMQL.java` 里面的
+ 然后调用了 `GetResult` 函数，这次跳到了 `StatementInsert.java` 函数里面，是 SimpleInsert
+ 根据 Schema 的 Column 的类型，解出来数据（`getInsertData` 函数），然后进入 `InsertSingleRow` 函数。

`StatementDML.InsertSingleRow()` 函数：

+ `baseTable.insertSingleRow(session, store, data, null)`，然后跳转到了 `Table.java`，然后就要对 Row 进行操作了，这里的代码是 `Row row = (Row) store.getNewCachedObject(session, data, true);`
    + `RowStoreAVLMemory.getNewCachedObject()`函数：
        + 新建一个 Row ：`RowAVL` 构造函数，在内新建一个 `AVL` 树节点，
        + 新建一个 Action，插入到 row 里面：`RowAction.addInsertAction(session, table, this, row)`
+ `session.addInsertAction(this, store, row, changedCols);` ，随后调用 `database.txManager.addInsertAction`(是 `TransactionManager2PL.addInsertAction`)
    + 调用了 `store.indexRow(session, row)` 把这个行存进去

`RowStoreAVL.indexRow()` 函数：

+ ...

然后一路回退，回到 `executeCompiledStatement` 函数，然后再最后进入 `commit` 环节，`Session.commit` 函数，`chain=false`

`Session.commit()`函数：

+ 进入 TransactionManager2PL，调用 `commitTransaction` 函数；pick out 那个 row action，然后进入 `RowAction.commit()` 函数，应该是 commit 这个 Action
+ 又进入了 `RowStoreAVLMemory` 这个文件的 `commitRow` 函数
+ 进入 `EndTransaction` 函数

至此， Execute 就算是完成了，后面的就是一些简单的收尾

（这应该是某种类型的 table，因为没有存储到 disk 里面）

测试另一个表的结果有所不同，在 InsertSingle
Row 中，跳到了 `RowStoreAVLDisk` 类下面的 `getNewCachedObject`，然后进入这里的 `add` 函数。

`RowStoreAVLDisk.add(session, row, tx)` 函数:

+ 计算对象的大小（`getStorageSize`）
+ 找到文件里面的位置（`getFilePosition`），返回的是一个 free 的 block （语出 `TableSpaceManagerBlocks` 类）
+ 加入文件的缓存: `DataFileCache.add()`
    + 写入缓存 `Cache.put()` 
        + 先要准备 `Cache.preparePut`（好像是 check 一下会不会 exceed）
        + 然后进行put？`Cache.putNoCheck` 函数

这应该只是放进了缓存，让我们退出这个客户端试试：

关掉之后，`receiveResult` 函数进入 `Result.write` 函数（在那个大的 switch 后面），然后似乎写到内存里一些什么东西，但看起来像是 update count，还是没看到我 insert 的东西到哪里去了...

让我看看题目是什么
