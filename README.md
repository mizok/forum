1. 這個專案有採用Git Submodule

必須要git clone https://github.com/mizok/forum-express.git
(記得要init submodule)

2. submodule init完之後, 接著要在本機環境安裝mySql (可以參考網路教學) 

3. 安裝完之後在/forum-express底下執行

```
npx sequelize db:migrate 
npx sequelize db:seed:all
```

`db:migrate` 是同步資料庫結構
`db:seed:all` 則是生成資料庫初始mock檔案
``
4. 接著就可以開始run 專案了(記得vue 的web server 和 node.js 的dev server都要打開)
