 /* global PubNub, eon, pubnub, d3 */
 var pubnub = new PubNub({
     subscribeKey: ''
 });
 
 eon.chart({
     pubnub: pubnub,
     channels: ['temperature_channel'],
     limit: 10,
     generate: {
         bindto: '#chart1',
         data: {
             colors: { "temperature": "#04a078" },
             type: "spline"
         },
         axis: {
             x: {
                 type: 'timeseries',
                 tick: {
                     format: '%H:%m:%S'
                 }
             },
             y: {
                 tick: {
                     format: function(d) {
                         var df = Number(d3.format('.2f')(d));
                         return df;
                     }
                 }
             }
         }
     },
     transform: function(m) {
         return {
             eon: {
                 temperature: (m / 100)
             }
         }
     }
 });

 eon.chart({
     pubnub: pubnub,
     channels: ['co2_channel'],
     limit: 10,
     generate: {
         bindto: '#chart2',
         data: {
             colors: { "co2": "#55cbff" },
             type: "area-spline"
         },
         axis: {
             x: {
                 type: 'timeseries',
                 tick: {
                     format: '%H:%m:%S'
                 }
             },
             y: {
                 tick: {
                     format: function(d) {
                         var df = Number(d3.format('.2f')(d));
                         return df;
                     }
                 }
             }
         }
     },
     transform: function(m) {
         return {
             eon: {
                 co2: m
             }
         }
     }
 });

 eon.chart({
     pubnub: pubnub,
     channels: ['light_channel'],
     limit: 30,
     generate: {
         bindto: '#chart3',
         data: {
             colors: { "light": "#009ee3" },
             type: "bar"
         },
         axis: {
             x: {
                 type: 'timeseries',
                 tick: {
                     format: '%H:%m:%S'
                 }
             },
             y: {
                 tick: {
                     format: function(d) {
                         var df = Number(d3.format('.2f')(d));
                         return df;
                     }
                 }
             }
         }
     },
     transform: function(m) {
         return {
             eon: {
                 light: m
             }
         }
     }
 });

 eon.chart({
     pubnub: pubnub,
     channels: ['air_pressure_channel'],
     limit: 30,
     generate: {
         bindto: '#chart4',
         data: {
             colors: { "air_pressure": "#ea526f" },
             type: "line"
         },
         axis: {
             x: {
                 type: 'timeseries',
                 tick: {
                     format: '%H:%m:%S'
                 }
             },
             y: {
                 tick: {
                     format: function(d) {
                         var df = Number(d3.format('.2f')(d));
                         return df;
                     }
                 }
             }
         }
     },
     transform: function(m) {
         return {
             eon: {
                 air_pressure: m / 1000
             }
         }
     }
 });
 