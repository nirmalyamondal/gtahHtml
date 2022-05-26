
          // if (datefield.type!="date"){ 
          jQuery(function ($) {
            function ShowLocalDate() {
              var dNow = new Date();
              var localdate = (dNow.getDate() + '-' + parseInt(dNow.getMonth() + 1)) + '-' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + parseInt(dNow.getMinutes());
              $('#clientDate').val(localdate);
              $('#clientDate1').val(localdate);
            }
            ShowLocalDate();
            $('#deadline1').datepicker({
              dateFormat: 'dd-mm-yy',
              numberOfMonths: 1,
              minDate: 0
            });
            $('#deadline1').change(function () {
              function formatAMPM(date) {
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var ampm = hours >= 12 ? 'pm' : 'am';
                hours = hours % 12;
                hours = hours ? hours : 12; // the hour '0' should be '12'
                minutes = minutes < 10 ? '0' + minutes : minutes;
                var strTime = hours + ':' + minutes + '' + ampm;
                return strTime;
              }

              function toDate(dateStr) {
                var parts = dateStr.split("-");
                return new Date(parts[2], parts[1] - 1, parts[0]);
              }
              var date = $('#deadline1').val();
              var f1 = toDate(date);
              //alert(f);
              var hours = f1.getHours();
              var minutes = f1.getMinutes();

              time_plus_12 = new Date(f1.getTime() + 0 * 3600 * 1000);
              $('#deadlinetime1').timepicker({
                'step': 15,
                'forceRoundTime': true,
                'timeFormat': 'H:i',
                'disableTimeRanges': [
                  [0, formatAMPM(time_plus_12)]
                ]
              });
              $('#deadlinetime1').timepicker('setTime', time_plus_12);
              $('#deadlinetime1').val('23:45');
            })
          });
        // }
    