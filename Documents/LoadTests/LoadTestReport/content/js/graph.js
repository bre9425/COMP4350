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
        data: {"result": {"minY": 381.0, "minX": 0.0, "maxY": 1380.0, "series": [{"data": [[0.0, 381.0], [0.1, 381.0], [0.2, 381.0], [0.3, 381.0], [0.4, 381.0], [0.5, 392.0], [0.6, 392.0], [0.7, 392.0], [0.8, 392.0], [0.9, 392.0], [1.0, 394.0], [1.1, 394.0], [1.2, 394.0], [1.3, 394.0], [1.4, 394.0], [1.5, 395.0], [1.6, 395.0], [1.7, 395.0], [1.8, 395.0], [1.9, 395.0], [2.0, 395.0], [2.1, 395.0], [2.2, 395.0], [2.3, 395.0], [2.4, 395.0], [2.5, 397.0], [2.6, 397.0], [2.7, 397.0], [2.8, 397.0], [2.9, 397.0], [3.0, 399.0], [3.1, 399.0], [3.2, 399.0], [3.3, 399.0], [3.4, 399.0], [3.5, 400.0], [3.6, 400.0], [3.7, 400.0], [3.8, 400.0], [3.9, 400.0], [4.0, 400.0], [4.1, 400.0], [4.2, 400.0], [4.3, 400.0], [4.4, 400.0], [4.5, 403.0], [4.6, 403.0], [4.7, 403.0], [4.8, 403.0], [4.9, 403.0], [5.0, 403.0], [5.1, 403.0], [5.2, 403.0], [5.3, 403.0], [5.4, 403.0], [5.5, 403.0], [5.6, 403.0], [5.7, 403.0], [5.8, 403.0], [5.9, 403.0], [6.0, 405.0], [6.1, 405.0], [6.2, 405.0], [6.3, 405.0], [6.4, 405.0], [6.5, 405.0], [6.6, 405.0], [6.7, 405.0], [6.8, 405.0], [6.9, 405.0], [7.0, 406.0], [7.1, 406.0], [7.2, 406.0], [7.3, 406.0], [7.4, 406.0], [7.5, 406.0], [7.6, 406.0], [7.7, 406.0], [7.8, 406.0], [7.9, 406.0], [8.0, 406.0], [8.1, 406.0], [8.2, 406.0], [8.3, 406.0], [8.4, 406.0], [8.5, 407.0], [8.6, 407.0], [8.7, 407.0], [8.8, 407.0], [8.9, 407.0], [9.0, 407.0], [9.1, 407.0], [9.2, 407.0], [9.3, 407.0], [9.4, 407.0], [9.5, 407.0], [9.6, 407.0], [9.7, 407.0], [9.8, 407.0], [9.9, 407.0], [10.0, 408.0], [10.1, 408.0], [10.2, 408.0], [10.3, 408.0], [10.4, 408.0], [10.5, 408.0], [10.6, 408.0], [10.7, 408.0], [10.8, 408.0], [10.9, 408.0], [11.0, 409.0], [11.1, 409.0], [11.2, 409.0], [11.3, 409.0], [11.4, 409.0], [11.5, 409.0], [11.6, 409.0], [11.7, 409.0], [11.8, 409.0], [11.9, 409.0], [12.0, 409.0], [12.1, 409.0], [12.2, 409.0], [12.3, 409.0], [12.4, 409.0], [12.5, 410.0], [12.6, 410.0], [12.7, 410.0], [12.8, 410.0], [12.9, 410.0], [13.0, 411.0], [13.1, 411.0], [13.2, 411.0], [13.3, 411.0], [13.4, 411.0], [13.5, 413.0], [13.6, 413.0], [13.7, 413.0], [13.8, 413.0], [13.9, 413.0], [14.0, 413.0], [14.1, 413.0], [14.2, 413.0], [14.3, 413.0], [14.4, 413.0], [14.5, 413.0], [14.6, 413.0], [14.7, 413.0], [14.8, 413.0], [14.9, 413.0], [15.0, 414.0], [15.1, 414.0], [15.2, 414.0], [15.3, 414.0], [15.4, 414.0], [15.5, 414.0], [15.6, 414.0], [15.7, 414.0], [15.8, 414.0], [15.9, 414.0], [16.0, 414.0], [16.1, 414.0], [16.2, 414.0], [16.3, 414.0], [16.4, 414.0], [16.5, 415.0], [16.6, 415.0], [16.7, 415.0], [16.8, 415.0], [16.9, 415.0], [17.0, 416.0], [17.1, 416.0], [17.2, 416.0], [17.3, 416.0], [17.4, 416.0], [17.5, 416.0], [17.6, 416.0], [17.7, 416.0], [17.8, 416.0], [17.9, 416.0], [18.0, 416.0], [18.1, 416.0], [18.2, 416.0], [18.3, 416.0], [18.4, 416.0], [18.5, 418.0], [18.6, 418.0], [18.7, 418.0], [18.8, 418.0], [18.9, 418.0], [19.0, 420.0], [19.1, 420.0], [19.2, 420.0], [19.3, 420.0], [19.4, 420.0], [19.5, 420.0], [19.6, 420.0], [19.7, 420.0], [19.8, 420.0], [19.9, 420.0], [20.0, 421.0], [20.1, 421.0], [20.2, 421.0], [20.3, 421.0], [20.4, 421.0], [20.5, 423.0], [20.6, 423.0], [20.7, 423.0], [20.8, 423.0], [20.9, 423.0], [21.0, 423.0], [21.1, 423.0], [21.2, 423.0], [21.3, 423.0], [21.4, 423.0], [21.5, 423.0], [21.6, 423.0], [21.7, 423.0], [21.8, 423.0], [21.9, 423.0], [22.0, 423.0], [22.1, 423.0], [22.2, 423.0], [22.3, 423.0], [22.4, 423.0], [22.5, 424.0], [22.6, 424.0], [22.7, 424.0], [22.8, 424.0], [22.9, 424.0], [23.0, 424.0], [23.1, 424.0], [23.2, 424.0], [23.3, 424.0], [23.4, 424.0], [23.5, 424.0], [23.6, 424.0], [23.7, 424.0], [23.8, 424.0], [23.9, 424.0], [24.0, 425.0], [24.1, 425.0], [24.2, 425.0], [24.3, 425.0], [24.4, 425.0], [24.5, 425.0], [24.6, 425.0], [24.7, 425.0], [24.8, 425.0], [24.9, 425.0], [25.0, 426.0], [25.1, 426.0], [25.2, 426.0], [25.3, 426.0], [25.4, 426.0], [25.5, 426.0], [25.6, 426.0], [25.7, 426.0], [25.8, 426.0], [25.9, 426.0], [26.0, 427.0], [26.1, 427.0], [26.2, 427.0], [26.3, 427.0], [26.4, 427.0], [26.5, 428.0], [26.6, 428.0], [26.7, 428.0], [26.8, 428.0], [26.9, 428.0], [27.0, 429.0], [27.1, 429.0], [27.2, 429.0], [27.3, 429.0], [27.4, 429.0], [27.5, 429.0], [27.6, 429.0], [27.7, 429.0], [27.8, 429.0], [27.9, 429.0], [28.0, 429.0], [28.1, 429.0], [28.2, 429.0], [28.3, 429.0], [28.4, 429.0], [28.5, 429.0], [28.6, 429.0], [28.7, 429.0], [28.8, 429.0], [28.9, 429.0], [29.0, 430.0], [29.1, 430.0], [29.2, 430.0], [29.3, 430.0], [29.4, 430.0], [29.5, 430.0], [29.6, 430.0], [29.7, 430.0], [29.8, 430.0], [29.9, 430.0], [30.0, 430.0], [30.1, 430.0], [30.2, 430.0], [30.3, 430.0], [30.4, 430.0], [30.5, 430.0], [30.6, 430.0], [30.7, 430.0], [30.8, 430.0], [30.9, 430.0], [31.0, 431.0], [31.1, 431.0], [31.2, 431.0], [31.3, 431.0], [31.4, 431.0], [31.5, 431.0], [31.6, 431.0], [31.7, 431.0], [31.8, 431.0], [31.9, 431.0], [32.0, 431.0], [32.1, 431.0], [32.2, 431.0], [32.3, 431.0], [32.4, 431.0], [32.5, 431.0], [32.6, 431.0], [32.7, 431.0], [32.8, 431.0], [32.9, 431.0], [33.0, 431.0], [33.1, 431.0], [33.2, 431.0], [33.3, 431.0], [33.4, 431.0], [33.5, 431.0], [33.6, 431.0], [33.7, 431.0], [33.8, 431.0], [33.9, 431.0], [34.0, 432.0], [34.1, 432.0], [34.2, 432.0], [34.3, 432.0], [34.4, 432.0], [34.5, 432.0], [34.6, 432.0], [34.7, 432.0], [34.8, 432.0], [34.9, 432.0], [35.0, 432.0], [35.1, 432.0], [35.2, 432.0], [35.3, 432.0], [35.4, 432.0], [35.5, 433.0], [35.6, 433.0], [35.7, 433.0], [35.8, 433.0], [35.9, 433.0], [36.0, 435.0], [36.1, 435.0], [36.2, 435.0], [36.3, 435.0], [36.4, 435.0], [36.5, 435.0], [36.6, 435.0], [36.7, 435.0], [36.8, 435.0], [36.9, 435.0], [37.0, 435.0], [37.1, 435.0], [37.2, 435.0], [37.3, 435.0], [37.4, 435.0], [37.5, 436.0], [37.6, 436.0], [37.7, 436.0], [37.8, 436.0], [37.9, 436.0], [38.0, 437.0], [38.1, 437.0], [38.2, 437.0], [38.3, 437.0], [38.4, 437.0], [38.5, 437.0], [38.6, 437.0], [38.7, 437.0], [38.8, 437.0], [38.9, 437.0], [39.0, 437.0], [39.1, 437.0], [39.2, 437.0], [39.3, 437.0], [39.4, 437.0], [39.5, 438.0], [39.6, 438.0], [39.7, 438.0], [39.8, 438.0], [39.9, 438.0], [40.0, 439.0], [40.1, 439.0], [40.2, 439.0], [40.3, 439.0], [40.4, 439.0], [40.5, 439.0], [40.6, 439.0], [40.7, 439.0], [40.8, 439.0], [40.9, 439.0], [41.0, 440.0], [41.1, 440.0], [41.2, 440.0], [41.3, 440.0], [41.4, 440.0], [41.5, 441.0], [41.6, 441.0], [41.7, 441.0], [41.8, 441.0], [41.9, 441.0], [42.0, 441.0], [42.1, 441.0], [42.2, 441.0], [42.3, 441.0], [42.4, 441.0], [42.5, 441.0], [42.6, 441.0], [42.7, 441.0], [42.8, 441.0], [42.9, 441.0], [43.0, 441.0], [43.1, 441.0], [43.2, 441.0], [43.3, 441.0], [43.4, 441.0], [43.5, 441.0], [43.6, 441.0], [43.7, 441.0], [43.8, 441.0], [43.9, 441.0], [44.0, 442.0], [44.1, 442.0], [44.2, 442.0], [44.3, 442.0], [44.4, 442.0], [44.5, 443.0], [44.6, 443.0], [44.7, 443.0], [44.8, 443.0], [44.9, 443.0], [45.0, 443.0], [45.1, 443.0], [45.2, 443.0], [45.3, 443.0], [45.4, 443.0], [45.5, 443.0], [45.6, 443.0], [45.7, 443.0], [45.8, 443.0], [45.9, 443.0], [46.0, 443.0], [46.1, 443.0], [46.2, 443.0], [46.3, 443.0], [46.4, 443.0], [46.5, 443.0], [46.6, 443.0], [46.7, 443.0], [46.8, 443.0], [46.9, 443.0], [47.0, 444.0], [47.1, 444.0], [47.2, 444.0], [47.3, 444.0], [47.4, 444.0], [47.5, 445.0], [47.6, 445.0], [47.7, 445.0], [47.8, 445.0], [47.9, 445.0], [48.0, 447.0], [48.1, 447.0], [48.2, 447.0], [48.3, 447.0], [48.4, 447.0], [48.5, 448.0], [48.6, 448.0], [48.7, 448.0], [48.8, 448.0], [48.9, 448.0], [49.0, 448.0], [49.1, 448.0], [49.2, 448.0], [49.3, 448.0], [49.4, 448.0], [49.5, 451.0], [49.6, 451.0], [49.7, 451.0], [49.8, 451.0], [49.9, 451.0], [50.0, 451.0], [50.1, 451.0], [50.2, 451.0], [50.3, 451.0], [50.4, 451.0], [50.5, 451.0], [50.6, 451.0], [50.7, 451.0], [50.8, 451.0], [50.9, 451.0], [51.0, 452.0], [51.1, 452.0], [51.2, 452.0], [51.3, 452.0], [51.4, 452.0], [51.5, 453.0], [51.6, 453.0], [51.7, 453.0], [51.8, 453.0], [51.9, 453.0], [52.0, 455.0], [52.1, 455.0], [52.2, 455.0], [52.3, 455.0], [52.4, 455.0], [52.5, 456.0], [52.6, 456.0], [52.7, 456.0], [52.8, 456.0], [52.9, 456.0], [53.0, 457.0], [53.1, 457.0], [53.2, 457.0], [53.3, 457.0], [53.4, 457.0], [53.5, 457.0], [53.6, 457.0], [53.7, 457.0], [53.8, 457.0], [53.9, 457.0], [54.0, 458.0], [54.1, 458.0], [54.2, 458.0], [54.3, 458.0], [54.4, 458.0], [54.5, 459.0], [54.6, 459.0], [54.7, 459.0], [54.8, 459.0], [54.9, 459.0], [55.0, 460.0], [55.1, 460.0], [55.2, 460.0], [55.3, 460.0], [55.4, 460.0], [55.5, 460.0], [55.6, 460.0], [55.7, 460.0], [55.8, 460.0], [55.9, 460.0], [56.0, 461.0], [56.1, 461.0], [56.2, 461.0], [56.3, 461.0], [56.4, 461.0], [56.5, 462.0], [56.6, 462.0], [56.7, 462.0], [56.8, 462.0], [56.9, 462.0], [57.0, 463.0], [57.1, 463.0], [57.2, 463.0], [57.3, 463.0], [57.4, 463.0], [57.5, 464.0], [57.6, 464.0], [57.7, 464.0], [57.8, 464.0], [57.9, 464.0], [58.0, 464.0], [58.1, 464.0], [58.2, 464.0], [58.3, 464.0], [58.4, 464.0], [58.5, 467.0], [58.6, 467.0], [58.7, 467.0], [58.8, 467.0], [58.9, 467.0], [59.0, 470.0], [59.1, 470.0], [59.2, 470.0], [59.3, 470.0], [59.4, 470.0], [59.5, 471.0], [59.6, 471.0], [59.7, 471.0], [59.8, 471.0], [59.9, 471.0], [60.0, 472.0], [60.1, 472.0], [60.2, 472.0], [60.3, 472.0], [60.4, 472.0], [60.5, 473.0], [60.6, 473.0], [60.7, 473.0], [60.8, 473.0], [60.9, 473.0], [61.0, 475.0], [61.1, 475.0], [61.2, 475.0], [61.3, 475.0], [61.4, 475.0], [61.5, 479.0], [61.6, 479.0], [61.7, 479.0], [61.8, 479.0], [61.9, 479.0], [62.0, 479.0], [62.1, 479.0], [62.2, 479.0], [62.3, 479.0], [62.4, 479.0], [62.5, 482.0], [62.6, 482.0], [62.7, 482.0], [62.8, 482.0], [62.9, 482.0], [63.0, 483.0], [63.1, 483.0], [63.2, 483.0], [63.3, 483.0], [63.4, 483.0], [63.5, 484.0], [63.6, 484.0], [63.7, 484.0], [63.8, 484.0], [63.9, 484.0], [64.0, 485.0], [64.1, 485.0], [64.2, 485.0], [64.3, 485.0], [64.4, 485.0], [64.5, 485.0], [64.6, 485.0], [64.7, 485.0], [64.8, 485.0], [64.9, 485.0], [65.0, 486.0], [65.1, 486.0], [65.2, 486.0], [65.3, 486.0], [65.4, 486.0], [65.5, 490.0], [65.6, 490.0], [65.7, 490.0], [65.8, 490.0], [65.9, 490.0], [66.0, 492.0], [66.1, 492.0], [66.2, 492.0], [66.3, 492.0], [66.4, 492.0], [66.5, 495.0], [66.6, 495.0], [66.7, 495.0], [66.8, 495.0], [66.9, 495.0], [67.0, 496.0], [67.1, 496.0], [67.2, 496.0], [67.3, 496.0], [67.4, 496.0], [67.5, 502.0], [67.6, 502.0], [67.7, 502.0], [67.8, 502.0], [67.9, 502.0], [68.0, 502.0], [68.1, 502.0], [68.2, 502.0], [68.3, 502.0], [68.4, 502.0], [68.5, 503.0], [68.6, 503.0], [68.7, 503.0], [68.8, 503.0], [68.9, 503.0], [69.0, 507.0], [69.1, 507.0], [69.2, 507.0], [69.3, 507.0], [69.4, 507.0], [69.5, 511.0], [69.6, 511.0], [69.7, 511.0], [69.8, 511.0], [69.9, 511.0], [70.0, 522.0], [70.1, 522.0], [70.2, 522.0], [70.3, 522.0], [70.4, 522.0], [70.5, 526.0], [70.6, 526.0], [70.7, 526.0], [70.8, 526.0], [70.9, 526.0], [71.0, 532.0], [71.1, 532.0], [71.2, 532.0], [71.3, 532.0], [71.4, 532.0], [71.5, 533.0], [71.6, 533.0], [71.7, 533.0], [71.8, 533.0], [71.9, 533.0], [72.0, 533.0], [72.1, 533.0], [72.2, 533.0], [72.3, 533.0], [72.4, 533.0], [72.5, 533.0], [72.6, 533.0], [72.7, 533.0], [72.8, 533.0], [72.9, 533.0], [73.0, 534.0], [73.1, 534.0], [73.2, 534.0], [73.3, 534.0], [73.4, 534.0], [73.5, 537.0], [73.6, 537.0], [73.7, 537.0], [73.8, 537.0], [73.9, 537.0], [74.0, 568.0], [74.1, 568.0], [74.2, 568.0], [74.3, 568.0], [74.4, 568.0], [74.5, 589.0], [74.6, 589.0], [74.7, 589.0], [74.8, 589.0], [74.9, 589.0], [75.0, 614.0], [75.1, 614.0], [75.2, 614.0], [75.3, 614.0], [75.4, 614.0], [75.5, 618.0], [75.6, 618.0], [75.7, 618.0], [75.8, 618.0], [75.9, 618.0], [76.0, 636.0], [76.1, 636.0], [76.2, 636.0], [76.3, 636.0], [76.4, 636.0], [76.5, 645.0], [76.6, 645.0], [76.7, 645.0], [76.8, 645.0], [76.9, 645.0], [77.0, 667.0], [77.1, 667.0], [77.2, 667.0], [77.3, 667.0], [77.4, 667.0], [77.5, 670.0], [77.6, 670.0], [77.7, 670.0], [77.8, 670.0], [77.9, 670.0], [78.0, 676.0], [78.1, 676.0], [78.2, 676.0], [78.3, 676.0], [78.4, 676.0], [78.5, 680.0], [78.6, 680.0], [78.7, 680.0], [78.8, 680.0], [78.9, 680.0], [79.0, 692.0], [79.1, 692.0], [79.2, 692.0], [79.3, 692.0], [79.4, 692.0], [79.5, 736.0], [79.6, 736.0], [79.7, 736.0], [79.8, 736.0], [79.9, 736.0], [80.0, 742.0], [80.1, 742.0], [80.2, 742.0], [80.3, 742.0], [80.4, 742.0], [80.5, 747.0], [80.6, 747.0], [80.7, 747.0], [80.8, 747.0], [80.9, 747.0], [81.0, 777.0], [81.1, 777.0], [81.2, 777.0], [81.3, 777.0], [81.4, 777.0], [81.5, 788.0], [81.6, 788.0], [81.7, 788.0], [81.8, 788.0], [81.9, 788.0], [82.0, 790.0], [82.1, 790.0], [82.2, 790.0], [82.3, 790.0], [82.4, 790.0], [82.5, 826.0], [82.6, 826.0], [82.7, 826.0], [82.8, 826.0], [82.9, 826.0], [83.0, 827.0], [83.1, 827.0], [83.2, 827.0], [83.3, 827.0], [83.4, 827.0], [83.5, 830.0], [83.6, 830.0], [83.7, 830.0], [83.8, 830.0], [83.9, 830.0], [84.0, 836.0], [84.1, 836.0], [84.2, 836.0], [84.3, 836.0], [84.4, 836.0], [84.5, 836.0], [84.6, 836.0], [84.7, 836.0], [84.8, 836.0], [84.9, 836.0], [85.0, 841.0], [85.1, 841.0], [85.2, 841.0], [85.3, 841.0], [85.4, 841.0], [85.5, 841.0], [85.6, 841.0], [85.7, 841.0], [85.8, 841.0], [85.9, 841.0], [86.0, 858.0], [86.1, 858.0], [86.2, 858.0], [86.3, 858.0], [86.4, 858.0], [86.5, 886.0], [86.6, 886.0], [86.7, 886.0], [86.8, 886.0], [86.9, 886.0], [87.0, 891.0], [87.1, 891.0], [87.2, 891.0], [87.3, 891.0], [87.4, 891.0], [87.5, 896.0], [87.6, 896.0], [87.7, 896.0], [87.8, 896.0], [87.9, 896.0], [88.0, 922.0], [88.1, 922.0], [88.2, 922.0], [88.3, 922.0], [88.4, 922.0], [88.5, 942.0], [88.6, 942.0], [88.7, 942.0], [88.8, 942.0], [88.9, 942.0], [89.0, 945.0], [89.1, 945.0], [89.2, 945.0], [89.3, 945.0], [89.4, 945.0], [89.5, 949.0], [89.6, 949.0], [89.7, 949.0], [89.8, 949.0], [89.9, 949.0], [90.0, 986.0], [90.1, 986.0], [90.2, 986.0], [90.3, 986.0], [90.4, 986.0], [90.5, 987.0], [90.6, 987.0], [90.7, 987.0], [90.8, 987.0], [90.9, 987.0], [91.0, 991.0], [91.1, 991.0], [91.2, 991.0], [91.3, 991.0], [91.4, 991.0], [91.5, 994.0], [91.6, 994.0], [91.7, 994.0], [91.8, 994.0], [91.9, 994.0], [92.0, 996.0], [92.1, 996.0], [92.2, 996.0], [92.3, 996.0], [92.4, 996.0], [92.5, 997.0], [92.6, 997.0], [92.7, 997.0], [92.8, 997.0], [92.9, 997.0], [93.0, 1030.0], [93.1, 1030.0], [93.2, 1030.0], [93.3, 1030.0], [93.4, 1030.0], [93.5, 1039.0], [93.6, 1039.0], [93.7, 1039.0], [93.8, 1039.0], [93.9, 1039.0], [94.0, 1046.0], [94.1, 1046.0], [94.2, 1046.0], [94.3, 1046.0], [94.4, 1046.0], [94.5, 1054.0], [94.6, 1054.0], [94.7, 1054.0], [94.8, 1054.0], [94.9, 1054.0], [95.0, 1057.0], [95.1, 1057.0], [95.2, 1057.0], [95.3, 1057.0], [95.4, 1057.0], [95.5, 1092.0], [95.6, 1092.0], [95.7, 1092.0], [95.8, 1092.0], [95.9, 1092.0], [96.0, 1103.0], [96.1, 1103.0], [96.2, 1103.0], [96.3, 1103.0], [96.4, 1103.0], [96.5, 1139.0], [96.6, 1139.0], [96.7, 1139.0], [96.8, 1139.0], [96.9, 1139.0], [97.0, 1193.0], [97.1, 1193.0], [97.2, 1193.0], [97.3, 1193.0], [97.4, 1193.0], [97.5, 1287.0], [97.6, 1287.0], [97.7, 1287.0], [97.8, 1287.0], [97.9, 1287.0], [98.0, 1313.0], [98.1, 1313.0], [98.2, 1313.0], [98.3, 1313.0], [98.4, 1313.0], [98.5, 1358.0], [98.6, 1358.0], [98.7, 1358.0], [98.8, 1358.0], [98.9, 1358.0], [99.0, 1367.0], [99.1, 1367.0], [99.2, 1367.0], [99.3, 1367.0], [99.4, 1367.0], [99.5, 1380.0], [99.6, 1380.0], [99.7, 1380.0], [99.8, 1380.0], [99.9, 1380.0]], "isOverall": false, "label": "Get community posts", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 128.0, "series": [{"data": [[1100.0, 3.0], [1200.0, 1.0], [600.0, 9.0], [300.0, 7.0], [1300.0, 4.0], [700.0, 6.0], [800.0, 11.0], [400.0, 128.0], [900.0, 10.0], [1000.0, 6.0], [500.0, 15.0]], "isOverall": false, "label": "Get community posts", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 65.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 135.0, "series": [{"data": [[0.0, 135.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 65.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 17.724999999999994, "minX": 1.7115486E12, "maxY": 20.0, "series": [{"data": [[1.7115486E12, 20.0], [1.71154866E12, 17.724999999999994]], "isOverall": false, "label": "getCommunityPosts", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71154866E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 532.3038674033153, "minX": 2.0, "maxY": 1050.0, "series": [{"data": [[8.0, 994.0], [2.0, 1050.0], [9.0, 836.0], [10.0, 986.0], [11.0, 736.0], [12.0, 692.0], [13.0, 645.0], [14.0, 836.0], [15.0, 922.0], [4.0, 995.5], [19.0, 668.75], [20.0, 532.3038674033153], [5.0, 886.0], [6.0, 1030.0], [7.0, 1039.0]], "isOverall": false, "label": "Get community posts", "isController": false}, {"data": [[19.08999999999999, 563.5750000000005]], "isOverall": false, "label": "Get community posts-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 474.6666666666667, "minX": 1.7115486E12, "maxY": 4648.0, "series": [{"data": [[1.7115486E12, 4648.0], [1.71154866E12, 3098.6666666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7115486E12, 712.0], [1.71154866E12, 474.6666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71154866E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 549.5000000000001, "minX": 1.7115486E12, "maxY": 572.9583333333334, "series": [{"data": [[1.7115486E12, 572.9583333333334], [1.71154866E12, 549.5000000000001]], "isOverall": false, "label": "Get community posts", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71154866E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 548.5875000000001, "minX": 1.7115486E12, "maxY": 572.525, "series": [{"data": [[1.7115486E12, 572.525], [1.71154866E12, 548.5875000000001]], "isOverall": false, "label": "Get community posts", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71154866E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.7115486E12, "maxY": 68.55833333333331, "series": [{"data": [[1.7115486E12, 68.55833333333331], [1.71154866E12, 0.0]], "isOverall": false, "label": "Get community posts", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71154866E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 381.0, "minX": 1.7115486E12, "maxY": 1380.0, "series": [{"data": [[1.7115486E12, 1380.0], [1.71154866E12, 1103.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7115486E12, 392.0], [1.71154866E12, 381.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7115486E12, 990.6], [1.71154866E12, 942.7000000000002]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7115486E12, 1377.27], [1.71154866E12, 1103.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7115486E12, 451.0], [1.71154866E12, 449.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7115486E12, 1190.2999999999993], [1.71154866E12, 1028.3500000000001]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71154866E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 427.0, "minX": 4.0, "maxY": 1025.0, "series": [{"data": [[16.0, 443.0], [4.0, 432.0], [9.0, 744.5], [20.0, 1025.0], [5.0, 435.0], [11.0, 686.0], [6.0, 436.0], [14.0, 427.0], [15.0, 437.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 427.0, "minX": 4.0, "maxY": 1024.5, "series": [{"data": [[16.0, 443.0], [4.0, 432.0], [9.0, 744.5], [20.0, 1024.5], [5.0, 434.5], [11.0, 685.0], [6.0, 436.0], [14.0, 427.0], [15.0, 437.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.3333333333333333, "minX": 1.7115486E12, "maxY": 2.0, "series": [{"data": [[1.7115486E12, 2.0], [1.71154866E12, 1.3333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71154866E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.3333333333333333, "minX": 1.7115486E12, "maxY": 2.0, "series": [{"data": [[1.7115486E12, 2.0], [1.71154866E12, 1.3333333333333333]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71154866E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.3333333333333333, "minX": 1.7115486E12, "maxY": 2.0, "series": [{"data": [[1.7115486E12, 2.0], [1.71154866E12, 1.3333333333333333]], "isOverall": false, "label": "Get community posts-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71154866E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.3333333333333333, "minX": 1.7115486E12, "maxY": 2.0, "series": [{"data": [[1.7115486E12, 2.0], [1.71154866E12, 1.3333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71154866E12, "title": "Total Transactions Per Second"}},
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

