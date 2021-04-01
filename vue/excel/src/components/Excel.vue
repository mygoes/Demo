<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
    <button class="export" @click="handleExport">导出</button>
    <button class="import">
      <label for="import"
        >导入<input type="file" id="import" @change="handleImport"
      /></label>
    </button>
  </div>
</template>

<script>
import { export_json_to_excel } from "@/utils/Export2Excel.js";
import XLSX from "xlsx";
export default {
  name: "index",
  data() {
    return {
      tableDataExport: {
        filename: "表格", // 导出的名称
        header: ["日期", "姓名", "地址"], // 表头名称
        filterVal: ["date", "name", "address"], // 表头数据名
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2016-05-05",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods: {
    /**
     * @author mygoes mygoes@sohu.com
     * @description 导出
     */
    handleExport() {
      let { header, filename, filterVal } = this.tableDataExport;
      let data = this.formatJson(filterVal, this.tableData);
      export_json_to_excel({
        header,
        data,
        filename,
      });
    },

    /**
     * @description:格式数据
     * @param {Array} filterVal 格式头
     * @param {Array} tableData 用来格式的表格数据
     * @return:
     */
    formatJson(filterVal, tableData) {
      return tableData.map((v) => {
        return filterVal.map((j) => {
          return v[j];
        });
      });
    },

    /**
     * @description: 导入
     * @param {type} event 事件对象
     */
    handleImport(event) {
      let fileReader = new FileReader();
      var file = event.currentTarget.files[0];
      // 回调函数
      fileReader.onload = (ev) => {
        try {
          let data = ev.target.result;
          let workbook = XLSX.read(data, {
            type: "binary",
          });
          // excel读取出的数据
          let excelData = XLSX.utils.sheet_to_json(
            workbook.Sheets[workbook.SheetNames[0]]
          );
          console.log(excelData);
          // 将上面数据的转换成 table需要的数据
          let arr = [];
          excelData.forEach((item) => {
            let obj = {};
            obj.date = item["日期"];
            obj.name = item["姓名"];
            obj.address = item["地址"];
            arr.push(obj);
          });
          this.tableData = [...arr];
        } catch (e) {
          window.alert("文件类型不正确！");
          return false;
        }
      };
      // 读取文件 成功后执行上面的回调函数
      fileReader.readAsBinaryString(file);
    },
  },
};
</script>

<style>
#import {
  display: none;
}
</style>