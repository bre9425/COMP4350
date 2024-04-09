/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 496.0, "minX": 0.0, "maxY": 2087.0, "series": [{"data": [[0.0, 496.0], [0.1, 496.0], [0.2, 496.0], [0.3, 496.0], [0.4, 496.0], [0.5, 528.0], [0.6, 528.0], [0.7, 528.0], [0.8, 528.0], [0.9, 528.0], [1.0, 531.0], [1.1, 531.0], [1.2, 531.0], [1.3, 531.0], [1.4, 531.0], [1.5, 579.0], [1.6, 579.0], [1.7, 579.0], [1.8, 579.0], [1.9, 579.0], [2.0, 592.0], [2.1, 592.0], [2.2, 592.0], [2.3, 592.0], [2.4, 592.0], [2.5, 594.0], [2.6, 594.0], [2.7, 594.0], [2.8, 594.0], [2.9, 594.0], [3.0, 595.0], [3.1, 595.0], [3.2, 595.0], [3.3, 595.0], [3.4, 595.0], [3.5, 598.0], [3.6, 598.0], [3.7, 598.0], [3.8, 598.0], [3.9, 598.0], [4.0, 601.0], [4.1, 601.0], [4.2, 601.0], [4.3, 601.0], [4.4, 601.0], [4.5, 605.0], [4.6, 605.0], [4.7, 605.0], [4.8, 605.0], [4.9, 605.0], [5.0, 614.0], [5.1, 614.0], [5.2, 614.0], [5.3, 614.0], [5.4, 614.0], [5.5, 643.0], [5.6, 643.0], [5.7, 643.0], [5.8, 643.0], [5.9, 643.0], [6.0, 689.0], [6.1, 689.0], [6.2, 689.0], [6.3, 689.0], [6.4, 689.0], [6.5, 696.0], [6.6, 696.0], [6.7, 696.0], [6.8, 696.0], [6.9, 696.0], [7.0, 696.0], [7.1, 696.0], [7.2, 696.0], [7.3, 696.0], [7.4, 696.0], [7.5, 707.0], [7.6, 707.0], [7.7, 707.0], [7.8, 707.0], [7.9, 707.0], [8.0, 708.0], [8.1, 708.0], [8.2, 708.0], [8.3, 708.0], [8.4, 708.0], [8.5, 788.0], [8.6, 788.0], [8.7, 788.0], [8.8, 788.0], [8.9, 788.0], [9.0, 792.0], [9.1, 792.0], [9.2, 792.0], [9.3, 792.0], [9.4, 792.0], [9.5, 797.0], [9.6, 797.0], [9.7, 797.0], [9.8, 797.0], [9.9, 797.0], [10.0, 798.0], [10.1, 798.0], [10.2, 798.0], [10.3, 798.0], [10.4, 798.0], [10.5, 810.0], [10.6, 810.0], [10.7, 810.0], [10.8, 810.0], [10.9, 810.0], [11.0, 816.0], [11.1, 816.0], [11.2, 816.0], [11.3, 816.0], [11.4, 816.0], [11.5, 821.0], [11.6, 821.0], [11.7, 821.0], [11.8, 821.0], [11.9, 821.0], [12.0, 827.0], [12.1, 827.0], [12.2, 827.0], [12.3, 827.0], [12.4, 827.0], [12.5, 828.0], [12.6, 828.0], [12.7, 828.0], [12.8, 828.0], [12.9, 828.0], [13.0, 837.0], [13.1, 837.0], [13.2, 837.0], [13.3, 837.0], [13.4, 837.0], [13.5, 874.0], [13.6, 874.0], [13.7, 874.0], [13.8, 874.0], [13.9, 874.0], [14.0, 892.0], [14.1, 892.0], [14.2, 892.0], [14.3, 892.0], [14.4, 892.0], [14.5, 893.0], [14.6, 893.0], [14.7, 893.0], [14.8, 893.0], [14.9, 893.0], [15.0, 895.0], [15.1, 895.0], [15.2, 895.0], [15.3, 895.0], [15.4, 895.0], [15.5, 901.0], [15.6, 901.0], [15.7, 901.0], [15.8, 901.0], [15.9, 901.0], [16.0, 903.0], [16.1, 903.0], [16.2, 903.0], [16.3, 903.0], [16.4, 903.0], [16.5, 904.0], [16.6, 904.0], [16.7, 904.0], [16.8, 904.0], [16.9, 904.0], [17.0, 905.0], [17.1, 905.0], [17.2, 905.0], [17.3, 905.0], [17.4, 905.0], [17.5, 910.0], [17.6, 910.0], [17.7, 910.0], [17.8, 910.0], [17.9, 910.0], [18.0, 932.0], [18.1, 932.0], [18.2, 932.0], [18.3, 932.0], [18.4, 932.0], [18.5, 961.0], [18.6, 961.0], [18.7, 961.0], [18.8, 961.0], [18.9, 961.0], [19.0, 980.0], [19.1, 980.0], [19.2, 980.0], [19.3, 980.0], [19.4, 980.0], [19.5, 988.0], [19.6, 988.0], [19.7, 988.0], [19.8, 988.0], [19.9, 988.0], [20.0, 993.0], [20.1, 993.0], [20.2, 993.0], [20.3, 993.0], [20.4, 993.0], [20.5, 993.0], [20.6, 993.0], [20.7, 993.0], [20.8, 993.0], [20.9, 993.0], [21.0, 994.0], [21.1, 994.0], [21.2, 994.0], [21.3, 994.0], [21.4, 994.0], [21.5, 996.0], [21.6, 996.0], [21.7, 996.0], [21.8, 996.0], [21.9, 996.0], [22.0, 998.0], [22.1, 998.0], [22.2, 998.0], [22.3, 998.0], [22.4, 998.0], [22.5, 1000.0], [22.6, 1000.0], [22.7, 1000.0], [22.8, 1000.0], [22.9, 1000.0], [23.0, 1003.0], [23.1, 1003.0], [23.2, 1003.0], [23.3, 1003.0], [23.4, 1003.0], [23.5, 1004.0], [23.6, 1004.0], [23.7, 1004.0], [23.8, 1004.0], [23.9, 1004.0], [24.0, 1006.0], [24.1, 1006.0], [24.2, 1006.0], [24.3, 1006.0], [24.4, 1006.0], [24.5, 1007.0], [24.6, 1007.0], [24.7, 1007.0], [24.8, 1007.0], [24.9, 1007.0], [25.0, 1011.0], [25.1, 1011.0], [25.2, 1011.0], [25.3, 1011.0], [25.4, 1011.0], [25.5, 1011.0], [25.6, 1011.0], [25.7, 1011.0], [25.8, 1011.0], [25.9, 1011.0], [26.0, 1016.0], [26.1, 1016.0], [26.2, 1016.0], [26.3, 1016.0], [26.4, 1016.0], [26.5, 1017.0], [26.6, 1017.0], [26.7, 1017.0], [26.8, 1017.0], [26.9, 1017.0], [27.0, 1022.0], [27.1, 1022.0], [27.2, 1022.0], [27.3, 1022.0], [27.4, 1022.0], [27.5, 1022.0], [27.6, 1022.0], [27.7, 1022.0], [27.8, 1022.0], [27.9, 1022.0], [28.0, 1026.0], [28.1, 1026.0], [28.2, 1026.0], [28.3, 1026.0], [28.4, 1026.0], [28.5, 1081.0], [28.6, 1081.0], [28.7, 1081.0], [28.8, 1081.0], [28.9, 1081.0], [29.0, 1087.0], [29.1, 1087.0], [29.2, 1087.0], [29.3, 1087.0], [29.4, 1087.0], [29.5, 1089.0], [29.6, 1089.0], [29.7, 1089.0], [29.8, 1089.0], [29.9, 1089.0], [30.0, 1089.0], [30.1, 1089.0], [30.2, 1089.0], [30.3, 1089.0], [30.4, 1089.0], [30.5, 1090.0], [30.6, 1090.0], [30.7, 1090.0], [30.8, 1090.0], [30.9, 1090.0], [31.0, 1091.0], [31.1, 1091.0], [31.2, 1091.0], [31.3, 1091.0], [31.4, 1091.0], [31.5, 1093.0], [31.6, 1093.0], [31.7, 1093.0], [31.8, 1093.0], [31.9, 1093.0], [32.0, 1093.0], [32.1, 1093.0], [32.2, 1093.0], [32.3, 1093.0], [32.4, 1093.0], [32.5, 1094.0], [32.6, 1094.0], [32.7, 1094.0], [32.8, 1094.0], [32.9, 1094.0], [33.0, 1094.0], [33.1, 1094.0], [33.2, 1094.0], [33.3, 1094.0], [33.4, 1094.0], [33.5, 1094.0], [33.6, 1094.0], [33.7, 1094.0], [33.8, 1094.0], [33.9, 1094.0], [34.0, 1095.0], [34.1, 1095.0], [34.2, 1095.0], [34.3, 1095.0], [34.4, 1095.0], [34.5, 1096.0], [34.6, 1096.0], [34.7, 1096.0], [34.8, 1096.0], [34.9, 1096.0], [35.0, 1102.0], [35.1, 1102.0], [35.2, 1102.0], [35.3, 1102.0], [35.4, 1102.0], [35.5, 1103.0], [35.6, 1103.0], [35.7, 1103.0], [35.8, 1103.0], [35.9, 1103.0], [36.0, 1105.0], [36.1, 1105.0], [36.2, 1105.0], [36.3, 1105.0], [36.4, 1105.0], [36.5, 1106.0], [36.6, 1106.0], [36.7, 1106.0], [36.8, 1106.0], [36.9, 1106.0], [37.0, 1107.0], [37.1, 1107.0], [37.2, 1107.0], [37.3, 1107.0], [37.4, 1107.0], [37.5, 1111.0], [37.6, 1111.0], [37.7, 1111.0], [37.8, 1111.0], [37.9, 1111.0], [38.0, 1112.0], [38.1, 1112.0], [38.2, 1112.0], [38.3, 1112.0], [38.4, 1112.0], [38.5, 1114.0], [38.6, 1114.0], [38.7, 1114.0], [38.8, 1114.0], [38.9, 1114.0], [39.0, 1115.0], [39.1, 1115.0], [39.2, 1115.0], [39.3, 1115.0], [39.4, 1115.0], [39.5, 1125.0], [39.6, 1125.0], [39.7, 1125.0], [39.8, 1125.0], [39.9, 1125.0], [40.0, 1125.0], [40.1, 1125.0], [40.2, 1125.0], [40.3, 1125.0], [40.4, 1125.0], [40.5, 1125.0], [40.6, 1125.0], [40.7, 1125.0], [40.8, 1125.0], [40.9, 1125.0], [41.0, 1168.0], [41.1, 1168.0], [41.2, 1168.0], [41.3, 1168.0], [41.4, 1168.0], [41.5, 1175.0], [41.6, 1175.0], [41.7, 1175.0], [41.8, 1175.0], [41.9, 1175.0], [42.0, 1182.0], [42.1, 1182.0], [42.2, 1182.0], [42.3, 1182.0], [42.4, 1182.0], [42.5, 1185.0], [42.6, 1185.0], [42.7, 1185.0], [42.8, 1185.0], [42.9, 1185.0], [43.0, 1192.0], [43.1, 1192.0], [43.2, 1192.0], [43.3, 1192.0], [43.4, 1192.0], [43.5, 1195.0], [43.6, 1195.0], [43.7, 1195.0], [43.8, 1195.0], [43.9, 1195.0], [44.0, 1196.0], [44.1, 1196.0], [44.2, 1196.0], [44.3, 1196.0], [44.4, 1196.0], [44.5, 1199.0], [44.6, 1199.0], [44.7, 1199.0], [44.8, 1199.0], [44.9, 1199.0], [45.0, 1199.0], [45.1, 1199.0], [45.2, 1199.0], [45.3, 1199.0], [45.4, 1199.0], [45.5, 1200.0], [45.6, 1200.0], [45.7, 1200.0], [45.8, 1200.0], [45.9, 1200.0], [46.0, 1200.0], [46.1, 1200.0], [46.2, 1200.0], [46.3, 1200.0], [46.4, 1200.0], [46.5, 1202.0], [46.6, 1202.0], [46.7, 1202.0], [46.8, 1202.0], [46.9, 1202.0], [47.0, 1203.0], [47.1, 1203.0], [47.2, 1203.0], [47.3, 1203.0], [47.4, 1203.0], [47.5, 1204.0], [47.6, 1204.0], [47.7, 1204.0], [47.8, 1204.0], [47.9, 1204.0], [48.0, 1204.0], [48.1, 1204.0], [48.2, 1204.0], [48.3, 1204.0], [48.4, 1204.0], [48.5, 1206.0], [48.6, 1206.0], [48.7, 1206.0], [48.8, 1206.0], [48.9, 1206.0], [49.0, 1206.0], [49.1, 1206.0], [49.2, 1206.0], [49.3, 1206.0], [49.4, 1206.0], [49.5, 1207.0], [49.6, 1207.0], [49.7, 1207.0], [49.8, 1207.0], [49.9, 1207.0], [50.0, 1208.0], [50.1, 1208.0], [50.2, 1208.0], [50.3, 1208.0], [50.4, 1208.0], [50.5, 1210.0], [50.6, 1210.0], [50.7, 1210.0], [50.8, 1210.0], [50.9, 1210.0], [51.0, 1212.0], [51.1, 1212.0], [51.2, 1212.0], [51.3, 1212.0], [51.4, 1212.0], [51.5, 1213.0], [51.6, 1213.0], [51.7, 1213.0], [51.8, 1213.0], [51.9, 1213.0], [52.0, 1213.0], [52.1, 1213.0], [52.2, 1213.0], [52.3, 1213.0], [52.4, 1213.0], [52.5, 1218.0], [52.6, 1218.0], [52.7, 1218.0], [52.8, 1218.0], [52.9, 1218.0], [53.0, 1219.0], [53.1, 1219.0], [53.2, 1219.0], [53.3, 1219.0], [53.4, 1219.0], [53.5, 1226.0], [53.6, 1226.0], [53.7, 1226.0], [53.8, 1226.0], [53.9, 1226.0], [54.0, 1235.0], [54.1, 1235.0], [54.2, 1235.0], [54.3, 1235.0], [54.4, 1235.0], [54.5, 1251.0], [54.6, 1251.0], [54.7, 1251.0], [54.8, 1251.0], [54.9, 1251.0], [55.0, 1265.0], [55.1, 1265.0], [55.2, 1265.0], [55.3, 1265.0], [55.4, 1265.0], [55.5, 1268.0], [55.6, 1268.0], [55.7, 1268.0], [55.8, 1268.0], [55.9, 1268.0], [56.0, 1279.0], [56.1, 1279.0], [56.2, 1279.0], [56.3, 1279.0], [56.4, 1279.0], [56.5, 1290.0], [56.6, 1290.0], [56.7, 1290.0], [56.8, 1290.0], [56.9, 1290.0], [57.0, 1292.0], [57.1, 1292.0], [57.2, 1292.0], [57.3, 1292.0], [57.4, 1292.0], [57.5, 1294.0], [57.6, 1294.0], [57.7, 1294.0], [57.8, 1294.0], [57.9, 1294.0], [58.0, 1298.0], [58.1, 1298.0], [58.2, 1298.0], [58.3, 1298.0], [58.4, 1298.0], [58.5, 1299.0], [58.6, 1299.0], [58.7, 1299.0], [58.8, 1299.0], [58.9, 1299.0], [59.0, 1301.0], [59.1, 1301.0], [59.2, 1301.0], [59.3, 1301.0], [59.4, 1301.0], [59.5, 1304.0], [59.6, 1304.0], [59.7, 1304.0], [59.8, 1304.0], [59.9, 1304.0], [60.0, 1306.0], [60.1, 1306.0], [60.2, 1306.0], [60.3, 1306.0], [60.4, 1306.0], [60.5, 1307.0], [60.6, 1307.0], [60.7, 1307.0], [60.8, 1307.0], [60.9, 1307.0], [61.0, 1310.0], [61.1, 1310.0], [61.2, 1310.0], [61.3, 1310.0], [61.4, 1310.0], [61.5, 1314.0], [61.6, 1314.0], [61.7, 1314.0], [61.8, 1314.0], [61.9, 1314.0], [62.0, 1326.0], [62.1, 1326.0], [62.2, 1326.0], [62.3, 1326.0], [62.4, 1326.0], [62.5, 1341.0], [62.6, 1341.0], [62.7, 1341.0], [62.8, 1341.0], [62.9, 1341.0], [63.0, 1371.0], [63.1, 1371.0], [63.2, 1371.0], [63.3, 1371.0], [63.4, 1371.0], [63.5, 1372.0], [63.6, 1372.0], [63.7, 1372.0], [63.8, 1372.0], [63.9, 1372.0], [64.0, 1373.0], [64.1, 1373.0], [64.2, 1373.0], [64.3, 1373.0], [64.4, 1373.0], [64.5, 1383.0], [64.6, 1383.0], [64.7, 1383.0], [64.8, 1383.0], [64.9, 1383.0], [65.0, 1385.0], [65.1, 1385.0], [65.2, 1385.0], [65.3, 1385.0], [65.4, 1385.0], [65.5, 1389.0], [65.6, 1389.0], [65.7, 1389.0], [65.8, 1389.0], [65.9, 1389.0], [66.0, 1390.0], [66.1, 1390.0], [66.2, 1390.0], [66.3, 1390.0], [66.4, 1390.0], [66.5, 1392.0], [66.6, 1392.0], [66.7, 1392.0], [66.8, 1392.0], [66.9, 1392.0], [67.0, 1392.0], [67.1, 1392.0], [67.2, 1392.0], [67.3, 1392.0], [67.4, 1392.0], [67.5, 1393.0], [67.6, 1393.0], [67.7, 1393.0], [67.8, 1393.0], [67.9, 1393.0], [68.0, 1393.0], [68.1, 1393.0], [68.2, 1393.0], [68.3, 1393.0], [68.4, 1393.0], [68.5, 1394.0], [68.6, 1394.0], [68.7, 1394.0], [68.8, 1394.0], [68.9, 1394.0], [69.0, 1396.0], [69.1, 1396.0], [69.2, 1396.0], [69.3, 1396.0], [69.4, 1396.0], [69.5, 1397.0], [69.6, 1397.0], [69.7, 1397.0], [69.8, 1397.0], [69.9, 1397.0], [70.0, 1401.0], [70.1, 1401.0], [70.2, 1401.0], [70.3, 1401.0], [70.4, 1401.0], [70.5, 1402.0], [70.6, 1402.0], [70.7, 1402.0], [70.8, 1402.0], [70.9, 1402.0], [71.0, 1403.0], [71.1, 1403.0], [71.2, 1403.0], [71.3, 1403.0], [71.4, 1403.0], [71.5, 1407.0], [71.6, 1407.0], [71.7, 1407.0], [71.8, 1407.0], [71.9, 1407.0], [72.0, 1410.0], [72.1, 1410.0], [72.2, 1410.0], [72.3, 1410.0], [72.4, 1410.0], [72.5, 1410.0], [72.6, 1410.0], [72.7, 1410.0], [72.8, 1410.0], [72.9, 1410.0], [73.0, 1430.0], [73.1, 1430.0], [73.2, 1430.0], [73.3, 1430.0], [73.4, 1430.0], [73.5, 1467.0], [73.6, 1467.0], [73.7, 1467.0], [73.8, 1467.0], [73.9, 1467.0], [74.0, 1474.0], [74.1, 1474.0], [74.2, 1474.0], [74.3, 1474.0], [74.4, 1474.0], [74.5, 1475.0], [74.6, 1475.0], [74.7, 1475.0], [74.8, 1475.0], [74.9, 1475.0], [75.0, 1477.0], [75.1, 1477.0], [75.2, 1477.0], [75.3, 1477.0], [75.4, 1477.0], [75.5, 1478.0], [75.6, 1478.0], [75.7, 1478.0], [75.8, 1478.0], [75.9, 1478.0], [76.0, 1479.0], [76.1, 1479.0], [76.2, 1479.0], [76.3, 1479.0], [76.4, 1479.0], [76.5, 1492.0], [76.6, 1492.0], [76.7, 1492.0], [76.8, 1492.0], [76.9, 1492.0], [77.0, 1493.0], [77.1, 1493.0], [77.2, 1493.0], [77.3, 1493.0], [77.4, 1493.0], [77.5, 1497.0], [77.6, 1497.0], [77.7, 1497.0], [77.8, 1497.0], [77.9, 1497.0], [78.0, 1498.0], [78.1, 1498.0], [78.2, 1498.0], [78.3, 1498.0], [78.4, 1498.0], [78.5, 1498.0], [78.6, 1498.0], [78.7, 1498.0], [78.8, 1498.0], [78.9, 1498.0], [79.0, 1499.0], [79.1, 1499.0], [79.2, 1499.0], [79.3, 1499.0], [79.4, 1499.0], [79.5, 1500.0], [79.6, 1500.0], [79.7, 1500.0], [79.8, 1500.0], [79.9, 1500.0], [80.0, 1502.0], [80.1, 1502.0], [80.2, 1502.0], [80.3, 1502.0], [80.4, 1502.0], [80.5, 1502.0], [80.6, 1502.0], [80.7, 1502.0], [80.8, 1502.0], [80.9, 1502.0], [81.0, 1503.0], [81.1, 1503.0], [81.2, 1503.0], [81.3, 1503.0], [81.4, 1503.0], [81.5, 1503.0], [81.6, 1503.0], [81.7, 1503.0], [81.8, 1503.0], [81.9, 1503.0], [82.0, 1504.0], [82.1, 1504.0], [82.2, 1504.0], [82.3, 1504.0], [82.4, 1504.0], [82.5, 1510.0], [82.6, 1510.0], [82.7, 1510.0], [82.8, 1510.0], [82.9, 1510.0], [83.0, 1556.0], [83.1, 1556.0], [83.2, 1556.0], [83.3, 1556.0], [83.4, 1556.0], [83.5, 1566.0], [83.6, 1566.0], [83.7, 1566.0], [83.8, 1566.0], [83.9, 1566.0], [84.0, 1576.0], [84.1, 1576.0], [84.2, 1576.0], [84.3, 1576.0], [84.4, 1576.0], [84.5, 1578.0], [84.6, 1578.0], [84.7, 1578.0], [84.8, 1578.0], [84.9, 1578.0], [85.0, 1589.0], [85.1, 1589.0], [85.2, 1589.0], [85.3, 1589.0], [85.4, 1589.0], [85.5, 1590.0], [85.6, 1590.0], [85.7, 1590.0], [85.8, 1590.0], [85.9, 1590.0], [86.0, 1593.0], [86.1, 1593.0], [86.2, 1593.0], [86.3, 1593.0], [86.4, 1593.0], [86.5, 1602.0], [86.6, 1602.0], [86.7, 1602.0], [86.8, 1602.0], [86.9, 1602.0], [87.0, 1604.0], [87.1, 1604.0], [87.2, 1604.0], [87.3, 1604.0], [87.4, 1604.0], [87.5, 1623.0], [87.6, 1623.0], [87.7, 1623.0], [87.8, 1623.0], [87.9, 1623.0], [88.0, 1652.0], [88.1, 1652.0], [88.2, 1652.0], [88.3, 1652.0], [88.4, 1652.0], [88.5, 1683.0], [88.6, 1683.0], [88.7, 1683.0], [88.8, 1683.0], [88.9, 1683.0], [89.0, 1685.0], [89.1, 1685.0], [89.2, 1685.0], [89.3, 1685.0], [89.4, 1685.0], [89.5, 1689.0], [89.6, 1689.0], [89.7, 1689.0], [89.8, 1689.0], [89.9, 1689.0], [90.0, 1693.0], [90.1, 1693.0], [90.2, 1693.0], [90.3, 1693.0], [90.4, 1693.0], [90.5, 1695.0], [90.6, 1695.0], [90.7, 1695.0], [90.8, 1695.0], [90.9, 1695.0], [91.0, 1698.0], [91.1, 1698.0], [91.2, 1698.0], [91.3, 1698.0], [91.4, 1698.0], [91.5, 1698.0], [91.6, 1698.0], [91.7, 1698.0], [91.8, 1698.0], [91.9, 1698.0], [92.0, 1699.0], [92.1, 1699.0], [92.2, 1699.0], [92.3, 1699.0], [92.4, 1699.0], [92.5, 1701.0], [92.6, 1701.0], [92.7, 1701.0], [92.8, 1701.0], [92.9, 1701.0], [93.0, 1702.0], [93.1, 1702.0], [93.2, 1702.0], [93.3, 1702.0], [93.4, 1702.0], [93.5, 1720.0], [93.6, 1720.0], [93.7, 1720.0], [93.8, 1720.0], [93.9, 1720.0], [94.0, 1725.0], [94.1, 1725.0], [94.2, 1725.0], [94.3, 1725.0], [94.4, 1725.0], [94.5, 1753.0], [94.6, 1753.0], [94.7, 1753.0], [94.8, 1753.0], [94.9, 1753.0], [95.0, 1764.0], [95.1, 1764.0], [95.2, 1764.0], [95.3, 1764.0], [95.4, 1764.0], [95.5, 1768.0], [95.6, 1768.0], [95.7, 1768.0], [95.8, 1768.0], [95.9, 1768.0], [96.0, 1786.0], [96.1, 1786.0], [96.2, 1786.0], [96.3, 1786.0], [96.4, 1786.0], [96.5, 1814.0], [96.6, 1814.0], [96.7, 1814.0], [96.8, 1814.0], [96.9, 1814.0], [97.0, 1900.0], [97.1, 1900.0], [97.2, 1900.0], [97.3, 1900.0], [97.4, 1900.0], [97.5, 1907.0], [97.6, 1907.0], [97.7, 1907.0], [97.8, 1907.0], [97.9, 1907.0], [98.0, 1920.0], [98.1, 1920.0], [98.2, 1920.0], [98.3, 1920.0], [98.4, 1920.0], [98.5, 1939.0], [98.6, 1939.0], [98.7, 1939.0], [98.8, 1939.0], [98.9, 1939.0], [99.0, 1982.0], [99.1, 1982.0], [99.2, 1982.0], [99.3, 1982.0], [99.4, 1982.0], [99.5, 2087.0], [99.6, 2087.0], [99.7, 2087.0], [99.8, 2087.0], [99.9, 2087.0]], "isOverall": false, "label": "Get community posts", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 400.0, "maxY": 27.0, "series": [{"data": [[600.0, 7.0], [700.0, 6.0], [800.0, 10.0], [900.0, 14.0], [1000.0, 25.0], [1100.0, 21.0], [1200.0, 27.0], [1300.0, 22.0], [1400.0, 19.0], [1500.0, 14.0], [1600.0, 12.0], [400.0, 1.0], [1700.0, 8.0], [1800.0, 1.0], [1900.0, 5.0], [2000.0, 1.0], [500.0, 7.0]], "isOverall": false, "label": "Get community posts", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2000.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 159.0, "series": [{"data": [[0.0, 1.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 159.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 40.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 18.835, "minX": 1.71250524E12, "maxY": 18.835, "series": [{"data": [[1.71250524E12, 18.835]], "isOverall": false, "label": "getCommunityPosts", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71250524E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 496.0, "minX": 1.0, "maxY": 1593.0, "series": [{"data": [[2.0, 531.0], [9.0, 834.5], [10.0, 1593.0], [11.0, 1011.0], [12.0, 1503.0], [3.0, 528.0], [13.0, 1503.0], [14.0, 1396.0], [15.0, 1106.5], [16.0, 1225.0], [4.0, 892.0], [1.0, 496.0], [17.0, 1092.5], [18.0, 1006.5], [19.0, 727.3636363636364], [20.0, 1289.938650306749], [5.0, 595.0], [6.0, 798.0], [7.0, 993.0]], "isOverall": false, "label": "Get community posts", "isController": false}, {"data": [[18.835, 1229.3600000000004]], "isOverall": false, "label": "Get community posts-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1186.6666666666667, "minX": 1.71250524E12, "maxY": 12450.0, "series": [{"data": [[1.71250524E12, 12450.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71250524E12, 1186.6666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71250524E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1229.3600000000004, "minX": 1.71250524E12, "maxY": 1229.3600000000004, "series": [{"data": [[1.71250524E12, 1229.3600000000004]], "isOverall": false, "label": "Get community posts", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71250524E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 1228.9400000000003, "minX": 1.71250524E12, "maxY": 1228.9400000000003, "series": [{"data": [[1.71250524E12, 1228.9400000000003]], "isOverall": false, "label": "Get community posts", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71250524E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 39.08499999999999, "minX": 1.71250524E12, "maxY": 39.08499999999999, "series": [{"data": [[1.71250524E12, 39.08499999999999]], "isOverall": false, "label": "Get community posts", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71250524E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 496.0, "minX": 1.71250524E12, "maxY": 2087.0, "series": [{"data": [[1.71250524E12, 2087.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71250524E12, 496.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71250524E12, 1692.6]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71250524E12, 1981.5700000000004]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71250524E12, 1207.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71250524E12, 1763.4499999999998]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71250524E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 977.0, "minX": 2.0, "maxY": 1685.0, "series": [{"data": [[2.0, 1230.5], [17.0, 1401.0], [9.0, 1685.0], [18.0, 977.0], [19.0, 1397.0], [20.0, 1095.0], [12.0, 1098.0], [13.0, 1371.0], [28.0, 1197.0], [15.0, 1291.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 976.5, "minX": 2.0, "maxY": 1684.0, "series": [{"data": [[2.0, 1226.0], [17.0, 1401.0], [9.0, 1684.0], [18.0, 976.5], [19.0, 1396.0], [20.0, 1095.0], [12.0, 1098.0], [13.0, 1370.0], [28.0, 1196.5], [15.0, 1290.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.71250524E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.71250524E12, 3.3333333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71250524E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.71250524E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.71250524E12, 3.3333333333333335]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71250524E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.71250524E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.71250524E12, 3.3333333333333335]], "isOverall": false, "label": "Get community posts-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71250524E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.71250524E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.71250524E12, 3.3333333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71250524E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

